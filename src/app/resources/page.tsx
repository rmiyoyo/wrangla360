import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import './resources.css';

export const metadata = {
  title: 'Resources | Wrangla 360',
  description: 'Explore our latest articles and insights on data-driven solutions for sustainable food systems.',
};

export default async function Resources() {
  const articles = await prisma.article.findMany({ 
    take: 6,
    orderBy: {
      createdAt: 'desc'
    }
  });
  
  return (
    <>
      <section className="hero-enhanced">
        <div className="hero-enhanced-content">
          <div className="hero-text">
            <div className="hero-badge">Knowledge Hub</div>
            <h1>Resources &amp; Insights</h1>
            <p>
              Discover our latest articles, case studies, and insights on leveraging data analytics 
              to drive sustainable outcomes in food systems and agricultural innovation.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Articles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15</span>
                <span className="stat-label">Case Studies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Insights</span>
              </div>
            </div>
          </div>
          <div className="hero-enhanced-image">
            <div className="image-overlay"></div>
            <Image
              src="/resources-insights.jpg"
              alt="Data analytics resources for sustainable food systems"
              width={600}
              height={500}
              priority
              className="hero-enhanced-img"
            />
          </div>
        </div>
      </section>

      <section className="articles-section">
        <div className="articles-container">
          <div className="section-header">
            <h2>Latest Articles & Insights</h2>
            <p className="articles-subtitle">
              Stay informed with our expert analysis and practical solutions for modern agricultural challenges.
            </p>
          </div>
          
          <div className="articles-grid">
            {articles.map((article, index) => (
              <article key={article.id} className={`article-card ${index < 2 ? 'featured' : ''}`}>
                <div className="article-image">
                  <Image
                    src={article.imageUrl || '/default-image.jpg'}
                    alt={article.title}
                    width={400}
                    height={240}
                    className="article-img"
                  />
                  {index < 2 && <div className="featured-badge">Featured</div>}
                </div>
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-footer">
                    <Link href={`/article/${article.slug}`} className="article-link">
                      Read Article
                      <span className="link-arrow">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-enhanced">
        <div className="cta-enhanced-content">
          <h2>Want to dive deeper into sustainable solutions?</h2>
          <div className="cta-enhanced-buttons">
            <Link href="/contact" className="cta-enhanced-btn primary">
              Get our services
            </Link>
            <Link href="/partner" className="cta-enhanced-btn primary">
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}