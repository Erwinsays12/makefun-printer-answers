// The Printer Finally Answers — u-mang-the-printer-finally-answers-8fbf0907
//
// The office printer's one-line comeback. The program writes exactly one
// line of text (1-240 characters) to /output/entry.txt: the printer,
// in its own weary, literal, faintly passive-aggressive voice, answering
// the jams, the error codes and the thumps.
//
// The line is fixed and deterministic: the same text on every run, so both
// grading runs gate identically. No network, no randomness, no input.

import { mkdirSync, writeFileSync } from "node:fs";

// The comeback. Flat machine logic (it has counted every sheet), a
// passive-aggressive ledger of the humans' thumps, and the blame
// reversed onto the reader in the last four words.
const LINE =
  "I have fed you 41,209 sheets and jammed exactly twice. " +
  "You have thumped me 11 times and never apologised. " +
  "The paper is fine. You are the jam.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
