# Tooling

This document describes the markdown tooling used to keep the list documents
consistent. It is the companion to `conventions.md` and `categories.md`:
those documents state the rules, this one explains how to run them.

## Quick Start

- `npm run check` — run every check (see below). Exit code is non-zero when
  any check fails.
- `npm run check:md` — run only the content checks.
- `npm run check:sync` — run only the table-of-contents and canon checks.
- `npm run check:links` — manual link check (requires `lychee`); not part of
  `npm run check`.

The tooling runs on Node.js. Dependencies are pinned exactly in
`package-lock.json`; install with `npm install` before first use.

## Checks

### `tools/check-md.mjs` — content conventions

Validates the rules from `conventions.md` against every markdown file:

- List items use `*` bullets, not `-` (resource lists only).
- No duplicate headings.
- Level-3 headings follow the `Parent : Child` naming pattern and the parent
  heading exists (category lists only).
- No markdown tables.
- List entries match `* [name](url) - description` (see exceptions below).
- Internal documentation (`AGENTS.md`, `spec/docs/*`) stays within 88
  characters per line.

Exceptions, encoded in `tools/lib/lists.mjs`:

- `manuals.md` entries are link-only (`* [Title](url)`).
- `README.md` is treated as a loose index; bare links are allowed.
- `* TODO` and `* EMPTY CONTENT` mark intentionally empty sections.

### `tools/check-sync.mjs` — structure

- For every resource list, the table of contents links must match the actual
  heading sequence (including for files whose table of contents is an
  unlabeled list after the introduction).
- `python.md` is the reference implementation of the canonical category tree:
  every top-level heading must exist in `spec/docs/categories.md`, and every
  canonical category must appear in the file.

## Pre-Commit

The checks can be run automatically before every commit. Enable with:

```
git config core.hooksPath .githooks
```

The `.githooks/pre-commit` script runs the checks on staged markdown files.
The setting is local to this repository; each contributor enables it
individually.

## Link Checking (manual)

Dead links in the lists can be checked by hand with either `make
check-links` or `npm run check:links`. The Makefile target runs `lychee`
directly and shows a progress bar; the npm script adds `--no-progress` for
non-interactive shells.

`lychee.toml` configures the check: HEAD requests, and a concurrency cap of
16 requests overall and 5 per host.

`lychee` must be installed separately; it is not an npm dependency. The
check is intentionally manual and standalone: it is not part of `npm run
check`, does not run in the pre-commit hook, and is not wired into CI.
Link rot is reported rather than blocked, so contributions are not held up
by transient network failures.

## Repo Age Check (CI)

`tools/check-repo-age.mjs` is a CI helper, not part of `npm run check`. It
runs in `.github/workflows/check_repo_age.yml` on pull requests and:

- Fetches the PR diff via the GitHub API and collects `github.com/owner/repo`
  links from newly added resource-list lines.
- Looks up each repo's creation date and flags any younger than
  `MIN_AGE_DAYS` (default 60, that is two months).
- Posts a warning comment on the PR (marker `<!-- repo-age-check -->`) and
  updates or removes it on later pushes so the thread stays current.
- Closes the pull request, since the rule is that such projects are not
  accepted. It never reopens a PR: the author removes the entry or waits
  until the repo is old enough and reopens it, and the `reopened` event runs
  the check again.

It requires a GitHub token and network access, so it only runs in CI; run it
locally with the environment variables `GITHUB_TOKEN`,
`GITHUB_REPOSITORY_OWNER`, `GITHUB_REPOSITORY_NAME`, `PR_NUMBER`, and
optionally `MIN_AGE_DAYS`. Add `--dry-run` to print the comment and the close
it would perform without writing anything.

## Repo Content Check (CI)

`tools/check-repo-content.mjs` is a CI helper, not part of `npm run check`.
It runs in `.github/workflows/check_repo_content.yml` on pull requests and:

- Fetches the PR diff via the GitHub API and collects `github.com/owner/repo`
  links from newly added resource-list lines.
- For each repo, gathers its description, topics, and README text.
- Sends that text to an OpenCode Go model (`OPENCODE_MODEL`, default
  `mimo-v2.5`) via the OpenAI-compatible chat completions endpoint and asks
  whether the project is primarily about AI agents, agentic AI, or MCP.
- Posts a comment on the PR (marker `<!-- repo-content-check -->`) listing any
  such projects and reminding that AI projects are not accepted; it updates or
  removes the comment on later pushes so the thread stays current. It only
  comments — it does not reject or close the PR.

It requires a GitHub token, an `OPENCODE_API_KEY` (OpenCode Go subscription),
and network access, so it only runs in CI. If `OPENCODE_API_KEY` is unset the
check skips quietly. Run it locally in dry-run mode without touching GitHub
comments:

```
OPENCODE_API_KEY=... node tools/check-repo-content.mjs --dry-run \
  --repos owner/repo,owner/repo
```

## Changing the Rules

The specification documents are the source of truth. When a convention
changes, update the specification first, then mirror the change into the
tooling (`tools/*`) so the checks keep matching the documented rules.