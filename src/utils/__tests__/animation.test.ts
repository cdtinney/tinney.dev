import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createAnimationLoop } from '../animation';

/** Replaces rAF with a synchronous version that runs up to `maxFrames` times. */
function useSyncRaf(maxFrames: number) {
  const originalRaf = globalThis.requestAnimationFrame;
  let frameCount = 0;
  globalThis.requestAnimationFrame = (cb) => {
    if (frameCount < maxFrames) {
      frameCount++;
      cb(0);
    }
    return 0;
  };
  return () => {
    globalThis.requestAnimationFrame = originalRaf;
  };
}

describe('createAnimationLoop', () => {
  let restoreRaf: () => void;

  beforeEach(() => {
    document.documentElement.dataset.theme = 'test';
  });

  afterEach(() => {
    restoreRaf?.();
  });

  it('calls tick when the active theme matches', () => {
    restoreRaf = useSyncRaf(2);
    const tick = vi.fn();
    createAnimationLoop('test', tick);
    expect(tick).toHaveBeenCalled();
  });

  it('does not call tick when theme does not match', () => {
    restoreRaf = useSyncRaf(1);
    document.documentElement.dataset.theme = 'other';
    const tick = vi.fn();
    createAnimationLoop('test', tick);
    expect(tick).not.toHaveBeenCalled();
  });

  it('returns a cancel function that stops the loop', () => {
    const tick = vi.fn();
    const cancel = createAnimationLoop('test', tick);
    cancel();
    const callCountAtCancel = tick.mock.calls.length;

    restoreRaf = useSyncRaf(1);
    expect(tick.mock.calls.length).toBe(callCountAtCancel);
  });
});
