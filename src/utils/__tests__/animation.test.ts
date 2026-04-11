import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createAnimationLoop } from '../animation';
import { createGifPopup, createFallingItems, spawnAnimatedSprite } from '../dom';

describe('createAnimationLoop', () => {
  beforeEach(() => {
    document.documentElement.dataset.theme = 'test';
  });

  it('calls tick when the active theme matches', () => {
    const tick = vi.fn();

    // Make rAF run synchronously for the first two calls (initial + recursive)
    let callCount = 0;
    const originalRaf = globalThis.requestAnimationFrame;
    globalThis.requestAnimationFrame = (cb) => {
      if (callCount < 2) {
        callCount++;
        cb(0);
      }
      return 0;
    };

    createAnimationLoop('test', tick);
    expect(tick).toHaveBeenCalled();

    globalThis.requestAnimationFrame = originalRaf;
  });

  it('does not call tick when theme does not match', () => {
    const tick = vi.fn();
    document.documentElement.dataset.theme = 'other';

    // Override rAF to run synchronously once
    const originalRaf = globalThis.requestAnimationFrame;
    let called = false;
    globalThis.requestAnimationFrame = (cb) => {
      if (!called) {
        called = true;
        cb(0);
      }
      return 0;
    };

    createAnimationLoop('test', tick);
    expect(tick).not.toHaveBeenCalled();

    globalThis.requestAnimationFrame = originalRaf;
  });

  it('returns a cancel function that stops the loop', () => {
    const tick = vi.fn();
    const cancel = createAnimationLoop('test', tick);
    cancel();

    // After cancelling, rAF callbacks should not call tick
    const callCountAtCancel = tick.mock.calls.length;

    // Simulate another frame
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementationOnce((cb) => {
      cb(0);
      return 0;
    });

    expect(tick.mock.calls.length).toBe(callCountAtCancel);
  });
});

describe('createGifPopup', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="popup">
        <img src="test.gif" />
      </div>
    `;
    vi.useFakeTimers();
  });

  it('adds is-visible class on show', () => {
    const popup = createGifPopup('.popup');
    popup.show();
    expect(document.querySelector('.popup')?.classList.contains('is-visible')).toBe(true);
  });

  it('removes is-visible class after duration', () => {
    const popup = createGifPopup('.popup', 1000);
    popup.show();

    vi.advanceTimersByTime(1000);
    expect(document.querySelector('.popup')?.classList.contains('is-visible')).toBe(false);
  });

  it('cleanup removes is-visible and clears timer', () => {
    const popup = createGifPopup('.popup', 5000);
    popup.show();
    popup.cleanup();

    expect(document.querySelector('.popup')?.classList.contains('is-visible')).toBe(false);

    // Advancing time should not throw (timer was cleared)
    vi.advanceTimersByTime(5000);
  });

  it('resets GIF src on each show', () => {
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

  it('creates the specified number of image elements', () => {
    createFallingItems({ src: 'coin.png', count: 5, size: 32 });

    // All items created immediately (staggered via setTimeout)
    vi.advanceTimersByTime(5 * 80);
    expect(document.querySelectorAll('img')).toHaveLength(5);
  });

  it('applies border-radius when specified', () => {
    createFallingItems({ src: 'coin.png', count: 1, size: 32, borderRadius: '50%' });
    vi.advanceTimersByTime(100);

    const img = document.querySelector('img') as HTMLImageElement;
    expect(img.style.borderRadius).toBe('50%');
  });
});

describe('spawnAnimatedSprite', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('creates a container with an image and appends to body', () => {
    const animate = vi.fn();
    const container = spawnAnimatedSprite({
      src: 'fish.png',
      width: 100,
      height: 50,
      animate,
    });

    expect(container).toBeInstanceOf(HTMLElement);
    expect(container.querySelector('img')).not.toBeNull();
    expect(document.body.contains(container)).toBe(true);
  });

  it('calls the animate callback with the container and id', () => {
    const animate = vi.fn();
    const container = spawnAnimatedSprite({
      src: 'fish.png',
      width: 100,
      height: 50,
      animate,
    });

    expect(animate).toHaveBeenCalledWith(container, container.id);
  });

  it('attaches click handler when onClick is provided', () => {
    const onClick = vi.fn();
    const container = spawnAnimatedSprite({
      src: 'fish.png',
      width: 100,
      height: 50,
      animate: vi.fn(),
      onClick,
    });

    container.click();
    expect(onClick).toHaveBeenCalledWith(container);
  });

  it('assigns unique ids to each spawned sprite', () => {
    const container1 = spawnAnimatedSprite({
      src: 'a.png',
      width: 10,
      height: 10,
      animate: vi.fn(),
    });
    const container2 = spawnAnimatedSprite({
      src: 'b.png',
      width: 10,
      height: 10,
      animate: vi.fn(),
    });

    expect(container1.id).not.toBe(container2.id);
  });
});
