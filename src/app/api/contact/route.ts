import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import nodemailer from 'nodemailer';
import { createAssessment } from '@/lib/recaptcha';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const organization = formData.get('organization') as string | null;
    const message = formData.get('message') as string;
    const recaptchaToken = formData.get('g-recaptcha-response') as string;

    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Verify reCAPTCHA Enterprise
    const score = await createAssessment({
      projectID: process.env.RECAPTCHA_PROJECT_ID!,
      recaptchaKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      token: recaptchaToken,
      recaptchaAction: 'contact',
    });

    if (!score || score < 0.5) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const contact = await prisma.contact.create({
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

    // Redirect to contact page with success message
    return NextResponse.redirect(new URL('/contact?success=Thank you! We\'ll get back to you soon.', request.url), 303);
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}