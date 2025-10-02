import Image from 'next/image';
import Link from 'next/link';
import '../communities.css';

export const metadata = {
  title: 'Policy Makers & NGOs | Wrangla 360',
  description: 'Delivering evidence-based insights and tools for systemic change.',
};

export default function PolicyPage() {
  return (
    <>
      <section className="community-hero policy-hero">
        <div className="community-hero-content">
          <h1>How We Work with Policy Makers & NGOs</h1>
          <p className="community-hero-subtitle">
            Delivering evidence-based insights and tools for systemic change.
          </p>
        </div>
      </section>

      <section className="community-intro">
        <div className="community-intro-container">
          <div className="community-intro-image">
            <Image
              src="/policy-makers.jpg"
              alt="Policy makers and NGOs collaboration"
              width={500}
              height={400}
              className="intro-img"
            />
          </div>
          <div className="community-intro-text">
            <p>
              Policy makers and NGOs play a crucial role in shaping the future of food security, nutrition, and sustainable development. But designing effective policies and programs requires more than good intentions—it demands solid evidence, reliable monitoring, and tools that translate data into action. We support governments, development agencies, and NGOs with insights and solutions that drive systemic impact.
            </p>
          </div>
        </div>
      </section>

      <section className="community-approach">
        <div className="community-approach-container">
          <h2>Our Approach</h2>
          
          <div className="approach-item">
            <h3>Evidence-Based Policy Insights</h3>
            <p>
              We provide actionable data and analysis to inform food security strategies, nutrition programs, and agricultural policies. Our insights ensure that interventions are grounded in evidence and aligned with national and global priorities.
            </p>
            <Link href="/services/risk-assessment" className="approach-link">
              Learn about System Risk Assessment →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Monitoring & Evaluation Tools</h3>
            <p>
              We develop robust tools and frameworks that help institutions track progress toward targets such as the SDGs. From food availability and nutrition outcomes to resilience metrics, our solutions enable continuous learning and accountability.
            </p>
            <Link href="/services/social-impact" className="approach-link">
              Learn about Inclusive Data for Social Impact →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Early Warning & Risk Forecasting</h3>
            <p>
              By integrating climate, market, and social data, we deliver predictive models that anticipate shocks before they escalate. These tools allow policy makers and NGOs to respond proactively—designing safety nets, pre-positioning resources, and strengthening resilience.
            </p>
            <Link href="/services/predictive-analytics" className="approach-link">
              Learn about Predictive Analytics →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Capacity Strengthening</h3>
            <p>
              We work alongside institutions to build internal capacity in data collection, analysis, and program evaluation. Through tailored training and collaborative research, we ensure that evidence-based approaches are sustained long after our projects conclude.
            </p>
          </div>
        </div>
      </section>

      <section className="community-impact">
        <div className="community-impact-container">
          <h2>Why It Matters</h2>
          <p>
            Evidence is the foundation of effective policy and lasting impact. By equipping policy makers and NGOs with reliable data, predictive tools, and monitoring frameworks, we help create systemic change that improves food security, strengthens nutrition, and builds resilience for communities worldwide.
          </p>
        </div>
      </section>

      <section className="community-cta">
        <div className="community-cta-container">
          <h2>Let&apos;s design smarter policies and programs that drive sustainable development.</h2>
          <Link href="/contact" className="community-cta-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}