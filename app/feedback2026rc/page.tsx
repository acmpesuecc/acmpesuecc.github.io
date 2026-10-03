import ExternalRedirect from '@/components/ExternalRedirect';

const FEEDBACK_URL = 'https://forms.gle/CyCvD8gi4LJyULKk7';

export const metadata = {
  title: 'Feedback 2026 Recruitment Challenge | ACM PESUECC',
  robots: 'noindex',
  alternates: {
    canonical: FEEDBACK_URL
  }
};

export default function Feedback2026RC() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${FEEDBACK_URL}`} />
      <ExternalRedirect to={FEEDBACK_URL} />
    </>
  );
}
