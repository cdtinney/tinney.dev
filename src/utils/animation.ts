// ─── Interfaces ──────────────────────────────────────────────

/** Options for the DVD screensaver-style bouncing animation. */
export interface BouncerOptions {
  /** Theme ID — animation only runs when this theme is active. */
  theme: string;
  /** Element size in pixels (used for boundary calculations). */
  size: number;
  /** Movement speed in pixels per frame. */
  speed: number;
}

/** Options for horizontal gliding with vertical sine-wave drift. */
export interface GliderOptions {
  /** Theme ID — animation only runs when this theme is active. */
  theme: string;
  /** Horizontal speed in pixels per frame. */
  speed: number;
  /** Direction: 1 = left-to-right, -1 = right-to-left. */
  dir: 1 | -1;
  /** Element width in pixels (used for wrap calculations). */
  size: number;
  /** Vertical sine-wave amplitude in pixels. */
  yAmp: number;
  /** Vertical sine-wave frequency multiplier. */
  yFreq: number;
  /** Minimum Y position as a fraction of viewport height (0-1). */
  yMin: number;
  /** Maximum Y position as a fraction of viewport height (0-1). */
  yMax: number;
  /** Phase increment per frame (default: 0.015). */
  tStep?: number;
}

/** Options for vertical bouncing with horizontal sine-wave wobble. */
export interface DrifterOptions {
  /** Theme ID — animation only runs when this theme is active. */
  theme: string;
  /** Vertical speed in pixels per frame. */
  speed: number;
  /** Horizontal sine-wave amplitude in pixels. */
  xAmp: number;
  /** Horizontal sine-wave frequency multiplier. */
  xFreq: number;
  /** Element height in pixels. */
  size: number;
  /** Minimum Y position in pixels (default: 40). */
  yMin?: number;
  /** Maximum Y position as a fraction of viewport height (default: 0.5). */
  yMaxPct?: number;
  /** Phase increment per frame (default: 0.008). */
  tStep?: number;
}

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

// ─── Math helpers ────────────────────────────────────────────

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function randomStartPhase(): number {
  return Math.random() * Math.PI * 2;
}

/** Returns a random diagonal angle, avoiding near-horizontal/vertical trajectories. */
function randomDiagonalAngle(): number {
  const steepness = randomBetween(0.2, 1);
  const quarterTurn = (steepness * Math.PI) / 2;
  const mirrored = Math.random() < 0.5 ? -quarterTurn : quarterTurn;
  return Math.random() < 0.5 ? mirrored + Math.PI : mirrored;
}

function sineOffset(phase: number, frequency: number, amplitude: number): number {
  return Math.sin(phase * frequency) * amplitude;
}

/** Clamps value to [min, max] and reverses velocity on contact. */
function bounceAtBounds(
  value: number,
  velocity: number,
  min: number,
  max: number,
): [number, number] {
  if (value <= min) return [min, Math.abs(velocity)];
  if (value >= max) return [max, -Math.abs(velocity)];
  return [value, velocity];
}

function randomYInBand(minFraction: number, maxFraction: number): number {
  return randomBetween(window.innerHeight * minFraction, window.innerHeight * maxFraction);
}

// ─── Animation loop ──────────────────────────────────────────

/**
 * Theme-aware requestAnimationFrame loop. The tick callback only fires
 * when the given theme is active. Returns a cancel function.
 */
export function createAnimationLoop(theme: string, tick: () => void): () => void {
  let running = true;
  function frame() {
    if (!running) return;
    if (document.documentElement.dataset.theme === theme) tick();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  return () => {
    running = false;
  };
}

// ─── Bouncer (DVD screensaver) ───────────────────────────────

export function createBouncer(
  selector: string,
  { theme, size, speed }: BouncerOptions,
): HTMLElement | null {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return null;

  let posX = randomBetween(0, window.innerWidth - size);
  let posY = randomBetween(0, window.innerHeight - size);
  const angle = randomDiagonalAngle();
  let velocityX = Math.cos(angle) * speed;
  let velocityY = Math.sin(angle) * speed;

  createAnimationLoop(theme, () => {
    posX += velocityX;
    posY += velocityY;

    [posX, velocityX] = bounceAtBounds(posX, velocityX, 0, window.innerWidth - size);
    [posY, velocityY] = bounceAtBounds(posY, velocityY, 0, window.innerHeight - size);

    el.style.transform = `translate(${posX}px, ${posY}px)`;
  });

  return el;
}

// ─── Glider (horizontal + sine drift) ────────────────────────

export function createGlider(
  selector: string,
  { theme, speed, dir, size, yAmp, yFreq, yMin, yMax, tStep = 0.015 }: GliderOptions,
): HTMLElement | null {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return null;

  const offscreenLeft = -size;
  const offscreenRight = window.innerWidth + size;
  let posX = dir === 1 ? offscreenLeft : offscreenRight;
  let baseY = randomYInBand(yMin, yMax);
  let phase = randomStartPhase();

  createAnimationLoop(theme, () => {
    posX += speed * dir;
    phase += tStep;

    const movedOffscreen =
      (dir === 1 && posX > offscreenRight) || (dir === -1 && posX < offscreenLeft);
    if (movedOffscreen) {
      posX = dir === 1 ? offscreenLeft : offscreenRight;
      baseY = randomYInBand(yMin, yMax);
    }

    const driftY = sineOffset(phase, yFreq, yAmp);
    el.style.transform = `translate(${posX}px, ${baseY + driftY}px)`;
  });

  return el;
}

// ─── Drifter (vertical bounce + sine wobble) ─────────────────

export function createDrifter(
  selector: string,
  { theme, speed, xAmp, xFreq, size, yMin = 40, yMaxPct = 0.5, tStep = 0.008 }: DrifterOptions,
): HTMLElement | null {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return null;

  const maxY = () => window.innerHeight * yMaxPct;
  let posY = randomBetween(yMin, maxY());
  let velocityY = speed;
  const baseX = randomBetween(0, window.innerWidth - size);
  let phase = randomStartPhase();

  createAnimationLoop(theme, () => {
    posY += velocityY;
    phase += tStep;

    [posY, velocityY] = bounceAtBounds(posY, velocityY, yMin, maxY());

    const wobbleX = sineOffset(phase, xFreq, xAmp);
    el.style.transform = `translate(${baseX + wobbleX}px, ${posY}px)`;
  });

  return el;
}

// ─── GIF popup ───────────────────────────────────────────────

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

// ─── Falling items ───────────────────────────────────────────

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

// ─── Spawn sprite ────────────────────────────────────────────

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
