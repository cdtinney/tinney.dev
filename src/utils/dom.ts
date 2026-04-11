import { randomBetween, randomStartPhase } from './math';

/** Options for creating falling items (e.g. loonies, confetti). */
export interface FallingItemsOptions {
  /** Image source URL. */
  src: string;
  /** Number of items to drop. */
  count: number;
  /** Item size in pixels (width and height). */
  size: number;
  /** CSS border-radius (default: '0'). */
  borderRadius?: string;
  /** Delay between each item in milliseconds (default: 80). */
  stagger?: number;
}

/** Options for spawning an animated image element. */
export interface SpawnSpriteOptions {
  /** Image source URL. */
  src: string;
  /** Image width in pixels. */
  width: number;
  /** Image height in pixels. */
  height: number;
  /** Element opacity (default: 0.5). */
  opacity?: number;
  /** Callback to set up the animation loop on the spawned element. */
  animate: (element: HTMLElement, elementId: string) => void;
  /** Optional click handler for the spawned element. */
  onClick?: ((element: HTMLElement) => void) | null;
}

/** A GIF popup that can be shown with a timer and cleaned up on theme switch. */
export interface GifPopup {
  /** Show the popup, restart the GIF, and auto-hide after the configured duration. */
  show: () => void;
  /** Hide the popup and clear any pending timer. */
  cleanup: () => void;
}

export function createGifPopup(selector: string, duration = 3000): GifPopup {
  let hideTimer: ReturnType<typeof setTimeout> | null = null;
  const popup = document.querySelector<HTMLElement>(selector);

  function restartGifAnimation() {
    const img = popup?.querySelector('img');
    if (img) {
      const originalSrc = img.src;
      img.src = '';
      img.src = originalSrc;
    }
  }

  return {
    show() {
      if (!popup) return;
      popup.classList.add('is-visible');
      restartGifAnimation();
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => popup.classList.remove('is-visible'), duration);
    },
    cleanup() {
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = null;
      popup?.classList.remove('is-visible');
    },
  };
}

const FALLING_SPEED_RANGE: [number, number] = [2, 5];
const FALLING_WOBBLE_AMP_RANGE: [number, number] = [15, 35];
const FALLING_WOBBLE_FREQ_RANGE: [number, number] = [0.02, 0.04];
const FALLING_SPIN_SPEED_RANGE: [number, number] = [2, 6];
const FALLING_SPIN_MULTIPLIER = 30;

export function createFallingItems({
  src,
  count,
  size,
  borderRadius = '0',
  stagger = 80,
}: FallingItemsOptions): void {
  const offscreenTop = -(size + 10);

  for (let i = 0; i < count; i++) {
    const itemElement = document.createElement('img');
    itemElement.src = src;
    Object.assign(itemElement.style, {
      position: 'fixed',
      top: `${offscreenTop}px`,
      left: `${randomBetween(0, window.innerWidth - size)}px`,
      width: `${size}px`,
      height: `${size}px`,
      objectFit: 'cover',
      borderRadius,
      zIndex: '400',
      pointerEvents: 'none',
      opacity: '0.9',
    });
    document.body.append(itemElement);

    const fallSpeed = randomBetween(...FALLING_SPEED_RANGE);
    const wobbleAmplitude = randomBetween(...FALLING_WOBBLE_AMP_RANGE);
    const wobbleFrequency = randomBetween(...FALLING_WOBBLE_FREQ_RANGE);
    const spinSpeed = randomBetween(...FALLING_SPIN_SPEED_RANGE);
    let posY = offscreenTop;
    let phase = randomStartPhase();

    setTimeout(() => {
      function animateFall() {
        posY += fallSpeed;
        phase += wobbleFrequency;

        const wobbleX = Math.sin(phase) * wobbleAmplitude;
        const translateY = posY - offscreenTop;
        const rotation = phase * spinSpeed * FALLING_SPIN_MULTIPLIER;
        itemElement.style.transform = `translate(${wobbleX}px, ${translateY}px) rotate(${rotation}deg)`;

        if (posY > window.innerHeight + size) {
          itemElement.remove();
          return;
        }
        requestAnimationFrame(animateFall);
      }
      requestAnimationFrame(animateFall);
    }, i * stagger);
  }
}

let nextSpriteId = 0;

export function spawnAnimatedSprite({
  src,
  width,
  height,
  opacity = 0.5,
  animate,
  onClick = null,
}: SpawnSpriteOptions): HTMLElement {
  const spriteId = `spawned-${++nextSpriteId}`;
  const container = document.createElement('div');
  container.id = spriteId;
  Object.assign(container.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1',
    pointerEvents: 'auto',
    cursor: 'pointer',
    opacity: String(opacity),
  });

  const imageElement = document.createElement('img');
  imageElement.src = src;
  imageElement.width = width;
  imageElement.height = height;
  container.append(imageElement);
  document.body.append(container);

  animate(container, spriteId);
  if (onClick) container.addEventListener('click', () => onClick(container));

  return container;
}
