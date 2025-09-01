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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
            <div className="footer-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/linkedin">LinkedIn</Link>
              <Link href="/twitter">X (Formerly Twitter)</Link>
              <Link href="/instagram">Instagram</Link>
            </div>
            <p className="footer-copyright">© 2025 Wrangla 360. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}