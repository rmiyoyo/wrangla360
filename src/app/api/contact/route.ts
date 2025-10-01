import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const organization = formData.get('organization') as string | null;
    const message = formData.get('message') as string;
    const honeypot = formData.get('website') as string;

    if (honeypot) {
      return NextResponse.redirect('/contact?success=true', 303);
    }

    if (!name || !email || !message) {
      return NextResponse.redirect('/contact?error=Missing required fields', 303);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.redirect('/contact?error=Invalid email address', 303);
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.redirect(
        '/contact?error=Message must be between 10 and 5000 characters',
        303
      );
    }

    const linkCount = (message.match(/https?:\/\//g) || []).length;
    const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;

    if (linkCount > 3 || capsRatio > 0.5) {
      return NextResponse.redirect('/contact?error=Message appears to be spam', 303);
    }

    await prisma.contact.create({
      data: {
        name,
        email,
        organization: organization || null,
        message,
      },
    });

    return NextResponse.redirect('/contact?success=true', 303);
  } catch (error) {
    return NextResponse.redirect(
      '/contact?error=Failed to submit form. Please try again.',
      303
    );
  }
}