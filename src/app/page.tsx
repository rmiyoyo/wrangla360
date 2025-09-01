import Image from 'next/image';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

import { prisma } from '@/lib/prisma';

export default async function Home() {
  const articles = await prisma.article.findMany({ take: 2 });

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Our mission is to drive insights and action with analytics and data</h1>
          <p>
            We are a consultancy that provides data-driven solutions to support decision making and
            drive sustainable outcomes.
          </p>
          <Link href="/about" className="hero-btn">
            Learn more
          </Link>
        </div>
        <div className="hero-image">
          <Image
            src="/woman-laptop.jpg"
            alt="Professional working with data analytics"
            width={500}
            height={450}
            priority
            className="rounded-xl"
          />
        </div>
      </section>

      <section className="news-section">
        <h2>News and Insights</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <Image
                src={article.imageUrl || '/default-image.jpg'}
                alt={article.title}
                width={400}
                height={240}
                className="w-full h-60 object-cover"
              />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <Link href={`/article/${article.id}`}>
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="focus-section">
        <h2>Our focus</h2>
        <div className="focus-grid">
          <div className="focus-item">
            Systemic risk assessment
          </div>
          <div className="focus-item">
            Predictive analytics
          </div>
          <div className="focus-item">
            Inclusive Data and Social Impact
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Get our services or become a partner</h2>
        <div className="cta-buttons">
          <Link href="/services" className="cta-btn primary">
            Get our services
          </Link>
          <Link href="/partner" className="cta-btn secondary">
            Become a partner
          </Link>
        </div>
      </section>
    </>
  );
}