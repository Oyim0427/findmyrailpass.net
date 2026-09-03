export const DIRECTORY_PASS_CATEGORY_RULE_VERSION = '2026-09-03-v1';

export const DIRECTORY_PASS_CATEGORIES = [
  'national',
  'regional',
  'city',
  'bus',
  'private',
  'special',
];

const SPECIAL_PASS_PATTERN = /セット|パック|入場券|観覧券|拝観|観光施設|クーポン|グルメ|ランチ|スイーツ|特典(?:付き)?|コラボ|謎解き|ナゾとき|記念|アニメ|キャラクター|映画|ゴルフ|スキー|スノー|水族館|動物園|遊園地|美術館|博物館|エンジョイパス|Go.?Go.?チケット|御朱印|お買い物|プレゼント|グッズ付き|ポケモン|コロプラ|温泉.*(?:日帰り|湯|クーポン|入浴)|湯ったり|展\s/u;
const BUS_PATTERN = /バス|BUS/i;
const CITY_OPERATOR_PATTERN = /交通局|交通事業振興|市企業局交通部|地下鉄|メトロ|モノレール|新交通|高速鉄道|高速交通|ゆりかもめ|シーサイドライン|電気軌道|ライトレール|山万/;
const CITY_PASS_PATTERN = /地下鉄|市電|都電|路面電車|市内電車|都区内/;
const REGIONAL_PASS_PATTERN = /周遊|ワイド|エリア|広域|全県|県内|全九州|北部九州|四国|北海道|東日本|西日本|北陸|関西|せとうち|山陰|山陽|信州|九州満喫|九州版|紀伊半島|三県|２県|2県/;

export function explainDirectoryPassCategory(pass) {
  const name = pass.name || '';
  const company = pass.company || '';

  if (pass.region === '全国') {
    return { category: 'national', rule: 'nationwide-region' };
  }
  if (SPECIAL_PASS_PATTERN.test(name)) {
    return { category: 'special', rule: 'attraction-event-or-benefit-bundle' };
  }

  // Japanese rail vehicles called “rail buses” are not bus passes.
  const busSearchText = `${name} ${company}`.replaceAll('レールバス', '');
  if (BUS_PATTERN.test(busSearchText)) {
    return { category: 'bus', rule: 'bus-included' };
  }
  if (CITY_OPERATOR_PATTERN.test(company) || CITY_PASS_PATTERN.test(name)) {
    return { category: 'city', rule: 'urban-transit-operator-or-mode' };
  }
  if (/ＪＲ|\bJR\b/i.test(company) || company.includes(' / ') || REGIONAL_PASS_PATTERN.test(name)) {
    return { category: 'regional', rule: 'jr-multi-operator-or-wide-area' };
  }
  return { category: 'private', rule: 'single-private-or-local-railway' };
}

export function classifyDirectoryPass(pass) {
  return explainDirectoryPassCategory(pass).category;
}
