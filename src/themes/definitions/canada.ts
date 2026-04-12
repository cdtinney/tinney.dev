import type { Theme } from '../types';
import { createFallingItems } from '../../utils/animation';

const THEME_ID = 'canada';
const THEME_SELECTOR = `[data-theme="${THEME_ID}"]`;
const IMAGE_PATH = '/images/themes/canada';

const PALETTE = {
  red: '#FF0000',
  darkRed: '#cc0000',
  white: '#ffffff',
  whiteHalf: 'rgba(255, 255, 255, 0.5)',
  whiteFaint: 'rgba(255, 255, 255, 0.4)',
  whiteMuted: 'rgba(255, 255, 255, 0.25)',
  whiteTint: 'rgba(255, 255, 255, 0.2)',
  whiteGhost: 'rgba(255, 255, 255, 0.15)',
  whiteBg: 'rgba(255, 255, 255, 0.12)',
  snowColor: 'rgba(255, 255, 255, 0.6)',
};

const LOONIE_DROP_CONFIG = { count: 10, size: 48 };

const FALLING_SNOW_CONFIG = {
  slowDuration: '16s',
  fastDuration: '8s',
  tileSize: '100% 33.33%',
  offset: '-33.33%',
};

const SNOWFLAKE_CONFIG = [
  { cls: 'f1', left: '8%', size: '14px', dur: '22s', delay: '0s' },
  { cls: 'f2', left: '25%', size: '10px', dur: '18s', delay: '4s' },
  { cls: 'f3', left: '42%', size: '16px', dur: '25s', delay: '8s' },
  { cls: 'f4', left: '60%', size: '11px', dur: '20s', delay: '2s' },
  { cls: 'f5', left: '78%', size: '13px', dur: '28s', delay: '10s' },
  { cls: 'f6', left: '92%', size: '9px', dur: '17s', delay: '6s' },
];

const snowflakeRules = SNOWFLAKE_CONFIG.map(
  (f) =>
    `${THEME_SELECTOR} [data-canada-snowflakes] .${f.cls} { left: ${f.left}; font-size: ${f.size}; animation-duration: ${f.dur}; animation-delay: ${f.delay}; }`,
).join('\n    ');

