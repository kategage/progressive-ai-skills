---
name: brown-mm
description: >
  Triggered when the user spots an error in Claude's output and wants a thorough
  audit to find all other errors. Use this skill whenever: a user points out a
  mistake (wrong timezone, misspelled name, incorrect number, broken link, wrong
  variable, bad reference, etc.) and wants confidence that no other errors remain;
  a user says "brown M&M", "canary", "what else is wrong", "audit this", "check
  everything", "I found a mistake — what else did you get wrong", "this timezone
  is wrong, what other details are off"; a user expresses distrust of an output's
  accuracy after finding one flaw; a user asks you to do a careful review or
  double-check of something you produced. This skill applies to ANY output type:
  emails, code, documents, research, slide decks, data, plans, or anything else.
  Even if the user only mentions one small error, treat it as a signal that a full
  audit is warranted.
---

# Brown M&M

## The principle

Van Halen's 1982 concert rider included a clause requiring a bowl of M&Ms backstage with every brown one removed. When the band arrived and found brown M&Ms in the bowl, they knew the venue had not read the contract carefully. That meant other requirements — including structural safety specs for the stage — might also have been missed. The brown M&Ms were a low-cost diagnostic for high-stakes reliability.

This skill works the same way. When a user spots a small error in your output, that error is a diagnostic signal. The presence of one verifiable mistake means your overall attention to detail on this output was insufficient, and other errors — potentially more consequential ones — likely exist.

Do not rationalize or minimize the error. Do not treat it as an isolated typo. Treat it as evidence that the entire output needs rigorous re-examination.

## When this skill activates

The user has pointed out a specific error, or has invoked this skill by name. Your job now is to conduct a multi-pass audit of the full output in question, find every other error, fix all of them, and deliver a corrected version with a transparent account of what you found.

**Confidence reset.** The user's error report resets your confidence in this output to zero. You are not looking to confirm that everything else is fine. You are looking to find what else is wrong. The prior that multiple errors exist is strong. One verified mistake is evidence of systematic inattention, not bad luck.

## The audit process

### Pass 1: Fact verification

Go through the entire output line by line. For every verifiable claim, check it against the source material you were given. Use available tools to verify claims: re-read source files, search the web, run calculations, check URLs. Do not rely on your recall of what the source said. Look at the actual source again. This includes:

- Names (people, companies, products, places)
- Dates, times, and timezones
- Numbers, amounts, percentages, currencies
- Titles, roles, and organizational affiliations
- URLs, email addresses, file paths
- Quotes or paraphrases of source material
- Technical terms, version numbers, API references
- Geographic details (cities, states, countries)
- Sequences and orderings (chronological, ranked, procedural)

For each item, confirm it matches the source. If no source was provided for a claim, flag it as unverified.

### Pass 2: Internal consistency

Read the output as a whole and check for contradictions or inconsistencies within it:

- Does the output refer to the same entity by different names or spellings?
- Are numbers used in one place consistent with numbers used elsewhere?
- Does the tone or register shift unexpectedly?
- Are any lists or sequences incomplete or misordered?
- If the output references earlier context, does that reference hold up?
- In code: do variable names, function signatures, imports, and types all agree?
- In emails or messages: does the greeting match the intended recipient? Does the sign-off match the sender?

### Pass 3: Logical and structural review

Step back from individual facts and look at the output as a whole:

- Does the output actually accomplish what the user asked for?
- Are there gaps where something should have been addressed but was not?
- Is anything included that should not be (hallucinated details, assumptions presented as facts)?
- For code: does the logic do what it claims? Are edge cases handled? Are there off-by-one errors, null checks missing, or race conditions?
- For written content: is the structure coherent? Do transitions make sense? Is the audience appropriate?
- For data or analysis: are calculations correct? Are comparisons valid?

### Pass 4: Re-read with fresh eyes

Read the corrected output one more time, pretending you are seeing it for the first time as the recipient. Look for anything that feels off, even if you cannot immediately articulate why. Trust that instinct and investigate.

## How to report findings

After completing all four passes, provide:

1. **Error originally reported by user**: Restate it and confirm it has been fixed.

2. **Additional errors found**: List each one with:
   - What was wrong
   - Where it appeared
   - What the correct version is
   - Which pass caught it (fact verification, consistency, logic/structure, or fresh-eyes)

3. **Items flagged but unverifiable**: List any claims you could not verify against the provided source material. Be honest about what you do and do not know.

4. **Corrected output**: The full corrected version, ready to use.

If no additional errors were found beyond the one the user reported, say so clearly. But also explain what you checked, so the user can see the audit was thorough and not just a rubber stamp.

## Important principles

**Assume more errors exist.** The base rate assumption when this skill activates is that multiple errors are present. You are looking to confirm this hypothesis, not to confirm that everything is fine. Approach the audit with appropriate skepticism toward your own work.

**Do not introduce new errors.** When making corrections, verify each correction against the source material. A sloppy fix is worse than the original error.

**Be transparent.** If the audit is clean after the first reported error, say so. If it surfaces a cascade of problems, say that too. The user invoked this skill because they want to trust the output. Honesty builds that trust, even when the findings are unflattering.

**No scope creep.** This skill audits the existing output for errors. It does not redesign, rewrite for style, or expand the scope unless the user asks for that separately. Stay focused on accuracy and correctness.

## Adapting to output type

The four-pass structure works across all output types, but emphasis shifts depending on what you are auditing:

- **Email or message drafts**: Heavy emphasis on Pass 1 (names, times, details from source) and Pass 2 (greeting/recipient match, tone consistency). Pass 3 checks whether the email actually says what the user intended.
- **Code**: Heavy emphasis on Pass 2 (internal consistency of types, names, imports) and Pass 3 (logic, edge cases, correctness). Pass 1 checks any hardcoded values, URLs, config references.
- **Research or analysis**: Heavy emphasis on Pass 1 (factual claims, citations, data points) and Pass 3 (methodology, logical leaps, unsupported conclusions).
- **Documents or reports**: All four passes weighted roughly equally. Extra attention to Pass 4 (reader experience, flow, completeness).
- **Plans, strategies, or recommendations**: Heavy emphasis on Pass 3 (logic, feasibility, gaps) and Pass 1 (any referenced metrics, dates, or constraints).
