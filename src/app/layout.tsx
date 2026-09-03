import type { Metadata } from 'next';
import '@/app/globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'FindMyJR-Pass',
  description: 'Compare Japan rail passes using official operator sources.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body className="antialiased text-gray-900">{GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}{children}</body></html>;
}
