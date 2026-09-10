import fs from 'node:fs';
import path from 'node:path';

export const PUBLICATION_STATE_FILE = path.resolve('data/directory-publication-state.json');
export const PUBLICATION_REVIEW_FILE = path.resolve('reports/directory-publication-review.json');
export const DIRECTORY_CANDIDATES_FILE = path.resolve('reports/directory-candidates.json');
export const SOURCE_RESEARCH_FILE = path.resolve('data/directory-source-research.json');
export const PUBLICATION_HISTORY_FILE = path.resolve('data/directory-publication-history.json');

export function readGeneratedDirectory(file = path.resolve('src/data/domesticPassDirectory.ts')) {
  if (!fs.existsSync(file)) return [];
  const source = fs.readFileSync(file, 'utf8');
  const marker = 'export const DOMESTIC_DIRECTORY_PASSES: DomesticDirectoryPass[] = ';
  const start = source.indexOf(marker);
  if (start < 0) throw new Error(`Directory data marker was not found in ${file}`);
  return JSON.parse(source.slice(start + marker.length, source.lastIndexOf(';')));
}

export function publicationFingerprint(pass) {
  const period = String(pass.salesPeriod || '').normalize('NFKC').replace(/\s+/g, ' ').trim();
  return [pass.id, pass.startDate || '', pass.endDate || '', period].join('|');
}

export function readPublicationState() {
  if (!fs.existsSync(PUBLICATION_STATE_FILE)) {
    throw new Error('Missing data/directory-publication-state.json. Run npm run directory:bootstrap once.');
  }
  const state = JSON.parse(fs.readFileSync(PUBLICATION_STATE_FILE, 'utf8'));
  if (state.schemaVersion !== 1 || typeof state.approvals !== 'object' || !state.approvals) {
    throw new Error('Invalid directory publication state. Expected schemaVersion 1 and approvals object.');
  }
  return state;
}

export function writePublicationState(state) {
  fs.mkdirSync(path.dirname(PUBLICATION_STATE_FILE), { recursive: true });
  fs.writeFileSync(PUBLICATION_STATE_FILE, `${JSON.stringify(state, null, 2)}\n`);
}

export function readSourceResearch() {
  if (!fs.existsSync(SOURCE_RESEARCH_FILE)) return { schemaVersion: 1, passes: {} };
  const research = JSON.parse(fs.readFileSync(SOURCE_RESEARCH_FILE, 'utf8'));
  return research.schemaVersion === 1 && research.passes ? research : { schemaVersion: 1, passes: {} };
}
