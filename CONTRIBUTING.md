# Contributing to Progressive AI Skills

Thanks for wanting to contribute. This repo exists because practitioners share what works -- so your skills, feedback, and requests make it better for everyone.

## Ways to contribute

### 1. Submit a new skill

If you've built something that works and could help others, we want it.

**What makes a good skill:**
- Solves a specific, repeatable task (not a one-off)
- Has been tested with real data at least a few times
- Is useful to more than just you -- other campaigns, orgs, or practitioners could use it
- Follows the format below

**How to submit:**
1. Fork this repo
2. Create a new folder under `skills/` with a kebab-case name (e.g., `skills/fec-donor-lookup/`)
3. Add your SKILL.md file following the format below
4. Add a README.md for your skill folder (see existing skills for examples)
5. Open a pull request with a short description of what the skill does and how you've tested it

**If you're not comfortable with GitHub**, you can also email your SKILL.md file to kate@cooperativeimpactlab.org and we'll add it for you.

### 2. Request a skill

Have a task you do repeatedly that could be automated? Tell us about it.

[Open a Skill Request issue](../../issues/new?template=skill-request.yml) or email kate@cooperativeimpactlab.org with:
- What task you need automated
- Who would use it (your role, your org type)
- What the input looks like (a transcript? a CSV? a URL?)
- What the output should look like
- How often you do this task

### 3. Improve an existing skill

Found a bug, or have a way to make an existing skill better? Open a PR or an issue. Even small improvements help -- better edge case handling, clearer output formatting, or additional examples.

### 4. Test and give feedback

Try a skill with your own data and let us know how it went. What worked? What didn't? Did the output need editing? This kind of feedback is how skills get good.

## Skill file format

Every skill needs a SKILL.md file with this structure:

```markdown
---
name: your-skill-name
description: >
  A clear description of what this skill does and when it should trigger.
  Be specific about the trigger conditions -- what does the user say or do
  that should activate this skill?
---

# Skill Name

A brief explanation of what this skill does and the context it operates in.

## Output Format

Describe exactly what the output should look like. Include examples.

## Steps

Numbered list of what the skill does, in order.

## Tips

Any edge cases, gotchas, or guidance for better results.
```

**Key principles:**
- Be specific about triggers (when should this activate?)
- Show the exact output format with real examples
- Include edge case guidance (what if the input is messy? incomplete?)
- Write in the voice of someone who's done this task many times

## Folder structure

Each skill lives in its own folder:

```
skills/
  your-skill-name/
    SKILL.md          # The skill file (required)
    README.md         # Human-readable description (required)
    examples/         # Example inputs/outputs (optional, encouraged)
```

## Review process

When you submit a PR, we'll review it for:
- **Does it work?** We'll test it with sample data.
- **Is it specific enough?** Vague skills don't trigger well.
- **Is it documented?** Someone unfamiliar should be able to understand what it does.
- **Is it useful to the community?** Does it solve a real problem for progressive orgs?

We aim to review PRs within a week. If your skill needs changes, we'll leave specific feedback.

## Code of conduct

Be helpful, be kind, build things that help the movement. This is a collaborative space for people who want progressive organizations to be more effective with AI.
