import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('out');
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.html')) htmlFiles.push(file);
  }
}

function resolvesToExportedFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('#')[0].split('?')[0]);
  if (!clean || clean === '/') return fs.existsSync(path.join(root, 'index.html'));
  const relative = clean.replace(/^\//, '');
  const candidates = [
    path.join(root, relative),
    path.join(root, `${relative}.html`),
    path.join(root, relative, 'index.html')
  ];
  return candidates.some(candidate => fs.existsSync(candidate));
}

if (!fs.existsSync(root)) {
  console.error('Missing out/. Run npm run build first.');
  process.exit(1);
}

walk(root);
const issues = [];
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const relativeFile = path.relative(root, file);
  const isLabelledDiscoveryPage = /^(zh|en|ja)[\\/](data-sources|passlist)\.html$/.test(relativeFile);
  if (/www2s\.biglobe\.ne\.jp/i.test(html) && !isLabelledDiscoveryPage) issues.push(`${file}: BIGLOBE URL leaked outside an explicitly labelled discovery/source page`);
  if (/href=["']#["']/i.test(html)) issues.push(`${file}: placeholder href="#"`);

  const links = [...html.matchAll(/href=["']([^"']+)["']/gi)].map(match => match[1]);
  if (/^(zh|en|ja)[\\/]directory(?:[\\/]|\.html$)/.test(relativeFile)) {
    const biglobeVisitorLinks = links.filter(href => /^https?:/i.test(href) && /biglobe\.ne\.jp/i.test(href));
    if (biglobeVisitorLinks.length) issues.push(`${file}: directory page contains a visitor-facing BIGLOBE href ${biglobeVisitorLinks[0]}`);
  }
  for (const href of links) {
    if (/^(https?:|mailto:|tel:|javascript:|#)/i.test(href)) continue;
    if (!resolvesToExportedFile(href)) issues.push(`${file}: broken internal link ${href}`);
  }
}

const directorySource = fs.readFileSync(path.resolve('src/data/domesticPassDirectory.ts'), 'utf8');
const passIds = [...directorySource.matchAll(/^\s+"id": "([^"]+)",$/gm)].map(match => match[1]);
const directoryMarker = 'export const DOMESTIC_DIRECTORY_PASSES: DomesticDirectoryPass[] = ';
const directoryRows = JSON.parse(directorySource.slice(
  directorySource.indexOf(directoryMarker) + directoryMarker.length,
  directorySource.lastIndexOf(';'),
));
const directoryCategories = ['national', 'regional', 'city', 'bus', 'private', 'special'];
for (const category of directoryCategories) {
  if (!directoryRows.some(pass => pass.category === category)) {
    issues.push(`Directory category ${category} is empty or missing from generated data.`);
  }
}
if (directoryRows.some(pass => !directoryCategories.includes(pass.category))) {
  issues.push('Directory data contains an invalid category value.');
}
const directoryClientSource = fs.readFileSync(path.resolve('src/app/[lang]/passlist/PassListClient.tsx'), 'utf8');
if (!directoryClientSource.includes("const matchesCategory = dirCategory === 'all' || pass.category === dirCategory")) {
  issues.push('Directory category buttons are no longer connected to the local-pass filter.');
}
if (!directoryClientSource.includes('href={officialSource.url}')) {
  issues.push('Directory cards are missing the operator-site button href.');
}
if (!directoryClientSource.includes('target="_blank"')) {
  issues.push('Directory operator-site buttons no longer open separately from the on-site detail flow.');
}
const detailHrefUses = directoryClientSource.match(/href=\{detailHref\}/g)?.length ?? 0;
if (detailHrefUses < 2) {
  issues.push('Directory cards must use the on-site detail href for both the full-card overlay and the detail button.');
}
const officialPassSource = fs.readFileSync(path.resolve('src/data/officialPasses.ts'), 'utf8');
const officialPassIds = [...officialPassSource.matchAll(/\bid:\s*'([^']+)'/g)].map(match => match[1]);
const passCardSource = fs.readFileSync(path.resolve('src/components/PassCard.tsx'), 'utf8');
if (!passCardSource.includes('const detailHref = `/${lang}/passlist/${pass.id}`')) {
  issues.push('Verified pass cards no longer point their detail button to an on-site detail page.');
}
for (const locale of ['zh', 'en', 'ja']) {
  for (const id of officialPassIds) {
    if (!resolvesToExportedFile(`/${locale}/passlist/${id}`)) {
      issues.push(`Missing generated verified-pass detail page: /${locale}/passlist/${id}`);
    }
  }
  for (const id of passIds) {
    if (!resolvesToExportedFile(`/${locale}/directory/${id}`)) {
      issues.push(`Missing generated detail page: /${locale}/directory/${id}`);
    }
  }
}

if (issues.length) {
  console.error(`Static export audit failed with ${issues.length} issue(s):`);
  issues.slice(0, 100).forEach(issue => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Static export audit passed: ${htmlFiles.length} HTML files, ${officialPassIds.length * 3} verified-pass detail pages, ${passIds.length * 3} directory detail pages, no broken internal links or visitor-facing BIGLOBE detail links.`);
