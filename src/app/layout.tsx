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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Favicon Transparent.ico" />
      </head>
      <body className={inter.className}>
        <nav>
          <div className="nav-logo"></div>
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
                <Link href="/linkedin">LinkedIn</Link>
                <Link href="/twitter">X (Formerly Twitter)</Link>
                <Link href="/instagram">Instagram</Link>
              </div>
              <div className="footer-newsletter">
                <h3 className="footer-heading">Stay Updated</h3>
                <p className="footer-newsletter-text">Subscribe to our newsletter for the latest updates.</p>
                <div className="newsletter-input">
                  <input type="email" placeholder="Enter your email" />
                  <button className="newsletter-btn">Subscribe</button>
                </div>
              </div>
            </div>
            <p className="footer-copyright">© 2025 Wrangla 360. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}