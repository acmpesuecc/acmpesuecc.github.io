import type { Metadata } from 'next';
import './globals.css';
import { Roboto_Mono } from 'next/font/google';
import Footer from './footer'; //footer component used

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

export const metadata: Metadata = {
  title: 'ACM | PESUECC',
  description: `The ACM Student Chapter here at PES University Electronic City
            Campus brings you a world of opportunities, events and contains a
            wide range of activities to keep ACM moving including organizing
            conferences, improving technical skills, networking, and we strive
            to provide a professional experience to our members.`,
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
        <meta name="darkreader-lock" />
        <link rel="icon" href="/acmshortlogo.png" />
      </head>
      <body className="mx-auto flex min-h-[100vh] w-full flex-col overflow-x-hidden">
        <nav className="mx-auto mt-4 flex h-[30%] w-[95%] flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Nav switches between row and column display for phone and mobile*/}
          <a
            href="/"
            className="mx-auto w-1/4 hover:cursor-pointer lg:mx-0 lg:w-[6%]"
          >
            <img
              src="/acmshortlogo.png"
              alt="acmshortlogo"
              className="h-full w-full"
            />
          </a>

          {/* Nav routes spaced out */}
          <div className="options mx-auto mt-4 flex max-w-[30%] flex-row justify-center space-x-6 lg:mx-0 lg:mt-0 lg:justify-normal lg:space-x-8">
            <a
              href="/about"
              className="text-center text-xl text-white hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              About
            </a>
            <a
              href="/posts"
              className="text-center text-xl text-white hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              Posts
            </a>
            <a
              href="/aiep"
              className="text-center text-xl text-white hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              AIEP
            </a>
          </div>
        </nav>

        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
