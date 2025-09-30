'use client';

import { useState } from 'react';
import { isEmailWhitelisted, checkIntegrity, setVerificationStatus } from '../../lib/auth';

interface EmailVerificationProps {
  onVerificationSuccess: () => void;
}

export default function EmailVerification({ onVerificationSuccess }: EmailVerificationProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIntegrity()) {
      setError('Security validation failed. Please contact administration.');
      return;
    }

    if (attempts >= 3) {
      setError('Too many attempts. Please refresh the page and try again.');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const isWhitelisted = await isEmailWhitelisted(email);
      
      if (isWhitelisted) {
        setVerificationStatus(email);
        onVerificationSuccess();
      } else {
        setAttempts(prev => prev + 1);
        setError(
          'Your email was not found in our shortlisted candidates. If you believe this is an error, please contact mail@mebin.in'
        );
      }
    } catch (err) {
      setError('An error occurred during verification. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="mx-auto w-[90%] max-w-md rounded-lg border border-sky-200/30 bg-black/40 p-8 backdrop-blur-sm lg:w-full">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-semibold text-white lg:text-3xl">
            Email Verification
          </h1>
          <p className="mb-8 text-sky-200 lg:text-lg">
            Please enter your email to access recruitment interviews
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-sky-200/50 bg-black/20 px-4 py-3 text-white placeholder-sky-200/60 focus:border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200/20"
              placeholder="your.email@example.com"
              disabled={isLoading}
              autoComplete="email"
            />
          </div>

          {error && (
            <div className="rounded-md border border-red-400/50 bg-red-500/10 p-4">
              <p className="text-sm text-red-200">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || attempts >= 3}
            className="w-full rounded-md bg-sky-200 px-4 py-3 font-medium text-black transition-colors hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-200/50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? 'Verifying...' : 'Verify Email'}
          </button>

          {attempts > 0 && attempts < 3 && (
            <p className="text-center text-sm text-sky-200/80">
              Attempts remaining: {3 - attempts}
            </p>
          )}
        </form>

        <div className="mt-8 rounded-md border border-sky-200/30 bg-black/20 p-4">
          <h3 className="mb-2 text-sm font-medium text-white">Instructions:</h3>
          <ul className="space-y-1 text-xs text-sky-200/80">
            <li>• Use the same email you applied with</li>
            <li>• Contact mail@mebin.in if you face issues</li>
          </ul>
        </div>
      </div>
    </div>
  );
}