import type { JRPass } from '@/types/pass';
import type { DomesticDirectoryPass } from '@/data/domesticPassDirectory';

export type PassEligibility = 'everyone' | 'foreign' | 'youth' | 'senior' | 'child' | 'unknown';
export type EligibilityLocale = 'zh' | 'en' | 'ja';

const labels: Record<PassEligibility, Record<EligibilityLocale, string>> = {
  unknown: { zh: '使用资格请向运营方确认', en: 'Confirm eligibility with the operator', ja: '利用資格は事業者に要確認' },
  everyone: { zh: '所有人均可使用', en: 'Available to everyone', ja: '誰でも利用可' },
  foreign: { zh: '仅限访日外国游客', en: 'Foreign visitors only', ja: '訪日外国人限定' },
  youth: { zh: '仅限青年／学生', en: 'Youth / students only', ja: '若者・学生限定' },
  senior: { zh: '仅限长者', en: 'Seniors only', ja: 'シニア限定' },
  child: { zh: '仅限儿童', en: 'Children only', ja: 'こども限定' },
};

function normalize(value: string): string {
  return value.normalize('NFKC').toLowerCase().replace(/\s+/g, ' ');
}

/**
 * Classify a pass into the same single-choice groups shown in the catalogue.
 * Unknown conditions must not be presented as unrestricted eligibility.
 * A child fare alone never makes a product child-only.
 */
export function getPassEligibility(pass: JRPass | DomesticDirectoryPass): PassEligibility {
  const directory = 'salesPeriod' in pass;
  if (directory && pass.eligibility) return pass.eligibility;
  const name = directory
    ? pass.name
    : `${pass.name.jp} ${pass.name.en} ${pass.name.cn}`;
  const explicitAudience = directory ? '' : pass.targetAudience.join(' ');
  const text = normalize(`${name} ${explicitAudience}`);

  if (/(シニア|senior|高齢|长者|長者|大人の休日|(?:50|60|65)歳以上)/.test(text)) return 'senior';
  if (/(若者|学生|youth|student|青年|u\s*(?:22|25)|(?:22|25)歳以下|学割)/.test(text)) return 'youth';
  if (/(こども限定|子ども限定|子供限定|小児限定|小学生限定|キッズ|children only|kids only|仅限儿童|兒童限定)/.test(text)) return 'child';
  if (/(訪日|访日|外国人|foreign|international (?:traveler|traveller|visitor)|tourist|temporary visitor|短期滞在|非日本护照|非日本護照|国际旅客|國際旅客)/.test(text)) return 'foreign';
  if (/(誰でも|どなたでも|すべての方|everyone|所有人)/.test(text)) return 'everyone';
  return 'unknown';
}

export function getPassEligibilityLabel(pass: JRPass | DomesticDirectoryPass, locale: EligibilityLocale): string {
  if (['jr-east-pass-5', 'hokkaido-rail-pass-5'].includes(pass.id)) {
    return { zh: '持非日本护照旅客（请确认官方条件）', en: 'Non-Japanese passport holders (check operator conditions)', ja: '日本以外の旅券所持者（公式条件を要確認）' }[locale];
  }
  return labels[getPassEligibility(pass)][locale];
}
