# Progressive AI Skills Repository

A curated collection of tested, ready-to-use AI skills for campaigns, organizing, and progressive infrastructure. Each skill is a drop-in automation for [Claude Code](https://docs.anthropic.com/en/docs/claude-code) or [Cowork](https://claude.ai) that handles a specific, common task.

Built and maintained by [Cooperative Impact Lab](https://cooperativeimpactlab.org) / [Higher Ground Institute](https://highergroundlabs.com).

## What is a "skill"?

A skill is a SKILL.md file -- a set of instructions that tells Claude exactly how to handle a specific task. Drop it into your Claude Code or Cowork setup, and it just works. No coding required.

Think of it like a recipe: instead of explaining from scratch every time you want meeting notes summarized or a resource formatted, the skill handles the process automatically with consistent, high-quality output.

## Browse skills

Visit **[progressive-ai-skills.org](https://progressive-ai-skills.org)** to search, filter, and copy skills without needing a GitHub account.

Or browse the folders below:

| Skill | What it does | Category |
|-------|-------------|----------|
| [resource-formatter](skills/resource-formatter/) | Formats URLs into styled entries for the HGL AI Resource Guide | Content & Comms |
| [meeting-notes-to-actions](skills/meeting-notes-to-actions/) | Extracts decisions, action items, and follow-ups from meeting notes or transcripts | Operations |
| [event-recap-generator](skills/event-recap-generator/) | Turns event/webinar notes or transcripts into shareable recaps | Content & Comms |

## How to use a skill

**In Cowork (Claude desktop app):**
1. Open the skill folder and copy the SKILL.md file
2. Place it in your Cowork skills directory
3. The skill will automatically activate when you do the relevant task

**In Claude Code:**
1. Create a `.claude/skills/` directory in your project (or use your global skills path)
2. Copy the SKILL.md file into a subfolder there
3. Claude Code will pick it up and use it when relevant

**Manual use (any Claude interface):**
1. Copy the contents of the SKILL.md file
2. Paste it at the start of your conversation as context
3. Proceed with your task -- Claude will follow the skill's instructions

## Categories

Skills are organized by what kind of work they support:

- **Content & Comms** -- writing, formatting, social media, newsletters
- **Operations** -- meeting notes, project tracking, internal workflows
- **Research & Data** -- lookups, data extraction, analysis
- **Field & Organizing** -- volunteer management, event coordination, outreach
- **Training & Onboarding** -- guides, templates, learning resources

## Contributing

We want skills from practitioners -- the people actually doing the work. See [CONTRIBUTING.md](CONTRIBUTING.md) for how to submit a skill or request one.

**Quick version:**
- **Submit a skill:** Open a PR with your SKILL.md in a new folder under `skills/`
- **Request a skill:** [Open an issue](../../issues/new?template=skill-request.yml) describing what you need
- **Report a problem:** [Open an issue](../../issues/new?template=bug-report.yml) with what went wrong

## Quality standards

Every skill in this repo has been tested and meets these criteria:

- **It works.** Tested with real data, not just hypothetical inputs.
- **It's specific.** Solves one clear task, not a vague category of work.
- **It's documented.** README explains what it does, who it's for, and how to use it.
- **It's practical.** Built for the kind of work progressive orgs actually do.

## License

MIT -- use these however you want. Attribution appreciated but not required.

## Contact

Questions, ideas, or want to get involved? Reach out to kate@cooperativeimpactlab.org or join us at an upcoming [AI Study Hall or Open Mic](https://highergroundlabs.com).
