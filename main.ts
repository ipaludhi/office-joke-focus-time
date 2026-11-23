// Make the AI Judge Laugh: Office Jokes — entry program (Node 22, stdlib only).
// Writes one original one-line office joke to /output/entry.txt.
// The joke: a calendar blocks focus time, then invites you to a meeting
// about protecting focus time — the tool meant to save focus eats it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'My calendar finally blocked focus time — then invited me to a meeting about protecting focus time.';

// Writes exactly the joke, no trailing newline: the gate counts characters
// (1-199), so the file is 98 characters / 100 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`joke must be 1-199 characters, got ${JOKE.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), JOKE, 'utf8');
