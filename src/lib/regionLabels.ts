import { asLocale } from '@/lib/seo';

const labels: Record<string, { zh: string; en: string; ja: string }> = {
  '全国': { zh: '全国', en: 'Nationwide', ja: '全国' },
  '北海道': { zh: '北海道', en: 'Hokkaido', ja: '北海道' },
  '東北': { zh: '东北', en: 'Tohoku', ja: '東北' },
  '関東': { zh: '关东', en: 'Kanto', ja: '関東' },
  '東海': { zh: '东海', en: 'Tokai', ja: '東海' },
  '北信越': { zh: '北信越', en: 'Hokushinetsu', ja: '北信越' },
  '近畿': { zh: '关西', en: 'Kansai', ja: '近畿・関西' },
  '関西': { zh: '关西', en: 'Kansai', ja: '関西' },
  '中国': { zh: '中国地区', en: 'Chugoku', ja: '中国' },
  '四国': { zh: '四国', en: 'Shikoku', ja: '四国' },
  '九州': { zh: '九州', en: 'Kyushu', ja: '九州' },
};

export function getRegionLabel(region: string, lang: string) {
  return labels[region]?.[asLocale(lang)] || region;
}
