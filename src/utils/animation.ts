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

export function createBouncer(
  selector: string,
  { theme, size, speed }: BouncerOptions,
): HTMLElement | null {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return null;

  let x = Math.random() * (window.innerWidth - size);
  let y = Math.random() * (window.innerHeight - size);
  const angle =
    (((Math.random() * 0.8 + 0.2) * Math.PI) / 2) * (Math.random() < 0.5 ? 1 : -1) +
    (Math.random() < 0.5 ? Math.PI : 0);
  let dx = Math.cos(angle) * speed;
  let dy = Math.sin(angle) * speed;

  createAnimationLoop(theme, () => {
    x += dx;
    y += dy;
    if (x <= 0) {
      x = 0;
      dx = Math.abs(dx);
    }
    if (x >= window.innerWidth - size) {
      x = window.innerWidth - size;
      dx = -Math.abs(dx);
    }
    if (y <= 0) {
      y = 0;
      dy = Math.abs(dy);
    }
    if (y >= window.innerHeight - size) {
      y = window.innerHeight - size;
      dy = -Math.abs(dy);
    }
    el.style.transform = `translate(${x}px, ${y}px)`;
  });

  return el;
}

export function createGlider(
  selector: string,
  { theme, speed, dir, size, yAmp, yFreq, yMin, yMax, tStep = 0.015 }: GliderOptions,
): HTMLElement | null {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return null;

  let x = dir === 1 ? -size : window.innerWidth + size;
  const randomY = () =>
    Math.random() * window.innerHeight * (yMax - yMin) + window.innerHeight * yMin;
  let baseY = randomY();
  let t = Math.random() * Math.PI * 2;

  createAnimationLoop(theme, () => {
    x += speed * dir;
    t += tStep;
    if (dir === 1 && x > window.innerWidth + size) {
      x = -size;
      baseY = randomY();
    }
    if (dir === -1 && x < -size) {
      x = window.innerWidth + size;
      baseY = randomY();
    }
    el.style.transform = `translate(${x}px, ${baseY + Math.sin(t * yFreq) * yAmp}px)`;
  });

  return el;
}

export function createDrifter(
  selector: string,
  { theme, speed, xAmp, xFreq, size, yMin = 40, yMaxPct = 0.5, tStep = 0.008 }: DrifterOptions,
): HTMLElement | null {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return null;

  const maxY = () => window.innerHeight * yMaxPct;
  let y = yMin + Math.random() * (maxY() - yMin);
  let dy = speed;
  const baseX = Math.random() * (window.innerWidth - size);
  let t = Math.random() * Math.PI * 2;

  createAnimationLoop(theme, () => {
    y += dy;
    t += tStep;
    if (y <= yMin) {
      y = yMin;
      dy = Math.abs(dy);
    }
    if (y >= maxY()) {
      y = maxY();
      dy = -Math.abs(dy);
    }
    el.style.transform = `translate(${baseX + Math.sin(t * xFreq) * xAmp}px, ${y}px)`;
  });

  return el;
}

export function createGifPopup(selector: string, duration = 3000): GifPopup {
  let timer: ReturnType<typeof setTimeout> | null = null;
  const el = document.querySelector<HTMLElement>(selector);

  function restartGif() {
    const img = el?.querySelector('img');
    if (img) {
      const s = img.src;
      img.src = '';
      img.src = s;
    }
  }

  return {
    show() {
      if (!el) return;
      el.classList.add('is-visible');
      restartGif();
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => el.classList.remove('is-visible'), duration);
    },
    cleanup() {
      if (timer) clearTimeout(timer);
      timer = null;
      el?.classList.remove('is-visible');
    },
  };
}

export function createFallingItems({
  src,
  count,
  size,
  borderRadius = '0',
  stagger = 80,
}: FallingItemsOptions): void {
  for (let i = 0; i < count; i++) {
    const el = document.createElement('img');
    el.src = src;
    Object.assign(el.style, {
      position: 'fixed',
      top: `${-(size + 10)}px`,
      left: `${Math.random() * (window.innerWidth - size)}px`,
      width: `${size}px`,
      height: `${size}px`,
      objectFit: 'cover',
      borderRadius,
      zIndex: '400',
      pointerEvents: 'none',
      opacity: '0.9',
    });
    document.body.append(el);

    const spd = 2 + Math.random() * 3;
    const wobbleAmp = 15 + Math.random() * 20;
    const wobbleFreq = 0.02 + Math.random() * 0.02;
    const spin = 2 + Math.random() * 4;
    let y = -(size + 10);
    let t = Math.random() * Math.PI * 2;

    setTimeout(() => {
      (function fall() {
        y += spd;
        t += wobbleFreq;
        el.style.transform = `translate(${Math.sin(t) * wobbleAmp}px, ${y + size + 10}px) rotate(${t * spin * 30}deg)`;
        if (y > window.innerHeight + size) {
          el.remove();
          return;
        }
        requestAnimationFrame(fall);
      })();
    }, i * stagger);
  }
}

let _spawnId = 0;

export function spawnAnimatedSprite({
  src,
  width,
  height,
  opacity = 0.5,
  animate,
  onClick = null,
}: SpawnSpriteOptions): HTMLElement {
  const id = `spawned-${++_spawnId}`;
  const div = document.createElement('div');
  div.id = id;
  Object.assign(div.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1',
    pointerEvents: 'auto',
    cursor: 'pointer',
    opacity: String(opacity),
  });

  const img = document.createElement('img');
  img.src = src;
  img.width = width;
  img.height = height;
  div.append(img);
  document.body.append(div);

  animate(div, id);
  if (onClick) div.addEventListener('click', () => onClick(div));

  return div;
}
