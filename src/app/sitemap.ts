import type { MetadataRoute } from 'next';
import { DOMESTIC_DIRECTORY_PASSES, DOMESTIC_DIRECTORY_SNAPSHOT_DATE } from '@/data/domesticPassDirectory';
import { OFFICIAL_PASSES } from '@/data/officialPasses';
import { getIndexableDirectoryPasses } from '@/lib/passCatalog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://findmyrailpass.net';
  const locales = ['zh', 'en', 'ja'];
  const indexableDirectoryPasses = getIndexableDirectoryPasses(DOMESTIC_DIRECTORY_PASSES);
  const localizedPages = ['', '/passlist', '/directory', '/blog', '/help', '/data-sources', '/disclosure', '/commercial', '/products', '/privacy', '/terms', '/image-credits'];
  const localized = locales.flatMap(lang => localizedPages.map(path => ({ url: `${site}/${lang}${path}`, lastModified: new Date('2026-09-01'), changeFrequency: path === '/passlist' ? 'weekly' as const : 'monthly' as const, priority: path === '' ? 1 : 0.8 })));
  const directoryDetails = locales.flatMap(lang => indexableDirectoryPasses.map(pass => ({
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
  return [...localized, ...verifiedPassDetails, ...directoryDetails];
}
