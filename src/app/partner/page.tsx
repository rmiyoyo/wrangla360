import Image from 'next/image';
import Link from 'next/link';
import './partner.css';

export const metadata = {
  title: 'Partner With Us | Wrangla 360',
  description: 'Building stronger food systems together through collaborative partnerships across sectors.',
};

export default function Partner() {
  return (
    <>
      <section className="partner-hero">
        <div className="partner-hero-container">
          <div className="partner-hero-text">
            <h1>Building stronger food systems together.</h1>
            <p>
              We believe that transforming food systems requires collaboration across sectors. That&apos;s why we work with a wide range of partners—businesses, NGOs, governments, researchers, and farmer networks—to deliver solutions that are innovative, inclusive, and sustainable.
            </p>
            <p className="partner-hero-highlight">
              Becoming a partner means joining a community committed to advancing food security, resilience, and equitable growth through data and innovation.
            </p>
          </div>
          <div className="partner-hero-visual">
            <Image
              src="/images/partnerships-collaboration.jpg"
              alt="Collaborative partnerships for sustainable food systems"
              width={500}
              height={600}
              priority
              className="partner-hero-image"
            />
          </div>
        </div>
      </section>

      <section className="partner-benefits">
        <div className="partner-benefits-container">
          <h2>Why Partner With Us?</h2>
          <div className="benefits-layout">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#126F43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#126F43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#126F43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Shared Impact</h3>
              <p>Contribute to systemic change that strengthens food systems globally.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#126F43" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="#126F43" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Innovation Access</h3>
              <p>Gain early access to cutting-edge tools, data, and insights.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#126F43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Visibility &amp; Reach</h3>
              <p>Amplify your work by co-branding initiatives and sharing success stories.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partnership-types">
        <div className="partnership-types-container">
          <h2>Types of Partnerships</h2>
          <div className="types-grid">
            <div className="type-card">
              <div className="type-header">
                <h3>Research &amp; Academic Partnerships</h3>
              </div>
              <p>
                Collaborating on joint studies, co-publications, and capacity-building programs that advance global food systems science.
              </p>
            </div>
            <div className="type-card">
              <div className="type-header">
                <h3>Corporate &amp; Supply Chain Partnerships</h3>
              </div>
              <p>
                Working with food companies and value chain actors to reduce waste, improve efficiency, and strengthen sustainability reporting.
              </p>
            </div>
            <div className="type-card">
              <div className="type-header">
                <h3>NGO &amp; Development Partnerships</h3>
              </div>
              <p>
                Supporting NGOs and international organizations with data-driven tools to design, monitor, and scale impactful programs.
              </p>
            </div>
            <div className="type-card">
              <div className="type-header">
                <h3>Farmer Network Partnerships</h3>
              </div>
              <p>
                Partnering with cooperatives, associations, and local groups to deliver technology, training, and market opportunities directly to smallholder farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-we-partner">
        <div className="how-container">
          <h2>How We Partner</h2>
          <div className="how-grid">
            <div className="how-item">
              <div className="how-number">01</div>
              <h3>Co-Design Projects</h3>
              <p>We design initiatives together with partners to address shared goals.</p>
            </div>
            <div className="how-item">
              <div className="how-number">02</div>
              <h3>Data &amp; Tool Sharing</h3>
              <p>We provide partners with access to curated datasets and tailored analytics.</p>
            </div>
            <div className="how-item">
              <div className="how-number">03</div>
              <h3>Capacity Building</h3>
              <p>We equip partner teams with training and skills for long-term sustainability.</p>
            </div>
            <div className="how-item">
              <div className="how-number">04</div>
              <h3>Joint Advocacy</h3>
              <p>We amplify shared messages at conferences, in publications, and through global networks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-cta">
        <div className="partner-cta-container">
          <h2>Become a Partner</h2>
          <p>Together, we can build smarter, more resilient food systems.</p>
          <Link href="/contact" className="partner-cta-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}