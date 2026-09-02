'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window { adsbygoogle?: Record<string, unknown>[]; }
}

export default function AdSlot({ slot, label = 'Advertisement' }: { slot?: string; label?: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  useEffect(() => {
    if (!client || !slot) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* Ad blockers may stop the script. */ }
  }, [client, slot]);

  if (!client || !slot) return null;
  return <aside className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-center">
    <Script async strategy="afterInteractive" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`} crossOrigin="anonymous" />
    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
    <ins className="adsbygoogle block" style={{ display: 'block' }} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />
  </aside>;
}
