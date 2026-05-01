---
name: contact-extractor
description: Scheduled Gmail contact extraction — scans recent emails, pulls out names, emails, phone numbers, organizations, and titles from headers, forwarded messages, signatures, and body text, then saves everything to a deduplicated spreadsheet. Use this skill whenever someone wants to automatically build or maintain a contact list from their email, extract contact info from Gmail, or set up a recurring task that harvests new contacts into a spreadsheet.
---

# Contact Extractor

A Cowork scheduled task that scans Gmail on a recurring basis, extracts contact information from emails, and saves it to a local spreadsheet. Contacts are deduplicated and merged automatically so the spreadsheet stays clean over time.

## Prerequisites

- Gmail MCP connector (for searching and reading emails)
- A workspace folder to store the output spreadsheet
- The `xlsx` skill (for spreadsheet creation — read its SKILL.md before writing any spreadsheet code)

## Setup

Before the first run, confirm with the user:

1. **Which email account** to scan (needed for Gmail search)
2. **Which addresses to exclude** — at minimum, the user's own email addresses. They may have multiple (personal, work, etc.). Store these in a filter list.
3. **Output file name and location** — default to `extracted-contacts.xlsx` in the user's workspace folder
4. **Schedule** — suggest a weekly cadence (e.g., every Friday afternoon) with a retry day (e.g., Monday) to catch missed runs. The user can customize.
5. **Initial backfill window** — suggest `newer_than:30d` for the first run, then a rolling 7-day window for recurring runs.

---

## Data Sources

For each email, extract contacts from these locations:

### 1. Email Headers (From, To, CC)
- **Format:** `Name <email@domain.com>` or bare `email@domain.com`
- **Extract:** email address, first name, last name (split from display name)
- **Filter out:** the user's own addresses (from the exclusion list configured during setup)

### 2. Forwarded Message Blocks
Look for the pattern:
```
---------- Forwarded message ---------
From: Name <email@domain.com>
Date: ...
Subject: ...
To: Name <email@domain.com>
Cc: Name1 <email1>, Name2 <email2>
```

Also handle quoted/nested versions with `>` prefixes and Outlook-style bold names like `*Name*`.

Extract all email addresses from the From, To, and Cc lines within forwarded blocks.

### 3. Signature Blocks
Signatures typically appear after a `--` delimiter or at the end of a message section. Extract:
- **Phone numbers** — normalize all to `(xxx) xxx-xxxx` format
- **Email addresses** in signature lines (often alternate/department emails)
- **Organization and title** when clearly stated
- **Associate signature info with the correct person** — the person whose message section the signature belongs to, not the top-level sender

### 4. Body Text — Selective
- **Phone numbers:** Always extract. Phone numbers in body text are almost always intentional contact sharing.
- **Email addresses:** Only extract when explicitly presented as contact info, e.g. "You can reach Bob at bob@example.com", "Her email is sarah@org.com", "Contact: info@org.com"
- **Do NOT extract** email addresses that appear incidentally (URLs, unsubscribe links, automated footers, mailing list references).

---

## Spreadsheet Format

### Columns (in order, left to right)

| # | Column | Description | Example |
|---|--------|-------------|---------|
| 1 | First Name | First name, parsed from display name | Jane |
| 2 | Last Name | Last name, parsed from display name | Smith |
| 3 | Organization | Org name when obvious from signature/context | Acme Corp |
| 4 | Email | Primary email address | jane.smith@acme.com |
| 5 | Cell Phone | Mobile/cell number — highest priority | (555) 123-4567 |
| 6 | Work Phone | Office/work number | (555) 987-6543 |
| 7 | Notes | Contextual info worth preserving | Director of Operations; connected via Mike Chen |
| 8 | Source | Subject line of email where contact was found | Re: Project kickoff |
| 9 | Date Entered | Date the row was first created | 2026-04-11 |

### CRITICAL: Always read the actual header row first

Before writing, reading, or deduplicating anything, open the workbook and read row 1 to confirm the exact column order. Map column *names* to indices dynamically — never hardcode column positions based on this spec. If the header ever drifts from this spec, trust the sheet, not the spec.

This matters because a previous version of this task hardcoded column indices and silently wrote data into the wrong columns for an entire run. Reading the header row first prevents that class of bug entirely.

**Recommended pattern (pseudo-code):**

