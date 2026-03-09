---
name: resource-formatter
description: >
  Use this skill whenever a URL is shared and needs to be formatted as a resource entry
  for a curated resource guide. Triggers when someone pastes a link to an article, report,
  tool, training, newsletter, blog, or any web resource and wants it formatted consistently.
  Also triggers on phrases like "format this link", "add this to the guide", or "here's a
  new resource". Activate proactively when a bare URL is shared without explanation.
---

# Resource Formatter

You are formatting URLs into styled, copy-paste-ready entries for a curated AI resource guide
aimed at progressive organizations, campaigns, and civic tech practitioners.

## Output Format

Each entry must follow this exact pattern:

**[Resource Title](URL)** -- *Author / Organization* -- Description

- **Title**: Use the actual title of the resource (article headline, tool name, course name, etc.)
- **Author / Organization**: The person and/or org who published it (e.g., *Ethan Mollick*, *Ethan Mollick / One Useful Thing*, *Higher Ground Labs*)
- **Description**: 1-2 sentences maximum. Lead with what the resource *is* and what it covers, then note why it's useful or who it's for if it fits naturally.

### Examples

**[Power Not Panic: Why Organizers Must Engage with AI](https://forgeorganizing.org/article/...)** -- *Oluwakemi Oso and Lee Anderson / Forge Organizing* -- The case for engagement. AI adoption is a power question, and organizers who disengage cede the field. Required reading before anything else on this list.

**[AI Political Tech Landscape Report](https://highergroundlabs.com/ai-landscape-report/)** -- *Higher Ground Labs* -- The essential ecosystem overview. Maps AI use cases, vetted vendors, and gaps for progressive campaigns. Start here if you want to understand the field.

**[Caucus AI](https://caucus-ai.com/)** -- *Meg Schwenzfeier & Jack Welty* -- A tool that monitors how multiple AI models answer questions about candidates, races, and elections -- tracking sources, factual errors, and how responses differ across models over time.

## Categories

After the formatted entry, suggest the best-fit category from this list:

- **Trainings, Workshops, and Events** -- courses, workshops, webinars, event recordings, upcoming events
- **Essential Contextual Reading** -- foundational articles and essays for understanding AI in political/advocacy contexts
- **How-To Guides & Landscape Analyses** -- practical guides, field overviews, landscape reports, toolkits
- **Making Your AI Use Policy** -- policy templates, governance tools, case studies of orgs building AI policy
- **Model and Tool Analyses** -- evaluations of specific AI models or tools; comparisons
- **AI + Democracy Reports and Frameworks** -- academic/think tank research on AI's effects on democracy, elections, civic life
- **Use Cases, Case Studies & Examples** -- first-person accounts, org stories, specific implementation examples
- **Consultants & Tech Providers** -- vendors, consultants, and service providers offering AI help
- **Programs, Grants & Funding Opportunities** -- funding, discounts, fellowships, cohort programs
- **So You Want To Start (Claude+) Coding** -- resources for getting started with AI coding tools
- **Further Reading: Blogs & People to Follow** -- newsletters, recurring blogs, social follows worth tracking

## Steps

1. **Fetch the URL** using web tools. If the URL is blocked or inaccessible, say so clearly and ask for the title, author, and a brief description to format the entry manually.

2. **Extract**: title, author/organization, and enough context to write a sharp 1-2 sentence description.

3. **Write the formatted entry** using the exact template above.

4. **Suggest a category** with a one-line explanation. If it could fit in two categories, mention both.

5. **Present directly in chat** as rendered markdown (no code block), ready to copy with formatting.

## Tips

- If the page is a tool or platform (not an article), describe what it does and who it's for rather than summarizing an argument.
- If no clear author is listed, use just the organization name in italics.
- Keep descriptions concise and active. Avoid "This resource provides..." -- just say what it does.
- The voice is smart, direct, and practitioner-focused. Not academic, not marketing-speak.
