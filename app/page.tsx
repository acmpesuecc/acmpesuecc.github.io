import Image from 'next/image';

export default function Home() {
  return (
    <>
      <img
        src="/acm_big_logo.png"
        alt="ACM Logo"
        className="mx-auto mt-32 w-[90%] lg:w-2/3 "
      />
    </>
  );
}
