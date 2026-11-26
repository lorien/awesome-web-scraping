# Contributing Rules

To add a new project to the awesome-web-scraping repo, you have to create a
pull request. The full contribution workflow is documented in
`spec/docs/contribution.md`.

## Restricted Content

The following content is restricted in this repo:

* Projects whose GitHub repo is younger than two months (60 days)
* Web service / website / remote API - anything that is not standalone
  software
* Anything related to automation with an AI agent or the Model Context
  Protocol (MCP) or the Large Language Model (LLM).
* Official SDK/clients to captcha solving services (only universal multi-backend
  client are accepted)

## How to Create a Pull Request

* Fork and clone the awesome-web-scraping repo
* Search previous suggestions before making a new one, as yours may be a duplicate
* Choose the relevant language list for your entry: `python.md`, `php.md`,
  `ruby.md`, `javascript.md`, `golang.md`, `java.md`, `cli.md`, or
  `manuals.md`
* A project built for one specific website, or a small named set of websites,
  goes to `site-specific-scrapers.md` instead and is moved out of the language
  list; prefix its description with the implementation language, e.g.
  `* [project-name](https://example.com) - (Python) description of software`
* Add a new section only if needed; align it with the canonical category
  tree in `spec/docs/categories.md`:
    * Add a section description
    * Add a section title to the Table of Contents
* Add your link: `* [project-name](https://example.com) - description of software`
    * Description must be brief
    * Description must be one line
* **Append** your link to the end of the list - do not insert the link in the
  middle of the list
* Run `npm install` and `npm run check` locally before submitting; enable the
  pre-commit hook with `git config core.hooksPath .githooks`
* Create a pull request. Specify what you have changed/added in the pull
  request's description.
