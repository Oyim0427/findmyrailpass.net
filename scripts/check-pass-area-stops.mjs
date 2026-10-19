import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
function load(file) {
  const source = fs.readFileSync(path.resolve(file), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
  } });
  const loadedModule = { exports: {} };
  new Function('module', 'exports', 'require', outputText)(loadedModule, loadedModule.exports,
    name => name.startsWith('@/') ? load(`src/${name.slice(2)}.ts`) : require(name));
  return loadedModule.exports;
}

const { DOMESTIC_DIRECTORY_PASSES: directory } = load('src/data/domesticPassDirectory.ts');
const { OFFICIAL_PASSES: verified } = load('src/data/officialPasses.ts');
const { getDirectoryPassAreaStops, getVerifiedPassAreaStops } = load('src/lib/passAreaStops.ts');

for (const pass of directory) {
  for (const locale of ['ja', 'en', 'zh']) {
    assert.ok(getDirectoryPassAreaStops(pass, locale).length >= 3, `${pass.id}: too few ${locale} area stops`);
  }
}
for (const pass of verified) assert.ok(getVerifiedPassAreaStops(pass, 'ja').length >= 3, `${pass.id}: too few verified stops`);

const east = getVerifiedPassAreaStops(verified.find(pass => pass.id === 'jr-east-pass-5'), 'ja');
for (const station of ['東京', '仙台', '長野', '新潟']) assert.ok(east.some(stop => stop.label === station), `JR EAST PASS missing ${station}`);
const sendai = getDirectoryPassAreaStops(directory.find(pass => pass.id === 'sendai03'), 'ja');
for (const station of ['仙台', '泉中央', '荒井']) assert.ok(sendai.some(stop => stop.label === station), `Sendai pass missing ${station}`);
for (const stop of [...east, ...sendai]) {
  assert.ok(Number.isFinite(stop.x) && Number.isFinite(stop.y), `${stop.key}: missing schematic coordinates`);
}

console.log(`Area-stop diagrams passed: ${verified.length} verified and ${directory.length} directory passes.`);
