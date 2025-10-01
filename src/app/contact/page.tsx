import './contact.css';
import Link from 'next/link';

export default function Contact({ 
  searchParams 
}: { 
  searchParams: { [key: string]: string | string[] | undefined } 
}) {
  const success = searchParams.success === 'true';
  const error = typeof searchParams.error === 'string' ? searchParams.error : null;

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Wrangla 360</h1>
          <p>
            We&apos;re here to help you transform food systems with data-driven solutions. Reach out to discuss your needs or learn more about our services.
          </p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">
            Fill out the form below, and our team will respond within 1-2 business days.
          </p>

          {success && (
            <div className="success-message" style={{ 
              color: '#155724', 
              padding: '1rem', 
              background: '#d4edda', 
              border: '1px solid #c3e6cb',
              borderRadius: '4px', 
              marginBottom: '1rem' 
            }}>
              Thank you for contacting us! We&apos;ll get back to you within 1-2 business days.
            </div>
          )}

          {error && (
            <div className="error-message" style={{ 
              color: '#721c24', 
              padding: '1rem', 
              background: '#f8d7da', 
              border: '1px solid #f5c6cb',
              borderRadius: '4px', 
              marginBottom: '1rem' 
            }}>
              {error}
            </div>
          )}

          <form id="contact-form" action="/api/contact" method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input type="text" id="organization" name="organization" placeholder="Your organization (optional)" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message" rows={5} required></textarea>
            </div>

            <input 
              type="text" 
              name="website" 
              tabIndex={-1}
              autoComplete="off"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
              aria-hidden="true"
            />

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      <section className="contact-info">
        <div className="contact-info-container">
          <h2>Other Ways to Reach Us</h2>
          <p className="contact-subtitle">
            Connect with us through email, phone, or follow us on social media for updates.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@wrangla360.com">info@wrangla360.com</a>
              </p>
            </div>
            <div className="contact-detail">
              <h3>Phone</h3>
              <p>
                <a href="tel:+254712345678">+254712345678</a>
              </p>
            </div>
            <div className="contact-detail">
              <h3>Social Media</h3>
              <p>
                <Link href="/linkedin">LinkedIn</Link> | <Link href="/twitter">X</Link> | <Link href="/instagram">Instagram</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-contact">
        <div className="cta-contact-content">
          <h2>Ready to Collaborate?</h2>
          <p>Partner with us to drive sustainable outcomes for food systems.</p>
          <Link href="/partner" className="cta-contact-btn">
            Become a Partner
          </Link>
        </div>
      </section>
    </>
  );
}