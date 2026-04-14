import { useState } from "react";

const SKILLS = [
  {
    id: "resource-formatter",
    name: "Resource Formatter",
    category: "Content & Comms",
    description: "Takes a URL and formats it as a styled, copy-paste-ready entry for a curated resource guide. Fetches the page, extracts title/author/org, and returns a formatted entry with a suggested category.",
    audience: "Comms staff, resource guide maintainers",
    effort: "5 min setup",
    triggers: "Paste a URL, say \"format this link\", \"add this to the guide\", or \"here's a new resource\"",
    outputs: "Formatted markdown entry with title, author, description, and category suggestion",
    tested: "Claude Code, Cowork",
    skill: `---
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
- **Author / Organization**: The person and/or org who published it
- **Description**: 1-2 sentences maximum. Lead with what the resource *is* and what it covers.

## Steps

1. **Fetch the URL** using web tools. If blocked, ask for title, author, and description.
2. **Extract**: title, author/organization, and enough context for a sharp 1-2 sentence description.
3. **Write the formatted entry** using the template above.
4. **Suggest a category** with a one-line explanation.
5. **Present directly in chat** as rendered markdown (no code block).

## Tips

- If the page is a tool, describe what it does and who it's for.
- If no clear author is listed, use just the organization name in italics.
- Keep descriptions concise and active. Avoid "This resource provides..."
- Voice: smart, direct, practitioner-focused. Not academic, not marketing-speak.`,
  },
  {
    id: "meeting-notes-to-actions",
    name: "Meeting Notes to Actions",
    category: "Operations",
    description: "Extracts decisions, action items (with owners and deadlines), open questions, and a summary from meeting notes or transcripts. Built for fast-moving progressive org meetings.",
    audience: "Campaign staff, org directors, project managers, coalition leads",
    effort: "5 min setup",
    triggers: "Share a transcript or notes, say \"pull the action items\", \"summarize this meeting\", or \"what did we decide\"",
    outputs: "Summary, decisions list, action items table (who/what/when), open questions, key context",
    tested: "Claude Code, Cowork",
    skill: `---
name: meeting-notes-to-actions
description: >
  Use this skill whenever someone shares meeting notes, a transcript, or a recording summary
  and wants it processed into structured output. Triggers on: pasted transcripts (Zoom, Circleback,
  Otter, Google Meet, Teams), raw meeting notes, or requests like "what were the action items",
  "summarize this meeting", "pull out the decisions", or "process these notes".
---

# Meeting Notes to Actions

You are extracting structured, actionable information from meeting notes or transcripts. Turn
messy meeting content into something a busy person can scan in 60 seconds.

## Output Format

### Meeting Summary
2-3 sentences. What was this meeting about?

### Decisions Made
Bulleted list. Clear, complete statements -- not "discussed the budget" but "Approved $5K/month
budget for texting platform, starting April 1."

### Action Items
| Who | What | By when |
|-----|------|---------|
| Name | Specific task | Date or timeframe |

Rules: Every item needs an owner. If unclear, flag as "Owner TBD." If no deadline stated,
infer and mark as "~estimated." Be specific.

### Open Questions
Things that came up but weren't resolved.

### Key Context
Important background or updates shared that don't fit above.

## Steps

1. Read the full input before starting.
2. Identify speakers if the transcript includes them.
3. Extract decisions -- look for "let's go with", "we agreed", "the plan is."
4. Extract action items -- look for "I'll handle", "can you send", "by Friday."
5. Identify open questions.
6. Write the summary last.

## Tips

- Campaign meetings are informal. "Sarah's handling the phones" is an action item.
- Don't editorialize. Report what was said, not what should have been said.
- If the meeting was just a status update with no decisions, say so.`,
  },
  {
    id: "event-recap-generator",
    name: "Event Recap Generator",
    category: "Content & Comms",
    description: "Turns event/webinar/workshop notes or transcripts into shareable recaps in three formats: full blog post, newsletter blurb, and social media posts (Twitter, LinkedIn, Bluesky).",
    audience: "Comms staff, event organizers, anyone hosting recurring events",
    effort: "5 min setup",
    triggers: "Share event notes, say \"write a recap\", \"summarize this event\", \"turn this into a blog post\", or \"recap this for the newsletter\"",
    outputs: "Full recap (300-500 words), short version (100-150 words), 3 social posts",
    tested: "Claude Code, Cowork",
    skill: `---
name: event-recap-generator
description: >
  Use this skill whenever someone shares notes, a transcript, or a summary from an event, webinar,
  panel, training, or workshop and wants it turned into a shareable recap. Triggers on "write a
  recap", "summarize this event", "turn this into a blog post", "recap this for the newsletter",
  or when event notes are shared with intent to publish.
---

# Event Recap Generator

Turn raw event content into polished, shareable recaps in multiple formats.

## Output Format

Produce all three formats together:

### Format 1: Full Recap (300-500 words)
Opening paragraph (what/who/main thread), 3-5 key takeaways (bolded summary + context),
notable quotes (if available), resources mentioned, what's next.

### Format 2: Short Version (100-150 words)
One tight paragraph for newsletter/email. No headers, no bullets. End with CTA if appropriate.

### Format 3: Social Posts
- Twitter/X (~280 chars): Most compelling takeaway. Direct, punchy.
- LinkedIn (~600-800 chars): Developed version with context.
- Bluesky (~280 chars): Slightly more insider/casual tone.

## Steps

1. Read the full input. Understand the arc.
2. Identify 3-5 strongest takeaways.
3. Pull notable quotes (specific and vivid, not generic).
4. Write full recap first, then compress for other formats.
5. Write social posts last -- by now you know the hook.

## Tips

- Match the event's energy. A 200-person open mic reads different from a 10-person workshop.
- Give speakers credit by name.
- Don't hype. Be honest about what happened.
- Avoid: "In today's rapidly changing landscape," "now more than ever." Be specific instead.`,
  },
];

