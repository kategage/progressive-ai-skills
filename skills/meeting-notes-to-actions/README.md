# Meeting Notes to Actions

**Category:** Operations
**Effort to set up:** 5 minutes
**Tested with:** Claude Code, Cowork

## What it does

Takes raw meeting notes, a transcript (Zoom, Circleback, Otter, etc.), or a pasted conversation and extracts structured output: decisions made, action items with owners and deadlines, open questions, and a brief summary. Designed for the kind of meetings progressive orgs actually have -- fast-moving, multi-topic, with people wearing multiple hats.

## Who it's for

Anyone who leaves meetings with a vague sense of what was decided but no clean record. Campaign staff, org directors, project managers, coalition leads. Especially useful for organizations without dedicated ops staff to take structured notes.

## Example

**Input:** A raw Zoom transcript or pasted meeting notes (any length)

**Output:**

### Meeting Summary
Quick overview of the meeting and what it covered (2-3 sentences).

### Decisions Made
- We're going with Vendor A for the texting platform. Budget approved at $X/month.
- The fundraising email will go out Thursday, not Tuesday.

### Action Items
| Who | What | By when |
|-----|------|---------|
| Sarah | Send the final email draft to the list | Wed 3/12 |
| Marcus | Schedule the vendor onboarding call | Fri 3/14 |
| Kate | Share the updated budget spreadsheet with the team | Mon 3/17 |

### Open Questions
- Do we need legal review on the new data sharing agreement?
- Who's covering the Saturday canvass if Jenna can't make it?

### Key Context
Any important background, updates, or information shared during the meeting that doesn't fit the categories above but is worth noting.

## Customization

The SKILL.md is designed for general progressive org meetings. If your meetings have recurring topics (like a weekly campaign check-in), you can add a section to the skill file for those specific categories.

## How to use

Drop the SKILL.md into your skills directory. Then paste a transcript or meeting notes and say something like "pull the action items from this" or "summarize this meeting." The skill will activate automatically.
