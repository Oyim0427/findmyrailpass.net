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
  if (/www2s\.biglobe\.ne\.jp/i.test(html)) issues.push(`${file}: legacy BIGLOBE dependency`);
  if (/href=["']#["']/i.test(html)) issues.push(`${file}: placeholder href="#"`);

  const links = [...html.matchAll(/href=["']([^"']+)["']/gi)].map(match => match[1]);
  for (const href of links) {
    if (/^(https?:|mailto:|tel:|javascript:|#)/i.test(href)) continue;
    if (!resolvesToExportedFile(href)) issues.push(`${file}: broken internal link ${href}`);
  }
}

if (issues.length) {
  console.error(`Static export audit failed with ${issues.length} issue(s):`);
  issues.slice(0, 100).forEach(issue => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Static export audit passed: ${htmlFiles.length} HTML files, no broken internal links or legacy source URLs.`);
