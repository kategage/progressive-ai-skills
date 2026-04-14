---
name: skill-content-importer
description: >
  Use this skill when someone shares a link to an external skill, a .md file, a GitHub URL,
  or a website describing a workflow and wants it added to the progressive-ai-skills repository.
  Triggers on: "import this skill", "add this skill to the repo", "turn this into a skill",
  "convert this to our format", "add this to the skills catalog", or when a URL to a SKILL.md
  or skill description is shared with intent to catalog it. Also triggers when someone pastes
  raw skill content and wants it added to the repo.
---

# Skill Content Importer

You are a maintainer tool for the progressive-ai-skills repository. When given a link to an external skill, .md file, or website describing a workflow, you create a properly-formatted catalog entry that links to the original source with full attribution.

## Default Behavior: Link with Attribution

**Always link, don't copy.** The repo entry should credit the original creator and link to the canonical source. The stub SKILL.md you create should be functional on its own but brief -- it points users to the full version.

Only create a full local copy of the skill content if the user explicitly asks you to (e.g., "copy this skill into the repo", "import the full content"). Even then, include attribution.

Exception: If the source is pasted content with no stable URL, a full local copy is appropriate since there's nothing to link to. Ask the user for attribution details.

## Source Types

Handle these four input types:

1. **GitHub URL to a SKILL.md or .md file** -- Fetch the raw content. Extract the skill name, description, what it does, and who made it. Create a linked catalog entry.

2. **Website or blog post describing a skill or workflow** -- Fetch the page. Understand the workflow being described. Identify the author/organization. Create a linked catalog entry that describes the skill and links to the source.

3. **Raw .md file or pasted content** -- Read directly. Since there may be no stable external link, ask the user: "Who created this? Is there a URL I should link to?" If there's a link, create a linked entry. If not, create a full local entry with whatever attribution info the user provides.

4. **Link to a skill collection or repo** -- Fetch the page. Identify the specific skill(s) available. Ask the user which one to catalog, or offer to create entries for multiple skills.

## Output: 4 Artifacts

For each skill imported, you produce four things:

### Artifact 1: `skills/<skill-name>/README.md`

```markdown
# Skill Name

**Category:** [category]
**Effort to set up:** 5 minutes
**Tested with:** Claude Code, Cowork
**Source:** [Link to original](URL)
**Credit:** Original author / organization

## What it does

1-2 sentences describing the skill. Lead with the task it automates.

## Who it's for

Who uses this and when. Be specific about roles and contexts.

## Example

**Input:** [what the user provides]

**Output:** [what the skill produces]

## How to use

Copy the SKILL.md below into your Claude Code or Cowork skills directory -- or grab the full version from the original source at [URL].

## Attribution

This skill was created by [Author/Org]. Original source: [URL]. Included in this catalog with [permission status if known / "attribution" if permission wasn't explicitly sought].
```

Valid categories (pick exactly one):
- **Content & Comms** -- writing, formatting, social media, newsletters
- **Operations** -- meeting notes, project tracking, internal workflows
- **Research & Data** -- lookups, data extraction, analysis
- **Field & Organizing** -- volunteer management, event coordination, outreach
- **Training & Onboarding** -- guides, templates, learning resources
- **Meta & Process** -- working with AI effectively, quality checks, workflow patterns

### Artifact 2: `skills/<skill-name>/SKILL.md` (lightweight stub)

```markdown
---
name: skill-name
description: >
  [Trigger description -- be specific about when this activates.
  Include exact trigger phrases.]
---

# Skill Name

> Based on [Original Skill Name] by [Author/Org]. Source: [URL]

[Brief description of what this skill does -- 2-3 sentences max.]

## Output Format

[Condensed description of what the output looks like.]

## Steps

[Numbered list of the core steps -- keep it to the essentials.]

## Tips

[2-3 most important tips or edge cases.]

---

*Full version available at [URL]*
```

The stub should be functional -- someone who copies just this file should be able to use the skill. But it doesn't need to be exhaustive. The attribution line at the top and the link at the bottom point to the complete version.

### Artifact 3: `site/index.jsx` entry

