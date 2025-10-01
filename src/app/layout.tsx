import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import MobileMenu from './components/MobileMenu';
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
            <Link href="/services">Services</Link>
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
                    <input 
                      type="text" 
                      name="website" 
                      tabIndex={-1}
                      autoComplete="off"
                      style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                      aria-hidden="true"
                    />
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