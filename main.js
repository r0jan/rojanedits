/* ── LONG-FORM VIDEO DATA ── */
/* views: real YouTube view counts formatted as strings */
const VIDEOS = [
  { id:'CakIrrhc8gM', title:'Biggest Megaprojects Under Construction in 2023',           genre:'Documentary',            size:'big', views:'2.4M' },
  { id:'z42klR57D3M', title:'Chinese Words That Make You Fluent FAST',                    genre:'Talking Head Explainer', size:'med', views:'115K' },
  { id:'MFiFKnGTkwM', title:'We Help Thousands Build a House... Walk Through Ours',       genre:'Vlog / Walkthrough',     size:'med', views:'65k' },
  { id:'DfoMN-ToE-Q', title:'Why MrBeast Burger is McDonalds Worst Nightmare',            genre:'Business Case Study',    size:'med', views:'57K' },
  { id:'X95PoIqFiPE', title:'Is This The Next 100x Memecoin? (SPX6900)',                  genre:'Crypto Explainer',       size:'med', views:'1.7K' },
  { id:'4KrL7Ty8pBo', title:'The Biggest Construction Mistakes in the World',             genre:'Documentary',            size:'med', views:'3.8M' },
  { id:'Rst_ZJtH7-Y', title:'Lionel Messi | The Story of a Legend',                      genre:'Biography',              size:'big', views:'4.1K' },
  { id:'YHGtQRioN40', title:'Why Were People Broken on the Wheel?',                      genre:'Historic Documentary',   size:'med', views:'63K' },
  { id:'N9CDulOUk48', title:'Real Terrifying Kidnapping 911 Calls',                      genre:'911 Calls',              size:'med', views:'60K' },
  { id:'c8qdYjggX8s', title:'500 mph Crash Into Audience',                               genre:'Crash Story',            size:'med', views:'1.7M' },
  { id:'94oS6ZLb5TE', title:'What is WalletConnect and How to use it? | Complete Guide', genre:'Explainer Animation',    size:'med', views:'8.5K' },
];

/* ── SHORT-FORM VIDEO DATA ── */
const SHORT_VIDEOS = [
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774925403/Voiceover_broll_style_v1_q74ays.mp4',         title:'UGC Edit',         genre:'Voiceover Edit',     n:'S1' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774925754/John_s_task20_v1_ywmsgn.mp4',                 title:'Brand Promo / Ad', genre:'Brand & Commercial', n:'S2' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774946942/Short04_final_n45otj.mp4',                    title:'Podcast Clip',     genre:'Podcast Highlight',  n:'S3' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774925727/March16_POV_style_v1_qqb12g.mp4',             title:'UGC Edit',         genre:'POV Style',          n:'S4' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774925922/Mar_25_TiktokGreenScreenStyle_v1_zexukg.mp4', title:'UGC Edit',         genre:'TikTok Style',       n:'S5' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774952000/John_s_task12_v1_zvf6u3.mp4',                 title:'Brand Promo / Ad', genre:'Commercial',         n:'S6' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774952651/March17_Tiktok_style_v1_n1xyht.mp4',          title:'UGC Edit',         genre:'TikTok Style',       n:'S7' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774952265/Pov_style_v1_lf2xrf.mp4',                     title:'UGC Edit',         genre:'POV Style',          n:'S8' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774952651/March17_Tiktok_style_v1_n1xyht.mp4',          title:'Brand Collab',     genre:'Brand & Commercial', n:'S9' },
];

/* ── REVEAL OBSERVER ── */
const revIO = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 60);
      revIO.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

function observeReveal() {
  document.querySelectorAll('.reveal:not(.in)').forEach(r => revIO.observe(r));
}

/* ── CARD BUILDER ── */
function makeVC(v) {
  const thumb         = `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`;
  const thumbFallback = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;

  const d = document.createElement('div');
  d.className = `vc ${v.size} reveal`;
  d.innerHTML = `
    <div class="vc-thumb" style="background-image:url('${thumb}')"></div>
    <div class="vc-overlay"></div>
    <div class="vc-accent"></div>
    <div class="vc-top">
      <div class="vc-ytbadge">
        <svg width="10" height="7" viewBox="0 0 24 17">
          <path fill="#ff3333" d="M23.5 2.6S23.3.9 22.5.2C21.5-.1 20.2 0 19.5 0 16.3.1 12 .1 12 .1S7.7.1 4.5 0C3.8 0 2.5-.1 1.5.2.7.9.5 2.6.5 2.6S.3 4.6.3 6.6v1.8c0 2 .2 3.9.2 3.9s.2 1.7 1 2.4c1 1 2.4.9 3 1C7.7 16.9 12 17 12 17s3.3 0 6.5-.1c.7-.1 2-.1 3-1.2.8-.7 1-2.4 1-2.4s.2-2 .2-3.9V6.5c0-1.9-.2-3.9-.2-3.9z"/>
          <path fill="#fff" d="M9.7 11.5V5l6.6 3.3-6.6 3.2z"/>
        </svg>
        YouTube
      </div>
    </div>
    <div class="vc-views">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
      ${v.views}
    </div>
    <div class="vc-play">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" style="margin-left:3px">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    </div>
    <div class="vc-info">
      <div class="vc-genre">${v.genre}</div>
      <div class="vc-title">${v.title}</div>
    </div>`;

  const img = new Image();
  img.src = thumb;
  img.onerror = () => {
    d.querySelector('.vc-thumb').style.backgroundImage = `url('${thumbFallback}')`;
  };

  d.addEventListener('click', () => openYTModal(v.id));
  return d;
}

