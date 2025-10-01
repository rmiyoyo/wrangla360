import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { prisma } from '@/lib/db';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .replace(/^-|-$/g, '');
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const formData = await request.formData();
  const title = formData.get('title') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const imageUrl = formData.get('imageUrl') as string | null;
  const slug = generateSlug(title);

  const article = await prisma.article.create({
    data: { title, excerpt, content, imageUrl, slug },
  });

  return NextResponse.json(article);
}