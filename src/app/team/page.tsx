import Image from 'next/image';
import Link from 'next/link';
import './team.css';

export const metadata = {
  title: 'Team | Wrangla 360',
  description: 'Meet our dedicated team of experts driving data-driven sustainability solutions for food systems.',
};

const LinkedInIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24"
    fill="currentColor"
    className="linkedin-icon"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Team() {
  return (
    <>
      <section className="hero-enhanced">
        <div className="hero-enhanced-content">
          <div>
            <h1>Meet the team behind Wrangla 360</h1>
            <p>
              Our expert team combines data science, risk assessment, climate modeling, 
              business development, and seed systems expertise to deliver impactful sustainability solutions.
            </p>
          </div>
          <div className="hero-enhanced-image">
            <Image
              src="/team-collaboration.jpg"
              alt="Team collaboration in sustainable food systems"
              width={600}
              height={500}
              priority
              className="hero-enhanced-img"
            />
          </div>
        </div>
      </section>
      <section className="team-mission">
        <div className="mission-container">
          <h2>We are committed to transforming food systems through collaborative expertise and innovative analytics.</h2>
        </div>
      </section>
      <section className="team-showcase">
        <div className="team-showcase-container">
          <h2>Our Leadership Team</h2>
          <p className="team-subtitle">
            Our team consists of professionals with experience in data science, risk assessment, climate modelling, business development and seed systems.
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <Image
                  src="/member-one.jpg"
                  alt="Lead Data Scientist"
                  width={300}
                  height={300}
                  className="team-img"
                />
              </div>
              <div className="team-content">
                <h3>Lead Data Scientist</h3>
                <h4>Lead Data Scientist</h4>
                <p>
                  With a PhD in Environmental Science and extensive experience in data analytics, 
                  our Lead Data Scientist drives the development of predictive models for food system resilience.
                </p>
                <Link href="https://www.linkedin.com/in/lead-data-scientist" className="linkedin-link">
                  <LinkedInIcon />
                </Link>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <Image
                  src="/member-two.jpg"
                  alt="Food Systems &amp; Partnerships Lead"
                  width={300}
                  height={300}
                  className="team-img"
                />
              </div>
              <div className="team-content">
                <h3>Food Systems &amp; Partnerships Lead</h3>
                <h4>Food Systems &amp; Partnerships Lead</h4>
                <p>
                  Our Food Systems &amp; Partnerships Lead leverages expertise in climate modeling and stakeholder engagement 
                  to build strategic alliances for sustainable food production.
                </p>
                <Link href="https://www.linkedin.com/in/food-systems-partnerships-lead" className="linkedin-link">
                  <LinkedInIcon />
                </Link>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <Image
                  src="/member-three.jpg"
                  alt="Operations &amp; Strategy Manager"
                  width={300}
                  height={300}
                  className="team-img"
                />
              </div>
              <div className="team-content">
                <h3>Operations &amp; Strategy Manager</h3>
                <h4>Operations &amp; Strategy Manager</h4>
                <p>
                  Our Operations &amp; Strategy Manager oversees business development and operational excellence, 
                  focusing on scalable solutions to advance sustainable food systems.
                </p>
                <Link href="https://www.linkedin.com/in/operations-strategy-manager" className="linkedin-link">
                  <LinkedInIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-enhanced">
        <div className="cta-enhanced-content">
          <h2>Join our mission for sustainable food systems</h2>
          <div className="cta-enhanced-buttons">
            <Link href="/contact" className="cta-enhanced-btn primary">
              Contact us
            </Link>
            <Link href="/careers" className="cta-enhanced-btn primary">
              View careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}