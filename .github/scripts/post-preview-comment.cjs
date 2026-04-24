module.exports = async ({ github, context, deploymentUrl }) => {
  const { data: comments } = await github.rest.issues.listComments({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
  });
  const marker = '<!-- cf-preview -->';
  const existing = comments.find((c) => c.body.includes(marker));

  let previous = '';
  if (existing) {
    const urlPattern = /https:\/\/\S+\.pages\.dev/g;
    const previousUrls = existing.body.match(urlPattern) || [];
    const currentUrl = existing.body.split('\n').find((l) => l.match(urlPattern) && !l.startsWith('-'));
    const deduplicated = [...new Set([currentUrl?.trim(), ...previousUrls])].filter(
      (u) => u && u !== deploymentUrl,
    );
    if (deduplicated.length > 0) {
      const list = deduplicated.map((u) => `- ${u}`).join('\n');
      previous = `\n\n<details>\n<summary>Previous previews</summary>\n\n${list}\n</details>`;
    }
  }

  const body = `${marker}\n### Preview deployment\n\n${deploymentUrl}${previous}`;
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
