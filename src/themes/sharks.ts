import type { Theme } from './types';
import { createBouncer, createGifPopup } from '../utils/animation';
import { ScoreCounter } from '../utils/ScoreCounter';

const THEME_ID = 'sharks';
const THEME_SELECTOR = `[data-theme="${THEME_ID}"]`;
const IMAGE_PATH = '/images/themes/sharks';

const PALETTE = {
  teal: '#006D75',
  orange: '#EA7200',
  darkTeal: '#004a50',
  midTeal: '#005a62',
  deepTeal: '#004048',
  scoreTeal: '#003d42',
  orangeLight: '#ff9224',
  orangeFaded: 'rgba(234, 114, 0, 0.15)',
  orangeBorder: 'rgba(234, 114, 0, 0.25)',
  rinkRed: '#c8102e',
  rinkBlue: '#0033a0',
  textLight: '#a0b4b6',
};

const BOUNCING_PUCK_CONFIG = { size: 62, speed: 1.5 };
const CENTER_LOGO_MAX_WIDTH = '500px';
const BACKGROUND_TILE_SIZE = '600px 500px';
const GOAL_GIF_SIZE = '140px';
const GOAL_GIF_SIZE_MOBILE = '70px';

export default {
  name: 'Sharks',
  swatches: [PALETTE.teal, PALETTE.orange],
  colors: {
    '--color-text': '#e8e8e8',
    '--color-text-secondary': PALETTE.textLight,
    '--color-text-muted': '#c0cfd0',
    '--color-text-muted-hover': PALETTE.orange,
    '--color-bg': PALETTE.darkTeal,
    '--color-bg-surface': PALETTE.midTeal,
    '--color-primary': PALETTE.orange,
    '--color-primary-hover': PALETTE.orangeLight,
    '--color-secondary': PALETTE.orangeLight,
    '--color-secondary-hover': '#ffb366',
    '--color-secondary-border': PALETTE.orange,
    '--color-accent': PALETTE.orange,
    '--color-border': 'rgba(234, 114, 0, 0.4)',
    '--color-code-bg': '#003a3f',
    '--color-code-text': '#e0c8a8',
    '--shadow-button': '0 2px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
    '--btn-border-width': '2px',
    '--btn-primary-bg': PALETTE.teal,
    '--btn-primary-text': '#fff',
    '--btn-primary-border': PALETTE.orange,
    '--btn-primary-bg-hover': PALETTE.orange,
    '--btn-primary-text-hover': '#fff',
    '--btn-primary-border-hover': '#fff',
    '--btn-secondary-bg': PALETTE.orange,
    '--btn-secondary-text': '#fff',
    '--btn-secondary-border': PALETTE.teal,
    '--btn-secondary-bg-hover': PALETTE.teal,
    '--btn-secondary-text-hover': '#fff',
    '--btn-secondary-border-hover': PALETTE.orange,
    '--header-border': '3px solid',
    '--card-link-border': `1px solid ${PALETTE.orangeBorder}`,
    '--card-link-padding-top': '0.5rem',
    '--card-link-margin-top': '0.75rem',
    '--banner-border': `2px solid ${PALETTE.orange}`,
    '--banner-bg': `linear-gradient(180deg, ${PALETTE.scoreTeal} 0%, ${PALETTE.midTeal} 100%)`,
    '--banner-radius': '3px',
  },

  pageContent: {
    notFoundPage: {
      heading: 'Offside!',
      message: 'This page has been sent to the penalty box.',
    },
  },

  html: `
    <div class="sharks-bg" data-sharks-bg aria-hidden="true"></div>
    <div class="sharks-center-logo" data-sharks-center aria-hidden="true">
      <img src="${IMAGE_PATH}/sharks-logo-full.svg" alt="" />
    </div>
    <div class="sharks-fin" data-sharks-fin aria-hidden="true">
      <img src="${IMAGE_PATH}/sharks-puck.png" alt="" width="${BOUNCING_PUCK_CONFIG.size}" height="${BOUNCING_PUCK_CONFIG.size}" />
    </div>
    <div class="sharks-goal" aria-hidden="true">
      <img src="${IMAGE_PATH}/goal.gif" alt="" />
      <div class="goal-counter">
        <span class="goal-count"></span>
        <span class="goal-high"></span>
      </div>
    </div>
  `,

  baseCss: `
    .sharks-bg, .sharks-center-logo, .sharks-fin { display: none; pointer-events: none; }
    .sharks-bg {
      position: fixed; inset: 0; z-index: -1;
      background-image: url("${IMAGE_PATH}/sharks-bg-tile.svg");
      background-size: ${BACKGROUND_TILE_SIZE};
      background-repeat: repeat;
    }
    .sharks-goal {
      display: none; position: fixed; top: 10px; right: 10px; z-index: 300; pointer-events: none;
    }
    .sharks-goal.is-visible { display: block; }
    .sharks-goal img { width: ${GOAL_GIF_SIZE}; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.4); }
    @media (max-width: 576px) { .sharks-goal img { width: ${GOAL_GIF_SIZE_MOBILE}; } }
    .goal-counter { display: flex; flex-direction: column; align-items: flex-end; margin-top: 6px; font-family: 'Lato', sans-serif; font-weight: bold; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
    .goal-count { font-size: 1rem; color: ${PALETTE.orange}; }
    .goal-high { font-size: 0.75rem; color: ${PALETTE.textLight}; }
  `,

  css: `
    ${THEME_SELECTOR} [data-sharks-bg] {
      display: block !important;
      -webkit-mask-image: radial-gradient(ellipse 280px 240px at center, transparent 0%, transparent 100%, black 100%);
      mask-image: radial-gradient(ellipse 280px 240px at center, transparent 0%, transparent 100%, black 100%);
    }
    ${THEME_SELECTOR} [data-sharks-center] {
      display: flex !important;
      align-items: center; justify-content: center;
      position: fixed; inset: 0; z-index: -1;
    }
    ${THEME_SELECTOR} [data-sharks-center] img { width: ${CENTER_LOGO_MAX_WIDTH}; max-width: 80vw; height: auto; }
    ${THEME_SELECTOR} [data-sharks-fin] {
      display: block !important;
      position: fixed; top: 0; left: 0; z-index: 100;
      opacity: 0.4; cursor: pointer;
      pointer-events: auto !important;
      transition: opacity 0.15s ease;
    }
    ${THEME_SELECTOR} [data-sharks-fin]:hover { opacity: 0.7; }
    ${THEME_SELECTOR} [data-sharks-fin] img { display: block; }

    ${THEME_SELECTOR} a, ${THEME_SELECTOR} button {
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M4 1 L6 1 L8 16 L8.5 17 Q10 20 13 20.5 L14 21 L14 23 L13 23 Q8.5 22.5 6.5 18.5 L6 17 L4 1Z' fill='%23222' stroke='%23555' stroke-width='0.5'/%3E%3C/svg%3E") 5 1, pointer;
    }

    ${THEME_SELECTOR} [data-header] {
      border-image: linear-gradient(to right, ${PALETTE.rinkRed}, transparent 15%, transparent 42%, ${PALETTE.rinkBlue} 46%, ${PALETTE.rinkBlue} 54%, transparent 58%, transparent 85%, ${PALETTE.rinkRed}) 1;
    }

    ${THEME_SELECTOR} [data-card] {
      border: 2px solid ${PALETTE.orange} !important;
      border-radius: 8px;
      background: linear-gradient(170deg, ${PALETTE.midTeal} 0%, ${PALETTE.deepTeal} 100%) !important;
      padding: 1.25rem 1rem 1rem;
      position: relative; overflow: hidden;
      animation: sharks-card-slide-in 0.4s ease-out both;
      animation-delay: calc(var(--card-index) * 0.08s);
    }
    @keyframes sharks-card-slide-in {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    ${THEME_SELECTOR} [data-card]::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(to right, ${PALETTE.orange}, ${PALETTE.teal}, ${PALETTE.orange});
    }
    ${THEME_SELECTOR} [data-jersey] {
      display: block !important;
      position: absolute; top: 8px; right: 10px;
      font-size: 1.8rem; font-weight: 900;
      color: ${PALETTE.orangeFaded};
      line-height: 1; font-family: 'Lato', sans-serif;
    }
    ${THEME_SELECTOR} [data-card-name] { text-transform: uppercase; letter-spacing: 0.03em; font-size: 1.15em; }
    ${THEME_SELECTOR} [data-card-detail] { display: inline-flex; flex-wrap: wrap; gap: 4px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; }

    ${THEME_SELECTOR} [data-banner] { text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.85rem; }
    ${THEME_SELECTOR} [data-banner-default] { display: none !important; }
    ${THEME_SELECTOR} [data-banner-sharks] { display: block !important; }
    ${THEME_SELECTOR} [data-404] { display: none !important; }
    ${THEME_SELECTOR} [data-404="${THEME_ID}"] { display: block !important; }
  `,

  _goalPopup: null,

  cleanup() {
    this._goalPopup?.cleanup();
  },

  init() {
    const goalPopup = createGifPopup('.sharks-goal');
    this._goalPopup = goalPopup;

    const counter = new ScoreCounter(`${THEME_ID}-high-score`);
    const countEl = document.querySelector('.goal-count');
    const highEl = document.querySelector('.goal-high');

    const fin = createBouncer('.sharks-fin', { theme: THEME_ID, ...BOUNCING_PUCK_CONFIG });
    fin?.addEventListener('click', () => {
      counter.increment();
      if (countEl) countEl.textContent = `Goals: ${counter.score}`;
      if (highEl) highEl.textContent = `Best: ${counter.highScore}`;
      goalPopup.show();
    });
  },
} satisfies Theme;
