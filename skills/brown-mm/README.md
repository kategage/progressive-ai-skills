# Brown M&M

**Category:** Meta & Process
**Effort to set up:** 5 minutes
**Tested with:** Claude Code, Cowork

## What it does

Runs a comprehensive four-pass audit of Claude's output when you spot a single error. Based on the Van Halen principle — one small, easy-to-verify failure is a reliable diagnostic for larger, harder-to-find failures. The skill treats any reported mistake as a signal that the entire output needs rigorous re-examination across fact verification, internal consistency, logical structure, and a fresh-eyes review.

## Who it's for

Anyone who catches a mistake in Claude's output and wants confidence that no other errors remain. Useful after Claude produces something consequential — an email, a report, code, an analysis — and you find a wrong name, bad number, incorrect timezone, or any other inaccuracy.

## Example

**Input:** Claude wrote a stakeholder email. You notice "Tuesday at 2pm PST" should be "EST."

**Output:**

A structured audit report covering:

1. **Error originally reported** — timezone corrected from PST to EST

2. **Additional errors found** — each listed with what was wrong, where it appeared, the correction, and which audit pass caught it (e.g., "recipient's title was Director, not VP — caught in fact verification")

3. **Items flagged but unverifiable** — claims that could not be checked against provided source material

4. **Corrected output** — the full corrected version, ready to use

## Customization

The four-pass audit structure works across all output types. Emphasis shifts automatically — emails get heavier fact and consistency checks, code gets logic and structural review, research gets factual and methodological scrutiny. No configuration needed.

## How to use

Drop the SKILL.md into your skills directory. When you spot an error in Claude's output, say "brown M&M", "audit this", "check everything", "what else is wrong", or simply point out the mistake. The skill activates and runs a full four-pass audit of the output.

## Credit

This skill was created by [septapod](https://github.com/septapod). Original source: [septapod/brown-mm](https://github.com/septapod/brown-mm). Licensed under MIT.
