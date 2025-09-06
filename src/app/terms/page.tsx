import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Wrangla 360',
  description: 'Terms of Service for Wrangla 360 - Learn about the terms and conditions for using our services.',
};

export default function TermsOfService() {
  return (
    <>
      <div className="hero" style={{ gridTemplateColumns: '1fr', textAlign: 'left', padding: '3rem 5%' }}>
        <div className="hero-content">
          <h1>Terms of Service</h1>
          <p>Last updated: January 2025</p>
        </div>
      </div>

      <div className="focus-section" style={{ paddingTop: '2rem' }}>
        <div className="terms-content" style={{ maxWidth: '800px', lineHeight: '1.8', color: '#4a5568' }}>
          
          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            By accessing and using the Wrangla 360 website and services, you accept and agree to be bound by 
            the terms and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            2. Description of Services
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Wrangla 360 provides data-driven solutions to support decision making and drive sustainable outcomes 
            in food and water systems. Our services include:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
            <li>Systemic Risk Assessment consultancy</li>
            <li>Predictive Analytics services</li>
            <li>Inclusive Data and Social Impact Analytics</li>
            <li>Educational courses and training programs</li>
            <li>Research and analytical reports</li>
          </ul>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            3. User Responsibilities
          </h2>
          <p style={{ marginBottom: '1rem' }}>You agree to:</p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
            <li>Provide accurate and complete information when required</li>
            <li>Use our services in compliance with applicable laws and regulations</li>
            <li>Not interfere with or disrupt the integrity or performance of our services</li>
            <li>Not attempt to gain unauthorized access to our systems or data</li>
            <li>Respect the intellectual property rights of Wrangla 360 and third parties</li>
          </ul>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            4. Intellectual Property Rights
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            All content on this website, including but not limited to text, graphics, logos, images, and software, 
            is the property of Wrangla 360 or its licensors and is protected by copyright, trademark, and other 
            intellectual property laws. You may not reproduce, distribute, or create derivative works without 
            our express written permission.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            5. Service Availability
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We strive to maintain the availability of our services, but we do not guarantee uninterrupted access. 
            We may temporarily suspend or restrict access for maintenance, updates, or other operational reasons.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            6. Professional Services Agreement
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Specific consultancy and professional services are governed by separate service agreements. 
            These terms supplement but do not replace individual service contracts for professional engagements.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            7. Limitation of Liability
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            To the fullest extent permitted by law, Wrangla 360 shall not be liable for any indirect, incidental, 
            special, consequential, or punitive damages, including but not limited to loss of profits, data, or 
            business opportunities arising from your use of our services.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            8. Disclaimer of Warranties
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Our services are provided "as is" without warranties of any kind, either express or implied. 
            We do not warrant that our services will be error-free, secure, or available at all times.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            9. Indemnification
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            You agree to indemnify and hold Wrangla 360 harmless from any claims, damages, or expenses 
            arising from your use of our services or violation of these terms.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            10. Privacy Policy
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of 
            our services, to understand our practices regarding the collection and use of your information.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            11. Termination
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We reserve the right to terminate or suspend access to our services at any time, with or without cause, 
            and with or without notice. Upon termination, your right to use the services will cease immediately.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            12. Governing Law
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            These terms shall be governed by and construed in accordance with the laws of Kenya, 
            without regard to its conflict of law provisions. Any disputes shall be subject to the 
            exclusive jurisdiction of the courts in Kenya.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            13. Changes to Terms
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
            posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            14. Severability
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            If any provision of these terms is found to be unenforceable, the remaining provisions will 
            remain in full force and effect.
          </p>

          <h2 style={{ color: '#126F43', fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            15. Contact Information
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div style={{ background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>Wrangla 360</p>
            <p style={{ margin: '0 0 0.5rem 0' }}>Email: legal@wrangla360.com</p>
            <p style={{ margin: '0' }}>Address: Wrangla 360 HQ</p>
          </div>

        </div>
      </div>
    </>
  );
}