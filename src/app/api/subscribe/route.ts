import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createAssessment } from '@/lib/recaptcha';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const recaptchaToken = formData.get('g-recaptcha-response') as string;

    if (!email || !recaptchaToken) {
      return NextResponse.json({ error: 'Email and reCAPTCHA are required' }, { status: 400 });
    }

    // Verify reCAPTCHA Enterprise
    const score = await createAssessment({
      projectID: process.env.RECAPTCHA_PROJECT_ID!,
      recaptchaKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      token: recaptchaToken,
      recaptchaAction: 'subscribe',
    });

    if (!score || score < 0.5) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Use upsert to avoid duplicates
    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    console.log('New subscriber:', subscriber);

    // Redirect to home page with success message
    return NextResponse.redirect(new URL('/?success=Thanks for subscribing! Check your email for confirmation.', request.url), 303);
  } catch (error) {
    const prismaError = error as Error & { code?: string };
    if (prismaError.code === 'P2002') {
      return NextResponse.redirect(new URL('/?success=You\'re already subscribed!', request.url), 303);
    }
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}