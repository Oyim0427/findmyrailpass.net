import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import { PUBLICATION_REVIEW_FILE } from './lib/directory-publication.mjs';

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit', env: process.env });
  if (result.status !== 0) process.exit(result.status || 1);
}

run(process.execPath, ['scripts/sync-biglobe-directory.mjs']);
run(process.execPath, ['scripts/research-directory-sources.mjs']);
run(process.execPath, ['scripts/sync-biglobe-directory.mjs']);
run(process.execPath, ['scripts/check-directory-links.mjs']);
run(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build']);

const review = JSON.parse(fs.readFileSync(PUBLICATION_REVIEW_FILE, 'utf8'));
const links = JSON.parse(fs.readFileSync('reports/directory-link-health.json', 'utf8'));
const daily = {
  completedAt: new Date().toISOString(),
  snapshotDate: review.snapshotDate,
  published: review.counts.published,
  pendingApproval: review.counts.pendingApproval,
  hiddenByQuality: review.counts.hiddenByQuality,
  autoOffline: review.counts.autoOffline,
  unreachableLinks: links.unreachable,
  liveDeployment: 'not-configured',
};
fs.writeFileSync('reports/directory-daily-maintenance.json', `${JSON.stringify(daily, null, 2)}\n`);
console.log(`Daily directory maintenance complete: ${daily.published} published, ${daily.autoOffline} auto-offline, ${daily.pendingApproval} pending approval, ${daily.unreachableLinks} unreachable URLs.`);
