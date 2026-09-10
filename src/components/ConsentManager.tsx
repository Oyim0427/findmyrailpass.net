'use client';

import Link from 'next/link';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import GoogleAnalytics from '@/components/GoogleAnalytics';

type ConsentState = {
  analyticsAllowed: boolean;
  marketingAllowed: boolean;
  ready: boolean;
};

type SavedConsent = {
  version: 1;
  optional: boolean;
  updatedAt: string;
};

declare global {
  interface Window {
    __findMyRailPassConsent?: ConsentState;
  }
}

const STORAGE_KEY = 'findmyrailpass-consent-v1';
const ConsentContext = createContext<ConsentState>({ analyticsAllowed: false, marketingAllowed: false, ready: false });

const copy = {
  zh: {
    title: 'Cookie 与隐私设置',
    body: '必要功能不使用广告追踪。只有在您同意后，本站才会加载访问分析；广告还必须在已配置合规同意平台时才会加载。',
    necessary: '仅使用必要功能',
    optional: '同意分析与广告',
    privacy: '查看隐私政策',
    manage: 'Cookie 设置',
  },
  en: {
    title: 'Cookie and privacy settings',
    body: 'Essential site features do not use advertising tracking. Analytics loads only after consent; ads also require a configured compliant consent platform.',
    necessary: 'Necessary only',
    optional: 'Allow analytics and ads',
    privacy: 'Read the privacy policy',
    manage: 'Cookie settings',
  },
  ja: {
    title: 'Cookie・プライバシー設定',
    body: 'サイトの必須機能に広告トラッキングは使用しません。同意後にのみアクセス解析を読み込み、広告は適切な同意管理基盤の設定時に限り読み込みます。',
    necessary: '必須機能のみ',
    optional: '解析・広告を許可',
    privacy: 'ポリシーを確認',
    manage: 'Cookie設定',
  },
};

export function useConsent() {
  return useContext(ConsentContext);
}

export default function ConsentManager({
  children,
  lang = 'en',
  measurementId,
}: {
  children: React.ReactNode;
  lang?: string;
  measurementId?: string;
}) {
  const locale = lang === 'zh' || lang === 'ja' ? lang : 'en';
  const t = copy[locale];
  const [saved, setSaved] = useState<SavedConsent | null>(null);
  const [ready, setReady] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as SavedConsent;
        if (parsed.version === 1 && typeof parsed.optional === 'boolean') setSaved(parsed);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setReady(true);
    }
  }, []);

  const state = useMemo<ConsentState>(() => ({
    analyticsAllowed: ready && saved?.optional === true,
    marketingAllowed: ready && saved?.optional === true,
    ready,
  }), [ready, saved]);

  useEffect(() => {
    window.__findMyRailPassConsent = state;
  }, [state]);

  const save = (optional: boolean) => {
    const previousOptional = saved?.optional === true;
    const next: SavedConsent = { version: 1, optional, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setSaved(next);
    setPanelOpen(false);
    if (!optional && previousOptional) window.location.reload();
  };

  const showPanel = ready && (!saved || panelOpen);

  return (
    <ConsentContext.Provider value={state}>
      {state.analyticsAllowed && measurementId ? <GoogleAnalytics measurementId={measurementId} /> : null}
      {children}
      {showPanel ? (
        <section className="fixed inset-x-4 bottom-4 z-[100000] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl" role="dialog" aria-live="polite" aria-label={t.title}>
          <h2 className="text-base font-bold text-slate-950">{t.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{t.body} <Link href={`/${locale}/privacy`} className="font-bold text-primary-dark underline">{t.privacy}</Link></p>
          <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button type="button" onClick={() => save(false)} className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">{t.necessary}</button>
            <button type="button" onClick={() => save(true)} className="rounded-xl bg-primary-dark px-4 py-3 text-sm font-bold text-white hover:bg-primary">{t.optional}</button>
          </div>
        </section>
      ) : (
        <button type="button" onClick={() => setPanelOpen(true)} className="fixed bottom-4 left-4 z-[99999] rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-lg hover:border-primary">
          {t.manage}
        </button>
      )}
    </ConsentContext.Provider>
  );
}
