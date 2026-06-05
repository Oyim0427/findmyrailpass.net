'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // 简单的客户端语言检测
    const lang = navigator.language.toLowerCase();
    if (lang.includes('ja')) {
      router.replace('/ja');
    } else if (lang.includes('en')) {
      router.replace('/en');
    } else {
      router.replace('/zh');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-teal-600 font-medium">Redirecting...</p>
      </div>
    </div>
  );
}
