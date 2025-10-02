import Image from 'next/image';
import Link from 'next/link';
import '../communities.css';

export const metadata = {
  title: 'Smallholder Farmers | Wrangla 360',
  description: 'Empowering producers with the tools, knowledge, and opportunities to run farms as sustainable businesses.',
};

export default function FarmersPage() {
  return (
    <>
      <section className="community-hero farmers-hero">
        <div className="community-hero-content">
          <h1>How We Work with Smallholder Farmers</h1>
          <p className="community-hero-subtitle">
            Empowering producers with the tools, knowledge, and opportunities to run farms as sustainable businesses.
          </p>
        </div>
      </section>

      <section className="community-intro">
        <div className="community-intro-container">
          <div className="community-intro-image">
            <Image
              src="/smallholder-farmers.jpg"
              alt="Smallholder farmers in the field"
              width={500}
              height={400}
              className="intro-img"
            />
          </div>
          <div className="community-intro-text">
            <p>
              Smallholder farmers feed much of the world, yet many face barriers to productivity, resilience, and fair market access. We partner directly with farmers to equip them with skills, data, and resources that increase yields, reduce risks, and open doors to new opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="community-approach">
        <div className="community-approach-container">
          <h2>Our Approach</h2>
          
          <div className="approach-item">
            <h3>Precision Agriculture Tools</h3>
            <p>
              Smarter farming starts with better decisions. We introduce accessible technologies—such as soil testing, weather data, and mobile advisory services—that help farmers optimize inputs, reduce waste, and grow more sustainably.
            </p>
            <Link href="/services/predictive-analytics" className="approach-link">
              Learn about Predictive Analytics →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Risk Assessment Frameworks</h3>
            <p>
              We work with farmers to understand vulnerabilities—from climate shocks to pest pressures—through participatory surveys and diagnostics. By returning results directly to farmers, we ensure they have the knowledge to manage risks proactively.
            </p>
            <Link href="/services/risk-assessment" className="approach-link">
              Learn about System Risk Assessment →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Market Access Solutions</h3>
            <p>
              A good harvest only matters if it reaches the market. We strengthen value chains by connecting farmers with buyers, building cooperative models, and using digital platforms that secure fairer prices and reduce post-harvest losses.
            </p>
            <Link href="/services/social-impact" className="approach-link">
              Learn about Inclusive Data for Social Impact →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Data Ownership and Return</h3>
            <p>
              Data belongs to farmers. Every survey, forecast, or analysis we conduct is returned in farmer-friendly formats—dashboards, reports, or training sessions—so producers can understand, own, and use their own data to grow their businesses.
            </p>
          </div>

          <div className="approach-item">
            <h3>Training and Capacity Building</h3>
            <p>
              We don&apos;t just deliver tools—we build lasting skills. From financial literacy to sustainable practices, we train farmers to run farms as resilient agribusinesses, ready to adapt to climate and market changes.
            </p>
          </div>
        </div>
      </section>

      <section className="community-impact">
        <div className="community-impact-container">
          <h2>Why It Matters</h2>
          <p>
            Empowering smallholder farmers strengthens entire food systems. By combining technology, risk insight, and inclusive market solutions, we help farmers achieve sustainable growth, build resilience, and secure a better future for their communities.
          </p>
        </div>
      </section>

      <section className="community-cta">
        <div className="community-cta-container">
          <h2>Join us in building farmer-centered solutions that make food systems more sustainable and equitable.</h2>
          <Link href="/contact" className="community-cta-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}