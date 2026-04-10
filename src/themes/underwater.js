import {
  createGlider,
  createDrifter,
  createGifPopup,
  createAnimationLoop,
  spawnAnimatedSprite,
} from '../utils/animation.js';

const ID = 'underwater';
const T = `[data-theme="${ID}"]`;
const IMG = '/images/themes/underwater';

const PALETTE = {
  teal: '#00b894',
  tealLight: '#00d6a8',
  tealBorder: 'rgba(0, 184, 148, 0.3)',
  tealFaint: 'rgba(0, 184, 148, 0.2)',
  gold: '#f9ca24',
  goldLight: '#fad961',
  goldDark: '#d4a818',
  deepBlue: '#0a2942',
  midBlue: '#0e3654',
  surfaceBlue: '#1a5276',
  darkBlue: '#071e30',
  abyssBlue: '#041420',
  textLight: '#d4f1f9',
  textMid: '#7ec8d9',
  textMuted: '#a8dce6',
};

const MANTAS = [
  {
    selector: '.underwater-manta-1',
    speed: 0.4,
    yAmp: 18,
    yFreq: 0.6,
    size: 120,
    dir: 1,
    yMin: 0.12,
    yMax: 0.28,
  },
  {
    selector: '.underwater-manta-2',
    speed: 0.55,
    yAmp: 12,
    yFreq: 0.9,
    size: 90,
    dir: -1,
    yMin: 0.3,
    yMax: 0.45,
  },
];

const JELLYFISH = [
  { selector: '.underwater-jellyfish-1', speed: 0.12, xAmp: 15, xFreq: 0.4, size: 56 },
  { selector: '.underwater-jellyfish-2', speed: 0.15, xAmp: 12, xFreq: 0.55, size: 45 },
  { selector: '.underwater-jellyfish-3', speed: 0.1, xAmp: 18, xFreq: 0.35, size: 39 },
];

const SHARKS = [
  {
    selector: '.underwater-shark-1',
    speed: 0.6,
    yAmp: 10,
    yFreq: 0.5,
    size: 140,
    dir: -1,
    yMin: 0.5,
    yMax: 0.65,
  },
  {
    selector: '.underwater-shark-2',
    speed: 0.75,
    yAmp: 8,
    yFreq: 0.6,
    size: 120,
    dir: 1,
    yMin: 0.68,
    yMax: 0.82,
  },
];

function randomInRange([min, max]) {
  return min + Math.random() * (max - min);
}

function randomPhase() {
  return Math.random() * Math.PI * 2;
}

const JELLYFISH_IMGS = [`${IMG}/jellyfish1.png`, `${IMG}/jellyfish2.png`, `${IMG}/jellyfish3.png`];
const SHARK_IMGS = [`${IMG}/shark1.png`, `${IMG}/shark2.png`];

