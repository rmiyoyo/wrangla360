import Image from 'next/image';
import Link from 'next/link';
import '../service-detail.css';

export const metadata = {
  title: 'System Risk Assessment | Wrangla 360',
  description: 'Build a clear picture of your system with comprehensive data collection, diagnostics, and analysis to identify vulnerabilities and opportunities.',
};

export default function RiskAssessment() {
  return (
    <>
      <section className="service-detail-hero">
        <div className="service-detail-hero-container">
          <div className="service-detail-hero-content">
            <h1>System Risk Assessment</h1>
            <p className="service-detail-tagline">
              Understanding today to prepare for tomorrow.
            </p>
            <p className="service-detail-intro">
              Our System Risk Assessment service helps organizations, governments, and businesses build a clear picture of the current state of their systems—whether in food security, agriculture, trade, or social infrastructure. By combining rigorous data collection, diagnostic research, and advanced analysis, we identify vulnerabilities, strengths, and opportunities. The result: actionable insights that form a foundation for sustainable and resilient decision-making.
            </p>
          </div>
          <div className="service-detail-hero-image">
            <Image
              src="/risk-assessment.jpg"
              alt="System risk assessment analysis"
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
            <h2>Comprehensive Data Collection</h2>
            <ul>
              <li>
                <strong>Survey Design:</strong> Tailored surveys that capture the right data for your system context.
              </li>
              <li>
                <strong>Field Work:</strong> On-the-ground data gathering through interviews, focus groups, and digital tools to ensure voices from across the system are represented.
              </li>
              <li>
                <strong>Data Quality Assurance:</strong> Robust protocols to ensure accuracy, reliability, and representativeness of all collected information.
              </li>
            </ul>
          </div>

          <div className="service-feature">
            <h2>System Diagnostics</h2>
            <ul>
              <li>
                <strong>Applied Research:</strong> In-depth exploration of structural, social, and economic factors influencing food system performance.
              </li>
              <li>
                <strong>Vulnerability Mapping:</strong> Identification of risks such as supply chain disruptions, resource inefficiencies, or equity gaps.
              </li>
              <li>
                <strong>Scenario Testing:</strong> Assessing how shocks—like climate events or market fluctuations—could impact system stability.
              </li>
            </ul>
          </div>

          <div className="service-feature">
            <h2>Data Analysis and Reporting</h2>
            <ul>
              <li>
                <strong>Advanced Analytics:</strong> Turning raw data into meaningful insights through statistical and geospatial methods.
              </li>
              <li>
                <strong>Clear Reporting:</strong> Professional reports and dashboards that translate technical findings into accessible, actionable knowledge.
              </li>
              <li>
                <strong>Decision Support:</strong> Evidence-based recommendations aligned with client goals and long-term system resilience.
              </li>
            </ul>
          </div>

          <div className="service-feature">
            <h2>Capacity Building and Training</h2>
            <ul>
              <li>
                <strong>Training Programs:</strong> Workshops and courses that strengthen stakeholder capacity in data collection, analysis, and risk monitoring.
              </li>
              <li>
                <strong>Skill Transfer:</strong> Ensuring your teams are equipped to sustain ongoing assessments beyond project timelines.
              </li>
              <li>
                <strong>Inclusive Practices:</strong> Empowering local actors to own and apply the insights for lasting impact.
              </li>
            </ul>
          </div>

          <div className="service-why-matters">
            <h2>Why It Matters</h2>
            <p>
              Risk assessments are not just technical exercises—they are essential for building resilient systems. By investing in accurate diagnostics today, organizations can anticipate disruptions, allocate resources wisely, and create more equitable and sustainable futures.
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