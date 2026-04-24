module.exports = async ({ github, context, deploymentUrl }) => {
  const { data: comments } = await github.rest.issues.listComments({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
  });
  const marker = '<!-- cf-preview -->';
  const existing = comments.find((c) => c.body.includes(marker));
  const body = `${marker}\n### Preview deployment\n\n${deploymentUrl}`;
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
