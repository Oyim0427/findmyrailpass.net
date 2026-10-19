import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';

function load(file) {
  const source = fs.readFileSync(file, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const loadedModule = { exports: {} };
  new Function('module', 'exports', 'require', outputText)(loadedModule, loadedModule.exports, id => {
    throw new Error(`Unexpected runtime import ${id} in ${file}`);
  });
  return loadedModule.exports;
}

const { OFFICIAL_PASSES } = load('src/data/officialPasses.ts');
const { DOMESTIC_DIRECTORY_PASSES } = load('src/data/domesticPassDirectory.ts');
const { getPassEligibility, getPassEligibilityLabel } = load('src/lib/passEligibility.ts');
const categories = ['everyone', 'foreign', 'youth', 'senior', 'child'];
const passes = [...OFFICIAL_PASSES, ...DOMESTIC_DIRECTORY_PASSES];

for (const pass of passes) assert.ok(categories.includes(getPassEligibility(pass)), pass.id);
for (const pass of OFFICIAL_PASSES) assert.equal(getPassEligibility(pass), 'foreign', pass.id);
assert.equal(getPassEligibility({ name: '一般の一日乗車券', salesPeriod: '発売中' }), 'everyone');
assert.equal(getPassEligibility({ name: '一般券', priceText: '大人：1,000円 / 小人：500円 / U25：800円', salesPeriod: '発売中' }), 'everyone');
assert.equal(getPassEligibility({ name: 'シニア限定パス', salesPeriod: '発売中' }), 'senior');
assert.equal(getPassEligibility({ name: '学生限定パス', salesPeriod: '発売中' }), 'youth');
assert.equal(getPassEligibility({ name: 'こども限定パス', salesPeriod: '発売中' }), 'child');
assert.equal(getPassEligibilityLabel({ name: '不明', salesPeriod: '' }, 'ja'), '誰でも利用可');

const counts = Object.fromEntries(categories.map(category => [category, passes.filter(pass => getPassEligibility(pass) === category).length]));
console.log(`Pass eligibility check passed: ${passes.length} records ${JSON.stringify(counts)}`);
