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
            <h1>We transform food systems and secure sustainable futures</h1>
            <p>
              Through data-driven insights and analytics solutions, we empower organizations 
              to build resilient, equitable, and sustainable food systems for everyone.
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
              <p>
                We build comprehensive risk models to quantify vulnerabilities across 
                food systems - from climate impacts to market volatility. Our actuarial 
                approach helps organizations understand and prepare for systemic risks 
                before they become critical challenges.
              </p>
              <Link href="/services/risk-assessment" className="service-showcase-btn">
                Explore risk solutions
              </Link>
            </div>
          </div>
          <div className="secondary-services">
            <div className="secondary-service-card">
              <h4>Predictive Analytics</h4>
              <p>
                Machine learning models that optimize resource use and reduce waste 
                throughout production and consumption cycles, driving sustainable practices.
              </p>
              <Link href="/services/predictive-analytics" className="secondary-service-link">
                Predictive solutions →
              </Link>
            </div>
            
            <div className="secondary-service-card">
              <h4>Inclusive Data & Social Impact</h4>
              <p>
                Comprehensive datasets and geospatial analytics that address food equity, 
                mapping food deserts and ensuring vulnerable populations have access.
              </p>
              <Link href="/services/social-impact" className="secondary-service-link">
                Social impact tools →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="focus-communities">
        <div className="focus-communities-container">
          <h2>Our focus communities</h2>
          <p className="focus-subtitle">
            We work with diverse stakeholders across the food system to create lasting impact 
            where it's needed most.
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
                  Empowering small-scale producers with precision agriculture tools, 
                  risk assessment frameworks, and market access solutions that 
                  increase yields while promoting sustainable practices.
                </p>
                <Link href="/communities/farmers" className="community-btn">
                  Smallholder solutions
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
                <h3>Food companies & supply chains</h3>
                <p>
                  Supporting businesses with supply chain analytics, sustainability 
                  metrics, and risk management tools that reduce waste and 
                  improve efficiency across operations.
                </p>
                <Link href="/communities/companies" className="community-btn">
                  Enterprise solutions
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
                <h3>Policy makers & NGOs</h3>
                <p>
                  Providing evidence-based insights and monitoring tools for 
                  food security policies, nutrition programs, and development 
                  initiatives that create systemic change.
                </p>
                <Link href="/communities/policy" className="community-btn">
                  Policy tools
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
                <h3>Researchers & academics</h3>
                <p>
                  Collaborating on cutting-edge research with comprehensive 
                  datasets, analytical frameworks, and training programs that 
                  advance food systems science.
                </p>
                <Link href="/communities/research" className="community-btn">
                  Research partnerships
                </Link>
              </div>
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
              <h3>Think Like a Data Analyst</h3>
              <div className="program-level">Beginner • 6 weeks</div>
              <p>
                Master the fundamentals of data analysis with hands-on projects 
                using real food systems data. Build the analytical mindset needed 
                for evidence-based decision making.
              </p>
              <div className="program-features">
                <span>✓ Interactive data visualization</span>
                <span>✓ Statistical analysis foundations</span>
                <span>✓ Problem-solving frameworks</span>
                <span>✓ Real-world case studies</span>
              </div>
              <Link href="/courses/data-analyst" className="program-btn primary">
                Start learning
              </Link>
            </div>

            <div className="program-card">
              <h3>Data in Food Loss & Waste</h3>
              <div className="program-level">Intermediate • 4 weeks</div>
              <p>
                Learn advanced techniques to measure, analyze, and reduce food 
                waste across supply chains using data-driven approaches.
              </p>
              <Link href="/courses/food-waste" className="program-btn secondary">
                Learn more
              </Link>
            </div>

            <div className="program-card">
              <h3>Precision Agriculture Analytics</h3>
              <div className="program-level">Advanced • 8 weeks</div>
              <p>
                Master IoT integration, predictive modeling, and resource 
                optimization for modern agricultural systems.
              </p>
              <Link href="/courses/precision-agriculture" className="program-btn secondary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="impact-stats">
        <div className="impact-container">
          <h2>What we have achieved</h2>
          <p className="impact-subtitle">
            Since founding our practice in 2020, we've delivered analytics solutions 
            with measurable impact across diverse food system challenges.
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">
                Organizations supported with analytics solutions
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">$2.3M</div>
              <div className="stat-label">
                In estimated food waste reduction through our predictive models
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">15K+</div>
              <div className="stat-label">
                Smallholder farmers reached through our risk assessment tools
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