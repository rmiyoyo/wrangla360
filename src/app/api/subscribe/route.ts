import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const honeypot = formData.get('website') as string;

    if (honeypot) {
      console.log('Bot detected via honeypot field');
      return NextResponse.redirect(
        new URL('/?success=true', request.url), 
        303
      );
    }

    if (!email) {
      return NextResponse.redirect(
        new URL('/?error=Email is required', request.url), 
        303
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.redirect(
        new URL('/?error=Invalid email address', request.url), 
        303
      );
    }

    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    console.log('New subscriber:', subscriber);

    return NextResponse.redirect(
      new URL('/?success=true', request.url), 
      303
    );
  } catch (error) {
    const prismaError = error as Error & { code?: string };
    if (prismaError.code === 'P2002') {
      return NextResponse.redirect(
        new URL('/?success=true', request.url), 
        303
      );
    }
    console.error('Subscription error:', error);
    return NextResponse.redirect(
      new URL('/?error=Failed to subscribe. Please try again.', request.url), 
      303
    );
  }
}