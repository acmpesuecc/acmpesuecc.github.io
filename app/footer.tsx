'use client';
import Image from 'next/image';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

export default function Footer() {
  const socialLinks = [
    {
      href: 'https://github.com/acmpesuecc',
      src: '/github.png',
      alt: 'GitHub'
    },
    {
      href: 'https://www.instagram.com/acmpesuecc',
      src: '/instagram.svg',
      alt: 'Instagram'
    },
    {
      href: 'https://www.linkedin.com/company/acm-pesu-ecc/',
      src: '/linkedin.png',
      alt: 'LinkedIn'
    },
    {
      href: 'https://twitter.com/AcmPesu',
      src: '/twitter.png',
      alt: 'Twitter'
    },
    { href: 'mailto:acmpesuecc@pes.edu', src: '/mail-64.png', alt: 'Email' }
  ]; // keeping all links in one place to make it organised

  return (
    // used flex to make the width and height adjustable and remove hardcoded width and height
    <footer className="w-full border-t-2 border-white bg-black/30 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-6 md:flex-row md:space-x-8">
        {/* Logos */}
        <div className="flex items-center justify-center gap-8 md:justify-start">
          <a href="/" className="relative h-12 w-28 md:h-14 md:w-32">
            <Image
              src="/acmpesuecc2.png"
              alt="ACMfooterlogo"
              fill
              className="object-contain"
            />
          </a>
          <a
            href="https://maps.app.goo.gl/xrign5RWHsNNurfb9"
            className="relative h-10 w-24 md:h-12 md:w-28"
          >
            <Image
              src="/pes_logo_white.png"
              alt="Pesulogo"
              fill
              className="object-contain"
            />
          </a>
        </div>

        {/* Center Icons */}
        <div className="mt-6 flex flex-wrap justify-center gap-5 md:mt-0 md:justify-end md:gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={28}
                height={28}
                className="object-contain md:h-8 md:w-8"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className={`mt-6 text-center text-sm text-gray-200 md:mt-0 md:text-right md:text-base ${roboto.className}`}
        >
          © 2025 ACM PESUECC
        </p>
      </div>
    </footer>
  );
}
