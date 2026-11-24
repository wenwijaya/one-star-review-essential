import { mkdirSync, writeFileSync } from "node:fs";

// One-Star Review of Something Essential (program/v1).
// Writes a single deadpan one-star review, 160 characters or fewer,
// of an everyday essential to /output/entry.txt.
const REVIEW =
  "One star. Sleep charges eight hours a night, every night, and still delivers a version of me that needs coffee to operate the coffee machine.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", REVIEW, "utf8");
  } catch (error) {
    console.error("Failed to write entry:", error);
  }
}

main();
