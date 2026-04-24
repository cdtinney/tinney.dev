interface ProjectUrlInput {
  homepageUrl: string;
  micrositePath?: string;
  hostname: string;
  origin: string;
}

const PRODUCTION_HOSTNAMES = new Set(['tinney.dev', 'www.tinney.dev']);

export function resolveProjectUrl({
  homepageUrl,
  micrositePath,
  hostname,
  origin,
}: ProjectUrlInput): string {
  if (!micrositePath) return homepageUrl;
  if (PRODUCTION_HOSTNAMES.has(hostname)) return homepageUrl;
  return `${origin}${micrositePath}/`;
}
