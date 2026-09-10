import type { Metadata } from 'next';
import '@/app/globals.css';
import ConsentManager from '@/components/ConsentManager';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'FindMyJR-Pass',
  description: 'Compare Japan rail passes using official operator sources.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
        <ConsentManager lang="en" measurementId={GA_MEASUREMENT_ID}>{children}</ConsentManager>
      </body>
    </html>
  );
}
