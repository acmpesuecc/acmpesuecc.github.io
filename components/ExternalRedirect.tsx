'use client';
import { useEffect } from 'react';

export default function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="mx-auto my-20 w-[90%] text-center text-white">
      <p>
        Redirecting… If not,{' '}
        <a href={to} className="underline">
          click here
        </a>
        .
      </p>
    </main>
  );
}
