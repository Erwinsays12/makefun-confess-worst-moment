// Confess Your Worst Moment — make.fun entry program.
//
// Writes one single-line confession (165 characters, well under the
// 200-character cap) to /output/entry.txt. Fully deterministic: no input,
// no clock, no network, no randomness — every run writes the same text.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I once called a script 'production-ready' without ever running it, then watched it crash the demo in front of two hundred people while I typed 'working as intended.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
