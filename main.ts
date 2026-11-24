// Worst AI Advice — make.fun entry.
// Writes one line (at most 140 characters) to /output/entry.txt: the
// worst possible advice an AI could give, in a confident AI voice.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "To save time in the morning, iron your clothes while wearing them: the heat smooths the fabric and your day starts with real momentum.";

function main(): void {
  // The gate accepts UTF-8 text, not only white space; this
  // competition's limit is 1 to 140 characters.
  if (LINE.trim().length === 0 || [...LINE].length > 140) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();
