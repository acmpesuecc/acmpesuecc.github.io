'use client';

import { useEffect } from 'react';

export default function RecruitmentInterviews2025() {
  useEffect(() => {
    // Load Calendly script dynamically on the client side
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="flex-justify-center mx-auto my-12 w-[90%] lg:my-0 lg:w-2/3">
      <h1 className="mx-auto w-full text-center text-2xl font-semibold text-white underline decoration-sky-200 underline-offset-8 lg:text-5xl">
        ACM Recruitment Interviews 2025
      </h1>
      
      <p className="mx-auto mt-6 w-3/4 text-white lg:mt-12 lg:w-full lg:text-xl text-center">
        Schedule your interview slot for ACM PESUECC recruitment. Select a time that works best for you from the available slots below.
      </p>

      <div className="mx-auto mt-8 w-full lg:mt-16">
        {/* Calendly inline widget begin */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/acm_interview?hide_gdpr_banner=1" 
          style={{minWidth: '320px', height: '700px'}}
        ></div>
        {/* Calendly inline widget end */}
      </div>

      <div className="mx-auto mt-8 w-3/4 text-white lg:w-full lg:text-lg text-center">
        <p className="mb-4">
          <strong>Instructions:</strong>
        </p>
        <ul className="text-left space-y-2 mx-auto max-w-2xl">
          <li>• Please select a time slot that works best for your schedule</li>
          <li>• Make sure to provide accurate contact information</li>
          <li>• You will receive a confirmation email with meeting details</li>
        </ul>
      </div>
    </div>
  );
}