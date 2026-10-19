import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function loadTypeScript(relativePath, imports = {}) {
  const source = fs.readFileSync(path.join(root, relativePath), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const loadedModule = { exports: {} };
  const requireImport = id => {
    if (id.startsWith('@/') && !(id in imports)) return loadTypeScript(`src/${id.slice(2)}.ts`);
    assert.ok(id in imports, `Unexpected import in ${relativePath}: ${id}`);
    return imports[id];
  };
  new Function('require', 'module', 'exports', outputText)(requireImport, loadedModule, loadedModule.exports);
  return loadedModule.exports;
}

const { DOMESTIC_DIRECTORY_PASSES } = loadTypeScript('src/data/domesticPassDirectory.ts');
const { DIRECTORY_PASS_TRANSLATIONS } = loadTypeScript('src/data/directoryPassTranslations.ts');
const { getCatalogPassName, searchCatalogByKeyword } = loadTypeScript('src/lib/passCatalog.ts', {
  '@/data/directoryPassTranslations': { DIRECTORY_PASS_TRANSLATIONS },
});

const ids = new Set(DOMESTIC_DIRECTORY_PASSES.map(pass => pass.id));
assert.equal(ids.size, DOMESTIC_DIRECTORY_PASSES.length, 'Directory IDs must be unique');
assert.deepEqual(new Set(Object.keys(DIRECTORY_PASS_TRANSLATIONS)), ids, 'Every directory pass needs exactly one translation');
for (const pass of DOMESTIC_DIRECTORY_PASSES) {
  const names = DIRECTORY_PASS_TRANSLATIONS[pass.id];
  assert.ok(names.en.trim() && names.zh.trim(), `Missing translated name: ${pass.id}`);
  assert.doesNotMatch(names.en, /[\u3040-\u30ff\u3400-\u9fff]/u, `Japanese text remains in English name: ${pass.id}`);
  assert.doesNotMatch(names.zh, /[\u3040-\u30ff]/u, `Japanese kana remains in Chinese name: ${pass.id}`);
  assert.equal(getCatalogPassName(pass, 'ja'), pass.name, `Japanese name changed: ${pass.id}`);
}

const abashiri = DOMESTIC_DIRECTORY_PASSES.find(pass => pass.id === 'jrhokkaido116');
assert.equal(getCatalogPassName(abashiri, 'en'), 'Engaru–Kitami–Abashiri Excursion Free Pass');
assert.equal(getCatalogPassName(abashiri, 'zh'), '远轻·北见·网走周游券');
const peachNorthernHokkaido = DOMESTIC_DIRECTORY_PASSES.find(pass => pass.id === 'jrhokkaido95');
assert.equal(getCatalogPassName(peachNorthernHokkaido, 'zh'), 'Peach 北北海道周游券');
const sendai = DOMESTIC_DIRECTORY_PASSES.find(pass => pass.id === 'sendai03');
assert.equal(getCatalogPassName(sendai, 'en'), 'Loople Sendai and Subway One-Day Pass');
assert.equal(getCatalogPassName(sendai, 'zh'), 'Loople 仙台巴士·地铁通用1日周游券');
const meitetsuTwoDay = DOMESTIC_DIRECTORY_PASSES.find(pass => pass.id === 'meitetu01');
assert.equal(getCatalogPassName(meitetsuTwoDay, 'en'), 'Meitetsu All Lines 2-Day Free Pass');
assert.equal(getCatalogPassName(meitetsuTwoDay, 'zh'), '名铁全线2日周游券');
const sannomiyaHimejiFiveDay = DOMESTIC_DIRECTORY_PASSES.find(pass => pass.id === 'sanhime5');
assert.equal(getCatalogPassName(sannomiyaHimejiFiveDay, 'en'), 'Sannomiya–Himeji Five-Day Pass');
assert.equal(getCatalogPassName(sannomiyaHimejiFiveDay, 'zh'), '三宫·姬路5日周游券');
for (const keyword of ['Abashiri', '网走', '網走']) {
  assert.ok(searchCatalogByKeyword(DOMESTIC_DIRECTORY_PASSES, keyword).some(pass => pass.id === abashiri.id), `Translated search failed: ${keyword}`);
}
for (const keyword of ['Sapporo Streetcar', '札幌市电', '札幌市電']) {
  assert.ok(searchCatalogByKeyword(DOMESTIC_DIRECTORY_PASSES, keyword).some(pass => pass.id === 'sapporo22'), `Streetcar search failed: ${keyword}`);
}
assert.ok(searchCatalogByKeyword(DOMESTIC_DIRECTORY_PASSES, 'Tokyu').some(pass => pass.id === 'tokyu91'), 'Romanized search must work without macrons');

console.log(`Pass localization checks passed: ${ids.size} directory passes have Japanese, English and Chinese searchable names.`);
