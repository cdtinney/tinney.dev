const formatRelativeTime = (nowMs, thenMs) => {
  const diff = Math.max(0, Math.floor((nowMs - thenMs) / 1000));
  if (diff < 60) return 'just now';
  const mins = Math.floor(diff / 60);
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? '' : 's'} ago`;
};

const formatEntry = (url, commit, iso, nowMs) => {
  const relative = formatRelativeTime(nowMs, new Date(iso).getTime());
  return `${url} (${commit}) · ${relative} <!-- ts:${iso} -->`;
};

const entryPattern =
  /(https:\/\/\S+\.pages\.dev)\s+\((\[`[a-f0-9]+`\]\(https:\/\/github\.com\/\S+?\))\)\s+·\s+[^<\n]*?<!--\s*ts:(\S+?)\s*-->/g;

module.exports = async ({ github, context, deploymentUrl, sha }) => {
  const { data: comments } = await github.rest.issues.listComments({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
  });
  const marker = '<!-- cf-preview -->';
  const existing = comments.find((c) => c.body.includes(marker));
  const repo = `${context.repo.owner}/${context.repo.repo}`;
  const shortSha = sha.slice(0, 7);
  const commitLink = `[\`${shortSha}\`](https://github.com/${repo}/commit/${sha})`;

  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();

  const priorEntries = [];
  if (existing) {
    for (const match of existing.body.matchAll(entryPattern)) {
      const [, url, commit, iso] = match;
      priorEntries.push({ url, commit, iso });
    }
  }

  const seen = new Set([deploymentUrl]);
  const kept = priorEntries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });

  let previous = '';
  if (kept.length > 0) {
    const list = kept.map((e) => `- ${formatEntry(e.url, e.commit, e.iso, nowMs)}`).join('\n');
    previous = `\n\n<details>\n<summary>Previous previews</summary>\n\n${list}\n</details>`;
  }

  const currentEntry = formatEntry(deploymentUrl, commitLink, nowIso, nowMs);
  const body = `${marker}\n### Preview deployment\n\n${currentEntry}${previous}`;

  if (existing) {
    await github.rest.issues.updateComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      comment_id: existing.id,
      body,
    });
  } else {
    await github.rest.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body,
    });
  }
};
