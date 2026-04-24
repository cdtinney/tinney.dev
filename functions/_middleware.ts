interface MicrositeRoute {
  prefix: string;
  domain: string;
}

interface CFContext {
  request: Request;
  next: () => Promise<Response>;
  env: { ASSETS: { fetch: (req: Request | URL | string) => Promise<Response> } };
}

const MICROSITES: MicrositeRoute[] = [
  { prefix: '/hands', domain: 'useyourdamnhands.com' },
  { prefix: '/whatarewedoinghere', domain: 'whatarewedoinghere.org' },
];

function findMicrositeByHost(hostname: string): MicrositeRoute | undefined {
  return MICROSITES.find((m) => hostname === m.domain || hostname === `www.${m.domain}`);
}

function findMicrositeByPath(pathname: string): MicrositeRoute | undefined {
  return MICROSITES.find((m) => pathname.startsWith(`${m.prefix}/`) || pathname === m.prefix);
}

export const onRequest = async (context: CFContext): Promise<Response> => {
  const url = new URL(context.request.url);
  const { hostname, pathname } = url;

  // Microsite domain: rewrite paths to the subpath prefix
  const micrositeByHost = findMicrositeByHost(hostname);
  if (micrositeByHost) {
    // Don't rewrite Astro build assets or paths already under the prefix
    if (!pathname.startsWith('/_astro') && !pathname.startsWith(micrositeByHost.prefix)) {
      const rewrittenUrl = new URL(context.request.url);
      rewrittenUrl.pathname = `${micrositeByHost.prefix}${pathname}`;
      return context.env.ASSETS.fetch(rewrittenUrl);
    }
    return context.next();
  }

  // Main domain: redirect microsite subpaths to their domains
  if (hostname === 'tinney.dev' || hostname === 'www.tinney.dev') {
    const micrositeByPath = findMicrositeByPath(pathname);
    if (micrositeByPath) {
      const redirectUrl = new URL(context.request.url);
      redirectUrl.hostname = micrositeByPath.domain;
      redirectUrl.pathname = pathname.slice(micrositeByPath.prefix.length) || '/';
      return Response.redirect(redirectUrl.toString(), 301);
    }
  }

  // Default: pass through (tinney.dev content or preview deployments)
  return context.next();
};