export default {
  name: 'Underwater',
  swatches: ['#0a3d62', PALETTE.teal],
  colors: {
    '--color-text': PALETTE.textLight,
    '--color-text-secondary': PALETTE.textMid,
    '--color-text-muted': PALETTE.textMuted,
    '--color-text-muted-hover': PALETTE.teal,
    '--color-bg': PALETTE.deepBlue,
    '--color-bg-surface': PALETTE.midBlue,
    '--color-primary': PALETTE.teal,
    '--color-primary-hover': PALETTE.tealLight,
    '--color-secondary': PALETTE.gold,
    '--color-secondary-hover': PALETTE.goldLight,
    '--color-secondary-border': PALETTE.goldDark,
    '--color-accent': PALETTE.teal,
    '--color-border': PALETTE.tealBorder,
    '--color-code-bg': PALETTE.darkBlue,
    '--color-code-text': PALETTE.textMid,
    '--shadow-button': '0 2px 8px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 41, 66, 0.3)',
    '--btn-border-width': '2px',
    '--btn-primary-bg': '#00b894',
    '--btn-primary-text': '#0a2942',
    '--btn-primary-border': '#00b894',
    '--btn-primary-bg-hover': '#0e3654',
    '--btn-primary-text-hover': '#00b894',
    '--btn-primary-border-hover': '#00b894',
    '--btn-secondary-bg': '#0e3654',
    '--btn-secondary-text': '#f9ca24',
    '--btn-secondary-border': '#f9ca24',
    '--btn-secondary-bg-hover': '#f9ca24',
    '--btn-secondary-text-hover': '#0a2942',
    '--btn-secondary-border-hover': '#f9ca24',
    '--header-border': '2px solid transparent',
    '--card-link-border': '1px solid rgba(0, 184, 148, 0.2)',
    '--card-link-padding-top': '0.5rem',
    '--card-link-margin-top': '0.75rem',
    '--banner-border': '1px solid rgba(0, 184, 148, 0.4)',
    '--banner-bg': 'rgba(0, 184, 148, 0.08)',
    '--banner-radius': '8px',
  },

  notFound: {
    heading: 'Lost at sea.',
    message: 'This page sank beyond our maximum dive depth.',
  },

  html: `
    <!-- Underwater background: ocean gradient -->
    <div class="underwater-bg" data-underwater-bg aria-hidden="true"></div>
    <!-- Waves at the surface -->
    <div class="underwater-waves" data-underwater-waves aria-hidden="true">
      <svg class="wave-layer wave-layer-1" viewBox="0 0 2880 80" preserveAspectRatio="none">
        <path d="M0 40 C120 20, 240 10, 360 35 C480 60, 600 55, 720 30 C840 5, 960 15, 1080 40 C1200 65, 1320 50, 1440 28 C1560 6, 1680 18, 1800 42 C1920 66, 2040 52, 2160 30 C2280 8, 2400 20, 2520 40 C2640 60, 2760 48, 2880 30 L2880 0 L0 0 Z" fill="rgba(26, 82, 118, 0.7)"/>
      </svg>
      <svg class="wave-layer wave-layer-2" viewBox="0 0 2880 80" preserveAspectRatio="none">
        <path d="M0 45 C150 25, 280 15, 420 40 C560 65, 680 50, 840 28 C1000 6, 1120 22, 1260 48 C1400 70, 1520 45, 1680 25 C1840 5, 1960 30, 2100 50 C2240 70, 2380 42, 2520 22 C2660 2, 2780 28, 2880 45 L2880 0 L0 0 Z" fill="rgba(14, 54, 84, 0.5)"/>
      </svg>
    </div>
    <!-- Dive boat at the surface -->
    <div class="underwater-boat" data-underwater-boat aria-hidden="true">
      <img src="/images/themes/underwater/dive-boat.png" alt="" width="104" height="91" />
    </div>
    <!-- Sea bed at the bottom -->
    <div class="underwater-seabed" data-underwater-seabed aria-hidden="true">
      <img src="/images/themes/underwater/sea-floor.png" alt="" />
    </div>
    <!-- Manta rays -->
    <div class="underwater-manta underwater-manta-1" data-underwater-manta aria-hidden="true">
      <img src="/images/themes/underwater/manta-ray-1.png" alt="" width="120" height="80" />
    </div>
    <div class="underwater-manta underwater-manta-2" data-underwater-manta-2 aria-hidden="true">
      <img src="/images/themes/underwater/manta-ray-2.png" alt="" width="90" height="60" />
    </div>
    <!-- Jellyfish -->
    <div class="underwater-jellyfish underwater-jellyfish-1" data-underwater-jellyfish aria-hidden="true">
      <img src="/images/themes/underwater/jellyfish1.png" alt="" width="38" height="56" />
    </div>
    <div class="underwater-jellyfish underwater-jellyfish-2" data-underwater-jellyfish aria-hidden="true">
      <img src="/images/themes/underwater/jellyfish2.png" alt="" width="30" height="45" />
    </div>
    <div class="underwater-jellyfish underwater-jellyfish-3" data-underwater-jellyfish aria-hidden="true">
      <img src="/images/themes/underwater/jellyfish3.png" alt="" width="26" height="39" />
    </div>
    <!-- Sharks -->
    <div class="underwater-shark underwater-shark-1" data-underwater-shark aria-hidden="true">
      <img src="/images/themes/underwater/shark1.png" alt="" width="140" height="90" />
    </div>
    <div class="underwater-shark underwater-shark-2" data-underwater-shark aria-hidden="true">
      <img src="/images/themes/underwater/shark2.png" alt="" width="120" height="80" />
    </div>
    <!-- Manta ray wave easter egg -->
    <div class="underwater-wave-gif" aria-hidden="true">
      <img src="/images/themes/underwater/manta-ray-wave.gif" alt="" />
    </div>
    <!-- Rising bubbles -->
    <div class="underwater-bubbles" data-underwater-bubbles aria-hidden="true">
      <span class="bubble b1"></span>
      <span class="bubble b2"></span>
      <span class="bubble b3"></span>
      <span class="bubble b4"></span>
      <span class="bubble b5"></span>
      <span class="bubble b6"></span>
      <span class="bubble b7"></span>
      <span class="bubble b8"></span>
      <span class="bubble b9"></span>
      <span class="bubble b10"></span>
      <span class="bubble b11"></span>
      <span class="bubble b12"></span>
      <span class="bubble b13"></span>
      <span class="bubble b14"></span>
      <span class="bubble b15"></span>
    </div>
  `,

  baseCss: `
    .underwater-bg, .underwater-bubbles, .underwater-waves, .underwater-seabed, .underwater-manta, .underwater-jellyfish, .underwater-shark, .underwater-boat {
      display: none; pointer-events: none;
    }
    .underwater-wave-gif {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 400;
      pointer-events: none;
    }
    .underwater-wave-gif.is-visible { display: block; animation: manta-party-entrance 0.4s ease-out; }
    .underwater-wave-gif img {
      width: 200px;
      border-radius: 12px;
      border: 4px solid;
      animation: manta-rainbow-border 0.5s linear infinite, manta-wiggle 0.3s ease-in-out infinite alternate;
    }
    .underwater-wave-gif::after {
      display: block;
      text-align: center;
      font-size: 1rem;
      font-weight: 900;
      margin-top: 8px;
      animation: manta-rainbow-text 0.5s linear infinite;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
      letter-spacing: 0.05em;
    }
    @keyframes manta-rainbow-border {
      0% { border-color: #ff0000; box-shadow: 0 0 15px #ff0000, 0 4px 20px rgba(0,0,0,0.5); }
      16% { border-color: #ff8800; box-shadow: 0 0 15px #ff8800, 0 4px 20px rgba(0,0,0,0.5); }
      33% { border-color: #ffff00; box-shadow: 0 0 15px #ffff00, 0 4px 20px rgba(0,0,0,0.5); }
      50% { border-color: #00ff00; box-shadow: 0 0 15px #00ff00, 0 4px 20px rgba(0,0,0,0.5); }
      66% { border-color: #0088ff; box-shadow: 0 0 15px #0088ff, 0 4px 20px rgba(0,0,0,0.5); }
      83% { border-color: #8800ff; box-shadow: 0 0 15px #8800ff, 0 4px 20px rgba(0,0,0,0.5); }
      100% { border-color: #ff0000; box-shadow: 0 0 15px #ff0000, 0 4px 20px rgba(0,0,0,0.5); }
    }
    @keyframes manta-rainbow-text {
      0% { color: #ff0000; }
      16% { color: #ff8800; }
      33% { color: #ffff00; }
      50% { color: #00ff00; }
      66% { color: #0088ff; }
      83% { color: #8800ff; }
      100% { color: #ff0000; }
    }
    @keyframes manta-wiggle {
      0% { transform: rotate(-2deg) scale(1); }
      100% { transform: rotate(2deg) scale(1.02); }
    }
    @keyframes manta-party-entrance {
      0% { transform: translate(-50%, -50%) scale(0) rotate(-20deg); opacity: 0; }
      60% { transform: translate(-50%, -50%) scale(1.15) rotate(5deg); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
    }
    .underwater-bg {
      position: fixed; inset: 0; z-index: -1;
      background: linear-gradient(180deg,
        ${PALETTE.surfaceBlue} 0%,
        ${PALETTE.midBlue} 25%,
        ${PALETTE.deepBlue} 50%,
        ${PALETTE.darkBlue} 75%,
        ${PALETTE.abyssBlue} 100%
      );
    }
  `,

  _wavePopup: null,

  cleanup() {
    this._wavePopup?.cleanup();
  },

  init() {
    const wavePopup = createGifPopup('.underwater-wave-gif');
    this._wavePopup = wavePopup;

    for (const cfg of MANTAS) {
      const el = createGlider(cfg.selector, { theme: ID, ...cfg });
      el?.addEventListener('click', () => wavePopup.show());
    }

    for (const cfg of JELLYFISH) createDrifter(cfg.selector, { theme: ID, ...cfg });

    for (const cfg of SHARKS) createGlider(cfg.selector, { theme: ID, ...cfg, tStep: 0.012 });

    // Spawn config for dynamically created creatures
    const SPAWN_JELLYFISH = {
      widthRange: [30, 40],
      heightRatio: 1.5,
      opacity: 0.5,
      speedRange: [0.1, 0.2],
      wobbleAmpRange: [12, 22],
      wobbleFreqRange: [0.3, 0.6],
      phaseStep: 0.008,
      yMin: 40,
      yMaxPct: 0.5,
    };

    const SPAWN_SHARK = {
      widthRange: [100, 140],
      heightRatio: 0.65,
      opacity: 0.35,
      speedRange: [0.5, 0.8],
      phaseStep: 0.012,
      yAmp: 8,
      yFreq: 0.5,
      yMinPct: 0.5,
      yBandPct: 0.35,
    };

    function spawnJellyfish() {
      const width = randomInRange(SPAWN_JELLYFISH.widthRange);
      const speed = randomInRange(SPAWN_JELLYFISH.speedRange);
      const wobbleAmp = randomInRange(SPAWN_JELLYFISH.wobbleAmpRange);
      const wobbleFreq = randomInRange(SPAWN_JELLYFISH.wobbleFreqRange);
      const { yMin, yMaxPct, phaseStep } = SPAWN_JELLYFISH;
      const maxY = () => window.innerHeight * yMaxPct;
      let posY = yMin + Math.random() * (maxY() - yMin);
      let velocityY = speed * (Math.random() < 0.5 ? 1 : -1);
      const baseX = Math.random() * (window.innerWidth - width);
      let phase = randomPhase();

      spawnAnimatedSprite({
        src: JELLYFISH_IMGS[Math.floor(Math.random() * JELLYFISH_IMGS.length)],
        width,
        height: width * SPAWN_JELLYFISH.heightRatio,
        opacity: SPAWN_JELLYFISH.opacity,
        animate(el, elId) {
          createAnimationLoop(ID, () => {
            if (!document.querySelector(`#${elId}`)) return;
            posY += velocityY;
            phase += phaseStep;
            if (posY <= yMin) {
              posY = yMin;
              velocityY = Math.abs(velocityY);
            }
            if (posY >= maxY()) {
              posY = maxY();
              velocityY = -Math.abs(velocityY);
            }
            el.style.transform = `translate(${baseX + Math.sin(phase * wobbleFreq) * wobbleAmp}px, ${posY}px)`;
          });
        },
        onClick: () => spawnShark(),
      });
    }

    function spawnShark() {
      const direction = Math.random() < 0.5 ? 1 : -1;
      const width = randomInRange(SPAWN_SHARK.widthRange);
      const speed = randomInRange(SPAWN_SHARK.speedRange);
      const { yAmp, yFreq, yMinPct, yBandPct, phaseStep } = SPAWN_SHARK;
      const randomBaseY = () =>
        Math.random() * (window.innerHeight * yBandPct) + window.innerHeight * yMinPct;
      let posX = direction === 1 ? -width : window.innerWidth + width;
      let baseY = randomBaseY();
      let phase = randomPhase();

      spawnAnimatedSprite({
        src: direction === 1 ? SHARK_IMGS[1] : SHARK_IMGS[0],
        width,
        height: width * SPAWN_SHARK.heightRatio,
        opacity: SPAWN_SHARK.opacity,
        animate(el, elId) {
          createAnimationLoop(ID, () => {
            if (!document.querySelector(`#${elId}`)) return;
            posX += speed * direction;
            phase += phaseStep;
            const posY = baseY + Math.sin(phase * yFreq) * yAmp;
            if (direction === 1 && posX > window.innerWidth + width) {
              posX = -width;
              baseY = randomBaseY();
            }
            if (direction === -1 && posX < -width) {
              posX = window.innerWidth + width;
              baseY = randomBaseY();
            }
            el.style.transform = `translate(${posX}px, ${posY}px)`;
          });
        },
        onClick: () => spawnJellyfish(),
      });
    }

    for (const el of document.querySelectorAll('[data-underwater-shark]')) {
      el.addEventListener('click', () => spawnJellyfish());
    }
    for (const el of document.querySelectorAll('[data-underwater-jellyfish]')) {
      el.addEventListener('click', () => spawnShark());
    }
  },

  css: `
    /* Underwater background */
    ${T} [data-underwater-bg] { display: block !important; }

    /* Waves at the surface */
    ${T} [data-underwater-waves] {
      display: block !important;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
      z-index: 2;
      overflow: hidden;
      background: linear-gradient(180deg, #1a5276 0%, rgba(26, 82, 118, 0) 100%);
    }
    ${T} .wave-layer {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 50px;
    }
    ${T} .wave-layer-1 {
      animation: underwater-wave-slide-1 8s linear infinite;
    }
    ${T} .wave-layer-2 {
      animation: underwater-wave-slide-2 12s linear infinite;
    }
    @keyframes underwater-wave-slide-1 {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes underwater-wave-slide-2 {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }

    /* Bubbles */
    ${T} [data-underwater-bubbles] {
      display: block !important;
      position: fixed;
      inset: 0;
      z-index: 1;
      overflow: hidden;
    }
    ${T} .bubble {
      position: absolute;
      bottom: -20px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.25), rgba(0,184,148,0.08));
      border: 1px solid rgba(255, 255, 255, 0.12);
      animation: underwater-bubble-rise linear infinite;
    }
    ${T} .b1  { left: 5%;  width: 8px;  height: 8px;  animation-duration: 18s; animation-delay: 0s; }
    ${T} .b2  { left: 15%; width: 5px;  height: 5px;  animation-duration: 22s; animation-delay: 3s; }
    ${T} .b3  { left: 28%; width: 10px; height: 10px; animation-duration: 16s; animation-delay: 6s; }
    ${T} .b4  { left: 38%; width: 6px;  height: 6px;  animation-duration: 24s; animation-delay: 1s; }
    ${T} .b5  { left: 50%; width: 7px;  height: 7px;  animation-duration: 20s; animation-delay: 8s; }
    ${T} .b6  { left: 62%; width: 4px;  height: 4px;  animation-duration: 26s; animation-delay: 4s; }
    ${T} .b7  { left: 72%; width: 9px;  height: 9px;  animation-duration: 17s; animation-delay: 10s; }
    ${T} .b8  { left: 82%; width: 5px;  height: 5px;  animation-duration: 21s; animation-delay: 2s; }
    ${T} .b9  { left: 90%; width: 7px;  height: 7px;  animation-duration: 19s; animation-delay: 7s; }
    ${T} .b10 { left: 45%; width: 3px;  height: 3px;  animation-duration: 28s; animation-delay: 5s; }
    ${T} .b11 { left: 20%; width: 6px;  height: 6px;  animation-duration: 23s; animation-delay: 9s; }
    ${T} .b12 { left: 55%; width: 4px;  height: 4px;  animation-duration: 15s; animation-delay: 11s; }
    ${T} .b13 { left: 75%; width: 8px;  height: 8px;  animation-duration: 25s; animation-delay: 3s; }
    ${T} .b14 { left: 33%; width: 5px;  height: 5px;  animation-duration: 20s; animation-delay: 13s; }
    ${T} .b15 { left: 88%; width: 6px;  height: 6px;  animation-duration: 19s; animation-delay: 7s; }
    @keyframes underwater-bubble-rise {
      0% { bottom: -20px; opacity: 0; transform: translateX(0); }
      5% { opacity: 0.7; }
      50% { transform: translateX(15px); }
      95% { opacity: 0.5; }
      100% { bottom: calc(100vh + 20px); opacity: 0; transform: translateX(-10px); }
    }

    /* Dive boat */
    ${T} [data-underwater-boat] {
      display: block !important;
      position: fixed;
      top: -10px;
      left: 5%;
      z-index: 3;
      animation: underwater-boat-drift 30s ease-in-out infinite alternate, underwater-boat-bob 3s ease-in-out infinite;
    }
    ${T} [data-underwater-boat] img { display: block; filter: brightness(0.8); mix-blend-mode: multiply; }
    @keyframes underwater-boat-drift {
      0% { left: 5%; }
      100% { left: calc(95% - 80px); }
    }
    @keyframes underwater-boat-bob {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      25% { transform: translateY(-3px) rotate(1deg); }
      75% { transform: translateY(2px) rotate(-1deg); }
    }

    /* Seabed */
    ${T} [data-underwater-seabed] {
      display: block !important;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 120px;
      z-index: 2;
      background: url("/images/themes/underwater/sea-floor.png") repeat-x bottom / auto 100%;
    }
    ${T} [data-underwater-seabed] img {
      display: none;
    }

    /* Manta rays */
    ${T} [data-underwater-manta],
    ${T} [data-underwater-manta-2] {
      display: block !important;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      cursor: pointer;
      pointer-events: auto !important;
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }
    ${T} [data-underwater-manta]:hover,
    ${T} [data-underwater-manta-2]:hover { opacity: 1; }
    ${T} [data-underwater-manta] img,
    ${T} [data-underwater-manta-2] img { display: block; }

    /* Water texture — backdrop blur + animated caustic gradients */
    ${T} [data-underwater-bg]::before {
      content: '';
      position: fixed;
      inset: 0;
      z-index: 0;
      backdrop-filter: blur(0.5px);
      -webkit-backdrop-filter: blur(0.5px);
      background:
        radial-gradient(ellipse 40% 30% at 25% 35%, rgba(0, 184, 148, 0.07), transparent),
        radial-gradient(ellipse 35% 40% at 70% 55%, rgba(249, 202, 36, 0.05), transparent),
        radial-gradient(ellipse 45% 25% at 50% 20%, rgba(0, 140, 200, 0.06), transparent),
        radial-gradient(ellipse 30% 35% at 80% 25%, rgba(0, 184, 148, 0.04), transparent);
      animation: underwater-caustic-drift 12s ease-in-out infinite alternate;
    }
    ${T} [data-underwater-bg]::after {
      content: '';
      position: fixed;
      inset: 0;
      z-index: 0;
      background:
        radial-gradient(ellipse 50% 35% at 60% 45%, rgba(0, 184, 148, 0.05), transparent),
        radial-gradient(ellipse 30% 45% at 30% 70%, rgba(249, 202, 36, 0.04), transparent),
        radial-gradient(ellipse 40% 30% at 75% 75%, rgba(0, 100, 180, 0.06), transparent);
      animation: underwater-caustic-drift-2 16s ease-in-out infinite alternate;
    }
    @keyframes underwater-caustic-drift {
      0% { transform: translate(0, 0) scale(1); }
      100% { transform: translate(30px, -20px) scale(1.05); }
    }
    @keyframes underwater-caustic-drift-2 {
      0% { transform: translate(0, 0) scale(1.05); }
      100% { transform: translate(-25px, 15px) scale(1); }
    }

    /* Jellyfish */
    ${T} [data-underwater-jellyfish] {
      display: block !important;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 0.5;
      cursor: pointer;
      pointer-events: auto !important;
    }
    ${T} [data-underwater-jellyfish] img {
      display: block;
      animation: underwater-jellyfish-pulse 3s ease-in-out infinite;
    }
    @keyframes underwater-jellyfish-pulse {
      0%, 100% { transform: scaleY(1) scaleX(1); }
      40% { transform: scaleY(0.9) scaleX(1.05); }
      60% { transform: scaleY(1.05) scaleX(0.95); }
    }

    /* Sharks */
    ${T} [data-underwater-shark] {
      display: block !important;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 0.35;
      cursor: pointer;
      pointer-events: auto !important;
    }
    ${T} [data-underwater-shark] img { display: block; }

    /* Cursor — diving mask */
    ${T} a, ${T} button {
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cellipse cx='12' cy='12' rx='10' ry='7' fill='none' stroke='%2300b894' stroke-width='2'/%3E%3Cellipse cx='8' cy='11' rx='4' ry='4' fill='rgba(10,61,98,0.5)' stroke='%2300b894' stroke-width='1'/%3E%3Cellipse cx='16' cy='11' rx='4' ry='4' fill='rgba(10,61,98,0.5)' stroke='%2300b894' stroke-width='1'/%3E%3Cline x1='12' y1='9' x2='12' y2='13' stroke='%2300b894' stroke-width='1'/%3E%3C/svg%3E") 12 12, pointer;
    }

    /* Header — water surface gradient */
    ${T} [data-header] {
      border-image: linear-gradient(to right, transparent, rgba(0,184,148,0.5) 30%, rgba(249,202,36,0.3) 70%, transparent) 1;
    }

    /* Project cards — porthole style */
    ${T} [data-card] {
      border: 2px solid rgba(0, 184, 148, 0.3) !important;
      border-radius: 12px;
      background: linear-gradient(170deg, #0e3654 0%, #0a2942 100%) !important;
      position: relative;
      overflow: hidden;
      animation: underwater-card-float 0.5s ease-out both;
      animation-delay: calc(var(--card-index) * 0.12s);
    }
    @keyframes underwater-card-float {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    ${T} [data-card]::before {
      content: '';
      position: absolute;
      top: -1px; left: -1px; right: -1px;
      height: 3px;
      background: linear-gradient(to right, #00b894, #f9ca24, #00b894);
      border-radius: 12px 12px 0 0;
    }
    ${T} [data-card-detail] { color: #7ec8d9; font-size: 0.75rem; }

    ${T} [data-banner-default] { display: none !important; }
    ${T} [data-banner-underwater] { display: block !important; }
    ${T} [data-404] { display: none !important; }
    ${T} [data-404="${ID}"] { display: block !important; }
  `,
};
