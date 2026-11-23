import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The letter stands for "eXhausted": the sharp, non-obvious initial of the day's word.
// One letter, no trailing newline: the gate counts exactly 1 character.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const letter = "X";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
