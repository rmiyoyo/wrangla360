import Image from 'next/image';
import Link from 'next/link';
import './services.css';

export const metadata = {
  title: 'Services | Wrangla 360',
  description: 'Our data-driven services transform food systems through systemic risk assessment, predictive analytics, and inclusive social impact solutions.',
};

export default function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="services-hero-container">
          <h1>How we help you succeed</h1>
          <p className="services-hero-description">
            We believe that strong decisions start with evidence and lead to lasting change. Our services are designed as a connected journey: first, we assess risks in the system; then, we forecast the future with predictive analytics; and finally, we translate insights into inclusive action for social impact.
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="services-list-container">
          <div className="service-item">
            <div className="service-content">
              <div className="service-number">01</div>
              <h2>Systemic Risk Assessment</h2>
              <p className="service-tagline">
                Understanding today&apos;s risks to prepare for tomorrow&apos;s challenges.
              </p>
              <p className="service-description">
                We map the current state of your food, agriculture, or social systems. Through comprehensive data collection, system diagnostics, and vulnerability analysis, we identify strengths, gaps, and risks. This provides a clear baseline to guide informed decision-making and ensures interventions are grounded in evidence.
              </p>
              <Link href="/services/risk-assessment" className="service-link">
                Learn more about risk assessment →
              </Link>
            </div>
            <div className="service-image-container">
              <Image
                src="/risk-assessment.jpg"
                alt="Systemic risk assessment in agriculture"
                width={500}
                height={400}
                className="service-image"
              />
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-content">
              <div className="service-number">02</div>
              <h2>Predictive Analytics</h2>
              <p className="service-tagline">
                Forecasting the future with confidence.
              </p>
              <p className="service-description">
                Building on risk assessments, we use advanced analytics and AI-driven models to anticipate future scenarios. From climate impacts on crop yields to supply chain disruptions, our predictive insights help you plan ahead, minimize uncertainty, and respond proactively rather than reactively.
              </p>
              <Link href="/services/predictive-analytics" className="service-link">
                Learn more about predictive analytics →
              </Link>
            </div>
            <div className="service-image-container">
              <Image
                src="/predictive-analytics.jpg"
                alt="Predictive analytics for food systems"
                width={500}
                height={400}
                className="service-image"
              />
            </div>
          </div>

          <div className="service-item">
            <div className="service-content">
              <div className="service-number">03</div>
              <h2>Inclusive Data &amp; Social Impact</h2>
              <p className="service-tagline">
                Turning insights into equitable action.
              </p>
              <p className="service-description">
                Insights only matter when they drive change. We translate forecasts and risk analyses into inclusive, accessible data solutions that empower communities, policymakers, and businesses. By focusing on equity and social outcomes, we ensure that decisions lead to resilience, sustainability, and lasting impact for all stakeholders.
              </p>
              <Link href="/services/social-impact" className="service-link">
                Learn more about social impact →
              </Link>
            </div>
            <div className="service-image-container">
              <Image
                src="/social-impact.jpg"
                alt="Inclusive data for social impact"
                width={500}
                height={400}
                className="service-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta-container">
          <h2>Ready to get started?</h2>
          <p>
            Let us help you build evidence-based solutions for sustainable food systems.
          </p>
          <div className="services-cta-buttons">
            <Link href="/contact" className="services-cta-btn primary">
              Contact us
            </Link>
            <Link href="/what-we-do" className="services-cta-btn primary">
              Explore more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}