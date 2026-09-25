import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'FindMyJR-Pass | Language redirect',
  description: 'Automatically open FindMyJR-Pass in Chinese, Japanese or English.',
  robots: { index: false, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">{children}</body>
    </html>
  );
}
