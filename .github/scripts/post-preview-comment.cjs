const MARKER = '<!-- cf-preview -->';
const MAX_PREVIOUS_ENTRIES = 10;

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

const formatRelativeTime = (nowMs, thenMs) => {
  const seconds = Math.max(0, Math.floor((nowMs - thenMs) / 1000));
  if (seconds < 60) return rtf.format(0, 'second');
  if (seconds < 3600) return rtf.format(-Math.floor(seconds / 60), 'minute');
  if (seconds < 86400) return rtf.format(-Math.floor(seconds / 3600), 'hour');
  return rtf.format(-Math.floor(seconds / 86400), 'day');
};

const formatEntry = ({ url, sha, iso }, repo, nowMs) => {
  const commitLink = `[\`${sha.slice(0, 7)}\`](https://github.com/${repo}/commit/${sha})`;
  const relative = formatRelativeTime(nowMs, new Date(iso).getTime());
  return `${url} (${commitLink}) · ${relative} <!-- sha:${sha} ts:${iso} -->`;
};

const entryPattern = /(https:\/\/\S+\.pages\.dev).*?<!-- sha:([a-f0-9]+) ts:(\S+?) -->/g;

module.exports = async ({ github, context, deploymentUrl, sha }) => {
  const { data: comments } = await github.rest.issues.listComments({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    per_page: 100,
  });
  const existing = comments.find((c) => c.body.includes(MARKER));
  const repo = `${context.repo.owner}/${context.repo.repo}`;
  const nowMs = Date.now();

  const priorEntries = [];
  if (existing) {
    for (const [, url, prevSha, iso] of existing.body.matchAll(entryPattern)) {
      if (url !== deploymentUrl) priorEntries.push({ url, sha: prevSha, iso });
    }
  }
  const kept = priorEntries.slice(0, MAX_PREVIOUS_ENTRIES);

  const previousSection =
    kept.length > 0
      ? `\n\n<details>\n<summary>Previous previews</summary>\n\n${kept
          .map((e) => `- ${formatEntry(e, repo, nowMs)}`)
          .join('\n')}\n</details>`
      : '';

  const current = formatEntry(
    { url: deploymentUrl, sha, iso: new Date(nowMs).toISOString() },
    repo,
    nowMs,
  );
  const body = `${MARKER}\n### Preview deployment\n\n${current}${previousSection}`;

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
