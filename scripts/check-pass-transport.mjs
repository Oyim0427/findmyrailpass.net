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

const { DOMESTIC_DIRECTORY_PASSES: passes } = load('src/data/domesticPassDirectory.ts');
const { getDirectoryTransportModes } = load('src/lib/passTransport.ts');
for (const pass of passes) {
  for (const locale of ['ja', 'en', 'zh']) {
    assert.ok(getDirectoryTransportModes(pass, locale).length > 0, `${pass.id}: missing ${locale} transport`);
  }
}
const modes = id => getDirectoryTransportModes(passes.find(pass => pass.id === id), 'ja');
assert.deepEqual(modes('sendai03').sort(), ['バス', '地下鉄'].sort());
assert.ok(modes('sapporo22').includes('路面電車'));
assert.ok(modes('jrhokkaido95').includes('鉄道'));
console.log(`Transport rendering passed: ${passes.length} directory records all have explicit modes.`);
