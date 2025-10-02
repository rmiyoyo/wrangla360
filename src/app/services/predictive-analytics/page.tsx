import Image from 'next/image';
import Link from 'next/link';
import '../service-detail.css';

export const metadata = {
  title: 'Predictive Analytics | Wrangla 360',
  description: 'Move from reactive responses to proactive planning with advanced analytics, AI, and modeling techniques for food systems.',
};

export default function PredictiveAnalytics() {
  return (
    <>
      <section className="service-detail-hero">
        <div className="service-detail-hero-container">
          <div className="service-detail-hero-content">
            <h1>Predictive Analytics</h1>
            <p className="service-detail-tagline">
              Forecasting the future with confidence.
            </p>
            <p className="service-detail-intro">
              In an uncertain world, anticipating risks and opportunities is essential. Our Predictive Analytics service helps organizations move from reactive responses to proactive planning. By harnessing advanced analytics, AI, and modeling techniques, we forecast future trends and scenarios—empowering you to make better decisions today for a more resilient tomorrow.
            </p>
          </div>
          <div className="service-detail-hero-image">
            <Image
              src="/predictive-analytics.jpg"
              alt="Predictive analytics forecasting"
              width={600}
              height={450}
              className="detail-image"
            />
          </div>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="service-detail-container">
          <div className="service-feature">
            <h2>Climate and Crop Forecasting</h2>
            <ul>
              <li>Predict harvest outcomes under different climate scenarios.</li>
              <li>Anticipate droughts, floods, or pest outbreaks before they strike.</li>
              <li>Support farmers, businesses, and governments in planning ahead.</li>
            </ul>
          </div>

          <div className="service-feature">
            <h2>Supply Chain and Market Modeling</h2>
            <ul>
              <li>Identify vulnerabilities in food and trade flows.</li>
              <li>Forecast price fluctuations to stabilize markets and reduce shocks.</li>
              <li>Optimize distribution networks to cut waste and strengthen resilience.</li>
            </ul>
          </div>

          <div className="service-feature">
            <h2>Risk Scenario Simulation</h2>
            <ul>
              <li>Model the impact of climate, economic, or social disruptions.</li>
              <li>Explore &quot;what if&quot; scenarios to stress-test systems and policies.</li>
              <li>Provide decision-makers with evidence-based options for mitigation.</li>
            </ul>
          </div>

          <div className="service-feature">
            <h2>Training and Capacity Building</h2>
            <ul>
              <li>Equip teams with practical skills in data modeling and forecasting.</li>
              <li>Build local capacity to run predictive tools independently.</li>
              <li>Ensure models are not just imported, but embedded in practice.</li>
            </ul>
          </div>

          <div className="service-why-matters">
            <h2>Why It Matters</h2>
            <p>
              Predictive analytics transforms uncertainty into insight. With better foresight, leaders can allocate resources strategically, minimize losses, and create more sustainable outcomes for communities and economies.
            </p>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta-container">
          <h2>Ready to get started?</h2>
          <p>Let&apos;s build smarter, more resilient systems together.</p>
          <Link href="/contact" className="service-detail-cta-btn">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}