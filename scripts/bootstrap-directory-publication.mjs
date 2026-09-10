import fs from 'node:fs';
import {
  PUBLICATION_STATE_FILE,
  publicationFingerprint,
  readGeneratedDirectory,
  writePublicationState,
} from './lib/directory-publication.mjs';

if (fs.existsSync(PUBLICATION_STATE_FILE)) {
  throw new Error('Publication state already exists. Refusing to replace approval history.');
}

const initializedAt = new Date().toISOString();
const passes = readGeneratedDirectory();
const approvals = Object.fromEntries(passes.map(pass => [pass.id, {
  fingerprint: publicationFingerprint(pass),
  approvedAt: initializedAt,
  approvedBy: 'existing-catalog-baseline',
}]));

writePublicationState({ schemaVersion: 1, initializedAt, approvals });
console.log(`Initialized ${Object.keys(approvals).length} existing passes as the reviewed baseline.`);
