# Categories

This document defines the canonical category tree shared by the resource
lists in this repository. `python.md` is the reference implementation;
other language lists align to it where applicable.

## Category Tree

Categories are listed in pipeline reading order; indentation marks
subcategories.

1. **Network** — making requests: fetching URLs over HTTP(S).
   - `Network : General` — synchronous HTTP clients and session APIs.
   - `Network : Asynchronous` — async HTTP clients only, not general async
     frameworks.
   - `Network : Low Level` — sockets, TLS, packet crafting and sniffing.
   - `Network : WebSocket` — WebSocket protocol client and server libraries.
   - `Network : DNS` — DNS resolution toolkits.
2. **Web Scraping** — crawl orchestration.
   - `Web Scraping : Frameworks` — full featured crawling frameworks.
   - `Web Scraping : Tools` — management UI, schedulers, crawler utilities.
   - `Web Scraping : Bypass Protection` — HTTP-level anti-bot page handling
     and captcha solving services.
3. **HTML/XML Parsing** — parsing and querying markup documents.
   - `HTML/XML Parsing : General`
   - `HTML/XML Parsing : Sanitizing`
   - `HTML/XML Parsing : Metadata`
4. **Content Extraction** — pulling article text, metadata, and media out of
   already fetched pages; media downloaders live here too.
5. **Browser Automation** — real browsers driven by code.
   - `Browser Automation : Drivers` — bindings speaking browser protocols.
   - `Browser Automation : Frameworks` — high level automation frameworks.
   - `Browser Automation : Tools` — helpers such as virtual displays.
6. **Text Processing** — plain-text manipulation subcategories: General,
   Transliteration, Character Encoding, Slugify, General Parser, Human Names,
   Phone Number, User-Agent Strings, robots.txt, Date and Time, Price and
   Currency.
7. **Natural Language Processing** — tokenization, morphology, language
   detection; usually flat.
8. **Structured Formats** — parsers and writers for external documents and
   niche file formats: Office, PDF, Markdown, YAML, CSS, ATOM/RSS, SQL,
   Microformats, Portable Executable, Bookmarks File, Email, and more.
9. **Data Serialization** — encoding your own objects to wire formats: JSON
   codecs, msgpack, schema-validation libraries, extended pickling.
10. **Job Queue** — background job queues and worker systems; message queue
    libraries are folded in here.
11. **Concurrency** — event loops, greenlets, thread and process pools.
12. **URL and Network Address** — URL and address manipulation.
    - `URL and Network Address : URL`
    - `URL and Network Address : Network Address`
    - `URL and Network Address : Domain Names`
13. **Account Management** — automated creation and operation of remote
    accounts.
14. Standing single purpose categories: Proxy Tools, Proxy Server, Whois,
    JavaScript Engine.
15. **Other Lists** — links to sibling curated lists for the same language.

New categories are added by updating this document first, so the tree stays
consistent across languages.

## Placement Rules

- File a project by its primary purpose, not by implementation technology.
- `Structured Formats` covers parsing external documents; `Data
  Serialization` covers encoding your own application objects.
- Extracting content from fetched pages belongs to `Content Extraction`,
  even when implemented with an HTML parser.
- Asynchronous HTTP clients go to `Network : Asynchronous`; event loop and
  coroutine machinery goes to `Concurrency`.
- Captcha solving services belong to `Web Scraping : Bypass Protection`.
- Every project appears exactly once: if two categories fit, pick the one
  matching the dominant use case and mention the secondary role in the
  entry description.
- A project built for one specific website, or a small named set of websites,
  is filed in `site-specific-scrapers.md` and nowhere else. The canonical
  category tree does not apply to that file; it groups entries into per-site
  sections, with `## Other Sites` as the catch-all.