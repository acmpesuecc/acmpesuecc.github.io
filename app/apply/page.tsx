import ExternalRedirect from '@/components/ExternalRedirect';

const APPLY_URL = 'https://forms.gle/N1YF7HixB8gadnPH8';

export const metadata = {
  title: 'Apply | ACM PESUECC',
  robots: 'noindex',
  alternates: {
    canonical: APPLY_URL
  }
};

export default function Apply() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${APPLY_URL}`} />
      <ExternalRedirect to={APPLY_URL} />
    </>
  );
}
