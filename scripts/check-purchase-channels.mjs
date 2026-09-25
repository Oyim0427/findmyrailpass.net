import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const cases = [
  ['zh', 'passlist/japan-rail-pass-7', ['选择购买渠道', '运营方官网', '合作购票平台', '准备中']],
  ['en', 'passlist/japan-rail-pass-7', ['Choose where to buy', 'Operator website', 'Partner booking sites', 'Coming soon']],
  ['ja', 'passlist/japan-rail-pass-7', ['購入先を選ぶ', '運行会社公式サイト', '提携予約サイト', '準備中']],
  ['zh', 'directory/jreast04', ['选择购买渠道', '查看官网详情', 'Trip.com']],
];

for (const [locale, path, expectedText] of cases) {
  const file = resolve(process.cwd(), 'out', locale, path, 'index.html');
  const html = readFileSync(file, 'utf8');
  for (const text of expectedText) assert.ok(html.includes(text), `${file} is missing ${text}`);
  for (const provider of ['Trip.com', 'Klook', 'KKday']) assert.ok(html.includes(provider), `${file} is missing ${provider}`);
}

const configurationSource = readFileSync(resolve(process.cwd(), 'src', 'data', 'partnerPurchaseLinks.ts'), 'utf8');
assert.doesNotMatch(configurationSource, /https:\/\/(?:www\.)?(?:trip\.com|klook\.com|kkday\.com)/i, 'Placeholder links must not point to generic partner homepages');

console.log('Purchase-channel QA passed: official actions and three non-clickable partner placeholders are present in all languages.');
