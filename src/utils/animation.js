/**
 * Theme-aware animation loop. Pauses when the given theme is not active.
 */
export function createAnimationLoop(theme, tick) {
  function frame() {
    if (document.documentElement.getAttribute('data-theme') === theme) tick();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/**
 * DVD screensaver-style bounce off all four viewport edges.
 * Returns the element (or null if not found).
 */
export function createBouncer(selector, { theme, size, speed }) {
  const el = document.querySelector(selector);
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

/**
 * Horizontal glide with vertical sine-wave drift. Wraps when off-screen.
 * yMin/yMax are fractions of viewport height (0-1).
 */
export function createGlider(
  selector,
  { theme, speed, dir, size, yAmp, yFreq, yMin, yMax, tStep = 0.015 },
) {
  const el = document.querySelector(selector);
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

/**
 * Vertical bounce with horizontal sine-wave wobble.
 * Bounces between yMin (px) and yMaxPct (fraction of viewport height).
 */
export function createDrifter(
  selector,
  { theme, speed, xAmp, xFreq, size, yMin = 40, yMaxPct = 0.5, tStep = 0.008 },
) {
  const el = document.querySelector(selector);
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

/**
 * GIF popup with auto-hide timer. Restarts the GIF on each show().
 */
export function createGifPopup(selector, duration = 3000) {
  let timer = null;
  const el = document.querySelector(selector);

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

/**
 * Drops falling images from the top of the screen with wobble and spin.
 */
export function createFallingItems({ src, count, size, borderRadius = '0', stagger = 80 }) {
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
    document.body.appendChild(el);

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

/**
 * Spawns a positioned image and runs an animation callback on it.
 * Returns the container div.
 */
export function spawnAnimatedSprite({
  src,
  width,
  height,
  opacity = 0.5,
  animate,
  onClick = null,
}) {
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
  div.appendChild(img);
  document.body.appendChild(div);

  animate(div, id);
  if (onClick) div.addEventListener('click', () => onClick(div));

  return div;
}
