import Image from 'next/image';
import Link from 'next/link';
import '../service-detail.css';

export const metadata = {
  title: 'Inclusive Data & Social Impact | Wrangla 360',
  description: 'Translate insights into equitable action with accessible data platforms, equity-centered analysis, and community engagement.',
};

export default function SocialImpact() {
  return (
    <>
      <section className="service-detail-hero">
        <div className="service-detail-hero-container">
          <div className="service-detail-hero-content">
            <h1>Inclusive Data for Social Impact</h1>
            <p className="service-detail-tagline">
              Turning insights into equitable action.
            </p>
            <p className="service-detail-intro">
              Data should serve everyone—not just those with access to resources. Our Inclusive Data for Social Impact service ensures that analysis and forecasts are translated into practical, equitable solutions. By focusing on accessibility, community engagement, and measurable outcomes, we help clients create change that is both data-driven and socially grounded.
            </p>
          </div>
          <div className="service-detail-hero-image">
            <Image
              src="/social-impact.jpg"
              alt="Inclusive data for social impact"
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
            <h2>Inclusive Data Platforms</h2>
            <ul>
              <li>Develop accessible dashboards and tools tailored to local contexts.</li>
              <li>Ensure decision-makers, communities, and businesses can all engage with the same evidence.</li>
              <li>Prioritize usability for non-technical audiences.</li>
            </ul>
          </div>

          <div className="service-feature">
            <h2>Equity-Centered Analysis</h2>
            <ul>
              <li>Assess how risks and opportunities affect different groups.</li>
              <li>Highlight disparities in access, resilience, and outcomes.</li>
              <li>Provide recommendations that embed fairness into decision-making.</li>
            </ul>
          </div>

          <div className="service-feature">
            <h2>Policy and Program Support</h2>
            <ul>
              <li>Translate analytics into actionable strategies for governments and NGOs.</li>
              <li>Support the design of social safety nets and inclusive programs.</li>
              <li>Provide evidence for funding, advocacy, and global reporting needs.</li>
            </ul>
          </div>

          <div className="service-feature">
            <h2>Community Training and Engagement</h2>
            <ul>
              <li>Build local skills to interpret and apply data.</li>
              <li>Conduct participatory workshops to ensure diverse voices are represented.</li>
              <li>Strengthen trust between communities and institutions.</li>
            </ul>
          </div>

          <div className="service-why-matters">
            <h2>Why It Matters</h2>
            <p>
              Insights alone do not create change—action does. By ensuring data is inclusive, accessible, and tied to social outcomes, we help organizations design interventions that truly improve lives and strengthen resilience.
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