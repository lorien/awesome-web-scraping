# Overview

## What This Repository Is

`awesome-web-scraping` is a curated "awesome list" of web-scraping resources:
software packages, services, and manuals. Each resource is listed as a single
markdown list entry with a link, a brief one-line description, and nothing more.
The list is organized by programming language and tool category. A separate
list gathers projects built for one specific website or a small named set of
websites, regardless of the language they are written in.

## Content Policy

This is a curated list, not a directory dump. Contributions are subject to
restrictions; the authoritative rules live in `CONTRIBUTING.md`. In short, the
following are not accepted:

- Web services / websites / remote APIs — anything that is not standalone software
- Anything related to automation with an AI agent or the Model Context Protocol (MCP)

Contributions are made via pull requests. New entries are appended to the end
of the relevant list; they are never inserted into the middle of a list.

## Repository Layout

- `README.md` — Index of the list. Links to every language/domain list, plus
  Captcha Solving Services, Proxy Server Marketplaces, Telegram Discussion
  Groups, and contribution instructions
- `AGENTS.md` — Entry point for coding agents; points to the spec docs
- `spec/docs/` — Specifications: overview, conventions, categories, tooling,
  agent workflow, contribution workflow
- `package.json` — Pins the Node tooling dependencies and `npm run check`
  scripts
- `tools/` — Markdown checkers: `check-md.mjs`, `check-sync.mjs`, helpers
- `.githooks/` — Optional pre-commit hook running the checks
- `python.md` — Python packages
- `php.md` — PHP packages
- `ruby.md` — Ruby packages
- `javascript.md` — JavaScript / Node.js packages
- `golang.md` — Go packages
- `java.md` — Java packages
- `site-specific-scrapers.md` — Scrapers built for one specific website or a
  small named set of websites, in any language
- `cli.md` — Command-line tools
- `manuals.md` — Articles and books teaching web scraping
- `CONTRIBUTING.md` — Contribution rules
- `.github/workflows/check_repo_age.yml` — CI workflow that comments on and
  closes PRs when a proposed GitHub repo is younger than two months
- `.gitignore` — Ignores editor artifacts

## How the List Is Organized

- The README's Topics section links to each language/domain list file.
- Every list file is self-contained: its own title, introduction, table of
  contents, and sections.
- The Python list is the largest and most granular; other language lists follow
  the same general structure with fewer, flatter sections.
- A project built for one specific website, or a small named set of websites,
  is listed only in `site-specific-scrapers.md`; it is moved there rather than
  duplicated in the language lists.
- Each file ends with a section linking to related curated lists for that language.