import fs from 'node:fs';
import path from 'node:path';
import {
  DIRECTORY_PASS_CATEGORIES,
  DIRECTORY_PASS_CATEGORY_RULE_VERSION,
  explainDirectoryPassCategory,
} from './lib/classify-directory-pass.mjs';

const DATA_FILE = path.resolve('src/data/domesticPassDirectory.ts');
const REPORT_FILE = path.resolve('reports/directory-category-audit.json');
const source = fs.readFileSync(DATA_FILE, 'utf8');
const marker = 'export const DOMESTIC_DIRECTORY_PASSES: DomesticDirectoryPass[] = ';
const start = source.indexOf(marker);

if (start < 0) throw new Error(`Could not find directory data marker in ${DATA_FILE}`);

const passes = JSON.parse(source.slice(start + marker.length, source.lastIndexOf(';')));
const idCounts = new Map();
for (const pass of passes) idCounts.set(pass.id, (idCounts.get(pass.id) || 0) + 1);

const duplicateIds = [...idCounts].filter(([, count]) => count > 1).map(([id]) => id);
const invalidCategories = passes.filter(pass => !DIRECTORY_PASS_CATEGORIES.includes(pass.category));
const classificationMismatches = passes
  .map(pass => ({ pass, explained: explainDirectoryPassCategory(pass) }))
  .filter(({ pass, explained }) => pass.category !== explained.category);
const categoryCounts = Object.fromEntries(DIRECTORY_PASS_CATEGORIES.map(category => [
  category,
  passes.filter(pass => pass.category === category).length,
]));
const ruleCounts = Object.fromEntries([...passes.reduce((counts, pass) => {
  const { rule } = explainDirectoryPassCategory(pass);
  counts.set(rule, (counts.get(rule) || 0) + 1);
  return counts;
}, new Map())].sort(([a], [b]) => a.localeCompare(b)));
const samples = Object.fromEntries(DIRECTORY_PASS_CATEGORIES.map(category => [
  category,
  passes.filter(pass => pass.category === category).slice(0, 8).map(pass => ({
    id: pass.id,
    name: pass.name,
    company: pass.company,
    region: pass.region,
    rule: explainDirectoryPassCategory(pass).rule,
  })),
]));
const checks = {
  rowCount: passes.length,
  uniqueIds: idCounts.size,
  duplicateIds,
  invalidCategories: invalidCategories.map(pass => pass.id),
  classificationMismatches: classificationMismatches.map(({ pass, explained }) => ({
    id: pass.id,
    stored: pass.category,
    expected: explained.category,
  })),
  missingRequiredValues: passes
    .filter(pass => !pass.id || !pass.name || !pass.company || !pass.region || !pass.category)
    .map(pass => pass.id || '(missing id)'),
  emptyCategories: DIRECTORY_PASS_CATEGORIES.filter(category => categoryCounts[category] === 0),
};
const report = {
  generatedAt: new Date().toISOString(),
  dataFile: path.relative(process.cwd(), DATA_FILE),
  grain: 'one current or scheduled local-pass directory record per id',
  categoryRuleVersion: DIRECTORY_PASS_CATEGORY_RULE_VERSION,
  categoryCounts,
  ruleCounts,
  checks,
  samples,
};

fs.mkdirSync(path.dirname(REPORT_FILE), { recursive: true });
fs.writeFileSync(REPORT_FILE, `${JSON.stringify(report, null, 2)}\n`);

const failed = duplicateIds.length
  || invalidCategories.length
  || classificationMismatches.length
  || checks.missingRequiredValues.length
  || checks.emptyCategories.length
  || passes.length !== idCounts.size;

if (failed) {
  console.error('Directory category audit failed. See reports/directory-category-audit.json.');
  process.exit(1);
}

console.log(`Directory category audit passed: ${passes.length} unique passes across ${DIRECTORY_PASS_CATEGORIES.length} non-empty categories.`);
console.log(DIRECTORY_PASS_CATEGORIES.map(category => `${category}=${categoryCounts[category]}`).join(', '));
