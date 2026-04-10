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
      <svg class="wave-layer wave-layer-1" viewBox="0 0 2880 80" preserveAspectRatio="none">
        <path d="M0 40 C120 20, 240 10, 360 35 C480 60, 600 55, 720 30 C840 5, 960 15, 1080 40 C1200 65, 1320 50, 1440 28 C1560 6, 1680 18, 1800 42 C1920 66, 2040 52, 2160 30 C2280 8, 2400 20, 2520 40 C2640 60, 2760 48, 2880 30 L2880 0 L0 0 Z" fill="rgba(26, 82, 118, 0.7)"/>
      </svg>
      <svg class="wave-layer wave-layer-2" viewBox="0 0 2880 80" preserveAspectRatio="none">
        <path d="M0 45 C150 25, 280 15, 420 40 C560 65, 680 50, 840 28 C1000 6, 1120 22, 1260 48 C1400 70, 1520 45, 1680 25 C1840 5, 1960 30, 2100 50 C2240 70, 2380 42, 2520 22 C2660 2, 2780 28, 2880 45 L2880 0 L0 0 Z" fill="rgba(14, 54, 84, 0.5)"/>
      </svg>
    </div>
    <!-- Dive boat at the surface -->
    <div class="underwater-boat" data-underwater-boat aria-hidden="true">
      <img src="/dive-boat.png" alt="" width="104" height="91" />
    </div>
    <!-- Sea bed at the bottom -->
    <div class="underwater-seabed" data-underwater-seabed aria-hidden="true">
      <img src="/sea-floor.png" alt="" />
    </div>
    <!-- Manta rays -->
    <div class="underwater-manta underwater-manta-1" data-underwater-manta aria-hidden="true">
      <img src="/manta-ray-1.png" alt="" width="120" height="80" />
    </div>
    <div class="underwater-manta underwater-manta-2" data-underwater-manta-2 aria-hidden="true">
      <img src="/manta-ray-2.png" alt="" width="90" height="60" />
    </div>
    <!-- Jellyfish -->
    <div class="underwater-jellyfish underwater-jellyfish-1" data-underwater-jellyfish aria-hidden="true">
      <img src="/jellyfish1.png" alt="" width="38" height="56" />
    </div>
    <div class="underwater-jellyfish underwater-jellyfish-2" data-underwater-jellyfish aria-hidden="true">
      <img src="/jellyfish2.png" alt="" width="30" height="45" />
    </div>
    <div class="underwater-jellyfish underwater-jellyfish-3" data-underwater-jellyfish aria-hidden="true">
      <img src="/jellyfish3.png" alt="" width="26" height="39" />
    </div>
    <!-- Sharks -->
    <div class="underwater-shark underwater-shark-1" data-underwater-shark aria-hidden="true">
      <img src="/shark1.png" alt="" width="140" height="90" />
    </div>
    <div class="underwater-shark underwater-shark-2" data-underwater-shark aria-hidden="true">
      <img src="/shark2.png" alt="" width="120" height="80" />
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
    function animateManta(selector, speed, yAmp, yFreq, size, dir, yMinPct, yMaxPct) {
      const el = document.querySelector(selector);
      if (!el) return;
      let x = dir === 1 ? -size : window.innerWidth + size;
      const getBaseY = () => Math.random() * (window.innerHeight * (yMaxPct - yMinPct)) + window.innerHeight * yMinPct;
      let baseY = getBaseY();
      let t = Math.random() * Math.PI * 2;

      function tick() {
        if (document.documentElement.getAttribute('data-theme') !== 'underwater') {
          requestAnimationFrame(tick);
          return;
        }
        x += speed * dir;
        t += 0.015;
        const y = baseY + Math.sin(t * yFreq) * yAmp;
        if (dir === 1 && x > window.innerWidth + size) { x = -size; baseY = getBaseY(); }
        if (dir === -1 && x < -size) { x = window.innerWidth + size; baseY = getBaseY(); }
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

    animateManta('.underwater-manta-1', 0.4, 18, 0.6, 120, 1, 0.12, 0.28);   // upper band
    animateManta('.underwater-manta-2', 0.55, 12, 0.9, 90, -1, 0.30, 0.45);  // lower band

    // Animate jellyfish (bounce between surface and 50% depth)
    function animateJellyfish(selector, speed, xAmp, xFreq, size) {
      const el = document.querySelector(selector);
      if (!el) return;
      const minY = 40; // near surface
      const maxY = () => window.innerHeight * 0.5;
      let y = minY + Math.random() * (maxY() - minY);
      let dy = speed;
      let baseX = Math.random() * (window.innerWidth - size);
      let t = Math.random() * Math.PI * 2;

      function tick() {
        if (document.documentElement.getAttribute('data-theme') !== 'underwater') {
          requestAnimationFrame(tick);
          return;
        }
        y += dy;
        t += 0.008;
        const x = baseX + Math.sin(t * xFreq) * xAmp;
        // Bounce off surface and 50% depth
        if (y <= minY) { y = minY; dy = Math.abs(dy); }
        if (y >= maxY()) { y = maxY(); dy = -Math.abs(dy); }
        el.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    animateJellyfish('.underwater-jellyfish-1', 0.12, 15, 0.4, 56);
    animateJellyfish('.underwater-jellyfish-2', 0.15, 12, 0.55, 45);
    animateJellyfish('.underwater-jellyfish-3', 0.1, 18, 0.35, 39);

    // Animate sharks (horizontal glide, mid-to-deep water: 50-85%)
    function animateShark(selector, speed, yAmp, yFreq, size, dir, yMinPct, yMaxPct) {
      const el = document.querySelector(selector);
      if (!el) return;
      let x = dir === 1 ? -size : window.innerWidth + size;
      const getBaseY = () => Math.random() * (window.innerHeight * (yMaxPct - yMinPct)) + window.innerHeight * yMinPct;
      let baseY = getBaseY();
      let t = Math.random() * Math.PI * 2;

      function tick() {
        if (document.documentElement.getAttribute('data-theme') !== 'underwater') {
          requestAnimationFrame(tick);
          return;
        }
        x += speed * dir;
        t += 0.012;
        const y = baseY + Math.sin(t * yFreq) * yAmp;
        if (dir === 1 && x > window.innerWidth + size) { x = -size; baseY = getBaseY(); }
        if (dir === -1 && x < -size) { x = window.innerWidth + size; baseY = getBaseY(); }
        el.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    animateShark('.underwater-shark-1', 0.6, 10, 0.5, 140, -1, 0.50, 0.65);   // upper-deep band
    animateShark('.underwater-shark-2', 0.75, 8, 0.6, 120, 1, 0.68, 0.82);   // lower-deep band

    // Easter egg: click shark → spawn jellyfish, click jellyfish → spawn shark
    const jellyImgs = ['/jellyfish1.png', '/jellyfish2.png', '/jellyfish3.png'];
    const sharkImgs = ['/shark1.png', '/shark2.png'];
    let spawnCount = 0;

    function spawnCreature(type) {
      spawnCount++;
      const id = `spawned-${spawnCount}`;
      const div = document.createElement('div');
      div.id = id;
      div.style.cssText = 'position:fixed;top:0;left:0;z-index:1;pointer-events:auto;cursor:pointer;';
      const img = document.createElement('img');

      if (type === 'jellyfish') {
        const src = jellyImgs[Math.floor(Math.random() * jellyImgs.length)];
        img.src = src;
        img.width = 30 + Math.random() * 10;
        img.height = img.width * 1.5;
        div.style.opacity = '0.5';
        div.appendChild(img);
        document.body.appendChild(div);
        // Animate as jellyfish
        const speed = 0.1 + Math.random() * 0.1;
        const xAmp = 12 + Math.random() * 10;
        const xFreq = 0.3 + Math.random() * 0.3;
        const minY = 40;
        let y = minY + Math.random() * (window.innerHeight * 0.5 - minY);
        let dy = speed * (Math.random() < 0.5 ? 1 : -1);
        let baseX = Math.random() * (window.innerWidth - 50);
        let t = Math.random() * Math.PI * 2;
        function tick() {
          if (document.documentElement.getAttribute('data-theme') !== 'underwater' || !document.getElementById(id)) return;
          y += dy; t += 0.008;
          if (y <= minY) { y = minY; dy = Math.abs(dy); }
          const maxY = window.innerHeight * 0.5;
          if (y >= maxY) { y = maxY; dy = -Math.abs(dy); }
          div.style.transform = `translate(${baseX + Math.sin(t * xFreq) * xAmp}px, ${y}px)`;
          requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      } else {
        const dir = Math.random() < 0.5 ? 1 : -1;
        const src = dir === 1 ? sharkImgs[1] : sharkImgs[0];
        img.src = src;
        img.width = 100 + Math.random() * 40;
        img.height = img.width * 0.65;
        div.style.opacity = '0.35';
        div.appendChild(img);
        document.body.appendChild(div);
        // Animate as shark
        const speed = 0.5 + Math.random() * 0.3;
        let x = dir === 1 ? -img.width : window.innerWidth + img.width;
        let baseY = Math.random() * (window.innerHeight * 0.35) + window.innerHeight * 0.5;
        let t = Math.random() * Math.PI * 2;
        function tick() {
          if (document.documentElement.getAttribute('data-theme') !== 'underwater' || !document.getElementById(id)) return;
          x += speed * dir; t += 0.012;
          const y = baseY + Math.sin(t * 0.5) * 8;
          if (dir === 1 && x > window.innerWidth + img.width) { x = -img.width; baseY = Math.random() * (window.innerHeight * 0.35) + window.innerHeight * 0.5; }
          if (dir === -1 && x < -img.width) { x = window.innerWidth + img.width; baseY = Math.random() * (window.innerHeight * 0.35) + window.innerHeight * 0.5; }
          div.style.transform = `translate(${x}px, ${y}px)`;
          requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }

      // Spawned creatures can also spawn more
      div.addEventListener('click', () => {
        spawnCreature(type === 'jellyfish' ? 'shark' : 'jellyfish');
      });
    }

    // Attach click handlers to existing sharks and jellyfish
    document.querySelectorAll('[data-underwater-shark]').forEach(el => {
      el.addEventListener('click', () => spawnCreature('jellyfish'));
    });
    document.querySelectorAll('[data-underwater-jellyfish]').forEach(el => {
      el.addEventListener('click', () => spawnCreature('shark'));
    });
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
      background: url("/sea-floor.png") repeat-x bottom / auto 100%;
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
