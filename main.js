/* ── LONG-FORM VIDEO DATA (YouTube) ── */
const VIDEOS = [
  { id:'CakIrrhc8gM', title:'Biggest Megaprojects Under Construction in 2023', genre:'Documentary',         size:'big', n:'01' },
  { id: 'z42klR57D3M', title:'Chinese Words That Make You Fluent FAST', genre:'Talking Head Explainer', size:'big', n:'02'},
  {id: 'MFiFKnGTkwM', title: 'We Help Thousands Build a House... Walk Through Ours Before We Sell 🥲', genre:'Vlog/Walkthrough', size:'med', n:'03'},
  { id:'DfoMN-ToE-Q', title:'Why MrBeast Burger is McDonalds Worst Nightmare',  genre:'Business Case Study', size:'med', n:'04' },
  { id: 'X95PoIqFiPE', title: 'Is This The Next 100x Memecoin? (SPX6900)', genre: 'Crypto Explainer', size: 'med', n: '05'},
  { id:'4KrL7Ty8pBo', title:'The Biggest Construction Mistakes in the World',   genre:'Documentary',         size:'sm',  n:'06' },
  { id:'Rst_ZJtH7-Y', title:'Lionel Messi | The Story of a Legend',             genre:'Biography',       size:'sm',  n:'07' },
  { id:'YHGtQRioN40', title:'Why Were People Broken on the Wheel?',             genre:'Historic Documentary', size:'sm', n:'08' },
  { id:'N9CDulOUk48', title:'Real Terrifying Kidnapping 911 Calls',             genre:'911 Calls',         size:'med', n:'09' },
  { id:'c8qdYjggX8s', title:'500 mph Crash Into Audience',                      genre:'Crash Story',      size:'big', n:'10' },
  { id: '94oS6ZLb5TE', title: 'What is WalletConnect and How to use it ? | Complete Guide 2024', genre:'Explainer Animation', size: 'med', n:'11'},
  
];

/* ── SHORT-FORM VIDEO DATA (MP4) ── */
const SHORT_VIDEOS = [
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774925403/Voiceover_broll_style_v1_q74ays.mp4',          title:'UGC Edit',             genre:'Voiceover Edit', n:'S1' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774925754/John_s_task20_v1_ywmsgn.mp4',                  title:'Brand Promo / Ad',     genre:'Brand & Commercial',  n:'S2' },
  { url: 'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774946942/Short04_final_n45otj.mp4',                    title: 'Podcast Clip',        genre: 'Podcast Highlight', n:'S3'},
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774925727/March16_POV_style_v1_qqb12g.mp4',              title:'UGC Edit',             genre:'POV Style',           n:'S4' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774925922/Mar_25_TiktokGreenScreenStyle_v1_zexukg.mp4',  title:'UGC Edit',             genre:'TikTok Style', n:'S5' },
  { url:'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774952000/John_s_task12_v1_zvf6u3.mp4',                  title:'Brand Promo/Ad',       genre: 'Commercial', n:'S6' },
  { url: 'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774952651/March17_Tiktok_style_v1_n1xyht.mp4',          title: 'UGC Edit',            genre: 'Tiktok Style', n: 'S7'},
  { url: 'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774952265/Pov_style_v1_lf2xrf.mp4',                     title: 'UGC Edit',            genre: 'POV Style', n: 'S8'},
  { url: 'https://res.cloudinary.com/dakbxfhjz/video/upload/v1774952651/March17_Tiktok_style_v1_n1xyht.mp4',          title: 'Brand Collab',        genre: 'Brand & Commercial', n:'S9'},
];

