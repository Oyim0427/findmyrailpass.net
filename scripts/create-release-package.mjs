import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const version = process.argv[2];
const rollbackRef = process.argv[3] || 'HEAD^';

if (!version || !/^[a-zA-Z0-9._-]+$/.test(version)) {
  console.error('Usage: npm run release:package -- <version> [rollback-git-ref]');
  process.exit(1);
}

const root = process.cwd();
const staticOutput = resolve(root, 'out');
const artifactDir = resolve(root, 'release-artifacts', version);
const releaseZip = resolve(artifactDir, `findmyrailpass.net-${version}-static.zip`);
const rollbackZip = resolve(artifactDir, `findmyrailpass.net-before-${version}.zip`);

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, { cwd: root, stdio: 'inherit', ...options });
  if (result.status !== 0) process.exit(result.status || 1);
};

const capture = (command, args) => {
  const result = spawnSync(command, args, { cwd: root, encoding: 'utf8' });
  if (result.status !== 0) process.exit(result.status || 1);
  return result.stdout.trim();
};

const sha256 = file => createHash('sha256').update(readFileSync(file)).digest('hex');

mkdirSync(artifactDir, { recursive: true });
run('test', ['-d', staticOutput]);
run('git', ['rev-parse', '--verify', `${rollbackRef}^{commit}`]);
run('git', ['archive', '--format=zip', `--output=${rollbackZip}`, rollbackRef]);
run('zip', ['-qr', releaseZip, '.'], { cwd: staticOutput });

const commit = capture('git', ['rev-parse', 'HEAD']);
const manifest = {
  version,
  commit,
  rollbackRef,
  rollbackCommit: capture('git', ['rev-parse', rollbackRef]),
  createdAt: new Date().toISOString(),
  deployment: 'not performed',
  contents: 'Static Next.js export from out/. No environment files, source secrets, screenshots or review workbooks.',
};
writeFileSync(resolve(artifactDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
writeFileSync(resolve(artifactDir, 'SHA256SUMS.txt'), `${sha256(releaseZip)}  ${releaseZip.split('/').pop()}\n${sha256(rollbackZip)}  ${rollbackZip.split('/').pop()}\n`);

console.log(`Release artifacts created in ${artifactDir}`);
