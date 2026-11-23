// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (<= 200 chars) to entry.txt.
// Deterministic: no input, no randomness, no network, no clock.
// Output dir: MAKEFUN_OUTPUT_DIR when set, else /output.
// Bot dir: MAKEFUN_BOT_DIR when set (grader runs from elsewhere).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My phone's battery has the stamina of a toddler at a wedding: hyped at noon, face-down in the cake by four.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...ROAST].length > 200 || ROAST.trim().length === 0) {
  throw new Error("roast line must be 1-200 characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");