/* ── REVEAL OBSERVER ── */
const revIO = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if(e.isIntersecting){
      setTimeout(() => e.target.classList.add('in'), i * 60);
      revIO.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

function observeReveal(){
  document.querySelectorAll('.reveal:not(.in)').forEach(r => revIO.observe(r));
}

/* ── BUILD LONG-FORM CARDS ── */
const grid = document.getElementById('vgrid');
VIDEOS.forEach(v => {
  const thumb = `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`;
  const thumbFallback = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;

  const d = document.createElement('div');
  d.className = `vc ${v.size} reveal`;
  d.innerHTML = `
    <div class="vc-thumb" style="background-image:url('${thumb}')"></div>
    <div class="vc-overlay"></div>
    <div class="vc-accent"></div>
    <div class="vc-top">
      <span class="vc-num">${v.n}</span>
      <div class="vc-ytbadge">
        <svg width="10" height="7" viewBox="0 0 24 17">
          <path fill="#ff3333" d="M23.5 2.6S23.3.9 22.5.2C21.5-.1 20.2 0 19.5 0 16.3.1 12 .1 12 .1S7.7.1 4.5 0C3.8 0 2.5-.1 1.5.2.7.9.5 2.6.5 2.6S.3 4.6.3 6.6v1.8c0 2 .2 3.9.2 3.9s.2 1.7 1 2.4c1 1 2.4.9 3 1C7.7 16.9 12 17 12 17s3.3 0 6.5-.1c.7-.1 2-.1 3-1.2.8-.7 1-2.4 1-2.4s.2-2 .2-3.9V6.5c0-1.9-.2-3.9-.2-3.9z"/>
          <path fill="#fff" d="M9.7 11.5V5l6.6 3.3-6.6 3.2z"/>
        </svg>
        YouTube
      </div>
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

  /* fallback if maxresdefault doesn't exist */
  const img = new Image();
  img.src = thumb;
  img.onerror = () => {
    d.querySelector('.vc-thumb').style.backgroundImage = `url('${thumbFallback}')`;
  };

  d.addEventListener('click', () => openYTModal(v.id));
  grid.appendChild(d);
});

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

/* ── Observe all cards ── */
observeReveal();

/* ── MODAL — YouTube ── */
const modal  = document.getElementById('modal');
const mCont  = document.getElementById('mContent');
const mClose = document.getElementById('mClose');

function openYTModal(id){
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
function openVideoModal(url){
  modal.classList.add('portrait');
  mCont.innerHTML = `<video
    src="${url}"
    autoplay controls playsinline
    style="width:100%;height:100%;background:#000;outline:none">
  </video>`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  modal.classList.remove('open','portrait');
  setTimeout(() => mCont.innerHTML = '', 320);
  document.body.style.overflow = '';
}
mClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* ── NAV ── */
window.addEventListener('scroll', () =>
  document.getElementById('nav').classList.toggle('on', scrollY > 50));

/* ── FILTERS ── */
document.querySelectorAll('.fb').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.f;
    const vgrid  = document.getElementById('vgrid');
    const sfWrap = document.getElementById('sfwrap');
    if(f === 'all'){
      vgrid.style.display  = '';
      sfWrap.style.display = '';
    } else if(f === 'youtube'){
      vgrid.style.display  = '';
      sfWrap.style.display = 'none';
    } else if(f === 'brand'){
      vgrid.style.display  = 'none';
      sfWrap.style.display = '';
    }
  });
});

/* ── STAT COUNTER ANIMATION ── */
const STATS = [
  { el: document.getElementById('stat-years'),    target: 5,   suffix: '+' },
  { el: document.getElementById('stat-projects'), target: 110, suffix: '+' },
  { el: document.getElementById('stat-clients'),  target: 30,  suffix: '+' },
];

function animateCounter(el, target, suffix, duration = 1200) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    /* ease out cubic */
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current + (progress === 1 ? suffix : '');
    if(progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsSection = document.querySelector('.stats');
let statsAnimated = false;
const statsIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting && !statsAnimated){
      statsAnimated = true;
      STATS.forEach((s, i) => {
        setTimeout(() => animateCounter(s.el, s.target, s.suffix), i * 150);
      });
      statsIO.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
if(statsSection) statsIO.observe(statsSection);

/* ── SKILL BARS ── */
const skEl = document.getElementById('skEl');
const skIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.querySelectorAll('.sk-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
      skIO.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
if(skEl) skIO.observe(skEl);
