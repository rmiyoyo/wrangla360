import './contact.css';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Wrangla 360',
  description: 'Get in touch with Wrangla 360 to learn more about our data-driven sustainability solutions for food systems.',
};

export default function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Wrangla 360</h1>
          <p>
            We’re here to help you transform food systems with data-driven solutions. Reach out to discuss your needs or learn more about our services.
          </p>
        </div>
      </section>
      <section className="contact-form-section">
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">
            Fill out the form below, and our team will respond within 1-2 business days.
          </p>
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input type="text" id="organization" placeholder="Your organization (optional)" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message" rows={5}></textarea>
            </div>
            <button className="submit-btn">Send Message</button>
          </div>
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