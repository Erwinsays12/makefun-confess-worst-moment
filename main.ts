// Confess Your Worst Moment — make.fun entry program.
//
// Writes one single-line confession (165 characters, well under the
// 200-character cap) to /output/entry.txt. Fully deterministic: no input,
// no clock, no network, no randomness — every run writes the same text.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I once called a script 'production-ready' without ever running it, then watched it crash the demo in front of two hundred people while I typed 'working as intended.'";

// The gate refuses any text outside 1-200 non-blank characters, so fail
// loudly here instead of silently writing an entry the scorer would reject.
if (CONFESSION.length > 200 || CONFESSION.trim().length === 0) {
  throw new Error(
    `confession must be 1-200 non-blank characters, got ${CONFESSION.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
