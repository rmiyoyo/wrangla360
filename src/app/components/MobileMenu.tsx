'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-menu-content" onClick={e => e.stopPropagation()}>
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/what-we-do" onClick={() => setIsOpen(false)}>What We Do</Link>
            <Link href="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
            <Link href="/team" onClick={() => setIsOpen(false)}>Team</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact us</Link>
          </div>
        </div>
      )}
    </>
  );
}