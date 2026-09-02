import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://findmyrailpass.net';
  const locales = ['zh', 'en', 'ja'];
  const localizedPages = ['', '/passlist'];
  const chinesePages = ['/blog', '/help', '/data-sources', '/disclosure', '/products', '/privacy', '/terms', '/commercial'];
  const localized = locales.flatMap(lang => localizedPages.map(path => ({ url: `${site}/${lang}${path}`, lastModified: new Date('2026-09-01'), changeFrequency: path === '/passlist' ? 'weekly' as const : 'monthly' as const, priority: path === '' ? 1 : 0.8 })));
  const chinese = chinesePages.map(path => ({ url: `${site}/zh${path}`, lastModified: new Date('2026-09-01'), changeFrequency: 'monthly' as const, priority: path === '/blog' ? 0.8 : 0.5 }));
  return [...localized, ...chinese];
}
