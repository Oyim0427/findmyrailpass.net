import { Suspense } from 'react';
import PassListClient from './PassListClient';
import { getAllPasses } from '@/lib/passData';

export default function AllPassesPage() {
  const passes = getAllPasses();

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900">Loading...</div>}>
      <PassListClient passes={passes} />
    </Suspense>
  );
}
