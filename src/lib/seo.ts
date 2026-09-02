import type { Metadata } from 'next';

export type SupportedLocale = 'zh' | 'en' | 'ja';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://findmyrailpass.net';

export function asLocale(lang: string): SupportedLocale {
  return lang === 'en' || lang === 'ja' ? lang : 'zh';
}

export function buildLocalizedMetadata({
  lang,
  path,
  titles,
  descriptions,
}: {
  lang: string;
  path: string;
  titles: Record<SupportedLocale, string>;
  descriptions: Record<SupportedLocale, string>;
}): Metadata {
  const locale = asLocale(lang);
  const normalizedPath = path ? `/${path.replace(/^\/+|\/+$/g, '')}` : '';
  const localizedPath = (value: SupportedLocale) => `/${value}${normalizedPath}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: localizedPath(locale),
      languages: {
        'zh-CN': localizedPath('zh'),
        en: localizedPath('en'),
        ja: localizedPath('ja'),
        'x-default': localizedPath('en'),
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: localizedPath(locale),
      siteName: 'FindMyRailPass',
      type: 'website',
    },
    robots: { index: true, follow: true },
    other: { 'content-language': locale === 'zh' ? 'zh-CN' : locale },
  };
}
