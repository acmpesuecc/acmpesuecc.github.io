'use client';

import { useEffect, useState } from 'react';
import EmailVerification from '../../components/EmailVerification/EmailVerification';
import {
  isCurrentlyVerified,
  clearVerificationStatus,
  checkIntegrity
} from '../../lib/auth';
import useSecurity from '../../hooks/useSecurity';

export default function RecruitmentInterviews2025() {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [securityError, setSecurityError] = useState(false);

  useEffect(() => {
    const initTimeout = setTimeout(() => {
      if (!checkIntegrity()) {
        setSecurityError(true);
        setIsLoading(false);
        return;
      }

      if (isCurrentlyVerified()) {
        setIsVerified(true);
      }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(initTimeout);
  }, []);

  useEffect(() => {
    if (isVerified) {
      setTimeout(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      }, 1000);

      return () => {
        const existingScript = document.querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        );
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isVerified]);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-sky-200 border-t-transparent"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (securityError) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="mx-auto w-[90%] max-w-md rounded-lg border border-red-400/50 bg-red-500/10 p-8 text-center">
          <h1 className="mb-4 text-2xl font-semibold text-red-200">
            Access Denied
          </h1>
          <p className="mb-4 text-red-200">
            Unauthorized access attempt detected. For security reasons, access
            has been restricted.
          </p>
          <p className="text-sm text-red-200/80">
            If you believe this is an error, please contact mail@mebin.in
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded-md bg-red-500/20 px-4 py-2 text-red-200 hover:bg-red-500/30"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  if (!isVerified) {
    return (
      <EmailVerification onVerificationSuccess={handleVerificationSuccess} />
    );
  }

  return (
    <div className="flex-justify-center mx-auto my-12 w-[90%] lg:my-0 lg:w-2/3">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="mx-auto w-full text-center text-2xl font-semibold text-white underline decoration-sky-200 underline-offset-8 lg:text-5xl">
          ACM Recruitment Interviews 2025
        </h1>
        <button
          onClick={() => {
            clearVerificationStatus();
            setIsVerified(false);
          }}
          className="absolute top-4 right-4 rounded-md bg-red-500/20 px-3 py-1 text-sm text-red-200 hover:bg-red-500/30"
        >
          Logout
        </button>
      </div>

      <p className="mx-auto mt-6 w-3/4 text-center text-white lg:mt-12 lg:w-full lg:text-xl">
        Schedule your interview slot for ACM PESUECC recruitment. Select a time
        that works best for you from the available slots below.
      </p>

      <div className="mx-auto mt-8 w-full lg:mt-16">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/acm_interview?hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>

      <div className="mx-auto mt-8 w-3/4 text-center text-white lg:w-full lg:text-lg">
        <p className="mb-4">
          <strong>Instructions:</strong>
        </p>
        <ul className="mx-auto max-w-2xl space-y-2 text-left">
          <li>• Please select a time slot that works best for your schedule</li>
          <li>• Make sure to provide accurate contact information</li>
          <li>• You will receive a confirmation email with meeting details</li>
          <li>• Keep this tab open during booking to maintain your session</li>
          <li>
            • Do not attempt to modify the page or developer tools may block
            access
          </li>
        </ul>
      </div>
    </div>
  );
}
