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
              Our lean team of experts combines data analytics, sustainability knowledge, 
              and food systems expertise to deliver impactful solutions.
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
            Experienced professionals dedicated to sustainable outcomes.
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <Image
                  src="/member-one.jpg"
                  alt="Member One"
                  width={300}
                  height={300}
                  className="team-img"
                />
              </div>
              <div className="team-content">
                <h3>Member One</h3>
                <h4>Founder & CEO</h4>
                <p>
                  With a PhD in Environmental Science and over 15 years in sustainable agriculture, 
                  Member One leads our mission to make data-driven decisions accessible for food system resilience.
                </p>
                <Link href="https://www.linkedin.com/in/memberone" className="linkedin-link">
                  <LinkedInIcon />
                </Link>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <Image
                  src="/member-two.jpg"
                  alt="Member Two"
                  width={300}
                  height={300}
                  className="team-img"
                />
              </div>
              <div className="team-content">
                <h3>Member Two</h3>
                <h4>Chief Data Scientist</h4>
                <p>
                  Member Two specializes in machine learning models for predictive analytics, 
                  helping optimize resource use and reduce waste in food production.
                </p>
                <Link href="https://www.linkedin.com/in/membertwo" className="linkedin-link">
                  <LinkedInIcon />
                </Link>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <Image
                  src="/member-three.jpg"
                  alt="Member Three"
                  width={300}
                  height={300}
                  className="team-img"
                />
              </div>
              <div className="team-content">
                <h3>Member Three</h3>
                <h4>Sustainability Director</h4>
                <p>
                  Member Three focuses on social impact analytics, addressing food equity 
                  and ensuring inclusive access for vulnerable communities.
                </p>
                <Link href="https://www.linkedin.com/in/memberthree" className="linkedin-link">
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