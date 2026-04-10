export interface BouncerOptions {
  theme: string;
  size: number;
  speed: number;
}

export interface GliderOptions {
  theme: string;
  speed: number;
  dir: 1 | -1;
  size: number;
  yAmp: number;
  yFreq: number;
  yMin: number;
  yMax: number;
  tStep?: number;
}

export interface DrifterOptions {
  theme: string;
  speed: number;
  xAmp: number;
  xFreq: number;
  size: number;
  yMin?: number;
  yMaxPct?: number;
  tStep?: number;
}

export interface FallingItemsOptions {
  src: string;
  count: number;
  size: number;
  borderRadius?: string;
  stagger?: number;
}

export interface SpawnSpriteOptions {
  src: string;
  width: number;
  height: number;
  opacity?: number;
  animate: (el: HTMLElement, id: string) => void;
  onClick?: ((el: HTMLElement) => void) | null;
}

export interface GifPopup {
  show: () => void;
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
