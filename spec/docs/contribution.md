# Contribution Workflow

How changes to the list documents are proposed, validated, and submitted.
The authoritative rules for what may be contributed live in
`CONTRIBUTING.md`; this document describes the process around them.

## Overview

Contributions are made via pull requests. The list is curated, not a
directory dump, so new entries are subject to the restricted content rules
in `CONTRIBUTING.md`. New entries are appended to the end of the relevant
list; they are never inserted into the middle of a list.

## Before Contributing

- Search the repository for the project first; the entry may already exist.
- Confirm the project meets the eligibility rules in `CONTRIBUTING.md`.
- Choose the target list for the project's language or domain (see
  "Adding an Entry" below).

## Adding an Entry

Each language and domain has its own list file. Target files by language:

- `python.md` — Python packages
- `php.md` — PHP packages
- `ruby.md` — Ruby packages
- `javascript.md` — JavaScript / Node.js packages
- `golang.md` — Go packages
- `java.md` — Java packages
- `site-specific-scrapers.md` — scrapers built for one specific website or a
  small named set of websites, in any language
- `cli.md` — command-line tools
- `manuals.md` — articles and books teaching web scraping

An entry is a single markdown list item:

```
* [project-name](https://example.com) - one-line description
```

Rules:

- The description is brief, factual, and one line.
- A project built for one specific website, or a small named set of websites,
  belongs in `site-specific-scrapers.md`, not in a language list. Move the
  entry there and prefix the description with the implementation language,
  e.g. ` - (Python) description`.
- The entry is appended to the end of the relevant list; it is never
  inserted into the middle of an existing list.
- Section headings and the table of contents follow `conventions.md`.

## Validating Locally

Install dependencies and run the checks before submitting:

```
npm install
npm run check
```

The checks cover content conventions and the table-of-contents and canon
structure; see `tooling.md` for details. The pre-commit hook runs the same
checks on staged files and is enabled per repository:

```
git config core.hooksPath .githooks
```

Dead links can be checked manually with `npm run check:links`; it is
reporting-only and does not block contributions.

## Submitting a Pull Request

- Create the pull request against the default branch.
- Describe what was added or changed in the pull request body.
- CI runs on the pull request: `check_repo_age.yml` comments if any proposed
  GitHub repo is younger than two months, and closes the pull request; such
  projects are not accepted (see Restricted Content in `CONTRIBUTING.md`).
  The pull request is never reopened automatically: remove the entry or wait
  until the repo is old enough, then reopen it, and the check runs again.