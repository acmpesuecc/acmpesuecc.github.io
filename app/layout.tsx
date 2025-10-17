import type { Metadata } from 'next';
import './globals.css';
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

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
      <body className=" mx-auto flex min-h-[100vh] w-full flex-col overflow-x-hidden">
        <nav className="mx-auto mt-4  flex h-[30%] w-[95%] flex-col lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="mx-auto w-1/4 hover:cursor-pointer lg:mx-0 lg:w-[6%]"
          >
            <Image
              src="/acmshortlogo.png"
              alt="acmshortlogo"
              width={100}
              height={100}
              className="h-full w-full"
            />
          </Link>
          <div className="options mx-auto mt-4 flex max-w-[30%] flex-row justify-center space-x-6 lg:mx-0 lg:mt-0 lg:justify-normal lg:space-x-8">
            <Link
              href="/about"
              className=" text-center text-xl text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              About
            </Link>
            <Link
              href="/posts"
              className=" text-center text-xl  text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              Posts
            </Link>
            <Link
              href="/members"
              className=" text-center text-xl text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              Members
            </Link>
            <Link
              href="/aiep"
              className=" text-center text-xl text-white decoration-sky-200 hover:cursor-pointer hover:underline hover:underline-offset-8 lg:text-2xl"
            >
              AIEP
            </Link>
          </div>
        </nav>
        <div className="flex-grow">{children}</div> {/* Content */}
        <footer className=" bottom-0 left-0 w-full">
          <div className="footer-div mx-auto mt-0 flex w-full flex-col justify-center border-t-2 border-t-white bg-[rgb(0,0,0,0.3)] px-6 py-4 lg:flex-row lg:items-center lg:justify-between ">
            <div className="mx-auto flex w-full flex-row items-center justify-center space-x-5 lg:mx-0 lg:w-1/4 lg:justify-normal lg:space-x-12">
              <Link href="/" className=" lg:3/5 w-2/5">
                <Image
                  src="/acmpesuecc2.png"
                  alt="ACMfooterlogo"
                  width={200}
                  height={50}
                />
              </Link>
              <a
                href="https://maps.app.goo.gl/xrign5RWHsNNurfb9"
                className=" w-1/3"
                target="_blank"
                rel="noopener noreferrer" // Added for external link
              >
                <Image
                  src="/pes_logo_white.png"
                  alt="Pesulogo"
                  width={150}
                  height={50}
                />
              </a>
            </div>
            <div className="mx-auto mt-5 flex w-3/4 flex-row items-end space-x-8 lg:ml-0 lg:mr-3 lg:mt-0 lg:w-1/3 lg:justify-start lg:space-x-12">
              <a
                href="https://github.com/acmpesuecc"
                className="w-1/2 lg:w-[6%]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.png"
                  alt="github"
                  width={48}
                  height={48}
                  className="h-auto"
                />
              </a>
              <a
                href="https://www.instagram.com/acmpesuecc"
                className="w-1/2 lg:w-[6%]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram.svg"
                  alt="insta"
                  width={48}
                  height={48}
                  className="h-auto"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/acm-pesu-ecc/"
                className="w-1/2 lg:w-[6%]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.png"
                  alt="linkedin"
                  width={48}
                  height={48}
                  className="h-auto"
                />
              </a>
              <a
                href="https://twitter.com/AcmPesu"
                className="w-1/2 lg:w-[6%]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/twitter.png"
                  alt="twitter"
                  width={48}
                  height={48}
                  className="h-auto"
                />
              </a>
              <a
                href="mailto:acmpesuecc@pes.edu"
                className="flex w-1/2 items-end lg:w-[6%]"
              >
                <Image
                  src="/mail-64.png"
                  alt="email"
                  width={48}
                  height={48}
                  className="w-full"
                />
              </a>
            </div>
            <p
              className={`text-md mt-6 text-center  text-white lg:flex lg:items-end lg:text-lg ${roboto.className} lg:mt-0`}
            >
              ACM PESUECC &#169; 2025
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
