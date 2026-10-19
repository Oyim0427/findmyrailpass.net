import { spawnSync } from 'node:child_process';

const checks = ['lint', 'directory:quality', 'directory:categories', 'calculator:check',
  'images:check', 'localization:check', 'eligibility:check', 'transport:check',
  'area-stops:check', 'fares:check', 'qa', 'qa:locales', 'locale:check', 'purchase:check'];
for (const check of checks) {
  const args = ['run', check, ...(check === 'directory:categories' ? ['--', '--check'] : [])];
  const result = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', args, { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status || 1);
}
console.log('Release checks passed. Validate configured contact details and the target host before deployment.');
