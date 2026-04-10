const T = '[data-theme="underwater"]';

export default {
  name: 'Underwater',
  swatches: ['#0a3d62', '#00b894'],
  colors: {
    '--color-text': '#d4f1f9',
    '--color-text-secondary': '#7ec8d9',
    '--color-text-muted': '#a8dce6',
    '--color-text-muted-hover': '#00b894',
    '--color-bg': '#0a2942',
    '--color-bg-surface': '#0e3654',
    '--color-primary': '#00b894',
    '--color-primary-hover': '#00d6a8',
    '--color-secondary': '#f9ca24',
    '--color-secondary-hover': '#fad961',
    '--color-secondary-border': '#d4a818',
    '--color-accent': '#00b894',
    '--color-border': 'rgba(0, 184, 148, 0.3)',
    '--color-code-bg': '#071e30',
    '--color-code-text': '#7ec8d9',
    '--shadow-button': '0 2px 8px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 41, 66, 0.3)',
  },

  html: `
    <!-- Underwater background: ocean gradient -->
    <div class="underwater-bg" data-underwater-bg aria-hidden="true"></div>
    <!-- Waves at the surface -->
    <div class="underwater-waves" data-underwater-waves aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path class="wave wave-1" d="M0 30 Q180 0, 360 30 Q540 60, 720 30 Q900 0, 1080 30 Q1260 60, 1440 30 L1440 0 L0 0 Z"/>
        <path class="wave wave-2" d="M0 35 Q180 10, 360 35 Q540 60, 720 35 Q900 10, 1080 35 Q1260 60, 1440 35 L1440 0 L0 0 Z"/>
      </svg>
    </div>
    <!-- Sea bed at the bottom -->
    <div class="underwater-seabed" data-underwater-seabed aria-hidden="true">
      <svg class="seabed-svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <!-- Sandy floor -->
        <path d="M0 60 Q80 35, 180 50 Q300 70, 420 40 Q520 20, 660 45 Q800 68, 950 35 Q1080 15, 1200 42 Q1340 65, 1440 38 L1440 120 L0 120 Z" fill="#1a3a20"/>
        <path d="M0 75 Q120 50, 260 65 Q400 82, 530 55 Q650 35, 790 58 Q920 78, 1060 48 Q1180 30, 1300 55 Q1400 70, 1440 52 L1440 120 L0 120 Z" fill="#142e18" opacity="0.8"/>
        <!-- Rocks -->
        <ellipse cx="180" cy="62" rx="30" ry="15" fill="#1e3d24" opacity="0.7"/>
        <ellipse cx="200" cy="58" rx="20" ry="12" fill="#253f2a"/>
        <ellipse cx="750" cy="55" rx="35" ry="18" fill="#1e3d24" opacity="0.6"/>
        <ellipse cx="780" cy="52" rx="22" ry="13" fill="#253f2a"/>
        <ellipse cx="1200" cy="50" rx="25" ry="14" fill="#1e3d24" opacity="0.7"/>
        <!-- Coral: branching shapes -->
        <g transform="translate(350, 42)" opacity="0.6">
          <path d="M0 30 L0 15 L-5 5 M0 15 L5 3 M0 20 L-8 12 M0 20 L7 10" stroke="#c0392b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        </g>
        <g transform="translate(600, 48)" opacity="0.5">
          <path d="M0 25 L0 10 L-4 0 M0 10 L4 -2 M0 16 L-6 8 M0 16 L6 6" stroke="#e74c3c" stroke-width="2" fill="none" stroke-linecap="round"/>
        </g>
        <g transform="translate(1000, 38)" opacity="0.55">
          <path d="M0 30 L0 12 L-6 2 M0 12 L6 0 M0 20 L-8 10 M0 20 L9 8 M0 25 L-5 18" stroke="#c0392b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        </g>
        <!-- Fan coral -->
        <g transform="translate(480, 50)" opacity="0.4">
          <path d="M0 22 Q-8 10, -12 0 M0 22 Q-4 8, -2 0 M0 22 Q4 8, 2 0 M0 22 Q8 10, 12 0" stroke="#e67e22" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </g>
        <g transform="translate(900, 45)" opacity="0.35">
          <path d="M0 18 Q-6 8, -10 0 M0 18 Q-2 6, 0 0 M0 18 Q4 6, 6 0 M0 18 Q8 8, 10 0" stroke="#e67e22" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </g>
      </svg>
      <!-- Swaying seaweed -->
      <div class="seabed-plants">
        <svg class="plant p1" viewBox="0 0 14 50" width="12" height="45"><path d="M7 50 Q4 35, 7 25 Q10 15, 6 2" stroke="#0d5c2e" stroke-width="2.5" fill="none" opacity="0.5"/><path d="M7 30 Q3 22, 5 14" stroke="#0d5c2e" stroke-width="1.5" fill="none" opacity="0.35"/></svg>
        <svg class="plant p2" viewBox="0 0 14 50" width="9" height="35"><path d="M7 50 Q10 38, 7 28 Q4 18, 8 5" stroke="#0a4a24" stroke-width="2" fill="none" opacity="0.45"/></svg>
        <svg class="plant p3" viewBox="0 0 14 50" width="14" height="48"><path d="M7 50 Q3 32, 7 22 Q11 12, 6 0" stroke="#0d5c2e" stroke-width="2.5" fill="none" opacity="0.55"/><path d="M7 35 Q11 28, 9 20" stroke="#0d5c2e" stroke-width="1.5" fill="none" opacity="0.35"/></svg>
        <svg class="plant p4" viewBox="0 0 14 50" width="10" height="38"><path d="M7 50 Q10 40, 6 30 Q3 20, 8 8" stroke="#0a4a24" stroke-width="2" fill="none" opacity="0.4"/></svg>
        <svg class="plant p5" viewBox="0 0 14 50" width="13" height="42"><path d="M7 50 Q4 36, 8 26 Q11 16, 6 4" stroke="#0d5c2e" stroke-width="2.5" fill="none" opacity="0.5"/></svg>
        <svg class="plant p6" viewBox="0 0 14 50" width="8" height="30"><path d="M7 50 Q9 42, 6 34 Q4 26, 8 16" stroke="#0a4a24" stroke-width="2" fill="none" opacity="0.35"/></svg>
        <svg class="plant p7" viewBox="0 0 14 50" width="11" height="40"><path d="M7 50 Q3 34, 7 24 Q11 14, 5 2" stroke="#0d5c2e" stroke-width="2" fill="none" opacity="0.45"/></svg>
      </div>
    </div>
    <!-- Manta rays -->
    <div class="underwater-manta underwater-manta-1" data-underwater-manta aria-hidden="true">
      <img src="/manta-ray-1.png" alt="" width="120" height="80" />
    </div>
    <div class="underwater-manta underwater-manta-2" data-underwater-manta-2 aria-hidden="true">
      <img src="/manta-ray-2.png" alt="" width="90" height="60" />
    </div>
    <!-- Manta ray wave easter egg -->
    <div class="underwater-wave-gif" aria-hidden="true">
      <img src="/manta-ray-wave.gif" alt="" />
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
    .underwater-bg, .underwater-bubbles, .underwater-waves, .underwater-seabed, .underwater-manta {
      opacity: 0; visibility: hidden; pointer-events: none;
      transition: opacity 0.5s ease, visibility 0.5s ease;
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
      background: linear-gradient(
        180deg,
        #1a5276 0%,
        #0e3654 25%,
        #0a2942 50%,
        #071e30 75%,
        #041420 100%
      );
    }
  `,


  _waveTimer: null,

  cleanup() {
    if (this._waveTimer) clearTimeout(this._waveTimer);
    this._waveTimer = null;
    document.querySelector('.underwater-wave-gif')?.classList.remove('is-visible');
  },

  init() {
    const self = this;
    const waveGif = document.querySelector('.underwater-wave-gif');

    // Animate manta rays (gentle horizontal glide with vertical sine drift)
    // dir: 1 = left-to-right, -1 = right-to-left
    function animateManta(selector, speed, yAmp, yFreq, size, dir) {
      const el = document.querySelector(selector);
      if (!el) return;
      let x = dir === 1 ? -size : window.innerWidth + size;
      let baseY = Math.random() * (window.innerHeight * 0.6) + 40;
      let t = Math.random() * Math.PI * 2;

      function tick() {
        if (document.documentElement.getAttribute('data-theme') !== 'underwater') {
          requestAnimationFrame(tick);
          return;
        }
        x += speed * dir;
        t += 0.015;
        const y = baseY + Math.sin(t * yFreq) * yAmp;
        // Wrap to start when off-screen
        if (dir === 1 && x > window.innerWidth + size) {
          x = -size;
          baseY = Math.random() * (window.innerHeight * 0.6) + 40;
        }
        if (dir === -1 && x < -size) {
          x = window.innerWidth + size;
          baseY = Math.random() * (window.innerHeight * 0.6) + 40;
        }
        el.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);

      // Click easter egg
      el.addEventListener('click', () => {
        if (!waveGif) return;
        waveGif.classList.add('is-visible');
        const img = waveGif.querySelector('img');
        if (img) { const s = img.src; img.src = ''; img.src = s; }
        if (self._waveTimer) clearTimeout(self._waveTimer);
        self._waveTimer = setTimeout(() => waveGif.classList.remove('is-visible'), 3000);
      });
    }

    animateManta('.underwater-manta-1', 0.4, 18, 0.6, 120, 1);   // left to right
    animateManta('.underwater-manta-2', 0.55, 12, 0.9, 90, -1);  // right to left
  },

  css: `
    /* Underwater background */
    ${T} [data-underwater-bg] { opacity: 1 !important; visibility: visible !important; }

    /* Waves at the surface */
    ${T} [data-underwater-waves] {
      opacity: 1 !important; visibility: visible !important;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2;
    }
    ${T} [data-underwater-waves] svg {
      display: block;
      width: 100%;
      height: 40px;
    }
    ${T} .wave-1 {
      fill: rgba(26, 82, 118, 0.6);
      animation: underwater-wave-1 6s ease-in-out infinite;
    }
    ${T} .wave-2 {
      fill: rgba(10, 41, 66, 0.4);
      animation: underwater-wave-2 8s ease-in-out infinite;
    }
    @keyframes underwater-wave-1 {
      0%, 100% { d: path("M0 30 Q180 0, 360 30 Q540 60, 720 30 Q900 0, 1080 30 Q1260 60, 1440 30 L1440 0 L0 0 Z"); }
      50% { d: path("M0 25 Q180 50, 360 25 Q540 0, 720 25 Q900 50, 1080 25 Q1260 0, 1440 25 L1440 0 L0 0 Z"); }
    }
    @keyframes underwater-wave-2 {
      0%, 100% { d: path("M0 35 Q180 10, 360 35 Q540 60, 720 35 Q900 10, 1080 35 Q1260 60, 1440 35 L1440 0 L0 0 Z"); }
      50% { d: path("M0 30 Q180 55, 360 30 Q540 5, 720 30 Q900 55, 1080 30 Q1260 5, 1440 30 L1440 0 L0 0 Z"); }
    }

    /* Bubbles */
    ${T} [data-underwater-bubbles] {
      opacity: 1 !important; visibility: visible !important;
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

    /* Seabed */
    ${T} [data-underwater-seabed] {
      opacity: 1 !important; visibility: visible !important;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 0;
    }
    ${T} .seabed-svg {
      display: block;
      width: 100%;
      height: 80px;
    }
    ${T} .seabed-plants {
      position: absolute;
      bottom: 25px;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding: 0 3%;
    }
    ${T} .plant {
      animation: underwater-sway 4s ease-in-out infinite;
      transform-origin: bottom center;
    }
    ${T} .p1 { animation-delay: 0s; }
    ${T} .p2 { animation-delay: 0.8s; animation-duration: 3.5s; }
    ${T} .p3 { animation-delay: 1.5s; animation-duration: 4.5s; }
    ${T} .p4 { animation-delay: 0.3s; animation-duration: 3.8s; }
    ${T} .p5 { animation-delay: 2s; animation-duration: 5s; }
    ${T} .p6 { animation-delay: 1.2s; animation-duration: 3.2s; }
    ${T} .p7 { animation-delay: 0.6s; animation-duration: 4.2s; }
    @keyframes underwater-sway {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }

    /* Manta rays */
    ${T} [data-underwater-manta],
    ${T} [data-underwater-manta-2] {
      opacity: 0.7 !important; visibility: visible !important;
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

    /* Cursor — diving mask */
    ${T} a, ${T} button {
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cellipse cx='12' cy='12' rx='10' ry='7' fill='none' stroke='%2300b894' stroke-width='2'/%3E%3Cellipse cx='8' cy='11' rx='4' ry='4' fill='rgba(10,61,98,0.5)' stroke='%2300b894' stroke-width='1'/%3E%3Cellipse cx='16' cy='11' rx='4' ry='4' fill='rgba(10,61,98,0.5)' stroke='%2300b894' stroke-width='1'/%3E%3Cline x1='12' y1='9' x2='12' y2='13' stroke='%2300b894' stroke-width='1'/%3E%3C/svg%3E") 12 12, pointer;
    }
    ${T} [data-theme-ui] button { cursor: pointer; }

    /* Buttons */
    ${T} [data-anchor-btn] { border-width: 2px; border-style: solid; }
    ${T} [data-btn="primary"] { background-color: #00b894 !important; color: #0a2942 !important; border-color: #00b894 !important; }
    ${T} [data-btn="primary"]:hover { background-color: #0e3654 !important; color: #00b894 !important; border-color: #00b894 !important; }
    ${T} [data-btn="secondary"] { background-color: #0e3654 !important; color: #f9ca24 !important; border-color: #f9ca24 !important; }
    ${T} [data-btn="secondary"]:hover { background-color: #f9ca24 !important; color: #0a2942 !important; border-color: #f9ca24 !important; }

    /* Header — water surface line */
    ${T} [data-header] {
      border-bottom: 2px solid;
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
    ${T} [data-card-links] { border-top: 1px solid rgba(0, 184, 148, 0.2); padding-top: 0.5rem; margin-top: 0.75rem; }

    /* Banner — sonar/radar style */
    ${T} [data-banner] {
      border: 1px solid rgba(0, 184, 148, 0.4) !important;
      background: rgba(0, 184, 148, 0.08) !important;
      border-radius: 8px;
    }
    ${T} [data-banner-default] { display: none !important; }
    ${T} [data-banner-underwater] { display: block !important; }
  `,
};
