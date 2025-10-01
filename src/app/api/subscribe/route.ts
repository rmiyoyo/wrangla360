import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const honeypot = formData.get('website') as string;

    if (honeypot) {
      console.log('Bot detected via honeypot field');
      return NextResponse.redirect('/?success=true', 303);
    }

    if (!email) {
      return NextResponse.redirect('/?error=Email is required', 303);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.redirect('/?error=Invalid email address', 303);
    }

    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    console.log('New subscriber:', subscriber);

    return NextResponse.redirect('/?success=true', 303);
  } catch (error) {
    const prismaError = error as Error & { code?: string };
    if (prismaError.code === 'P2002') {
      return NextResponse.redirect('/?success=true', 303);
    }
    console.error('Subscription error:', error);
    return NextResponse.redirect(
      '/?error=Failed to subscribe. Please try again.',
      303
    );
  }
}