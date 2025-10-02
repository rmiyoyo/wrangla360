import Image from 'next/image';
import Link from 'next/link';
import '../communities.css';

export const metadata = {
  title: 'Food Companies & Supply Chains | Wrangla 360',
  description: 'Helping businesses build efficient, resilient, and sustainable supply chains.',
};

export default function CompaniesPage() {
  return (
    <>
      <section className="community-hero companies-hero">
        <div className="community-hero-content">
          <h1>How We Work with Food Companies & Supply Chains</h1>
          <p className="community-hero-subtitle">
            Helping businesses build efficient, resilient, and sustainable supply chains.
          </p>
        </div>
      </section>

      <section className="community-intro">
        <div className="community-intro-container">
          <div className="community-intro-image">
            <Image
              src="/food-companies.jpg"
              alt="Food supply chain operations"
              width={500}
              height={400}
              className="intro-img"
            />
          </div>
          <div className="community-intro-text">
            <p>
              Food companies are at the center of global food systems—but they face rising challenges: volatile markets, climate risks, and growing demands for sustainability. We partner with businesses across the value chain to deliver analytics, metrics, and tools that reduce waste, manage risks, and unlock new opportunities for efficiency and impact.
            </p>
          </div>
        </div>
      </section>

      <section className="community-approach">
        <div className="community-approach-container">
          <h2>Our Approach</h2>
          
          <div className="approach-item">
            <h3>Supply Chain Analytics</h3>
            <p>
              We provide end-to-end visibility across your operations—tracking flows from producers to consumers. Our analytics tools identify bottlenecks, reduce inefficiencies, and improve coordination to ensure that products move faster, fresher, and with less waste.
            </p>
            <Link href="/services/predictive-analytics" className="approach-link">
              Learn about Predictive Analytics →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Sustainability Metrics</h3>
            <p>
              Sustainability is no longer optional—it&apos;s a business imperative. We design measurement frameworks to track resource use, emissions, and social impact across supply chains. With clear, actionable metrics, companies can set targets, report progress, and strengthen their ESG performance.
            </p>
            <Link href="/services/social-impact" className="approach-link">
              Learn about Inclusive Data for Social Impact →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Risk Management Tools</h3>
            <p>
              From climate shocks to trade disruptions, supply chains are vulnerable to multiple risks. We develop tailored risk management frameworks that anticipate disruptions, test response scenarios, and strengthen resilience at every level of the chain.
            </p>
            <Link href="/services/risk-assessment" className="approach-link">
              Learn about System Risk Assessment →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Training &amp; Capacity Building</h3>
            <p>
              We work with business teams to build in-house capacity for data-driven decision-making. From interpreting dashboards to applying sustainability insights, our training ensures your staff are equipped to keep improving beyond project timelines.
            </p>
          </div>
        </div>
      </section>

      <section className="community-impact">
        <div className="community-impact-container">
          <h2>Why It Matters</h2>
          <p>
            Stronger supply chains mean stronger food systems. By combining data analytics, sustainability insights, and proactive risk management, we help companies reduce costs, meet stakeholder expectations, and lead the transition toward more sustainable global food systems.
          </p>
        </div>
      </section>

      <section className="community-cta">
        <div className="community-cta-container">
          <h2>Let&#39;s create supply chains that are efficient, resilient, and future-ready.</h2>
          <Link href="/contact" className="community-cta-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}