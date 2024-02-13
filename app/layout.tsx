import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ACM | PESUECC',
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
        <link rel="icon" href="/acmshortlogo.png" />
      </head>
      <body className=" mx-auto max-w-[90%]">
        {/* Trimming body and placing in the center */}
        <nav className="mx-auto mt-6  flex h-[30%] w-[100%] flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Nav switches between row and column display for phone and mobile*/}
          <a
            href="/"
            className="mx-auto w-[30%] hover:cursor-pointer lg:mx-0 lg:w-[8%]"
          >
            {/* Smol ACM logo as home button */}
            <img
              src="/acmshortlogo.png"
              alt="acmshortlogo"
              className="h-full w-full"
            />
          </a>
          {/* Nav routes spaced out */}
          <div className="options mx-auto mt-4 flex max-w-[30%] flex-row justify-center space-x-6 lg:mx-0 lg:mt-0 lg:items-center lg:justify-normal lg:space-x-10">
            <a
              href="/about"
              className=" text-center text-xl text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-3xl"
            >
              About
            </a>
            <a
              href="/events"
              className=" text-center text-xl text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-3xl"
            >
              Events
            </a>
            <a
              href="/blog"
              className=" text-center text-xl text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-3xl"
            >
              Blog
            </a>
            <a
              href="/team"
              className=" text-center text-xl text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-3xl"
            >
              Team
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
