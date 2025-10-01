import Image from 'next/image';
import { prisma } from '@/lib/db';
import Link from 'next/link';
import './article.css';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const article = await prisma.article.findUnique({
    where: { slug },
  });

  if (!article) {
    return (
      <div className="article-container">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Article not found</h1>
        <Link href="/" className="article-back-link">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <article className="article-container">
      <Link href="/" className="article-back-link">
        ← Back to home
      </Link>
      
      <header className="article-header">
        {article.imageUrl && (
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={900}
            height={500}
            className="article-image"
            priority
          />
        )}
        <h1 className="article-title">{article.title}</h1>
      </header>
      
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}