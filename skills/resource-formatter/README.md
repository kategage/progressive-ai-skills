# Resource Formatter

**Category:** Content & Comms
**Effort to set up:** 5 minutes
**Tested with:** Claude Code, Cowork

## What it does

Takes a URL and formats it as a styled resource entry for a curated resource guide. Fetches the page, extracts the key details (title, author, organization), and returns a copy-paste-ready entry with a suggested category.

## Who it's for

Anyone maintaining a curated list of resources, tools, or reading materials -- especially for an audience of practitioners, campaign staff, or organizers. Originally built for the [HGL AI Resource Guide](https://highergroundlabs.com/hgi-ai-resource-guide/).

## Example

**Input:** `https://forgeorganizing.org/article/power-not-panic`

**Output:**

**[Power Not Panic: Why Organizers Must Engage with AI](https://forgeorganizing.org/article/power-not-panic)** -- *Oluwakemi Oso and Lee Anderson / Forge Organizing* -- The case for engagement. AI adoption is a power question, and organizers who disengage cede the field. Required reading before anything else on this list.

Suggested category: **Essential Contextual Reading**

## Customization

The SKILL.md includes specific categories for the HGL guide. To adapt this for your own resource list, replace the categories section with your own and update the example entries to match your style.

## How to use

Drop the SKILL.md into your skills directory, then just paste a URL into the conversation. The skill will activate automatically.
