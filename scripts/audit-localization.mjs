import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const publicPages = ['', 'blog', 'help', 'data-sources', 'disclosure', 'commercial', 'products', 'privacy', 'terms', 'image-credits'];
const expected = {
  zh: { htmlLang: 'zh-CN', homeText: ['开始免费计算', '常见问题', '比较与查询'] },
  en: { htmlLang: 'en', homeText: ['Start free calculation', 'Frequently asked questions', 'Compare &amp; browse'] },
  ja: { htmlLang: 'ja', homeText: ['無料で計算する', 'よくある質問', '比較・検索'] },
};
const forbidden = {
  en: ['返回首页', '开始免费计算', '产品与服务', '法律与政策', '数据来源与更新方法', '常见问题', '再抽一次'],
  ja: ['返回首页', '开始免费计算', '产品与服务', '法律与政策', '数据来源与更新方法', '常见问题', '再抽一次'],
};

const failures = [];
const load = (locale, page = '') => {
  const file = resolve(root, 'out', locale, page, 'index.html');
  try { return { file, html: readFileSync(file, 'utf8') }; }
  catch { failures.push(`missing static page: ${file}`); return { file, html: '' }; }
};

for (const [locale, config] of Object.entries(expected)) {
  const home = load(locale);
  if (!home.html.includes(`<html lang="${config.htmlLang}"`)) failures.push(`${locale} home has the wrong html lang`);
  if (!home.html.includes('<meta name="robots" content="index, follow"')) failures.push(`${locale} home is not indexable`);
  if (!home.html.includes(`<link rel="canonical" href="https://findmyrailpass.net/${locale}/"`)) failures.push(`${locale} home canonical is incorrect`);
  for (const text of config.homeText) if (!home.html.includes(text)) failures.push(`${locale} home is missing localized text: ${text}`);

  for (const page of publicPages) {
    const { html } = load(locale, page);
    if (!html) continue;
    if (!html.includes(`<html lang="${config.htmlLang}"`)) failures.push(`/${locale}/${page} has the wrong html lang`);
    if (!html.includes('<meta name="robots" content="index, follow"')) failures.push(`/${locale}/${page} is not indexable`);
    const suffix = page ? `${page}/` : '';
    if (!html.includes(`<link rel="canonical" href="https://findmyrailpass.net/${locale}/${suffix}"`)) failures.push(`/${locale}/${page} canonical is incorrect`);
    for (const hreflang of ['zh-CN', 'en', 'ja', 'x-default']) {
      if (!html.includes(`hrefLang="${hreflang}"`) && !html.includes(`hreflang="${hreflang}"`)) failures.push(`/${locale}/${page} is missing hreflang ${hreflang}`);
    }
    if (locale !== 'zh') for (const text of forbidden[locale]) if (html.includes(text)) failures.push(`/${locale}/${page} contains legacy Chinese UI: ${text}`);
  }
}

const sitemap = readFileSync(resolve(root, 'out', 'sitemap.xml'), 'utf8');
for (const locale of ['zh', 'en', 'ja']) {
  for (const page of publicPages) {
    const suffix = page ? `/${page}` : '';
    if (!sitemap.includes(`https://findmyrailpass.net/${locale}${suffix}`)) failures.push(`sitemap is missing /${locale}${suffix}`);
  }
}

if (failures.length) {
  console.error(`Localization QA failed (${failures.length}):`);
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}

console.log(`Localization QA passed: ${publicPages.length * 3} indexable pages checked across zh-CN, en and ja.`);
console.log('Purchase, payment and affiliate information is indexable in all locales.');
