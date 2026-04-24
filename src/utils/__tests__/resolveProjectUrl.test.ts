import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { resolveProjectUrl } from '../resolveProjectUrl';

describe('resolveProjectUrl', () => {
  const originalBranch = process.env.CF_PAGES_BRANCH;
  const originalUrl = process.env.CF_PAGES_URL;

  beforeEach(() => {
    delete process.env.CF_PAGES_BRANCH;
    delete process.env.CF_PAGES_URL;
  });

  afterEach(() => {
    if (originalBranch === undefined) delete process.env.CF_PAGES_BRANCH;
    else process.env.CF_PAGES_BRANCH = originalBranch;
    if (originalUrl === undefined) delete process.env.CF_PAGES_URL;
    else process.env.CF_PAGES_URL = originalUrl;
  });

  it('returns homepageUrl when micrositePath is absent', () => {
    process.env.CF_PAGES_BRANCH = 'feature';
    process.env.CF_PAGES_URL = 'https://abc123.tinney-dev.pages.dev';
    expect(resolveProjectUrl({ homepageUrl: 'https://example.com' })).toBe('https://example.com');
  });

  it('returns homepageUrl on the main branch build', () => {
    process.env.CF_PAGES_BRANCH = 'main';
    process.env.CF_PAGES_URL = 'https://tinney-dev.pages.dev';
    expect(
      resolveProjectUrl({
        homepageUrl: 'https://useyourdamnhands.com',
        micrositePath: '/hands',
      }),
    ).toBe('https://useyourdamnhands.com');
  });

  it('returns homepageUrl when CF Pages env vars are missing (local build)', () => {
    expect(
      resolveProjectUrl({
        homepageUrl: 'https://useyourdamnhands.com',
        micrositePath: '/hands',
      }),
    ).toBe('https://useyourdamnhands.com');
  });

  it('returns the preview URL with microsite prefix on preview builds', () => {
    process.env.CF_PAGES_BRANCH = 'cdtinney/churu-holder';
    process.env.CF_PAGES_URL = 'https://73a6f701.tinney-dev.pages.dev';
    expect(
      resolveProjectUrl({
        homepageUrl: 'https://useyourdamnhands.com',
        micrositePath: '/hands',
      }),
    ).toBe('https://73a6f701.tinney-dev.pages.dev/hands/');
  });
});