/* ── BUILD LONG-FORM GRID ── */
const grid = document.getElementById('vgrid');

function makeRowAC(bigVideo, stackVideos) {
  const row = document.createElement('div');
  row.className = 'vc-row-ac reveal';
  row.appendChild(makeVC(bigVideo));
  const stack = document.createElement('div');
  stack.className = 'vc-stack';
  stackVideos.forEach(v => stack.appendChild(makeVC(v)));
  row.appendChild(stack);
  return row;
}

function makeRowB(videos) {
  const row = document.createElement('div');
  row.className = 'vc-row-b reveal';
  videos.forEach(v => row.appendChild(makeVC(v)));
  return row;
}

grid.appendChild(makeRowAC(VIDEOS[0],  [VIDEOS[1],  VIDEOS[2]]));
grid.appendChild(makeRowB ([VIDEOS[3],  VIDEOS[4],  VIDEOS[5]]));
grid.appendChild(makeRowAC(VIDEOS[6],  [VIDEOS[7],  VIDEOS[8]]));
grid.appendChild(makeRowB ([VIDEOS[9],  VIDEOS[10]]));

/* ── BUILD SHORT-FORM CARDS ── */
const sfGrid = document.getElementById('sfgrid');
SHORT_VIDEOS.forEach(v => {
  const d = document.createElement('div');
  d.className = 'svc reveal';
  d.innerHTML = `
    <video class="svc-video" src="${v.url}" loop muted playsinline preload="none"></video>
    <div class="svc-overlay"></div>
    <div class="svc-accent"></div>
    <div class="svc-top">
      <span class="svc-num">${v.n}</span>
      <div class="svc-badge">Short-form</div>
    </div>
    <div class="svc-play">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" style="margin-left:2px">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    </div>
    <div class="svc-info">
      <div class="vc-genre">${v.genre}</div>
      <div class="vc-title">${v.title}</div>
    </div>`;

  const video = d.querySelector('.svc-video');
  d.addEventListener('mouseenter', () => video.play());
  d.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  d.addEventListener('click', () => openVideoModal(v.url));
  sfGrid.appendChild(d);
});

observeReveal();

/* ── MODAL — YouTube ── */
const modal  = document.getElementById('modal');
const mCont  = document.getElementById('mContent');
const mClose = document.getElementById('mClose');

function openYTModal(id) {
  modal.classList.remove('portrait');
  mCont.innerHTML = `<iframe
    src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1"
    allow="autoplay; fullscreen"
    allowfullscreen
    style="width:100%;height:100%;border:none">
  </iframe>`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── MODAL — MP4 ── */
function openVideoModal(url) {
  modal.classList.add('portrait');
  mCont.innerHTML = `<video
    src="${url}"
    autoplay controls playsinline
    style="width:100%;height:100%;background:#000;outline:none">
  </video>`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open', 'portrait');
  setTimeout(() => mCont.innerHTML = '', 320);
  document.body.style.overflow = '';
}
mClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── NAV ── */
window.addEventListener('scroll', () =>
  document.getElementById('nav').classList.toggle('on', scrollY > 50));

/* ── FILTERS ── */
document.querySelectorAll('.fb').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const f      = btn.dataset.f;
    const vgrid  = document.getElementById('vgrid');
    const sfWrap = document.getElementById('sfwrap');
    if (f === 'all') {
      vgrid.style.display  = '';
      sfWrap.style.display = '';
    } else if (f === 'youtube') {
      vgrid.style.display  = '';
      sfWrap.style.display = 'none';
    } else if (f === 'brand') {
      vgrid.style.display  = 'none';
      sfWrap.style.display = '';
    }
  });
});

/* ── ELEGANT STAT COUNTER ── */
/*
  Each stat slides up smoothly with an eased cubic interpolation.
  The element briefly gets class "counting" for the CSS slide-up
  animation on each tick, creating a slot-machine-like feel.
*/
function animateCounter(el, target, duration = 1800) {
  const start     = performance.now();
  let   lastVal   = -1;

  const update = now => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    /* ease out expo for a fast-start, gentle-landing feel */
    const eased  = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.floor(eased * target);

    if (current !== lastVal) {
      lastVal = current;
      el.textContent = current;
      /* re-trigger slide-up animation on each new digit */
      el.classList.remove('counting');
      void el.offsetWidth; /* force reflow */
      el.classList.add('counting');
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  };

  requestAnimationFrame(update);
}

const STATS = [
  { el: document.getElementById('stat-years'),    target: 5   },
  { el: document.getElementById('stat-projects'), target: 110 },
  { el: document.getElementById('stat-clients'),  target: 30  },
  { el: document.getElementById('stat-views'),    target: 52  },
];

const statsSection = document.querySelector('.stats');
let statsAnimated  = false;

const statsIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !statsAnimated) {
      statsAnimated = true;
      STATS.forEach((s, i) => {
        /* stagger each stat by 120ms for a cascading reveal */
        setTimeout(() => animateCounter(s.el, s.target), i * 120);
      });
      statsIO.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });

if (statsSection) statsIO.observe(statsSection);

/* ── SKILL BARS ── */
const skEl = document.getElementById('skEl');
const skIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.sk-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
      skIO.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
if (skEl) skIO.observe(skEl);
