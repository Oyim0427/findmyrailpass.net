import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// These modules have no runtime imports. Transpile the actual production logic,
// rather than duplicating matching rules in the test.
function loadTypeScript(relativePath) {
  const source = fs.readFileSync(path.join(root, relativePath), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const loadedModule = { exports: {} };
  new Function('module', 'exports', outputText)(loadedModule, loadedModule.exports);
  return loadedModule.exports;
}

const { OFFICIAL_PASSES: official } = loadTypeScript('src/data/officialPasses.ts');
const { DOMESTIC_DIRECTORY_PASSES: directory } = loadTypeScript('src/data/domesticPassDirectory.ts');
const { MAJOR_REGIONS } = loadTypeScript('src/types/pass.ts');
const { createPassCatalog, getCatalogKey, getCatalogDetailHref, getIndexableDirectoryPasses, isDirectoryPass, searchCalculatorCatalog, searchCatalogByKeyword } = loadTypeScript('src/lib/passCatalog.ts');
const publicDirectory = getIndexableDirectoryPasses(directory);
const catalog = createPassCatalog(official, directory);
const baseline = JSON.stringify(catalog);
const defaultQuery = { origin: '', destination: 'all', query: '', category: 'all', tripDays: 7, adults: 1, children: 0 };
const search = (overrides = {}, records = catalog) => searchCalculatorCatalog(records, { ...defaultQuery, ...overrides });

assert.equal(catalog.length, official.length + publicDirectory.length);
assert.equal(publicDirectory.length, directory.length - 1, 'The duplicate Kumamoto paper/mobile records must merge into one product');
const kumamoto = publicDirectory.find(pass => pass.id === 'kumamotoshi01');
assert.match(kumamoto?.priceText || '', /Paper.*700円.*Mobile.*500円/, 'Merged Kumamoto prices must preserve paper and mobile variants');
assert.equal(search().length, catalog.length, 'Unfiltered search must include every site record');
assert.ok(search().length > 4, 'Search must retain hidden matches beyond the four initially displayed results');
assert.equal(new Set(search().map(result => result.key)).size, catalog.length);
assert.deepEqual(createPassCatalog([...official, ...official], [...directory, ...directory]), catalog);
const idCollision = { ...directory[0], id: official[0].id };
assert.equal(createPassCatalog([official[0]], [idCollision]).length, 2, 'Source-specific IDs must not collide');

for (const pass of catalog) {
  assert.ok(Array.isArray(pass.majorRegions), `Missing major-region array: ${pass.id}`);
  assert.ok(pass.majorRegions.every(region => MAJOR_REGIONS.includes(region)), `Unknown major region: ${pass.id}`);
  assert.equal(new Set(pass.majorRegions).size, pass.majorRegions.length, `Duplicate major region: ${pass.id}`);
  const names = isDirectoryPass(pass) ? [pass.name] : Object.values(pass.name);
  for (const name of names) {
    assert.ok(search({ query: name }).some(result => result.key === getCatalogKey(pass)), `Unsearchable name: ${name}`);
  }
  if (pass.company) assert.ok(search({ query: pass.company }).some(result => result.key === getCatalogKey(pass)), `Unsearchable operator: ${pass.company}`);
  for (const lang of ['zh', 'ja', 'en']) {
    const href = getCatalogDetailHref(pass, lang);
    assert.equal(href, `/${lang}/${isDirectoryPass(pass) ? 'directory' : 'passlist'}/${pass.id}`);
    if (process.argv.includes('--export')) {
      assert.ok([path.join(root, 'out', `${href}.html`), path.join(root, 'out', href, 'index.html')].some(file => fs.existsSync(file)), `Missing exported detail: ${href}`);
    }
  }
}

for (const category of new Set(catalog.map(pass => pass.category))) {
  const matches = search({ category });
  assert.equal(matches.length, catalog.filter(pass => pass.category === category).length);
  assert.ok(matches.every(result => result.pass.category === category));
}
for (const region of new Set(publicDirectory.flatMap(pass => pass.majorRegions))) {
  const matches = search({ destination: region, origin: '関東' });
  for (const pass of publicDirectory.filter(pass => pass.majorRegions.includes(region))) {
    assert.ok(matches.some(result => result.key === getCatalogKey(pass)), `Region filter lost ${pass.name}`);
  }
}

assert.equal(search({ query: 'this-pass-does-not-exist-123456' }).length, 0);
assert.deepEqual(search({ query: 'ＪＲ' }).map(r => r.key), search({ query: 'jr' }).map(r => r.key), 'Normalize full-width characters and case');
assert.ok(search({ query: 'HOKKAIDO' }).some(r => isDirectoryPass(r.pass) && r.pass.region === '北海道'));
assert.ok(search({ query: '关西' }).some(r => isDirectoryPass(r.pass) && r.pass.region === '近畿'));
assert.ok(search({ destination: '北海道', query: '北海道', tripDays: 1 }).some(r => isDirectoryPass(r.pass)));
assert.deepEqual(
  searchCatalogByKeyword(catalog, '北海道').map(getCatalogKey).sort(),
  search({ query: '北海道' }).map(result => result.key).sort(),
  'Instant suggestions and submitted keyword search must use the same matching rules',
);
assert.ok(searchCatalogByKeyword(catalog, directory[0].name).some(pass => getCatalogKey(pass) === getCatalogKey(directory[0])));
assert.equal(searchCatalogByKeyword(catalog, '   ').length, 0, 'Blank input must not open an all-pass suggestion list');

const broad = directory.find(pass => pass.region === '全国');
assert.ok(broad);
const broadMatch = search({ destination: '北海道' }, [broad])[0];
assert.deepEqual(broad.majorRegions, ['北海道', '東北', '関東', '北信越']);
assert.ok(broadMatch.reasons.includes('directoryRegion'));
assert.ok(!broadMatch.reasons.includes('nationalMatch'), 'Directory geography is not a coverage claim');
assert.equal(search({ destination: '九州' }, [broad]).length, 0, '全国 directory filing must not imply nationwide coverage');
assert.equal(search({ destination: '全国' }, [broad]).length, 0);
assert.equal(search({ destination: '全国' }, [official[0]]).length, 1);

const regionPass = (id, majorRegions, duration = [7]) => ({
  ...official[0], id, category: 'regional', majorRegions, duration,
  coverage: { ...official[0].coverage, regions: majorRegions },
});
const focused = regionPass('focused', ['関東', '近畿'], [1]);
const wide = regionPass('wide', ['関東', '近畿', '中国']);
const destinationOnly = regionPass('destination-only', ['近畿']);
const originOnly = regionPass('origin-only', ['関東']);
const unrelated = regionPass('unrelated', ['北海道']);
const geographicMatches = search({ origin: '関東', destination: '近畿', tripDays: 7 },
  [originOnly, unrelated, destinationOnly, wide, focused]);
assert.deepEqual(geographicMatches.map(result => result.pass.id),
  ['focused', 'wide', 'destination-only', 'origin-only'],
  'Both-endpoint focused passes must beat broader and one-sided candidates regardless of validity');
assert.ok(geographicMatches[0].reasons.includes('bothFocused'));
assert.ok(geographicMatches[1].reasons.includes('bothBroad'));
assert.ok(geographicMatches[2].reasons.includes('destinationOnly'));
assert.ok(geographicMatches[3].reasons.includes('originOnly'));
const localPair = { ...directory[0], id: 'local-pair', region: '関東', majorRegions: ['関東', '近畿'] };
assert.equal(search({ origin: '関東', destination: '近畿' }, [destinationOnly, localPair])[0].pass.id, 'local-pair');
assert.ok(search({ origin: '関東', destination: '近畿' }, [localPair])[0].reasons.includes('directoryReview'));
const missingPrice = { ...directory[0], priceText: undefined, validityText: undefined };
const unpricedMatch = search({ budget: 100000, children: 2 }, [missingPrice])[0];
assert.ok(unpricedMatch);
assert.equal(unpricedMatch.totalPassCost, undefined);
assert.equal(unpricedMatch.difference, undefined);
for (const result of search({ budget: 100000, children: 2 }).filter(r => isDirectoryPass(r.pass))) {
  assert.equal(result.totalPassCost, undefined, 'Never parse ambiguous directory price text into fares');
  assert.equal(result.difference, undefined);
}

const numericPass = { ...official[0], price: { adult: { regular: 1000 }, child: { regular: 500 } }, duration: [3] };
const numericMatch = search({ adults: 2, children: 1, budget: 3000, tripDays: 3 }, [numericPass])[0];
assert.equal(numericMatch.totalPassCost, 2500);
assert.equal(numericMatch.difference, 500);
assert.ok(numericMatch.reasons.includes('daysFit'));
assert.equal(search({ budget: 500 }, [numericPass])[0].difference, -500);
assert.ok(search({ tripDays: 7 }, [numericPass])[0].reasons.includes('daysShort'));
assert.ok(search({ tripDays: 1 }, [numericPass])[0].reasons.includes('daysLong'));
for (const budget of [undefined, NaN, Infinity, 0, -100]) assert.equal(search({ budget }, [numericPass])[0].difference, undefined);
for (const child of [undefined, { regular: 0 }, { regular: NaN }]) {
  const pass = { ...numericPass, price: { adult: { regular: 1000 }, child } };
  assert.equal(search({ children: 1, budget: 3000 }, [pass])[0].totalPassCost, undefined, 'Unknown child fares must not be free');
  assert.equal(search({ children: 0 }, [pass])[0].totalPassCost, 1000);
}
assert.equal(JSON.stringify(catalog), baseline, 'Search must not mutate production records');

console.log(`Calculator checks passed: all ${catalog.length} public passes searchable (${official.length} official + ${publicDirectory.length} deduplicated directory), all categories/regions, fare safeguards, and on-site detail routes${process.argv.includes('--export') ? ' including static exports' : ''}.`);
