import type { DomesticPassCategory } from '@/data/domesticPassDirectory';

export const DIRECTORY_PASS_CATEGORY_ORDER: DomesticPassCategory[] = [
  'national',
  'regional',
  'city',
  'bus',
  'private',
  'special',
];

const labels: Record<'zh' | 'en' | 'ja', Record<DomesticPassCategory, string>> = {
  zh: {
    national: '全国通票',
    regional: '地区通票',
    city: '城市交通券',
    bus: '巴士通票',
    private: '私铁',
    special: '特别组合',
  },
  en: {
    national: 'Nationwide',
    regional: 'Regional',
    city: 'City Transit',
    bus: 'Bus Passes',
    private: 'Private Rail',
    special: 'Special Combos',
  },
  ja: {
    national: '全国パス',
    regional: '地域パス',
    city: '都市交通券',
    bus: 'バス乗車券',
    private: '私鉄',
    special: '特別セット',
  },
};

export function getDirectoryPassCategoryLabel(category: DomesticPassCategory, lang: string) {
  const locale = lang === 'en' || lang === 'ja' ? lang : 'zh';
  return labels[locale][category];
}
