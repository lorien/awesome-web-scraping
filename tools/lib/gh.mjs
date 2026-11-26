import { RESOURCE_LISTS } from "./lists.mjs"

const token = process.env.GITHUB_TOKEN

if (!token) {
  console.error("missing env: GITHUB_TOKEN")
  process.exit(1)
}

export async function gh(path, { method = "GET", body, raw = false } = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: raw ? "application/vnd.github.raw" : "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`GitHub API ${method} ${path} -> ${res.status}: ${text.slice(0, 300)}`)
  }
  // A 204 (e.g. DELETE) and any other empty body are not errors; callers
  // ignore the value.
  const text = await res.text()
  if (raw) return text
  return text ? JSON.parse(text) : null
}

export async function ghAll(path) {
  const out = []
  for (let page = 1; ; page++) {
    const batch = await gh(`${path}${path.includes("?") ? "&" : "?"}per_page=100&page=${page}`)
    out.push(...batch)
    if (batch.length < 100) return out
  }
}

export const addedLines = (patch) =>
  (patch ?? "").split("\n").filter((l) => l.startsWith("+") && !l.startsWith("+++")).map((l) => l.slice(1))

export function extractUrls(line) {
  const urls = []
  const markdown = /\[[^\]]*\]\(([^)]+)\)/g
  let m
  while ((m = markdown.exec(line))) urls.push(m[1])
  for (const u of line.match(/https?:\/\/[^\s)\]>]+/g) ?? []) urls.push(u)
  return urls
}

const strip = (u) => u.replace(/[.,;:!?]+$/, "")
const subpaths = new Set([
  "actions", "archive", "blob", "branches", "commits", "compare", "discussions",
  "graphs", "issues", "labels", "milestones", "network", "projects", "pulls",
  "pulse", "raw", "releases", "security", "settings", "tags", "tree", "wiki",
])

export function repoFromUrl(raw) {
  try {
    const u = new URL(strip(raw))
    if (u.hostname !== "github.com") return null
    const parts = u.pathname.split("/").filter(Boolean)
    if (parts.length !== 2) return null
    if (subpaths.has(parts[0].toLowerCase()) || subpaths.has(parts[1].toLowerCase())) return null
    if (!parts[0] || !parts[1]) return null
    return `${parts[0]}/${parts[1]}`
  } catch {
    return null
  }
}

export async function collectTargetRepos(owner, name, pr) {
  const files = await ghAll(`/repos/${owner}/${name}/pulls/${pr}/files`)
  const targets = new Set()
  for (const f of files) {
    if (f.status !== "added" && f.status !== "modified") continue
    if (!RESOURCE_LISTS.includes(f.filename)) continue
    for (const line of addedLines(f.patch)) {
      for (const u of extractUrls(line)) {
        const repo = repoFromUrl(u)
        if (repo) targets.add(repo)
      }
    }
  }
  return [...targets].sort()
}