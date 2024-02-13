import Image from 'next/image';

export default function Home() {
  return (
    <>
      <img
        src="/acm_big_logo.png"
        alt="ACM Logo"
        className="mx-auto mt-20 w-[90%] lg:mt-32 lg:w-2/3 "
      />
    </>
  );
}