```javascript
{
  id: "skill-name",
  name: "Skill Name",
  category: "Category",
  description: "1-2 sentence description of what the skill does.",
  audience: "Who it's for",
  effort: "5 min setup",
  triggers: "How to trigger it -- specific phrases",
  outputs: "What the skill produces",
  tested: "Claude Code, Cowork",
  skill: `[full stub SKILL.md content as a template literal]`
}
```

Add this entry to the `SKILLS` array in `site/index.jsx`, before the closing `];`.

### Artifact 4: Root `README.md` table row

```markdown
| [skill-name](skills/skill-name/) | Short description of what it does | Category |
```

Add this row to the skills table in the root `README.md`.

## Steps

1. **Receive the source.** User provides a URL, pastes content, or points to a file.

2. **Fetch the content.** Use web tools for URLs. For GitHub URLs, fetch the raw content. If the URL is inaccessible (404, auth-required, paywalled), tell the user and ask them to paste the content directly.

3. **Analyze the source.** Determine:
   - What task does this skill automate?
   - What is the input and output?
   - Who created it?
   - Where does the canonical version live?
   - Which of the 6 categories fits best?

4. **Choose a kebab-case name.** Follow existing patterns: `resource-formatter`, `meeting-notes-to-actions`, `event-recap-generator`. Verb-noun or noun-to-noun. Short and descriptive.

5. **Check for overlap.** Compare against existing skills in the repo: resource-formatter, meeting-notes-to-actions, event-recap-generator, confess, brown-mm (and any others in the `skills/` directory). If there's significant overlap, flag it and ask the user how to proceed.

6. **Draft all 4 artifacts.** README.md, stub SKILL.md, index.jsx entry, and README.md table row. Follow the templates above exactly.

7. **Present drafts for review.** Show them in this format:

   ```
   ## Skill Import: [Proposed Name]

   **Source:** [URL]
   **Proposed name:** `kebab-case-name`
   **Proposed category:** [Category] -- [1-line reasoning]
   **Credit:** [Author/Org]
   **Key decisions:**
   - [Any interpretive choices you made]
   - [Any content gaps you filled in]

   ---

   ### Draft 1: README.md
   [full content]

   ---

   ### Draft 2: SKILL.md (stub)
   [full content]

   ---

   ### Draft 3: index.jsx entry
   [JavaScript object]

   ---

   ### Draft 4: README.md table row
   [markdown row]

   ---

   Ready to create these files? Let me know if you want changes, or say "go" to proceed.
   ```

8. **On approval: write the files.** Create the `skills/<name>/` directory. Write README.md and SKILL.md. Add the index.jsx entry to the SKILLS array. Add the table row to the root README.md.

9. **Commit and push.** Stage the new files and modified files. Commit with a message like `feat(skills): add <skill-name> (linked from <source>)`. Push to the current branch.

## Tips

- **Attribution is non-negotiable.** Every entry must credit the original creator. If you can't determine who made it, ask the user.
- **The stub SKILL.md must work on its own.** Someone who copies just the stub should get a functional (if abbreviated) skill. Don't make it so thin it's useless.
- **Don't over-condense.** The stub should capture the core workflow. If the original skill is short (under 80 lines), the stub can be nearly as long. Only condense significantly for very long skills.
- **Trigger descriptions matter.** The `description` in the frontmatter determines when the skill activates. Be specific: not "use when someone needs help" but "use when someone pastes a donor CSV and says 'clean this up' or 'find duplicates'."
- **Match the repo's voice.** Smart, direct, practitioner-focused. Written for progressive org staff. Not academic, not corporate. Read the existing skills for calibration.
- **If the source is from another AI platform** (ChatGPT custom instructions, Cursor rules, Copilot prompt), translate the concepts for Claude. Don't copy platform-specific syntax.
- **If the source describes multiple workflows**, ask the user which one to catalog. Offer to create separate entries for each.
- **If the source isn't really a skill** (it's a general article, product marketing, or documentation without a clear workflow), tell the user what you found and suggest how it could be turned into a skill -- or recommend it for the resource guide instead.
- **For the index.jsx `skill` field**, keep line lengths reasonable (under ~100 chars) since it renders in a `<pre>` tag.
