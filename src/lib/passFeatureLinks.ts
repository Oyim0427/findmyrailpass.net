import type { SupportedLocale } from '@/lib/seo';

type FeatureLinkPass = {
  category: string;
  majorRegions: readonly string[];
};

const labels = {
  zh: {
    city: '查看城市漫游特集',
    hokkaido: '查看北海道周游券特集',
    kansai: '查看关西周游券特集',
    multiRegion: '查看跨地区周游券特集',
    all: '查看更多周游券特集',
  },
  en: {
    city: 'Explore the city-pass collection',
    hokkaido: 'Explore the Hokkaido pass collection',
    kansai: 'Explore the Kansai pass collection',
    multiRegion: 'Explore the multi-region pass collection',
    all: 'Explore more pass collections',
  },
  ja: {
    city: '街歩き向け特集を見る',
    hokkaido: '北海道の周遊券特集を見る',
    kansai: '関西の周遊券特集を見る',
    multiRegion: 'エリアをまたぐ周遊券特集を見る',
    all: 'ほかの周遊券特集を見る',
  },
} as const;

export function getPassFeatureLink(pass: FeatureLinkPass, locale: SupportedLocale): { href: string; label: string } {
  const section = pass.category === 'city'
    ? 'city'
    : pass.category === 'national' || pass.majorRegions.length > 1
      ? 'multi-region'
      : pass.majorRegions.includes('北海道')
        ? 'hokkaido'
        : pass.majorRegions.includes('近畿') || pass.majorRegions.includes('関西')
          ? 'kansai'
          : undefined;
  const labelKey = section === 'multi-region' ? 'multiRegion' : section || 'all';
  return {
    href: `/${locale}/features${section ? `#${section}` : ''}`,
    label: labels[locale][labelKey],
  };
}
