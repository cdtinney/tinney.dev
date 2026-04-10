const T = '[data-theme="sharks"]';

export default {
  name: 'Sharks',
  swatches: ['#006D75', '#EA7200'],
  colors: {
    '--color-text': '#e8e8e8',
    '--color-text-secondary': '#a0b4b6',
    '--color-text-muted': '#c0cfd0',
    '--color-text-muted-hover': '#EA7200',
    '--color-bg': '#004a50',
    '--color-bg-surface': '#005a62',
    '--color-primary': '#EA7200',
    '--color-primary-hover': '#ff9224',
    '--color-secondary': '#ff9224',
    '--color-secondary-hover': '#ffb366',
    '--color-secondary-border': '#EA7200',
    '--color-accent': '#EA7200',
    '--color-border': 'rgba(234, 114, 0, 0.4)',
    '--color-code-bg': '#003a3f',
    '--color-code-text': '#e0c8a8',
    '--shadow-button': '0 2px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
  },

  html: `
    <div class="sharks-bg" data-sharks-bg aria-hidden="true"></div>
    <div class="sharks-center-logo" data-sharks-center aria-hidden="true">
      <img src="/sharks-logo-full.svg" alt="" />
    </div>
    <div class="sharks-fin" data-sharks-fin aria-hidden="true">
      <img src="/sharks-puck.png" alt="" width="62" height="62" />
    </div>
    <div class="sharks-goal" aria-hidden="true">
      <img src="/goal.gif" alt="" />
      <div class="goal-counter">
        <span class="goal-count"></span>
        <span class="goal-high"></span>
      </div>
    </div>
  `,

  baseCss: `
    .sharks-bg, .sharks-center-logo, .sharks-fin {
      opacity: 0; visibility: hidden; pointer-events: none;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }
    .sharks-bg {
      position: fixed; inset: 0; z-index: -1;
      background-image: url("/sharks-bg-tile.svg");
      background-size: 600px 500px;
      background-repeat: repeat;
    }
    .sharks-center-logo {
      display: flex; align-items: center; justify-content: center;
      position: fixed; inset: 0; z-index: -1;
    }
    .sharks-goal {
      display: none; position: fixed; top: 10px; right: 10px; z-index: 300; pointer-events: none;
    }
    .sharks-goal.is-visible { display: block; }
    .sharks-goal img { width: 140px; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.4); }
    @media (max-width: 576px) { .sharks-goal img { width: 70px; } }
    .goal-counter { display: flex; flex-direction: column; align-items: flex-end; margin-top: 6px; font-family: 'Lato', sans-serif; font-weight: bold; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
    .goal-count { font-size: 1rem; color: #EA7200; }
    .goal-high { font-size: 0.75rem; color: #a0b4b6; }
  `,

  _goalTimer: null,

  cleanup() {
    if (this._goalTimer) clearTimeout(this._goalTimer);
    this._goalTimer = null;
    document.querySelector('.sharks-goal')?.classList.remove('is-visible');
  },

  init() {
    const self = this;
    const fin = document.querySelector('.sharks-fin');
    const goal = document.querySelector('.sharks-goal');
    if (!fin) return;

    const SIZE = 62;
    const SPEED = 1.5;
    let x = Math.random() * (window.innerWidth - SIZE);
    let y = Math.random() * (window.innerHeight - SIZE);
    let angle = (Math.random() * 0.8 + 0.2) * Math.PI / 2 * (Math.random() < 0.5 ? 1 : -1);
    if (Math.random() < 0.5) angle += Math.PI;
    let dx = Math.cos(angle) * SPEED;
    let dy = Math.sin(angle) * SPEED;

    function tick() {
      if (document.documentElement.getAttribute('data-theme') !== 'sharks') {
        requestAnimationFrame(tick);
        return;
      }
      x += dx;
      y += dy;
      if (x <= 0) { x = 0; dx = Math.abs(dx); }
      if (x >= window.innerWidth - SIZE) { x = window.innerWidth - SIZE; dx = -Math.abs(dx); }
      if (y <= 0) { y = 0; dy = Math.abs(dy); }
      if (y >= window.innerHeight - SIZE) { y = window.innerHeight - SIZE; dy = -Math.abs(dy); }
      fin.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // Goal tracking
    let goals = 0;
    let highScore = 0;
    try { highScore = parseInt(localStorage.getItem('sharks-high-score') || '0', 10) || 0; } catch {}
    const countEl = document.querySelector('.goal-count');
    const highEl = document.querySelector('.goal-high');

    function updateGoalDisplay() {
      if (countEl) countEl.textContent = `Goals: ${goals}`;
      if (highEl) highEl.textContent = `Best: ${highScore}`;
    }

    fin.addEventListener('click', () => {
      if (!goal) return;
      goals++;
      if (goals > highScore) {
        highScore = goals;
        try { localStorage.setItem('sharks-high-score', String(highScore)); } catch {}
      }
      updateGoalDisplay();
      goal.classList.add('is-visible');
      const img = goal.querySelector('img');
      if (img) {
        const src = img.src;
        img.src = '';
        img.src = src;
      }
      if (self._goalTimer) clearTimeout(self._goalTimer);
      self._goalTimer = setTimeout(() => goal.classList.remove('is-visible'), 3000);
    });
  },

  css: `
    /* Easter egg elements */
    ${T} [data-sharks-bg] {
      opacity: 1 !important; visibility: visible !important;
      -webkit-mask-image: radial-gradient(ellipse 280px 240px at center, transparent 0%, transparent 100%, black 100%);
      mask-image: radial-gradient(ellipse 280px 240px at center, transparent 0%, transparent 100%, black 100%);
    }
    ${T} [data-sharks-center] {
      opacity: 1 !important; visibility: visible !important;
    }
    ${T} [data-sharks-center] img { width: 500px; max-width: 80vw; height: auto; }
    ${T} [data-sharks-fin] {
      opacity: 0.4 !important; visibility: visible !important;
      position: fixed;
      top: 0; left: 0;
      z-index: 100;
      cursor: pointer;
      pointer-events: auto !important;
    }
    ${T} [data-sharks-fin]:hover { opacity: 0.7; }
    ${T} [data-sharks-fin] img { display: block; }

    /* Cursor */
    ${T} a, ${T} button {
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M4 1 L6 1 L8 16 L8.5 17 Q10 20 13 20.5 L14 21 L14 23 L13 23 Q8.5 22.5 6.5 18.5 L6 17 L4 1Z' fill='%23222' stroke='%23555' stroke-width='0.5'/%3E%3C/svg%3E") 5 1, pointer;
    }
    ${T} [data-theme-ui] button { cursor: pointer; }

    /* Buttons */
    ${T} [data-anchor-btn] { border-width: 2px; border-style: solid; }
    ${T} [data-btn="primary"] { background-color: #006D75 !important; color: #fff !important; border-color: #EA7200 !important; }
    ${T} [data-btn="primary"]:hover { background-color: #EA7200 !important; color: #fff !important; border-color: #fff !important; }
    ${T} [data-btn="secondary"] { background-color: #EA7200 !important; color: #fff !important; border-color: #006D75 !important; }
    ${T} [data-btn="secondary"]:hover { background-color: #006D75 !important; color: #fff !important; border-color: #EA7200 !important; }

    /* Header */
    ${T} [data-header] {
      border-bottom: 3px solid;
      border-image: linear-gradient(to right, #c8102e, transparent 15%, transparent 42%, #0033a0 46%, #0033a0 54%, transparent 58%, transparent 85%, #c8102e) 1;
    }

    /* Project cards: hockey trading cards */
    ${T} [data-card] {
      border: 2px solid #EA7200 !important;
      border-radius: 8px;
      background: linear-gradient(170deg, #005a62 0%, #004048 100%) !important;
      padding: 1.25rem 1rem 1rem;
      position: relative;
      overflow: hidden;
      animation: sharks-card-slide-in 0.4s ease-out both;
      animation-delay: calc(var(--card-index) * 0.08s);
    }
    @keyframes sharks-card-slide-in {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    ${T} [data-card]::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(to right, #EA7200, #006D75, #EA7200);
    }
    ${T} [data-jersey] {
      display: block !important;
      position: absolute;
      top: 8px; right: 10px;
      font-size: 1.8rem;
      font-weight: 900;
      color: rgba(234, 114, 0, 0.15);
      line-height: 1;
      font-family: 'Lato', sans-serif;
    }
    ${T} [data-card-name] { text-transform: uppercase; letter-spacing: 0.03em; font-size: 1.15em; }
    ${T} [data-card-detail] { display: inline-flex; flex-wrap: wrap; gap: 4px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; }
    ${T} [data-card-links] { border-top: 1px solid rgba(234, 114, 0, 0.25); padding-top: 0.5rem; margin-top: 0.75rem; }

    /* Banner: scoreboard */
    ${T} [data-banner] {
      border: 2px solid #EA7200 !important;
      background: linear-gradient(180deg, #003d42 0%, #005a62 100%) !important;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.85rem;
    }
    ${T} [data-banner-default] { display: none !important; }
    ${T} [data-banner-sharks] { display: block !important; }
  `,
};
