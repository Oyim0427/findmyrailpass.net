import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { resolveAvailability, extractDetailHtml } from './lib/directory-parsing.mjs';
import { retainDirectoryArchives } from './lib/directory-publication.mjs';

function load(file) {
  const source = fs.readFileSync(file, 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
  } });
  const loaded = { exports: {} };
  new Function('module', 'exports', 'require', outputText)(loaded, loaded.exports,
    name => load(path.resolve(name.startsWith('@/') ? `src/${name.slice(2)}.ts` : name)));
  return loaded.exports;
}

const today = '2026-10-19';
const archived = retainDirectoryArchives([
  { id: 'expired', endDate: '2026-09-30', status: 'on-sale' },
  { id: 'missing', status: 'on-sale' },
], [], today);
assert.deepEqual(archived.map(pass => pass.status), ['ended', 'needs-review']);
assert.equal(retainDirectoryArchives(archived, [{ id: 'expired', status: 'on-sale' }], today).length, 2);
assert.deepEqual(resolveAvailability('～2027 / 3 / 31', today), {
  include: true, status: 'on-sale', endDate: '2027-03-31',
});
assert.equal(resolveAvailability('2026/7/18～9/30', today).status, 'ended');
assert.equal(resolveAvailability('2026/12/18～1/25', today).endDate, '2027-01-25');
assert.equal(resolveAvailability('2026/11/7', today).status, 'scheduled');
assert.equal(resolveAvailability('2026/10/18', today).status, 'ended');
assert.equal(resolveAvailability('2026/10/19', today).status, 'on-sale');
assert.equal(resolveAvailability('2026/8/8～', today).endDate, undefined);
assert.equal(resolveAvailability('2026/2/30～', today).status, 'needs-review');
assert.equal(resolveAvailability('発売中 2026/1/1～9/30', today).status, 'ended');
const nested = '<table><tr><th>ねだん</th><td><table><tr><th>券種</th><th>大人</th></tr><tr><td>1日</td><td>3,000円</td></tr><tr><td>2日</td><td>4,500円</td></tr></table></td></tr><tr><th>別項目</th><td>999円</td></tr></table>';
const cell = extractDetailHtml(nested, ['ねだん']);
assert.ok(cell.includes('3,000円') && cell.includes('4,500円'));
assert.ok(!cell.includes('999円'), 'The next field must not leak into the fare');

const { DOMESTIC_DIRECTORY_PASSES: directory } = load('src/data/domesticPassDirectory.ts');
const { OFFICIAL_PASSES: official } = load('src/data/officialPasses.ts');
const { getDirectoryAvailability, hasRecordedFare, getDirectoryPriceText } = load('src/lib/directoryQuality.ts');
const { getIndexableDirectoryPasses, searchCalculatorCatalog } = load('src/lib/passCatalog.ts');
const publicPasses = getIndexableDirectoryPasses(directory);
assert.equal(getDirectoryAvailability({ status: 'on-sale', endDate: today }, today), 'on-sale');
assert.equal(getDirectoryAvailability({ status: 'on-sale', endDate: today }, '2026-10-20'), 'ended');
assert.equal(getDirectoryPriceText('券種'), undefined);
for (const pass of publicPasses) {
  assert.notEqual(getDirectoryAvailability(pass), 'ended', `${pass.id}: expired sale is public`);
  assert.ok(hasRecordedFare(pass.priceText), `${pass.id}: non-price text is public`);
}
for (const pass of directory.filter(pass => /^[～〜~]/.test(pass.salesPeriod.trim()))) {
  assert.equal(pass.startDate, undefined, `${pass.id}: a cutoff is not a start date`);
}
for (const id of ['tama92', 'jrhokkaido116', 'osakametoro94', 'osakametoro95']) {
  assert.ok(!publicPasses.some(pass => pass.id === id), `${id}: archived/unverified pass leaked`);
}
assert.match(publicPasses.find(pass => pass.id === 'koyasan').priceText, /能勢版：4,800円/);
const shikoku = official.find(pass => pass.id === 'all-shikoku-3');
const result = searchCalculatorCatalog([shikoku], {
  origin: '', destination: '四国', query: '', category: 'all', tripDays: 3, adults: 1, children: 1,
})[0];
assert.equal(result.totalPassCost, 18000);
assert.match(shikoku.officialLinks[0].url, /20260806/);
assert.ok(!shikoku.isLimitedPeriod, 'The current year-round product must remain in the default list');
console.log(`Directory quality passed: date boundaries, nested tables, current fares, archived sales, ${publicPasses.length} publishable products.`);
