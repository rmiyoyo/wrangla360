import Link from 'next/link';
import Image from 'next/image';

export default function SystemicRiskAssessment() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Systemic Risk Assessment for the Entire Food System</h1>
          <p>
            Quantify and model risks throughout the food system—from production through distribution to consumption—highlighting vulnerabilities due to climate change, regulatory shifts, and market volatility.
          </p>
          <Link href="/contact" className="hero-btn">
            Contact us to learn more
          </Link>
        </div>
        <div className="hero-image">
          <Image
            src="/systemic-risk.jpg"
            alt="Systemic risk assessment in food systems"
            width={500}
            height={450}
            priority
            className="rounded-xl"
          />
        </div>
      </section>

      <section className="focus-section">
        <h2>Key Activities</h2>
        <div className="focus-grid">
          <div className="focus-item-page">
            Develop comprehensive risk models that integrate climate and market data with production, distribution, and consumption patterns, assessing how climate variability and extreme events may affect food availability and affordability.
          </div>
          <div className="focus-item-page">
            Conduct scenario analysis using actuarial methods to evaluate financial impacts and insurance needs for stakeholders across the food system, including farmers, distributors, retailers, and consumers.
          </div>
          <div className="focus-item-page">
            Offer risk-adjusted strategies for each stage in the food system to mitigate impacts, such as shifting production practices, adapting distribution networks, or diversifying food sources.
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>SDG Impact</h2>
        <p className="text-center max-w-3xl mx-auto">
          Enhances food system resilience by identifying risks that threaten food security and sustainability, supporting proactive measures to reduce environmental impact and promote food security across populations.
        </p>
        <div className="cta-buttons">
          <Link href="/services" className="cta-btn primary">
            Explore our services
          </Link>
          <Link href="/contact" className="cta-btn secondary">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}