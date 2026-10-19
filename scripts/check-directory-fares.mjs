import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import ts from 'typescript';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const require = createRequire(import.meta.url);
function load(file) {
  const source = fs.readFileSync(path.resolve(file), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX,
  } });
  const loadedModule = { exports: {} };
  new Function('module', 'exports', 'require', outputText)(loadedModule, loadedModule.exports,
    name => name.startsWith('@/') ? load(`src/${name.slice(2)}.ts`) : require(name));
  return loadedModule.exports;
}
const Fare = load('src/components/DirectoryFare.tsx').default;
const { DOMESTIC_DIRECTORY_PASSES: passes } = load('src/data/domesticPassDirectory.ts');
const render = (value, compact = false, lang = 'ja') => renderToStaticMarkup(React.createElement(Fare, { value, compact, lang }));
for (const compact of [true, false]) {
  for (const id of ['jreast071', 'jreast12']) {
    const pass = passes.find(pass => pass.id === id);
    assert.ok(pass);
    const html = render(pass.priceText, compact);
    assert.match(html, />大人<\/span>/);
    assert.match(html, />小人<\/span>/);
    if (id === 'jreast12') assert.match(html, /500円/);
  }
  const multiple = render('2日間用 大人：5,000円／小人：2,500円 / 3日間用 大人：6,000円／小人：3,000円 /', compact);
  assert.equal((multiple.match(/>大人<\/span>/g) || []).length, 2);
  assert.equal((multiple.match(/>小人<\/span>/g) || []).length, 2);
  assert.match(render('大人：８４０円 小人：４２０円', compact), />840円<\/span>/);
  assert.match(render('大人：800円 小人：---', compact), /記載なし/);
  assert.match(render('大人2名 小人2名 3,000円', compact), /大人2名 小人2名 3,000円/);
}
// Every recorded yen amount must survive rendering, including supplements.
for (const pass of passes) {
  const source = (pass.priceText || '').replace(/[０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xfee0)).replace(/，/g, ',');
  const html = render(pass.priceText);
  for (const amount of source.match(/\d[\d,]*\s*円/g) || []) assert.ok(html.includes(amount), `${pass.id}: lost ${amount}`);
}
assert.match(render('大人：840円 小人：420円', false, 'en'), />Child<\/span>/);
assert.match(render('大人：840円 小人：420円', false, 'zh'), />儿童<\/span>/);
for (const compact of [true, false]) {
  assert.match(render('大人：16,670円／U25(25歳以下)：13,990円', compact), />U25\(25歳以下\)<\/span>/);
  assert.match(render('シルバー(65歳以上)：1,100円', compact), />シルバー\(65歳以上\)<\/span>/);
  assert.match(render('高校生：2,330円／中学生：1,880円', compact), />高校生<\/span>/);
  assert.match(render('ファミリー(大人2名または大人1名小人2名)：2,400円', compact), />ファミリー\(大人2名または大人1名小人2名\)<\/span>/);
}
assert.match(render('U25(25歳以下)：13,990円', false, 'en'), />U25 \(25 and under\)<\/span>/);
assert.match(render('シルバー(65歳以上)：1,100円', false, 'zh'), />长者（65岁及以上）<\/span>/);
console.log(`Fare rendering passed: ${passes.length} directory records, adult/child, special fares, variants, deposits and family bundles.`);