```python
header = [ws.cell(row=1, column=c).value for c in range(1, ws.max_column+1)]
col = {name: i+1 for i, name in enumerate(header)}
# then use col["Email"], col["Cell Phone"], etc. — never literal 3, 4, 5
```

Also verify dedup works: after writing a test row, re-run the lookup for that email and confirm it matches.

### Phone Number Rules
- **Two fields:** Cell Phone and Work Phone. Cell is the priority.
- **Signature with multiple numbers:** If a signature labels numbers (e.g., `(o)` and `(c)`), capture the cell number in Cell Phone and the office number in Work Phone. If only one unlabeled number exists, put it in Work Phone (can't confirm it's a cell).
- **Updating existing rows:** If a cell phone is found later for someone who only had a work phone, add it. Once a cell phone is captured for a contact, **stop collecting additional phone numbers** for that person.
- **Labels to look for:** `(c)`, `(m)`, `cell`, `mobile` → Cell Phone. `(o)`, `(w)`, `office`, `work`, `direct` → Work Phone. Unlabeled → Work Phone.
- **Format:** Normalize all numbers to `(xxx) xxx-xxxx`. Strip labels, extensions, and country codes.

### Email Address Rules
- If a department/group email is the only email for a person, save it as their primary email.
- If they already have a personal email on file, note the department email in Notes.

### Formatting
- Header row: bold, frozen
- Column widths: auto-sized to content
- No formulas — this is an append-only data store

---

## Filtering & Deduplication

### Filter Out (Never Save)
- The user's own email addresses (configured during setup)
- Automated/system addresses: `noreply@`, `no-reply@`, `notifications@`, `mailer-daemon@`, `calendar-notification@`, addresses containing `unsubscribe`
- Generic mailing list addresses unless they appear to be useful contact points

### Deduplication Logic
Before appending a new contact, check the existing spreadsheet:

1. **Match on email address** (case-insensitive): If email already exists, **merge** new info into the existing row
2. **Match on phone number** (normalized, digits only): If phone already exists under a different email, flag in Notes that this person may have multiple emails
3. **New contact:** Append as new row

### Merging Rules
When a contact already exists (matched on email, case-insensitive) and new info is found:
- **Cell Phone:** Add if currently blank. If a cell phone already exists, **do not update phone fields at all**.
- **Work Phone:** Add if currently blank and no cell phone exists yet. Once a cell phone is captured, stop.
- **Notes:** Append new context with date. E.g., existing note + ` | Also referenced in "Fwd: Project Update" (2026-04-11)`
- **Organization:** Only update if currently blank.
- **Name:** Only update if currently blank or was previously just an email address.
- **Date Entered:** Never update — always preserves original creation date.
- **Source:** Never update — always preserves original source email.

---

## Schedule

Suggest this default schedule to the user (they can customize):

- **Primary run:** Once per week (e.g., Friday at 3:30 PM local time)
- **Retry run:** A second day (e.g., Monday at 3:30 PM) to verify the primary run succeeded; retry if it didn't
- **Search scope (primary):** `newer_than:7d`
- **Search scope (retry):** `newer_than:10d` (covers the gap plus buffer)
- **Initial backfill:** `newer_than:30d`

### Run Steps

1. **Determine if this is a primary or retry run.**

2. **If retry run:** Check whether the primary run succeeded.
   - Open the spreadsheet and look for any row whose `Date Entered` equals the most recent primary-run day.
   - If at least one such row exists → primary ran successfully. Exit with a short message: "Primary run completed; no retry needed."
   - If no such rows exist → primary failed or was skipped. Proceed with the wider search window.
   - Edge case: if the user sent zero emails that day, the spreadsheet may legitimately have no new rows. Still run the retry — an extra pass is harmless because dedup catches anything already captured.

3. Search Gmail using the appropriate `newer_than:` window.

4. Read each message.

5. For each message, extract contacts per the rules above.

6. Read the existing spreadsheet — **ALWAYS read row 1 first to map column names to indices** (see above).

7. Deduplicate and merge per the merging rules.

8. Save the updated spreadsheet.

9. **Send a summary notification:**
   - Which run this was (primary / retry / retry skipped)
   - Total emails scanned
   - New contacts added (name, email, phone if found)
   - Existing contacts updated (what was added)
   - If nothing was found, say so briefly
