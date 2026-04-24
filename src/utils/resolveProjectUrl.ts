interface ProjectUrlInput {
  homepageUrl: string;
  micrositePath?: string;
}

export function resolveProjectUrl({ homepageUrl, micrositePath }: ProjectUrlInput): string {
  if (!micrositePath) return homepageUrl;

  const branch = process.env.CF_PAGES_BRANCH;
  const pagesUrl = process.env.CF_PAGES_URL;
  const isPreview = !!branch && branch !== 'main' && !!pagesUrl;

  if (isPreview) return `${pagesUrl}${micrositePath}/`;
  return homepageUrl;
}
