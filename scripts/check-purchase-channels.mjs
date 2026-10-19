import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { readGeneratedDirectory } from './lib/directory-publication.mjs';

const localId = readGeneratedDirectory().find(pass => pass.id === 'jrhokkaido91').id;
const labels = {
  zh: ['选择购买渠道', '运营方官网'],
  en: ['Choose where to buy', 'Operator website'],
  ja: ['購入先を選ぶ', '運行会社公式サイト'],
};
for (const [locale, expected] of Object.entries(labels)) {
  for (const path of ['passlist/japan-rail-pass-7', `directory/${localId}`]) {
    const html = readFileSync(resolve('out', locale, path, 'index.html'), 'utf8');
    for (const text of expected) assert.ok(html.includes(text), `${locale}/${path}: missing ${text}`);
    assert.match(html, /href="https:\/\//, 'An actual outbound link is required');
    assert.doesNotMatch(html, /aria-disabled="true"/, 'Do not display unconfigured partner placeholders');
    assert.doesNotMatch(html, /Affiliate placeholder|Affiliate 预留|Affiliate 予約枠/);
  }
}
console.log('Purchase-channel QA passed: official actions work in all locales; unconfigured partners are hidden.');
