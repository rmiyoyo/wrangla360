import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import MobileMenu from './components/MobileMenu';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wrangla 360 | Data-Driven Sustainability Solutions',
  description: 'We provide data-driven solutions to support decision making and drive sustainable outcomes.',
  icons: {
    icon: '/Favicon Transparent.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer
        />
        <Script
          id="recaptcha-v3-handlers"
          strategy="afterInteractive"
        >
          {`
            (function() {
              const siteKey = "${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}";
              console.log('=== reCAPTCHA DEBUG ===');
              console.log('Site Key Loaded:', siteKey ? siteKey.substring(0, 10) + '...' : 'MISSING');
              console.log('reCAPTCHA Script Src:', document.querySelector('script[src*="recaptcha/enterprise.js"]')?.src || 'NOT FOUND');

              function handleSubmit(formId, tokenId, action) {
                const form = document.getElementById(formId);
                if (!form) {
                  console.log('Form not found:', formId);
                  return;
                }

                form.addEventListener('submit', async function(e) {
                  e.preventDefault();
                  console.log('Form Submit Intercepted:', formId, action);
                  const tokenInput = document.getElementById(tokenId);
                  console.log('Token Input Before:', tokenInput?.value || 'EMPTY');

                  if (grecaptcha && grecaptcha.enterprise) {
                    try {
                      console.log('reCAPTCHA API Available');
                      await grecaptcha.enterprise.ready();
                      console.log('reCAPTCHA Ready');
                      const token = await grecaptcha.enterprise.execute(siteKey, { action: action });
                      console.log('Token Generated:', token ? token.substring(0, 20) + '...' : 'FAILED');
                      if (tokenInput) {
                        tokenInput.value = token;
                        console.log('Token Set in Input');
                        form.submit();  // Native submit to preserve redirects
                      } else {
                        console.log('Token Input Not Found:', tokenId);
                      }
                    } catch (error) {
                      console.error('reCAPTCHA Execute Error:', error);
                      alert('Verification failed. Please try again.');
                    }
                  } else {
                    console.error('reCAPTCHA Not Loaded');
                    alert('reCAPTCHA not loaded. Please refresh and try again.');
                  }
                });
              }

              // Wait for DOM ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initHandlers);
              } else {
                initHandlers();
              }

              function initHandlers() {
                console.log('Initializing Handlers');
                handleSubmit('contact-form', 'contact-recaptcha-token', 'contact');
                handleSubmit('subscribe-form', 'subscribe-recaptcha-token', 'subscribe');
                console.log('Handlers Attached');
              }
            })();
          `}
        </Script>
        <nav>
          <div className="nav-logo-container">
            <Link href="/">
              <picture>
                <source media="(max-width: 768px)" srcSet="/Logos.png" />
                <img 
                  src="/Logos.png" 
                  alt="Wrangla 360 Logo" 
                  className="nav-logo-img"
                />
              </picture>
            </Link>
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/what-we-do">What We Do</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact">Contact us</Link>
          </div>
          <MobileMenu />
        </nav>
        <main>{children}</main>
        <footer>
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="nav-logo"></div>
                <p className="footer-description">Wrangla 360 provides data-driven solutions for sustainable outcomes.</p>
              </div>
              <div className="footer-links">
                <h3 className="footer-heading">Quick Links</h3>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
              <div className="footer-social">
                <h3 className="footer-heading">Follow Us</h3>
                <Link href="https://www.linkedin.com/company/wrangla360-consulting/">LinkedIn</Link>
                <Link href="/twitter">X (Formerly Twitter)</Link>
                <Link href="/instagram">Instagram</Link>
              </div>
              <div className="footer-newsletter">
                <h3 className="footer-heading">Stay Updated</h3>
                <p className="footer-newsletter-text">Subscribe to our newsletter for the latest updates.</p>
                <form id="subscribe-form" action="/api/subscribe" method="POST" className="newsletter-form">
                  <div className="newsletter-input">
                    <input type="email" name="email" placeholder="Enter your email" required />
                    <input type="hidden" name="g-recaptcha-response" id="subscribe-recaptcha-token" />
                    <button type="submit" className="newsletter-btn">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
            <p className="footer-copyright">© {currentYear} Wrangla 360. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}