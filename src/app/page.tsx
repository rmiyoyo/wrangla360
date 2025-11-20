import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { LineChart, Activity, Users } from 'lucide-react';

export default async function Home({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const articles = await prisma.article.findMany({ take: 2 });
  const params = await searchParams;
  const success = params.success === 'true';
  const error = typeof params.error === 'string' ? params.error : null;

  return (
    <>
      {success && (
        <div style={{ 
          color: '#155724', 
          padding: '1rem', 
          background: '#d4edda', 
          border: '1px solid #c3e6cb',
          borderRadius: '4px', 
          margin: '1rem auto',
          maxWidth: '1200px',
          textAlign: 'center'
        }}>
          Thanks for subscribing! You&apos;ll receive updates from Wrangla 360.
        </div>
      )}

      {error && (
        <div style={{ 
          color: '#721c24', 
          padding: '1rem', 
          background: '#f8d7da', 
          border: '1px solid #f5c6cb',
          borderRadius: '4px', 
          margin: '1rem auto',
          maxWidth: '1200px',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}

      <section className="hero">
        <div className="hero-content">
          <h1>Our mission is to drive insights and action with analytics and data</h1>
          <p>
            We provide data-driven solutions to support decision making and drive sustainable outcomes.
          </p>
          <Link href="/what-we-do" className="hero-btn">
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
                <Link href={`/article/${article.slug}`}>
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="focus-section">
        <h2>Our focus</h2>
        <div className="focus-grid">
          <div className="focus-card" style={{
            padding: '2rem',
            borderRadius: '0.75rem',
            background: '#fafafa',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
          }}>
            <div className="focus-icon" style={{ marginBottom: '1rem' }}>
              <LineChart size={32} strokeWidth={1.25} />
            </div>
            <h3>Systemic Risk Assessment</h3>
            <p>Understanding today to prepare for tomorrow. Identify vulnerabilities and build resilient systems.</p>
            <Link href="services/risk-assessment" className="focus-link">
              Learn more
            </Link>
          </div>
          
          <div className="focus-card" style={{
            padding: '2rem',
            borderRadius: '0.75rem',
            background: '#fafafa',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
          }}>
            <div className="focus-icon" style={{ marginBottom: '1rem' }}>
              <Activity size={32} strokeWidth={1.25} />
            </div>
            <h3>Predictive Analytics</h3>
            <p>Forecasting the future with confidence. Move from reactive responses to proactive planning.</p>
            <Link href="services/predictive-analytics" className="focus-link">
              Learn more
            </Link>
          </div>
          
          <div className="focus-card" style={{
            padding: '2rem',
            borderRadius: '0.75rem',
            background: '#fafafa',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
          }}>
            <div className="focus-icon" style={{ marginBottom: '1rem' }}>
              <Users size={32} strokeWidth={1.25} />
            </div>
            <h3>Inclusive Data &amp; Social Impact</h3>
            <p>Turning insights into equitable action. Create change that&apos;s data-driven and socially grounded.</p>
            <Link href="services/social-impact" className="focus-link">
              Learn more
            </Link>
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
