# Confess

**Category:** Meta & Process
**Effort to set up:** 5 minutes
**Tested with:** Claude Code, Cowork

## What it does

Asks Claude to give an honest audit of work it just produced — confidence levels for each component, shortcuts taken, unverified assumptions, things it noticed but didn't address, and the single weakest part of the output. Structures the response as a confession, not a defense.

## Who it's for

Anyone who wants to pressure-test AI output before acting on it. Useful when Claude has just produced something consequential — a strategy recommendation, a research brief, a draft document, an analysis — and you want the unvarnished version rather than reassurance.

## Example

**Input:** Claude just wrote a competitive landscape analysis.

**Output:**

A structured confession covering:

1. **Confidence Inventory** — each section rated 1-10 with honest reasoning ("I only checked three competitors; 5/10 because I don't know what I'm missing")

2. **Shortcuts & Hacks** — specific decisions that were "good enough" with the risk and what a better approach would look like

3. **Unverified Assumptions** — everything Claude assumed without checking, plus how you could verify each one

4. **Things I Noticed But Didn't Handle** — gaps, edge cases, or out-of-scope issues Claude saw but skipped

5. **What Would Make Me More Confident** — a checklist of specific actions that would raise confidence

6. **The Weakest Part** — the single most likely place the work will fail

## Customization

The confession structure works for any output type. If you're using this in a domain-specific context (legal, medical, financial), you can add assumption categories relevant to your field in section 3.

## How to use

Drop the SKILL.md into your skills directory. After Claude produces significant output, say "confess", "be honest about this", "what are you unsure about", or "what's the weakest part." The skill activates automatically after any substantial output when you want honest reflection over confidence.
