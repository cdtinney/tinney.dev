import { describe, it, expect } from 'vitest';
import { resolveProjectUrl } from '../resolveProjectUrl';

describe('resolveProjectUrl', () => {
  it('returns homepageUrl when micrositePath is absent', () => {
    expect(
      resolveProjectUrl({
        homepageUrl: 'https://example.com',
        hostname: 'abc.tinney-dev.pages.dev',
        origin: 'https://abc.tinney-dev.pages.dev',
      }),
    ).toBe('https://example.com');
  });

  it('returns homepageUrl on production tinney.dev', () => {
    expect(
      resolveProjectUrl({
        homepageUrl: 'https://useyourdamnhands.com',
        micrositePath: '/hands',
        hostname: 'tinney.dev',
        origin: 'https://tinney.dev',
      }),
    ).toBe('https://useyourdamnhands.com');
  });

  it('returns homepageUrl on www.tinney.dev', () => {
    expect(
      resolveProjectUrl({
        homepageUrl: 'https://useyourdamnhands.com',
        micrositePath: '/hands',
        hostname: 'www.tinney.dev',
        origin: 'https://www.tinney.dev',
      }),
    ).toBe('https://useyourdamnhands.com');
  });

  it('rewrites to the same origin on a Cloudflare Pages preview', () => {
    expect(
      resolveProjectUrl({
        homepageUrl: 'https://useyourdamnhands.com',
        micrositePath: '/hands',
        hostname: '73a6f701.tinney-dev.pages.dev',
        origin: 'https://73a6f701.tinney-dev.pages.dev',
      }),
    ).toBe('https://73a6f701.tinney-dev.pages.dev/hands/');
  });

  it('rewrites to the same origin on a branch alias preview', () => {
    expect(
      resolveProjectUrl({
        homepageUrl: 'https://useyourdamnhands.com',
        micrositePath: '/hands',
        hostname: 'cdtinney-churu-holder.tinney-dev.pages.dev',
        origin: 'https://cdtinney-churu-holder.tinney-dev.pages.dev',
      }),
    ).toBe('https://cdtinney-churu-holder.tinney-dev.pages.dev/hands/');
  });

  it('rewrites to the same origin on localhost', () => {
    expect(
      resolveProjectUrl({
        homepageUrl: 'https://useyourdamnhands.com',
        micrositePath: '/hands',
        hostname: 'localhost',
        origin: 'http://localhost:4321',
      }),
    ).toBe('http://localhost:4321/hands/');
  });
});
