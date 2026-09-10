import type { JRPass } from '@/types/pass';
import type { SupportedLocale } from '@/lib/seo';
import { getRegionLabel } from '@/lib/regionLabels';

const transportLabels: Record<string, Record<SupportedLocale, string>> = {
  '新干线': { zh: '新干线', en: 'Shinkansen', ja: '新幹線' },
  '特急列车': { zh: '特急列车', en: 'Limited express trains', ja: '特急列車' },
  '普通列车': { zh: '普通列车', en: 'Local and rapid trains', ja: '普通・快速列車' },
  'JR巴士': { zh: 'JR巴士', en: 'Eligible JR buses', ja: '対象のJRバス' },
  '渡轮': { zh: '渡轮', en: 'Eligible ferry services', ja: '対象のフェリー' },
  '私铁': { zh: '私铁', en: 'Listed partner railways', ja: '指定の提携鉄道' },
};

export function getLocalizedPassFacts(pass: JRPass, locale: SupportedLocale) {
  if (locale === 'zh') return {
    coverageDescription: pass.coverage.description,
    audience: pass.targetAudience,
    transport: pass.trainTypes,
    bestFor: pass.bestFor,
    validity: pass.validityPeriod?.description,
    note: pass.ticket_note,
    priceNote: pass.price.freeText,
  };

  const regions = pass.coverage.regions.map(region => getRegionLabel(region, locale)).join(locale === 'ja' ? '・' : ', ');
  const maxDays = Math.max(...pass.duration);
  return locale === 'ja' ? {
    coverageDescription: `主な利用地域：${regions}。利用できる区間・列車は運行会社の最新路線図でご確認ください。`,
    audience: ['運行会社が定める利用資格を満たす旅行者'],
    transport: pass.trainTypes.map(item => transportLabels[item]?.ja || item),
    bestFor: [`${regions}を中心に移動する旅程`, '有効期間内に鉄道移動が多い旅程'],
    validity: `利用開始日から連続${maxDays}日間（商品ごとの条件は公式サイトで確認）`,
    note: '料金、利用資格、対象列車は変更される場合があります。購入前に運行会社の公式ページでご確認ください。',
    priceNote: '販売経路や購入時期により価格が異なる場合があります。最終価格は公式サイトでご確認ください。',
  } : {
    coverageDescription: `Main coverage: ${regions}. Check the operator’s latest route map for eligible sections and trains.`,
    audience: ['Travelers who meet the eligibility rules published by the operator'],
    transport: pass.trainTypes.map(item => transportLabels[item]?.en || item),
    bestFor: [`Trips focused on ${regions}`, 'Itineraries with frequent rail travel during the validity period'],
    validity: `${maxDays} consecutive days from activation; confirm product-specific conditions on the official site.`,
    note: 'Fares, eligibility and eligible trains can change. Confirm the operator’s official page before purchase.',
    priceNote: 'Prices may differ by sales channel and purchase date. Confirm the final amount on the official site.',
  };
}
