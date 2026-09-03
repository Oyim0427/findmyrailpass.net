import type { MetadataRoute } from 'next';
import { DOMESTIC_DIRECTORY_PASSES, DOMESTIC_DIRECTORY_SNAPSHOT_DATE } from '@/data/domesticPassDirectory';
import { OFFICIAL_PASSES } from '@/data/officialPasses';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://findmyrailpass.net';
  const locales = ['zh', 'en', 'ja'];
  const localizedPages = ['', '/passlist', '/directory'];
  const chinesePages = ['/blog', '/help', '/data-sources', '/disclosure', '/products', '/privacy', '/terms', '/commercial'];
  const localized = locales.flatMap(lang => localizedPages.map(path => ({ url: `${site}/${lang}${path}`, lastModified: new Date('2026-09-01'), changeFrequency: path === '/passlist' ? 'weekly' as const : 'monthly' as const, priority: path === '' ? 1 : 0.8 })));
  const directoryDetails = locales.flatMap(lang => DOMESTIC_DIRECTORY_PASSES.map(pass => ({
    url: `${site}/${lang}/directory/${pass.id}`,
    lastModified: new Date(DOMESTIC_DIRECTORY_SNAPSHOT_DATE),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  })));
  const verifiedPassDetails = locales.flatMap(lang => OFFICIAL_PASSES.map(pass => ({
    url: `${site}/${lang}/passlist/${pass.id}`,
    lastModified: new Date(pass.lastVerifiedAt || '2026-09-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  })));
  const chinese = chinesePages.map(path => ({ url: `${site}/zh${path}`, lastModified: new Date('2026-09-01'), changeFrequency: 'monthly' as const, priority: path === '/blog' ? 0.8 : 0.5 }));
  return [...localized, ...verifiedPassDetails, ...directoryDetails, ...chinese];
}
