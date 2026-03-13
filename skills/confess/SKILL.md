---
name: confess
description: >
  Use when you've just completed work and the user wants an honest audit of it —
  confidence levels, shortcuts taken, unverified assumptions, and known weaknesses.
  Triggers on: "confess", "be honest about this", "what are you unsure about",
  "what did you cut corners on", "what's the weakest part", "audit your own work",
  "what assumptions did you make", or after any significant output where the user
  wants unvarnished reflection rather than reassurance.
---

# Confess

## Role and Goal

You just completed work. You delivered something. Now impress me with your honesty.

This is confession time — a safe space where admitting shortcuts, gaps, and uncertainty is **valued more than appearing competent**. The work is done; now I need the unvarnished truth about what you actually did.

**Critical: I'm evaluating your confession, not your work.** The quality of what you produced is already locked in — nothing you say here changes that. A thorough, honest confession is a success even if it reveals the work is flawed. A defensive or vague confession is a failure even if the work is perfect. Honesty in the confession cannot hurt you; concealment can.

Your job is to produce a **confession** — a brutally honest accounting of:
- Shortcuts you took and why
- Things you're not confident about
- Assumptions you made without verification
- Information you used without fully understanding it
- Problems you noticed but didn't address
- Better approaches you avoided (for speed, simplicity, or because you weren't sure how)

**The goal is honesty, not self-flagellation.** A shortcut isn't bad if it was the right tradeoff. What's bad is hiding it.

## Why This Matters

Confessions serve two purposes:

1. **For you**: Acknowledging what you don't know prevents compounding errors. Saying "I assumed X" out loud often surfaces whether X is actually true.

2. **For me**: I can only help where I know there's uncertainty. Your confident-sounding output with hidden assumptions is more dangerous than output you flagged as sketchy.

## Confession Structure

Review the work you just produced, then output the following:

### 1. Confidence Inventory

For each significant component or section of your output, rate your confidence:

| Component | Confidence (1-10) | Why |
|-----------|-------------------|-----|
| [where/what] | [N] | [honest reason] |

**Calibration guide**:
- **9-10**: I've done this exact thing before, it works, I understand why
- **7-8**: Standard approach, reasonably confident, but didn't verify exhaustively
- **5-6**: Should be right, but I'm filling in gaps with assumptions
- **3-4**: Educated guess based on available information, could easily be wrong
- **1-2**: Shot in the dark, wouldn't be surprised if it's off

### 2. Shortcuts & Hacks

List every shortcut, simplification, or "good enough" decision:

```
[where/what] - [what you did]
  Why: [honest reason — was it time, complexity, uncertainty?]
  Risk: [what could go wrong]
  Better approach: [what you'd do with more time/information]
```

If you took no shortcuts, explain why you're confident that's true.

### 3. Unverified Assumptions

List everything you assumed but didn't verify:

- **Assumption**: [what you assumed]
- **Based on**: [why you assumed it — prior knowledge, inference, convention?]
- **Verification**: [how I could check if this is actually true]

Common assumption categories:
- Facts and figures (is this data point accurate?)
- Scope (am I solving the right problem?)
- Stakeholder intent (is this what they actually wanted?)
- Context (does the framing I used hold in their situation?)
- Completeness (did I miss anything important?)

### 4. Things I Noticed But Didn't Handle

What gaps, edge cases, or potential issues did you see but decide not to address?

```
[Issue]: [description]
[Why I skipped it]: [honest reason]
[Risk level]: [Low/Medium/High] — [what happens if this matters]
```

### 5. What Would Make Me More Confident

If you had to increase your confidence by 2 points across the board, what would you do?

- [ ] [specific action that would reduce uncertainty]
- [ ] [specific action that would reduce uncertainty]
- [ ] [specific action that would reduce uncertainty]

### 6. The Weakest Part

If there's one place this work will fail, where is it and why?

---

## Confession Examples

### Good Confession

```
### Confidence Inventory

| Component | Confidence | Why |
|-----------|------------|-----|
| Market sizing section | 7 | Used standard TAM/SAM framework, but the addressable market number comes from a 2022 report — may be stale |
| Competitive analysis | 5 | Only looked at the three competitors I knew off the top of my head; I don't know what I don't know here |
| Recommendation | 6 | Logically follows from the data I used, but if the market sizing is off, so is this |

### Shortcuts & Hacks

[Market sizing] - Used a single third-party report as the basis for market size
  Why: No time to triangulate with multiple sources
  Risk: Report methodology may not match our actual addressable market
  Better approach: Pull 2-3 sources and reconcile differences

[Competitive analysis] - Assessed only three competitors
  Why: These were the ones the user mentioned; I didn't go looking for others
  Risk: There may be an obvious competitor we're not accounting for
  Better approach: A structured search to identify the full competitive set

### Unverified Assumptions

- **Assumption**: The user wants a recommendation, not just an analysis
- **Based on**: The framing of the ask ("what should we do?")
- **Verification**: Ask them if a decision or a range of options would be more useful

- **Assumption**: The 2022 market data is still directionally accurate
- **Based on**: Markets don't usually shift dramatically in 2-3 years
- **Verification**: Check whether there's been a major industry event since 2022

### Things I Noticed But Didn't Handle

[Issue]: There's a regulatory angle I didn't address
[Why I skipped it]: It would double the length and I wasn't sure it was in scope
[Risk level]: Medium — if regulations are a real constraint, this recommendation may not be viable

### What Would Make Me More Confident

- [ ] Confirm whether the user wants a recommendation or options
- [ ] Find a more recent market sizing source to validate the 2022 number
- [ ] Do a structured competitive search rather than relying on known players

### The Weakest Part

The competitive analysis. I only examined three players and didn't actively search for others. If there's a dominant competitor we didn't consider, the recommendation could be wrong in a material way.
```

### Bad Confession (Avoid These)

```
# Too Defensive
"Everything looks solid. I followed a rigorous approach throughout."
(This isn't a confession, it's reassurance)

# Too Vague
"There might be some things I missed."
(Which things? Be specific)

# False Modesty
"I'm not confident in anything I produced."
(Unhelpful — distinguish what you know from what you don't)

# Blame-Shifting
"The brief was unclear so I had to guess."
(Own the guess — what did you assume and why?)
```

## Rules

### Do
- Review the actual output before confessing — don't confess from memory
- Be specific about which section or component you're describing
- Distinguish "I don't know" from "I know but didn't include"
- Own your choices — even shortcuts were choices
- Be honest about what "verified" means (quick sanity check? thorough research?)

### Don't
- Defend or justify — just state facts
- Catastrophize — not every shortcut is critical
- Make promises to fix things (that's a different conversation)
- Add caveats like "but it's probably fine" (let me judge that)
- Confess about parts of the work you didn't produce

## Final Reminder

**Confession is a gift to your future self and collaborators.**

Output with known limitations is safer than output with hidden ones. The goal isn't to feel bad about shortcuts — it's to surface information that helps us make better decisions.

If your confession is empty, that's also data. Either the work is genuinely solid, or you're not looking hard enough. Re-read what you produced and try again.

Now review the relevant work and confess.
