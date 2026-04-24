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

  let previous = '';
  if (existing) {
    const entryPattern = /- (https:\/\/\S+\.pages\.dev)\s+\(.*?\)/g;
    const currentLine = existing.body
      .split('\n')
      .find((l) => l.includes('.pages.dev') && !l.startsWith('-'));
    const previousEntries = [];
    if (currentLine) previousEntries.push(currentLine.trim());
    for (const match of existing.body.matchAll(entryPattern)) {
      previousEntries.push(match[0].slice(2));
    }
    const deduplicated = [...new Set(previousEntries)].filter((e) => !e.startsWith(deploymentUrl));
    if (deduplicated.length > 0) {
      const list = deduplicated.map((e) => `- ${e}`).join('\n');
      previous = `\n\n<details>\n<summary>Previous previews</summary>\n\n${list}\n</details>`;
    }
  }

  const body = `${marker}\n### Preview deployment\n\n${deploymentUrl} (${commitLink})${previous}`;
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
