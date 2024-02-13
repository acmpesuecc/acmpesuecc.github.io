import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ACM ~ PESUECC',
  // Need a shorter and better description
  description: `The ACM Student Chapter here at PES University Electronic City
            Campus brings you a world of opportunities, events and contains a
            wide range of activities to keep ACM moving including organizing
            conferences, improving technical skills, networking, and we strive
            to provide a professional experience to our members.`,
  //
  authors: { name: 'ACM PESUECC' },
  keywords: ['ACM', 'PESUECC', 'Website', 'Blog', 'Next.js']
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/acm_logo.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
