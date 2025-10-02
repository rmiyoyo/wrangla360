import Image from 'next/image';
import Link from 'next/link';
import '../communities.css';

export const metadata = {
  title: 'Researchers & Academics | Wrangla 360',
  description: 'Collaborating to advance food systems science and innovation.',
};

export default function ResearchPage() {
  return (
    <>
      <section className="community-hero research-hero">
        <div className="community-hero-content">
          <h1>How We Work with Researchers & Academics</h1>
          <p className="community-hero-subtitle">
            Collaborating to advance food systems science and innovation.
          </p>
        </div>
      </section>

      <section className="community-intro">
        <div className="community-intro-container">
          <div className="community-intro-image">
            <Image
              src="/researchers.jpg"
              alt="Researchers and academics collaboration"
              width={500}
              height={400}
              className="intro-img"
            />
          </div>
          <div className="community-intro-text">
            <p>
              Researchers and academics are at the forefront of building knowledge that shapes the future of food systems. We collaborate with institutions, scholars, and students to provide high-quality datasets, analytical frameworks, and training opportunities that strengthen research capacity. Together, we generate insights that drive innovation, inform policy, and inspire systemic change.
            </p>
          </div>
        </div>
      </section>

      <section className="community-approach">
        <div className="community-approach-container">
          <h2>Our Approach</h2>
          
          <div className="approach-item">
            <h3>Access to Comprehensive Datasets</h3>
            <p>
              We curate and share high-quality, multi-sector datasets spanning agriculture, trade, nutrition, and climate. By improving access to reliable data, we help researchers overcome common barriers and accelerate discovery.
            </p>
            <Link href="/services/risk-assessment" className="approach-link">
              Learn about System Risk Assessment →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Analytical Frameworks & Tools</h3>
            <p>
              We provide advanced analytical models and methodologies—ranging from predictive modeling to supply chain simulations—that support rigorous academic inquiry and applied research.
            </p>
            <Link href="/services/predictive-analytics" className="approach-link">
              Learn about Predictive Analytics →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Research Collaboration & Co-Publication</h3>
            <p>
              We work hand-in-hand with scientists on joint studies, policy briefs, and academic papers. By combining practical data expertise with academic rigor, we contribute to impactful publications that influence global debates on food systems.
            </p>
            <Link href="/services/social-impact" className="approach-link">
              Learn about Inclusive Data for Social Impact →
            </Link>
          </div>

          <div className="approach-item">
            <h3>Training & Capacity Building</h3>
            <p>
              Through workshops, fellowships, and collaborative projects, we strengthen research capacity for the next generation of food systems scholars. Our training emphasizes data literacy, methodological rigor, and interdisciplinary collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="community-impact">
        <div className="community-impact-container">
          <h2>Why It Matters</h2>
          <p>
            Strong research underpins strong action. By providing data, tools, and collaborative opportunities, we empower researchers and academics to advance food systems science and ensure that new knowledge translates into real-world solutions.
          </p>
        </div>
      </section>

      <section className="community-cta">
        <div className="community-cta-container">
          <h2>Let's push the boundaries of food systems research—together.</h2>
          <Link href="/contact" className="community-cta-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}