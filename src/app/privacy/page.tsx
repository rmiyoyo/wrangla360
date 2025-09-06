import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Wrangla 360',
  description: 'Privacy Policy for Wrangla 360 - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="hero" style={{ gridTemplateColumns: '1fr', textAlign: 'left', padding: '3rem 5%' }}>
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <p>Last updated: September 2025</p>
        </div>
      </div>

      <div className="focus-section" style={{ paddingTop: '2rem' }}>
        <div className="privacy-content" style={{ maxWidth: '800px', lineHeight: '1.8', color: '#4a5568' }}>
          
          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            1. Information We Collect
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We collect information you provide directly to us, such as when you contact us through our website, 
            subscribe to our newsletter, or engage with our services. This may include your name, email address, 
            phone number, organization details, and any other information you choose to provide.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            We also automatically collect certain information when you visit our website, including your IP address, 
            browser type, operating system, referring URLs, and information about your use of our website.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            2. How We Use Your Information
          </h2>
          <p style={{ marginBottom: '1rem' }}>We use the information we collect to:</p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you newsletters and updates (with your consent)</li>
            <li>Analyze website usage and improve user experience</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            3. Information Sharing and Disclosure
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
            except as described in this policy. We may share your information with:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Professional advisors, such as lawyers and accountants</li>
            <li>Government authorities when required by law</li>
          </ul>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            4. Data Security
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
            over the internet or electronic storage is completely secure.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            5. Data Retention
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in 
            this policy, unless a longer retention period is required or permitted by law.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            6. Your Rights
          </h2>
          <p style={{ marginBottom: '1rem' }}>Depending on your location, you may have the following rights:</p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
          </ul>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            7. Cookies and Tracking Technologies
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We use cookies and similar tracking technologies to enhance your experience on our website. 
            You can control cookie settings through your browser preferences.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            8. International Data Transfers
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Your information may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place to protect your personal information.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            9. Changes to This Policy
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
            the new policy on our website and updating the "Last updated" date.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            10. Contact Us
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div style={{ background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>Wrangla 360</p>
            <p style={{ margin: '0 0 0.5rem 0' }}>Email: privacy@wrangla360.com</p>
            <p style={{ margin: '0' }}>Address: Wrangla 360</p>
          </div>

        </div>
      </div>
    </>
  );
}