import Image from 'next/image';
import Link from 'next/link';
import './what-we-do.css';

export const metadata = {
  title: 'What We Do | Wrangla 360',
  description: 'We transform food systems through data-driven insights and analytics solutions that drive sustainable outcomes.',
};

export default function WhatWeDo() {
  return (
    <>
      <section className="hero-enhanced">
        <div className="hero-enhanced-content">
          <div>
            <h1>How we help you succeed</h1>
            <p>
              We believe that strong decisions start with evidence and lead to lasting change. Our services are designed as a connected journey: first, we assess risks in the system; then, we forecast the future with predictive analytics; and finally, we translate insights into inclusive action for social impact.
            </p>
          </div>
          <div className="hero-enhanced-image">
            <Image
              src="/food-systems-analytics.jpg"
              alt="Sustainable food systems analytics"
              width={600}
              height={500}
              priority
              className="hero-enhanced-img"
            />
          </div>
        </div>
      </section>

      <section className="mission-statement">
        <div className="mission-container">
          <h2>We provide analytics solutions to make sustainable food systems accessible to those who need it most.</h2>
        </div>
      </section>

      <section className="focus-communities">
        <div className="focus-communities-container">
          <h2>Our focus communities</h2>
          <p className="focus-subtitle">
            We work with diverse stakeholders across the food system to create lasting impact 
            where it is needed most.
          </p>
          <div className="communities-grid">
            <div className="community-card">
              <div className="community-image">
                <Image
                  src="/smallholder-farmers.jpg"
                  alt="Smallholder farmers"
                  width={300}
                  height={200}
                  className="community-img"
                />
              </div>
              <div className="community-content">
                <h3>Smallholder farmers</h3>
                <p>
                  Empowering producers with the tools, knowledge, and opportunities to run farms as sustainable businesses. We partner directly with farmers to equip them with skills, data, and resources that increase yields, reduce risks, and open doors to new opportunities.
                </p>
                <Link href="/communities/farmers" className="community-btn">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="community-card">
              <div className="community-image">
                <Image
                  src="/food-companies.jpg"
                  alt="Food companies and supply chains"
                  width={300}
                  height={200}
                  className="community-img"
                />
              </div>
              <div className="community-content">
                <h3>Food companies &amp; supply chains</h3>
                <p>
                  Helping businesses build efficient, resilient, and sustainable supply chains. We partner with businesses across the value chain to deliver analytics, metrics, and tools that reduce waste, manage risks, and unlock new opportunities for efficiency and impact.
                </p>
                <Link href="/communities/companies" className="community-btn">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="community-card">
              <div className="community-image">
                <Image
                  src="/policy-makers.jpg"
                  alt="Policy makers and NGOs"
                  width={300}
                  height={200}
                  className="community-img"
                />
              </div>
              <div className="community-content">
                <h3>Policy makers &amp; NGOs</h3>
                <p>
                  Delivering evidence-based insights and tools for systemic change. We support governments, development agencies, and NGOs with insights and solutions that drive systemic impact, grounded in solid evidence and reliable monitoring.
                </p>
                <Link href="/communities/policy" className="community-btn">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="community-card">
              <div className="community-image">
                <Image
                  src="/researchers.jpg"
                  alt="Researchers and academics"
                  width={300}
                  height={200}
                  className="community-img"
                />
              </div>
              <div className="community-content">
                <h3>Researchers &amp; academics</h3>
                <p>
                  Collaborating to advance food systems science and innovation. We work with institutions, scholars, and students to provide high-quality datasets, analytical frameworks, and training opportunities that strengthen research capacity.
                </p>
                <Link href="/communities/research" className="community-btn">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-showcase">
        <div className="services-showcase-container">
          <div className="service-showcase-card primary-card">
            <div className="service-showcase-image">
              <Image
                src="/risk-assessment.jpg"
                alt="Systemic risk assessment in agriculture"
                width={400}
                height={300}
                className="service-img"
              />
            </div>
            <div className="service-showcase-content">
              <h3>Systemic Risk Assessment</h3>
              <h4>Understanding today&apos;s risks to prepare for tomorrow&apos;s challenges.</h4>
              <p>
                We map the current state of your food, agriculture, or social systems. Through comprehensive data collection, system diagnostics, and vulnerability analysis, we identify strengths, gaps, and risks. This provides a clear baseline to guide informed decision-making and ensures interventions are grounded in evidence.
              </p>
              <Link href="/services/risk-assessment" className="service-showcase-btn">
                Explore risk solutions
              </Link>
            </div>
          </div>

          <div className="secondary-services">
            <div className="secondary-service-card">
              <h4>Predictive Analytics</h4>
              <h5>Forecasting the future with confidence.</h5>
              <p>
                Building on risk assessments, we use advanced analytics and AI-driven models to anticipate future scenarios. From climate impacts on crop yields to supply chain disruptions, our predictive insights help you plan ahead, minimize uncertainty, and respond proactively rather than reactively.
              </p>
              <div className="secondary-service-image">
                <Image
                  src="/predictive-analytics.jpg"
                  alt="Predictive analytics for food systems"
                  width={300}
                  height={200}
                  className="secondary-service-img"
                />
              </div>
              <Link href="/services/predictive-analytics" className="secondary-service-link">
                Predictive solutions →
              </Link>
            </div>

            <div className="secondary-service-card">
              <h4>Inclusive Data &amp; Social Impact</h4>
              <h5>Turning insights into equitable action.</h5>
              <p>
                Insights only matter when they drive change. We translate forecasts and risk analyses into inclusive, accessible data solutions that empower communities, policymakers, and businesses. By focusing on equity and social outcomes, we ensure that decisions lead to resilience, sustainability, and lasting impact for all stakeholders.
              </p>
              <div className="secondary-service-image">
                <Image
                  src="/social-impact.jpg"
                  alt="Inclusive data for social impact"
                  width={300}
                  height={200}
                  className="secondary-service-img"
                />
              </div>
              <Link href="/services/social-impact" className="secondary-service-link">
                Social impact tools →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="training-programs">
        <div className="training-container">
          <h2>Build expertise through our training programs</h2>
          <p className="training-subtitle">
            Comprehensive courses designed to develop data analytics capabilities 
            for sustainable food systems.
          </p>
          <div className="programs-grid">
            <div className="program-card featured-program">
              <div className="program-badge">Most Popular</div>
              <div className="program-content">
                <h3>Think Like a Data Analyst</h3>
                <div className="program-level">Beginner • 6 weeks</div>
                <p>
                  Master the fundamentals of data analysis with hands-on projects 
                  using real food systems data. Build the analytical mindset needed 
                  for evidence-based decision making.
                </p>
                <div className="program-features">
                  <span>Interactive data visualization</span>
                  <span>Statistical analysis foundations</span>
                  <span>Problem-solving frameworks</span>
                  <span>Real-world case studies</span>
                </div>
                <Link href="/contact" className="program-btn primary">
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="secondary-programs">
              <div className="program-card">
                <h3>Data in Food Loss &amp; Waste</h3>
                <div className="program-level">Intermediate • 4 weeks</div>
                <p>
                  Learn advanced techniques to measure, analyze, and reduce food 
                  waste across supply chains using data-driven approaches.
                </p>
                <Link href="/contact" className="program-btn secondary">
                  Get in touch
                </Link>
              </div>

              <div className="program-card">
                <h3>Precision Agriculture Analytics</h3>
                <div className="program-level">Advanced • 8 weeks</div>
                <p>
                  Master IoT integration, predictive modeling, and resource 
                  optimization for modern agricultural systems.
                </p>
                <Link href="/contact" className="program-btn secondary">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-enhanced">
        <div className="cta-enhanced-content">
          <h2>Ready to transform your approach to sustainable food systems?</h2>
          <div className="cta-enhanced-buttons">
            <Link href="/contact" className="cta-enhanced-btn primary">
              Get our services
            </Link>
            <Link href="/partner" className="cta-enhanced-btn primary">
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}