import Link from 'next/link';
import Image from 'next/image';

export default function PredictiveAnalytics() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Predictive Analytics for Sustainable Food Production and Consumption</h1>
          <p>
            Use predictive analytics to optimize resource use and reduce waste throughout food production and consumption cycles, contributing to a more sustainable food system.
          </p>
          <Link href="/contact" className="hero-btn">
            Contact us to learn more
          </Link>
        </div>
        <div className="hero-image">
          <Image
            src="/predictive-analytics.jpg"
            alt="Predictive analytics in food systems"
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
            Leverage historical and real-time data in machine learning models to forecast production needs and consumption patterns, minimizing waste and promoting efficient use of inputs (e.g., water, fertilizers, energy).
          </div>
          <div className="focus-item-page">
            Create predictive tools to inform sustainable agriculture practices, such as precision agriculture, that adjust inputs based on crop needs and environmental conditions, reducing emissions and ecological impact.
          </div>
          <div className="focus-item-page">
            Develop consumer-facing tools and dashboards to visualize and track the carbon footprint, water use, and other sustainability metrics of food products, encouraging informed choices and responsible consumption.
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>SDG Impact</h2>
        <p className="text-center max-w-3xl mx-auto">
          Drives sustainable production and consumption patterns, minimizing environmental footprint and waste, and empowering businesses and consumers to make choices aligned with ESG goals.
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