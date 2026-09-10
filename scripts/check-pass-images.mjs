import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
function loadTypeScript(relativePath) {
  const source = fs.readFileSync(path.join(root, relativePath), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const loadedModule = { exports: {} };
  new Function('module', 'exports', outputText)(loadedModule, loadedModule.exports);
  return loadedModule.exports;
}

const { OFFICIAL_PASSES } = loadTypeScript('src/data/officialPasses.ts');
const { DOMESTIC_DIRECTORY_PASSES } = loadTypeScript('src/data/domesticPassDirectory.ts');
const { PASS_IMAGE_LIBRARY, getPassImageAsset } = loadTypeScript('src/lib/passImages.ts');
const passes = [...OFFICIAL_PASSES, ...DOMESTIC_DIRECTORY_PASSES];

assert.equal(PASS_IMAGE_LIBRARY.length, 10);
assert.equal(new Set(PASS_IMAGE_LIBRARY.map(asset => asset.region)).size, 10);
for (const asset of PASS_IMAGE_LIBRARY) {
  assert.match(asset.sourceUrl, /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
  assert.match(asset.licenseUrl, /^https:\/\/creativecommons\.org\//);
  assert.ok(asset.author && asset.title && asset.license);
  const file = path.join(root, 'public', asset.localPath.replace(/^\//, ''));
  assert.ok(fs.existsSync(file), `Missing image: ${asset.localPath}`);
  assert.ok(fs.statSync(file).size > 10_000, `Image is unexpectedly small: ${asset.localPath}`);
  assert.equal(fs.readFileSync(file, { start: 0, end: 2 })[0], 0xff, `Not a JPEG: ${asset.localPath}`);
}
for (const pass of passes) {
  const asset = getPassImageAsset(pass);
  assert.ok(asset?.localPath, `No image assigned to ${pass.id}`);
  assert.notEqual(asset.localPath, '/images/nophoto.svg');
}

for (const source of [
  'src/components/PassCard.tsx',
  'src/components/AdvancedCalculator.tsx',
  'src/app/[lang]/passlist/[id]/page.tsx',
  'src/app/[lang]/directory/[id]/page.tsx',
]) {
  assert.match(fs.readFileSync(path.join(root, source), 'utf8'), /getPassImage\(/, `${source} does not render the shared pass image`);
}

console.log(`Pass image checks passed: ${passes.length} passes map to ${PASS_IMAGE_LIBRARY.length} local, openly licensed Wikimedia Commons images.`);
