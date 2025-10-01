import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const organization = formData.get('organization') as string | null;
    const message = formData.get('message') as string;
    const honeypot = formData.get('website') as string;

    if (honeypot) {
      console.log('Bot detected via honeypot field');
      return NextResponse.redirect(
        new URL('/contact?success=true', request.url), 
        303
      );
    }

    if (!name || !email || !message) {
      return NextResponse.redirect(
        new URL('/contact?error=Missing required fields', request.url), 
        303
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.redirect(
        new URL('/contact?error=Invalid email address', request.url), 
        303
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.redirect(
        new URL('/contact?error=Message must be between 10 and 5000 characters', request.url), 
        303
      );
    }

    const linkCount = (message.match(/https?:\/\//g) || []).length;
    const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;
    
    if (linkCount > 3 || capsRatio > 0.5) {
      console.log('Potential spam detected');
      return NextResponse.redirect(
        new URL('/contact?error=Message appears to be spam', request.url), 
        303
      );
    }

    await prisma.contact.create({
      data: {
        name,
        email,
        organization: organization || null,
        message,
      },
    });

    // Send email notification using Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: '"Wrangla 360" <no-reply@wrangla360.com>',
      to: 'info@wrangla360.com',
      subject: 'New Contact Form Submission',
      text: `
        New contact form submission:
        Name: ${name}
        Email: ${email}
        Organization: ${organization || 'N/A'}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.redirect(
      new URL('/contact?success=true', request.url), 
      303
    );
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.redirect(
      new URL('/contact?error=Failed to submit form. Please try again.', request.url), 
      303
    );
  }
}