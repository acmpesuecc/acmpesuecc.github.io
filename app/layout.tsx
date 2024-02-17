import type { Metadata } from 'next';
import './globals.css';
import { Roboto_Mono } from 'next/font/google';
const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

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
      <body className=" mx-auto flex min-h-[100vh] w-full flex-col overflow-x-hidden">
        <nav className="mx-auto mt-4  flex h-[30%] w-[95%] flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Nav switches between row and column display for phone and mobile*/}
          <a
            href="/"
            className="mx-auto w-1/4 hover:cursor-pointer lg:mx-0 lg:w-[6%]"
          >
            {/* Smol ACM logo as home button */}
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
              className=" text-center text-xl text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              About
            </a>
            <a
              href="/posts"
              className=" text-center text-xl  text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              Posts
            </a>
            <a
              href="/aiep"
              className=" text-center text-xl text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              AIEP
            </a>
            <a
              href="/team"
              className=" text-center  text-xl text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              Team
            </a>
          </div>
        </nav>
        <div className="flex-grow">{children}</div> {/* Content */}
        <footer className=" bottom-0 left-0 w-full">
          {/* Footer at bottom of wherever content ends*/}
          <div className="footer-div mx-auto mt-0 flex w-full flex-col justify-center border-t-2 border-t-white bg-[rgb(0,0,0,0.3)] px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
            {/*Footer swithces between row and column for laptop and mobile respectively */}
            <div className="mx-auto flex w-full flex-row items-center justify-center space-x-6 lg:mx-0 lg:w-1/4 lg:justify-normal lg:space-x-12">
              <a href="/" className=" lg:3/5 w-2/5">
                <img src="/acmpesuecc2.png" alt="ACMfooterlogo" />
              </a>
              <a
                href="https://maps.app.goo.gl/xrign5RWHsNNurfb9"
                className=" lg:2/5 w-1/3"
              >
                <img src="https://i.ibb.co/TMjBtvG/image.png" alt="Pesulogo" />
              </a>
            </div>
            <div className="mx-auto mt-6 flex w-3/4 flex-row items-end space-x-8 lg:mt-0 lg:w-1/3 lg:justify-normal lg:space-x-12">
              <a
                href="https://github.com/acmpesuecc"
                className="w-1/2 lg:w-[6%]"
              >
                <img src="/github.png" alt="github" className="h-auto" />
              </a>
              <a
                href="https://www.instagram.com/acmpesuecc"
                className="w-1/2 lg:w-[6%]"
              >
                <img src="/instagram.svg" alt="insta" className="h-auto" />
              </a>
              <a
                href="https://www.linkedin.com/company/acm-pesu-ecc/"
                className="w-1/2 lg:w-[6%]"
              >
                <img src="/linkedin.png" alt="linkedin" className="h-auto" />
              </a>
              <a href="https://twitter.com/AcmPesu" className="w-1/2 lg:w-[6%]">
                <img src="/twitter.png" alt="twitter" className="h-auto" />
              </a>
              <a
                href="mailto:acmpesuecc@pes.edu"
                className="flex w-1/2 items-end lg:w-[6%]"
              >
                <img src="/mail-64.png" alt="email" className="w-full" />
              </a>
            </div>
            <p
              className={`text-md  mt-6 text-center text-white lg:text-lg ${roboto.className} lg:mt-0`}
            >
              ACM PESUECC &#169; 2024
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
