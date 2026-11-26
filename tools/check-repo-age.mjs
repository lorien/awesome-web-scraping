import { gh, ghAll, collectTargetRepos } from "./lib/gh.mjs"

const owner = process.env.GITHUB_REPOSITORY_OWNER
const name = process.env.GITHUB_REPOSITORY_NAME
const pr = process.env.PR_NUMBER
const minAgeDays = Number(process.env.MIN_AGE_DAYS ?? 60)
const dryRun = process.argv.slice(2).includes("--dry-run")

if (!owner || !name || !pr) {
  console.error("missing env: GITHUB_REPOSITORY_OWNER, GITHUB_REPOSITORY_NAME, PR_NUMBER")
  process.exit(1)
}

const MARKER = "<!-- repo-age-check -->"

async function main() {
  const prInfo = await gh(`/repos/${owner}/${name}/pulls/${pr}`)
  if (prInfo.state === "closed") {
    console.log("pull request is already closed")
    return
  }

  const targets = await collectTargetRepos(owner, name, pr)

  const young = []
  for (const repo of targets) {
    let data
    try {
      data = await gh(`/repos/${repo}`)
    } catch (e) {
      console.log(`skip ${repo}: ${e.message.split("\n")[0]}`)
      continue
    }
    const created = new Date(data.created_at)
    const ageDays = (Date.now() - created.getTime()) / 86400000
    const ageLabel = ageDays < 1 ? "less than a day" : `${Math.floor(ageDays)} days`
    if (ageDays < minAgeDays) {
      young.push({ repo, created: data.created_at.slice(0, 10), ageLabel })
    }
    console.log(`${repo}: created ${data.created_at.slice(0, 10)} (${ageLabel} old)`)
  }

  const comments = dryRun ? [] : await ghAll(`/repos/${owner}/${name}/issues/${pr}/comments`)
  const marked = comments.find((c) => c.body.includes(MARKER))

  if (young.length === 0) {
    if (marked) {
      await gh(`/repos/${owner}/${name}/issues/comments/${marked.id}`, { method: "DELETE" })
      console.log("no young repos; removed stale warning comment")
    } else {
      console.log(`no new github repos younger than ${minAgeDays} days`)
    }
    return
  }

  const lines = [
    MARKER,
    `The following proposed GitHub repos are younger than ${minAgeDays} days:`,
    "",
    ...young.map((y) => `- [${y.repo}](https://github.com/${y.repo}) - created ${y.created} (${y.ageLabel} old)`),
    "",
    "Such projects are not accepted (see Restricted Content in `CONTRIBUTING.md`),",
    "so this pull request is being closed. Remove the entry, or resubmit once the",
    "repo is old enough, then reopen the pull request.",
  ]
  const body = lines.join("\n")

  if (dryRun) {
    console.log(`dry run: would post warning and close the pull request\n\n${body}`)
    return
  }

  if (marked) {
    if (marked.body !== body) {
      await gh(`/repos/${owner}/${name}/issues/comments/${marked.id}`, { method: "PATCH", body: { body } })
      console.log("updated warning comment")
    } else {
      console.log("warning comment already up to date")
    }
  } else {
    await gh(`/repos/${owner}/${name}/issues/${pr}/comments`, { method: "POST", body: { body } })
    console.log("posted warning comment")
  }

  await gh(`/repos/${owner}/${name}/pulls/${pr}`, { method: "PATCH", body: { state: "closed" } })
  console.log("closed pull request")
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
