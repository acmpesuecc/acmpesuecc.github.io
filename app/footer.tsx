'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function Footer() {
  const [width, setWidth] = useState(0);

  // Track screen width
  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Default responsive sizing
  let footerHeight = '80px';
  let iconSize = 24;
  let logoHeight = 50;
  let fontSize = '0.9rem';
  let flexDirection: 'row' | 'column' = 'row';
  let justifyContent: 'space-between' | 'center' = 'space-between';
  let padding = '0 2rem';

  // Adjust sizes per breakpoint
  if (width > 1024) {
    footerHeight = '90px';
    iconSize = 28;
    logoHeight = 56;
    fontSize = '1rem';
  } else if (width > 640) {
    footerHeight = '70px';
    iconSize = 24;
    logoHeight = 48;
    fontSize = '0.9rem';
  } else if (width > 400) {
    footerHeight = '65px';
    iconSize = 22;
    logoHeight = 44;
    fontSize = '0.85rem';
  } else {
    // Very small screens (e.g., <400px) — vertical layout
    flexDirection = 'column';
    justifyContent = 'center';
    footerHeight = 'auto';
    padding = '1rem';
  }

  const socialLinks = [
    { href: 'https://github.com/acmpesuecc', src: '/github.png', alt: 'GitHub' },
    { href: 'https://www.instagram.com/acmpesuecc', src: '/instagram.svg', alt: 'Instagram' },
    { href: 'https://www.linkedin.com/company/acm-pesu-ecc/', src: '/linkedin.png', alt: 'LinkedIn' },
    { href: 'https://twitter.com/AcmPesu', src: '/twitter.png', alt: 'Twitter' },
    { href: 'mailto:acmpesuecc@pes.edu', src: '/mail-64.png', alt: 'Email' },
  ];

  return (
    <footer
      style={{
        height: footerHeight,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderTop: '2px solid white',
        display: 'flex',
        flexDirection,
        alignItems: 'center',
        justifyContent,
        padding,
        color: 'white',
        flexWrap: 'nowrap',
        textAlign: 'center',
      }}
    >
      {/* Logos */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          justifyContent: 'center',
          marginBottom: flexDirection === 'column' ? '0.8rem' : '0',
        }}
      >
        <a href="/" style={{ display: 'inline-block', height: logoHeight }}>
          <Image
            src="/acmpesuecc2.png"
            alt="ACM Logo"
            width={logoHeight * 2}
            height={logoHeight}
            style={{ objectFit: 'contain' }}
          />
        </a>
        <a
          href="https://maps.app.goo.gl/xrign5RWHsNNurfb9"
          style={{ display: 'inline-block', height: logoHeight }}
        >
          <Image
            src="/pes_logo_white.png"
            alt="PES Logo"
            width={logoHeight * 2}
            height={logoHeight}
            style={{ objectFit: 'contain' }}
          />
        </a>
      </div>

      {/* Social icons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.2rem',
          margin: flexDirection === 'column' ? '0.8rem 0' : '0',
          flexWrap: 'nowrap',
        }}
      >
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transition: 'transform 0.2s' }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={iconSize}
              height={iconSize}
              style={{ objectFit: 'contain' }}
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p
        className={roboto.className}
        style={{
          fontSize,
          whiteSpace: 'nowrap',
          marginTop: flexDirection === 'column' ? '0.5rem' : '0',
        }}
      >
        © 2025 ACM PESUECC
      </p>
    </footer>
  );
}
