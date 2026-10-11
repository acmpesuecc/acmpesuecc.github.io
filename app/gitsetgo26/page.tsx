import ExternalRedirect from '@/components/ExternalRedirect';

const RSVP_URL = 'https://forms.gle/2X3uSi55HfMoGiqs6';

export const metadata = {
  title: 'Git-Set-Go! | Git Workshop 2026 | ACM PESUECC',
  robots: 'noindex',
  alternates: {
    canonical: RSVP_URL
  }
};

export default function GitSetGo26() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${RSVP_URL}`} />
      <ExternalRedirect to={RSVP_URL} />
    </>
  );
}