export default {
  name: 'Canada',
  swatches: [PALETTE.white, PALETTE.red],
  colors: {
    '--color-text': PALETTE.white,
    '--color-text-secondary': '#ffcccc',
    '--color-text-muted': '#ffd4d4',
    '--color-text-muted-hover': PALETTE.white,
    '--color-bg': PALETTE.red,
    '--color-bg-surface': PALETTE.darkRed,
    '--color-primary': PALETTE.white,
    '--color-primary-hover': '#ffe0e0',
    '--color-secondary': PALETTE.white,
    '--color-secondary-hover': '#ffe0e0',
    '--color-secondary-border': PALETTE.white,
    '--color-accent': PALETTE.white,
    '--color-border': PALETTE.whiteFaint,
    '--color-code-bg': '#b30000',
    '--color-code-text': '#ffe0e0',
    '--shadow-button': '0 2px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
    '--btn-border-width': '2px',
    '--btn-primary-bg': PALETTE.white,
    '--btn-primary-text': PALETTE.red,
    '--btn-primary-border': PALETTE.white,
    '--btn-primary-bg-hover': PALETTE.darkRed,
    '--btn-primary-text-hover': PALETTE.white,
    '--btn-primary-border-hover': PALETTE.white,
    '--btn-secondary-bg': PALETTE.darkRed,
    '--btn-secondary-text': PALETTE.white,
    '--btn-secondary-border': PALETTE.white,
    '--btn-secondary-bg-hover': PALETTE.white,
    '--btn-secondary-text-hover': PALETTE.red,
    '--btn-secondary-border-hover': PALETTE.white,
    '--header-border': `2px solid ${PALETTE.whiteHalf}`,
    '--card-link-border': `1px dashed ${PALETTE.whiteTint + '8'}`,
    '--card-link-padding-top': '0.5rem',
    '--banner-border': `2px solid ${PALETTE.whiteHalf}`,
    '--banner-bg': PALETTE.whiteGhost,
    '--banner-radius': '6px',
  },

  pageContent: {
    notFoundPage: {
      heading: "Sorry, this page doesn't exist.",
      message: 'We looked everywhere. Double-double sorry.',
    },
  },

  html: `
    <div class="canada-bg" data-canada-bg aria-hidden="true"></div>
    <div class="canada-snowflakes" data-canada-snowflakes aria-hidden="true">
      <span class="flake f1">&#10052;</span>
      <span class="flake f2">&#10053;</span>
      <span class="flake f3">&#10052;</span>
      <span class="flake f4">&#10053;</span>
      <span class="flake f5">&#10052;</span>
      <span class="flake f6">&#10053;</span>
    </div>
  `,

  baseCss: `
    .canada-bg, .canada-snowflakes { display: none; pointer-events: none; }
    .canada-bg {
      position: fixed; inset: 0; z-index: -1;
      background-image: url("${IMAGE_PATH}/maple-leaf.svg"), url("${IMAGE_PATH}/maple-leaf.svg");
      background-size: 300px 300px, 250px 250px;
      background-position: 0 0, 170px 130px;
      background-repeat: repeat;
    }
  `,

  css: `
    ${THEME_SELECTOR} [data-canada-bg] { display: block !important; }
    ${THEME_SELECTOR} [data-canada-bg]::before,
    ${THEME_SELECTOR} [data-canada-bg]::after {
      content: '';
      position: fixed; top: -100%; left: 0;
      width: 100%; height: 300%;
      pointer-events: none; z-index: 1;
    }
    ${THEME_SELECTOR} [data-canada-bg]::before {
      background-image:
        radial-gradient(3px 3px at 2% 6%, rgba(255,255,255,0.9), transparent),
        radial-gradient(3.5px 3.5px at 5% 28%, rgba(255,255,255,0.8), transparent),
        radial-gradient(2.5px 2.5px at 9% 52%, rgba(255,255,255,0.85), transparent),
        radial-gradient(3px 3px at 13% 78%, rgba(255,255,255,0.7), transparent),
        radial-gradient(3px 3px at 17% 15%, rgba(255,255,255,0.9), transparent),
        radial-gradient(2.5px 2.5px at 22% 42%, rgba(255,255,255,0.8), transparent),
        radial-gradient(3.5px 3.5px at 26% 68%, rgba(255,255,255,0.85), transparent),
        radial-gradient(3px 3px at 31% 92%, rgba(255,255,255,0.7), transparent),
        radial-gradient(2.5px 2.5px at 35% 8%, rgba(255,255,255,0.9), transparent),
        radial-gradient(3px 3px at 39% 35%, rgba(255,255,255,0.8), transparent),
        radial-gradient(3px 3px at 44% 60%, rgba(255,255,255,0.85), transparent),
        radial-gradient(3.5px 3.5px at 48% 82%, rgba(255,255,255,0.7), transparent),
        radial-gradient(2.5px 2.5px at 53% 18%, rgba(255,255,255,0.9), transparent),
        radial-gradient(3px 3px at 57% 45%, rgba(255,255,255,0.8), transparent),
        radial-gradient(3px 3px at 62% 72%, rgba(255,255,255,0.85), transparent),
        radial-gradient(3.5px 3.5px at 66% 3%, rgba(255,255,255,0.7), transparent),
        radial-gradient(2.5px 2.5px at 71% 30%, rgba(255,255,255,0.9), transparent),
        radial-gradient(3px 3px at 75% 55%, rgba(255,255,255,0.8), transparent),
        radial-gradient(3px 3px at 80% 85%, rgba(255,255,255,0.85), transparent),
        radial-gradient(3.5px 3.5px at 84% 12%, rgba(255,255,255,0.7), transparent),
        radial-gradient(2.5px 2.5px at 89% 40%, rgba(255,255,255,0.9), transparent),
        radial-gradient(3px 3px at 93% 65%, rgba(255,255,255,0.8), transparent),
        radial-gradient(3px 3px at 97% 88%, rgba(255,255,255,0.85), transparent);
      background-size: ${FALLING_SNOW_CONFIG.tileSize};
      animation: canada-snow-slow ${FALLING_SNOW_CONFIG.slowDuration} linear infinite;
    }
    ${THEME_SELECTOR} [data-canada-bg]::after {
      background-image:
        radial-gradient(1.5px 1.5px at 1% 5%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1px 1px at 4% 22%, rgba(255,255,255,0.6), transparent),
        radial-gradient(1.5px 1.5px at 8% 45%, rgba(255,255,255,0.65), transparent),
        radial-gradient(1px 1px at 11% 68%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1.5px 1.5px at 15% 90%, rgba(255,255,255,0.6), transparent),
        radial-gradient(1px 1px at 19% 12%, rgba(255,255,255,0.65), transparent),
        radial-gradient(1.5px 1.5px at 23% 38%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1px 1px at 27% 62%, rgba(255,255,255,0.6), transparent),
        radial-gradient(1.5px 1.5px at 31% 85%, rgba(255,255,255,0.65), transparent),
        radial-gradient(1px 1px at 35% 8%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1.5px 1.5px at 39% 32%, rgba(255,255,255,0.6), transparent),
        radial-gradient(1px 1px at 43% 55%, rgba(255,255,255,0.65), transparent),
        radial-gradient(1.5px 1.5px at 47% 78%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1px 1px at 51% 2%, rgba(255,255,255,0.6), transparent),
        radial-gradient(1.5px 1.5px at 55% 25%, rgba(255,255,255,0.65), transparent),
        radial-gradient(1px 1px at 59% 48%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1.5px 1.5px at 63% 72%, rgba(255,255,255,0.6), transparent),
        radial-gradient(1px 1px at 67% 95%, rgba(255,255,255,0.65), transparent),
        radial-gradient(1.5px 1.5px at 71% 15%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1px 1px at 75% 42%, rgba(255,255,255,0.6), transparent),
        radial-gradient(1.5px 1.5px at 79% 65%, rgba(255,255,255,0.65), transparent),
        radial-gradient(1px 1px at 83% 88%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1.5px 1.5px at 87% 10%, rgba(255,255,255,0.6), transparent),
        radial-gradient(1px 1px at 91% 35%, rgba(255,255,255,0.65), transparent),
        radial-gradient(1.5px 1.5px at 95% 58%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1px 1px at 99% 80%, rgba(255,255,255,0.6), transparent);
      background-size: ${FALLING_SNOW_CONFIG.tileSize};
      animation: canada-snow-fast ${FALLING_SNOW_CONFIG.fastDuration} linear infinite;
    }
    @keyframes canada-snow-slow {
      0% { transform: translateY(${FALLING_SNOW_CONFIG.offset}); }
      100% { transform: translateY(0%); }
    }
    @keyframes canada-snow-fast {
      0% { transform: translateY(${FALLING_SNOW_CONFIG.offset}); }
      100% { transform: translateY(0%); }
    }

    ${THEME_SELECTOR} [data-canada-snowflakes] {
      display: block !important;
      position: fixed; inset: 0; z-index: 1; overflow: hidden;
    }
    ${THEME_SELECTOR} [data-canada-snowflakes] .flake {
      position: absolute; top: -20px;
      color: ${PALETTE.snowColor};
      animation: canada-flake-fall linear infinite;
    }
    ${snowflakeRules}
    @keyframes canada-flake-fall {
      0% { top: -20px; transform: rotate(0deg) translateX(0); opacity: 0; }
      5% { opacity: 0.6; }
      50% { transform: rotate(180deg) translateX(30px); }
      95% { opacity: 0.6; }
      100% { top: calc(100vh + 20px); transform: rotate(360deg) translateX(-20px); opacity: 0; }
    }

    ${THEME_SELECTOR} a, ${THEME_SELECTOR} button {
      cursor: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='-2015%20-2000%204030%204030'%3E%3Cpath%20fill='%23d52b1e'%20d='m-90%202030%2045-863a95%2095%200%200%200-111-98l-859%20151%20116-320a65%2065%200%200%200-20-73l-941-762%20212-99a65%2065%200%200%200%2034-79l-186-572%20542%20115a65%2065%200%200%200%2073-38l105-247%20423%20454a65%2065%200%200%200%20111-57l-204-1052%20327%20189a65%2065%200%200%200%2091-27l332-652%20332%20652a65%2065%200%200%200%2091%2027l327-189-204%201052a65%2065%200%200%200%20111%2057l423-454%20105%20247a65%2065%200%200%200%2073%2038l542-115-186%20572a65%2065%200%200%200%2034%2079l212%2099-941%20762a65%2065%200%200%200-20%2073l116%20320-859-151a95%2095%200%200%200-111%2098l45%20863z'/%3E%3C/svg%3E") 12 12, pointer;
    }

    ${THEME_SELECTOR} [data-card] {
      border: 2px solid ${PALETTE.whiteFaint} !important;
      border-radius: 2px;
      background: ${PALETTE.whiteBg} !important;
      position: relative;
      padding: 1.25rem 1rem 1rem;
      animation: canada-card-fall-in 0.5s ease-out both;
      animation-delay: calc(var(--card-index) * 0.1s);
    }
    @keyframes canada-card-fall-in {
      from { opacity: 0; transform: translateY(-20px) rotate(-2deg); }
      to { opacity: 1; transform: translateY(0) rotate(0deg); }
    }
    ${THEME_SELECTOR} [data-card]::after {
      content: '';
      position: absolute; top: 0; right: 0; bottom: 0;
      width: 4px;
      background: repeating-linear-gradient(to bottom, transparent, transparent 3px, ${PALETTE.whiteTint} 3px, ${PALETTE.whiteTint} 6px);
    }
    ${THEME_SELECTOR} [data-postmark] {
      display: flex !important;
      position: absolute; top: 6px; right: 8px;
      font-size: 0.55rem; font-weight: 700;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: ${PALETTE.whiteMuted};
      border: 1px solid ${PALETTE.whiteTint};
      border-radius: 50%;
      width: 38px; height: 38px;
      align-items: center; justify-content: center;
      transform: rotate(-15deg);
    }
    ${THEME_SELECTOR} [data-card-detail] { font-style: italic; }
    ${THEME_SELECTOR} [data-card-detail]::before { content: 'Ingredients: '; font-style: normal; font-weight: bold; font-size: 0.75rem; }

    ${THEME_SELECTOR} [data-banner-default] { display: none !important; }
    ${THEME_SELECTOR} [data-banner-canada] { display: block !important; }
    ${THEME_SELECTOR} [data-404] { display: none !important; }
    ${THEME_SELECTOR} [data-404="${THEME_ID}"] { display: block !important; }
  `,

  init() {
    document.addEventListener('click', (e) => {
      if (document.documentElement.dataset.theme !== THEME_ID) return;
      if ((e.target as Element)?.closest('a, button, [data-theme-ui], input, textarea')) return;
      createFallingItems({
        src: `${IMAGE_PATH}/loonie.png`,
        ...LOONIE_DROP_CONFIG,
        borderRadius: '50%',
      });
    });
  },
} satisfies Theme;
