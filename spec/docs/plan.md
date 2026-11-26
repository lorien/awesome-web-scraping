# Plan

Open tasks and deferred items for this repository. Each entry is either an
explicitly planned feature or a decision flagged during earlier work.

## Tooling

- Add a CI workflow that runs `npm run check` on pull requests. The checks
  currently run only through the pre-commit hook.
- Link checking via `npm run check:links` stays manual-only by decision; it
  is not wired into CI.
- The helpers in `tools/` have no automated tests; `npm run check` covers
  markdown only. The empty-body handling in `tools/lib/gh.mjs` (204 and other
  bodyless responses) is verified by hand with a stubbed `fetch`.

## Content Decisions

- Expand the `Proxy Tools` category definition in `spec/docs/categories.md`
  and its canon entry.
- Decide whether golang `goroutine` belongs in `Network : Asynchronous` or
  `Concurrency` (canon placement rule points to `Concurrency`).
- Fix the `Text Processing : Unites of measure` heading typo in `php.md`
  (should read "Units of measure").
- `youtube-dl` was replaced by `yt-dlp` in `site-specific-scrapers.md`; the
  upstream project is unmaintained.
- `node-ytdl-core` was replaced by the DisTube fork (`distubejs/ytdl-core`) in
  `site-specific-scrapers.md`; the original repo carries a deprecation notice
  and its npm package has been frozen since 2023.
- `site-specific-scrapers.md` is split into per-site sections, starting with
  `## Video Platforms` and `## Other Sites`. Carve further per-site sections
  out of `## Other Sites` as groups reach a few entries.
- The repo age minimum is two months and the CI check closes a PR that adds a
  younger repo. The rule applies to new contributions only; shipped entries
  are not re-validated, so `axmaier/tme-s` (54 days) and
  `lx1112/career-site-jobs-crawler` (33 days) remain listed. Audit them if the
  rule should apply retroactively.
- Add a check that flags a site-specific project added to a language list
  instead of `site-specific-scrapers.md`; currently only manual review catches
  it.

## Documents Not Aligned Yet

- `cli.md` and `manuals.md` were not part of the canonical tree alignment and
  still use pre-canon structures. Decide whether they should align to
  `spec/docs/categories.md`.