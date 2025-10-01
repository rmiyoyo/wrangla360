import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const honeypot = formData.get('website') as string;

    if (honeypot) {
      console.log('Bot detected via honeypot field');
      return NextResponse.redirect(`${BASE_URL}/?success=true`, 303);
    }

    if (!email) {
      return NextResponse.redirect(`${BASE_URL}/?error=Email is required`, 303);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.redirect(`${BASE_URL}/?error=Invalid email address`, 303);
    }

    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    console.log('New subscriber:', subscriber);

    return NextResponse.redirect(`${BASE_URL}/?success=true`, 303);
  } catch (error) {
    const prismaError = error as Error & { code?: string };
    if (prismaError.code === 'P2002') {
      return NextResponse.redirect(`${BASE_URL}/?success=true`, 303);
    }
    console.error('Subscription error:', error);
    return NextResponse.redirect(
      `${BASE_URL}/?error=Failed to subscribe. Please try again.`,
      303
    );
  }
}