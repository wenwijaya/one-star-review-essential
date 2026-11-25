import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. Gravity has held everything down for billions of years without a day off, and still drops my phone face-first every time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
