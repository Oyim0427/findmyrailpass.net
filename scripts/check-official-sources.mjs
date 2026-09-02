import fs from 'node:fs';

const sourceFile = 'src/data/officialPasses.ts';
const reportFile = 'reports/source-health.json';
const content = fs.readFileSync(sourceFile, 'utf8');
const urls = [...new Set([...content.matchAll(/url:\s*'([^']+)'/g)].map(match => match[1]))];
const checkedAt = new Date().toISOString();

async function check(url) {
  const started = Date.now();
  try {
    let response = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(15000) });
    if (response.status === 403 || response.status === 405) response = await fetch(url, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(15000) });
    return { url, ok: response.ok, status: response.status, finalUrl: response.url, latencyMs: Date.now() - started };
  } catch (error) {
    return { url, ok: false, status: 0, error: error instanceof Error ? error.message : String(error), latencyMs: Date.now() - started };
  }
}

const results = [];
for (let index = 0; index < urls.length; index += 4) {
  results.push(...await Promise.all(urls.slice(index, index + 4).map(check)));
}

fs.mkdirSync('reports', { recursive: true });
fs.writeFileSync(reportFile, `${JSON.stringify({ checkedAt, sourceCount: urls.length, healthy: results.filter(x => x.ok).length, results }, null, 2)}\n`);
const failed = results.filter(result => !result.ok);
console.log(`Checked ${urls.length} official URLs: ${urls.length - failed.length} healthy, ${failed.length} failed. Report: ${reportFile}`);
if (failed.length) process.exitCode = 1;