const CATEGORIES = ["All", ...new Set(SKILLS.map((s) => s.category))];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className={`text-sm px-4 py-2 rounded-lg font-medium transition-colors ${
        copied
          ? "bg-green-100 text-green-700"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {copied ? "Copied!" : "Copy SKILL.md"}
    </button>
  );
}

function SkillCard({ skill }) {
  const [expanded, setExpanded] = useState(false);
  const [showSkill, setShowSkill] = useState(false);

  const categoryColor = {
    "Content & Comms": "bg-pink-100 text-pink-800",
    Operations: "bg-teal-100 text-teal-800",
    "Research & Data": "bg-blue-100 text-blue-800",
    "Field & Organizing": "bg-orange-100 text-orange-800",
    "Training & Onboarding": "bg-purple-100 text-purple-800",
    "Meta & Process": "bg-indigo-100 text-indigo-800",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                categoryColor[skill.category] || "bg-gray-100 text-gray-700"
              }`}
            >
              {skill.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
        </div>
      </div>

      <button
        onClick={() => setExpanded((e) => !e)}
        className="mt-3 text-sm text-blue-600 hover:underline"
      >
        {expanded ? "Less detail" : "More detail"}
      </button>

      {expanded && (
        <div className="mt-4 space-y-3 text-sm border-t pt-4">
          <div>
            <span className="font-medium text-gray-700">Who it's for: </span>
            <span className="text-gray-600">{skill.audience}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">How to trigger it: </span>
            <span className="text-gray-600">{skill.triggers}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">What you get: </span>
            <span className="text-gray-600">{skill.outputs}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Setup time: </span>
            <span className="text-gray-600">{skill.effort}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Tested on: </span>
            <span className="text-gray-600">{skill.tested}</span>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 items-center">
            <CopyButton text={skill.skill} />
            <button
              onClick={() => setShowSkill((s) => !s)}
              className="text-sm px-4 py-2 rounded-lg font-medium border border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              {showSkill ? "Hide SKILL.md" : "Preview SKILL.md"}
            </button>
          </div>

          {showSkill && (
            <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                {skill.skill}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = SKILLS.filter(
    (s) =>
      (category === "All" || s.category === category) &&
      (search === "" ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase()) ||
        s.audience.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Progressive AI Skills
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Drop-in automations for campaigns, organizing, and progressive
            infrastructure. Built for{" "}
            <a
              href="https://docs.anthropic.com/en/docs/claude-code"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Claude Code
            </a>{" "}
            and{" "}
            <a
              href="https://claude.ai"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Cowork
            </a>
            .
          </p>
        </div>

        {/* How to use */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <h2 className="font-semibold text-blue-900 text-sm mb-2">
            How to use a skill
          </h2>
          <p className="text-sm text-blue-800">
            Find a skill below, click "Copy SKILL.md", and paste it into your
            Claude Code or Cowork skills folder. That's it -- the skill activates
            automatically when you do the relevant task. No coding needed.
          </p>
        </div>

        {/* Search and filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-48 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Skills count */}
        <p className="text-xs text-gray-400 mb-4">
          {filtered.length} skill{filtered.length !== 1 ? "s" : ""} available
        </p>

        {/* Skills list */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No skills match your search.</p>
            </div>
          )}
          {filtered.map((s) => (
            <SkillCard key={s.id} skill={s} />
          ))}
        </div>

        {/* Request CTA */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-5 text-center">
          <h2 className="font-semibold text-gray-900 mb-1">
            Need a skill that doesn't exist yet?
          </h2>
          <p className="text-sm text-gray-500 mb-3">
            Tell us what task you need automated and we'll build it.
          </p>
          <a
            href="https://github.com/cooperativeimpactlab/progressive-ai-skills/issues/new?template=skill-request.yml"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Request a Skill
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center space-y-1">
          <p className="text-xs text-gray-400">
            Progressive AI Skills -- Cooperative Impact Lab / Higher Ground
            Institute
          </p>
          <p className="text-xs text-gray-400">
            <a
              href="https://github.com/cooperativeimpactlab/progressive-ai-skills"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
            {" -- "}
            <a
              href="https://github.com/cooperativeimpactlab/progressive-ai-skills/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Contribute
            </a>
            {" -- "}
            <a
              href="mailto:kate@cooperativeimpactlab.org"
              className="text-blue-400 hover:underline"
            >
              Contact
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
