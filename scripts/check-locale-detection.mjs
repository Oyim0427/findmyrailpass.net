import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import ts from 'typescript';

const helperSource = readFileSync(resolve(process.cwd(), 'src', 'lib', 'localeDetection.ts'), 'utf8');
const helperJavaScript = ts.transpileModule(helperSource, {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2020 },
}).outputText;
const helperModule = await import(`data:text/javascript;base64,${Buffer.from(helperJavaScript).toString('base64')}`);
const { localeFromBrowser, localeFromCountry } = helperModule;

assert.equal(localeFromCountry('JP'), 'ja');
for (const country of ['CN', 'HK', 'MO', 'TW']) assert.equal(localeFromCountry(country), 'zh');
for (const country of ['US', 'GB', 'DE', 'SG', undefined]) assert.equal(localeFromCountry(country), 'en');

assert.equal(localeFromBrowser(['ja-JP', 'en-US']), 'ja');
assert.equal(localeFromBrowser(['zh-Hant-TW', 'en-US']), 'zh');
assert.equal(localeFromBrowser(['fr-FR', 'en-US']), 'en');

const rootHtml = readFileSync(resolve(process.cwd(), 'out', 'index.html'), 'utf8');
assert.match(rootHtml, /<meta name="robots" content="noindex, follow"/);
assert.doesNotMatch(rootHtml, /Choose your language|Language selection/);
assert.match(rootHtml, /Choosing your language automatically/);

console.log('Locale detection QA passed: country mapping, browser fallback and root redirect shell checked.');
