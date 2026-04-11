import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  createAnimationLoop,
  createGifPopup,
  createFallingItems,
  spawnAnimatedSprite,
} from '../animation';

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

describe('createGifPopup', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="popup"><img src="test.gif" /></div>';
    vi.useFakeTimers();
  });

  it('shows and auto-hides after duration', () => {
    const popup = createGifPopup('.popup', 1000);
    popup.show();
    expect(document.querySelector('.popup')?.classList.contains('is-visible')).toBe(true);

    vi.advanceTimersByTime(1000);
    expect(document.querySelector('.popup')?.classList.contains('is-visible')).toBe(false);
  });

  it('cleanup removes visibility and clears timer', () => {
    const popup = createGifPopup('.popup', 5000);
    popup.show();
    popup.cleanup();

    expect(document.querySelector('.popup')?.classList.contains('is-visible')).toBe(false);
    vi.advanceTimersByTime(5000);
  });

  it('resets GIF src on show', () => {
    const popup = createGifPopup('.popup');
    const img = document.querySelector('.popup img') as HTMLImageElement;
    const originalSrc = img.src;
    popup.show();
    expect(img.src).toBe(originalSrc);
  });
});

describe('createFallingItems', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.useFakeTimers();
  });

  it('creates the specified number of elements with options applied', () => {
    createFallingItems({ src: 'coin.png', count: 3, size: 32, borderRadius: '50%' });
    vi.advanceTimersByTime(3 * 80);

    const images = document.querySelectorAll('img');
    expect(images).toHaveLength(3);
    expect(images[0].style.borderRadius).toBe('50%');
  });
});

describe('spawnAnimatedSprite', () => {
  const defaultOptions = { src: 'fish.png', width: 100, height: 50 };

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('creates a container, calls animate, and appends to body', () => {
    const animate = vi.fn();
    const container = spawnAnimatedSprite({ ...defaultOptions, animate });

    expect(document.body.contains(container)).toBe(true);
    expect(container.querySelector('img')).not.toBeNull();
    expect(animate).toHaveBeenCalledWith(container, container.id);
  });

  it('attaches click handler when onClick is provided', () => {
    const onClick = vi.fn();
    const container = spawnAnimatedSprite({ ...defaultOptions, animate: vi.fn(), onClick });
    container.click();
    expect(onClick).toHaveBeenCalledWith(container);
  });

  it('assigns unique ids to each spawned sprite', () => {
    const c1 = spawnAnimatedSprite({ ...defaultOptions, animate: vi.fn() });
    const c2 = spawnAnimatedSprite({ ...defaultOptions, animate: vi.fn() });
    expect(c1.id).not.toBe(c2.id);
  });
});
