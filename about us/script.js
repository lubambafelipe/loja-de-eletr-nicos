/**
 * BUCAPE-TECH — Transição de Cortina Global
 */
(function () {
  'use strict';
  const EASE = 'cubic-bezier(0.77,0,0.18,1)';
  const SESSION_KEY = 'bt-internal-nav';
  const RELOAD_KEY  = 'bt-reload';
  const T = { exitClose:700, exitNavigate:750, enterOpen:900, enterLogo:400, enterDone:950 };

  const style = document.createElement('style');
  style.textContent = `
    #bt-curtain-left, #bt-curtain-right {
      position: fixed; top:0; bottom:0; width:51%; background:#1e40af;
      z-index:99999; pointer-events:none;
    }
    #bt-curtain-left  { left:0;  transform:translateX(-101%); }
    #bt-curtain-right { right:0; transform:translateX(101%); }
    #bt-curtain-logo {
      position:fixed; inset:0; z-index:100000; display:flex; align-items:center; justify-content:center;
      font-family:'Montserrat',sans-serif; font-size:clamp(18px,3vw,28px); font-weight:800;
      letter-spacing:3px; color:#fff; opacity:0; pointer-events:none; user-select:none;
    }
    body.bt-busy * { pointer-events:none !important; }
  `;
  document.head.appendChild(style);

  let leftEl, rightEl, logoEl;
  function removeAntiFlash() { document.documentElement.style.visibility=''; }
  function injectCurtain() {
    if (document.getElementById('bt-curtain-left')) return;
    leftEl=document.createElement('div'); leftEl.id='bt-curtain-left';
    rightEl=document.createElement('div'); rightEl.id='bt-curtain-right';
    logoEl=document.createElement('div'); logoEl.id='bt-curtain-logo'; logoEl.textContent='BUCAPE-TECH';
    document.body.appendChild(leftEl); document.body.appendChild(rightEl); document.body.appendChild(logoEl);
  }
  function getEls() {
    leftEl=leftEl||document.getElementById('bt-curtain-left');
    rightEl=rightEl||document.getElementById('bt-curtain-right');
    logoEl=logoEl||document.getElementById('bt-curtain-logo');
  }
  function setInstant(el,t,o) { el.style.transition='none'; if(t!==undefined)el.style.transform=t; if(o!==undefined)el.style.opacity=o; }
  function setAnimated(el,t,o,ms) { el.style.transition=`transform ${ms}ms ${EASE}, opacity ${ms}ms ease`; if(t!==undefined)el.style.transform=t; if(o!==undefined)el.style.opacity=o; }
  function playEnter() {
    getEls(); document.body.classList.add('bt-busy');
    setInstant(leftEl,'translateX(0)',undefined); setInstant(rightEl,'translateX(0)',undefined); setInstant(logoEl,undefined,'1');
    void leftEl.offsetHeight; removeAntiFlash();
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      setAnimated(leftEl,'translateX(-101%)',undefined,T.enterOpen); setAnimated(rightEl,'translateX(101%)',undefined,T.enterOpen);
      setAnimated(logoEl,undefined,'0',T.enterLogo);
      setTimeout(()=>document.body.classList.remove('bt-busy'),T.enterDone);
    }));
  }
  function playDirect() { removeAntiFlash(); }
  function playExit(href) {
    getEls(); if(document.body.classList.contains('bt-busy'))return; document.body.classList.add('bt-busy');
    setInstant(leftEl,'translateX(-101%)',undefined); setInstant(rightEl,'translateX(101%)',undefined); setInstant(logoEl,undefined,'0');
    void leftEl.offsetHeight;
    requestAnimationFrame(()=>{
      setAnimated(leftEl,'translateX(0)',undefined,T.exitClose); setAnimated(rightEl,'translateX(0)',undefined,T.exitClose);
      setAnimated(logoEl,undefined,'1',T.exitClose*0.4);
      sessionStorage.setItem(SESSION_KEY,'1'); setTimeout(()=>{window.location.href=href;},T.exitNavigate);
    });
  }
  function isInternalLink(href) {
    if(!href||href.startsWith('#')||href.startsWith('mailto:')||href.startsWith('tel:'))return false;
    try{const u=new URL(href,window.location.href);return u.origin===window.location.origin&&u.pathname+u.search!==window.location.pathname+window.location.search;}catch{return false;}
  }
  function init() {
    injectCurtain();
    document.addEventListener('click',function(e){const l=e.target.closest('a[href]');if(!l)return;const h=l.getAttribute('href');if(!isInternalLink(h))return;if(l.target==='_blank'||e.ctrlKey||e.metaKey||e.shiftKey)return;e.preventDefault();playExit(l.href);});
    const fromInternal=sessionStorage.getItem(SESSION_KEY); const fromReload=sessionStorage.getItem(RELOAD_KEY);
    sessionStorage.removeItem(SESSION_KEY); sessionStorage.removeItem(RELOAD_KEY);
    if(fromInternal||fromReload) playEnter(); else playDirect();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
  window.addEventListener('pageshow',function(e){if(e.persisted){document.body.classList.remove('bt-busy');playEnter();}});
})();


/* ── SCROLL REVEAL ── */
(function() {
  const sel = '.reveal, .team-card, .contact-form-box';
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(sel).forEach(el => io.observe(el));
})();


/* ── MENU HAMBÚRGUER ── */
(function() {
  var toggle  = document.getElementById('menuToggle');
  var menu    = document.getElementById('mobileMenu');
  var overlay = document.getElementById('mobileMenuOverlay');
  var closeBtn= document.getElementById('mobileMenuClose');

  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
    toggle.querySelector('i').className = 'fas fa-times';
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    toggle.querySelector('i').className = 'fas fa-bars';
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function() {
    menu.classList.contains('active') ? closeMenu() : openMenu();
  });
  if (closeBtn)  closeBtn.addEventListener('click', closeMenu);
  if (overlay)   overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeMenu(); });
  document.querySelectorAll('.mobile-nav-link').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });
})();



(function() {
  var teamData = [
    { name:'Carlos B.', role:'CEO & Fundador',
      photo:'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&h=700&fit=crop&auto=format',
      bio:'Carlos fundou a BUCAPE-TECH em 2020 com a visão de democratizar o acesso à tecnologia premium em Angola. Com mais de 10 anos de experiência no sector tecnológico, lidera a empresa com foco na qualidade, inovação e satisfação do cliente.' },
    { name:'Ana P.', role:'Gestora de Loja',
      photo:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=700&fit=crop&auto=format',
      bio:'Ana é responsável pela gestão diária da loja e pela experiência do cliente. Com formação em Administração de Empresas e paixão por tecnologia, garante que cada interação com a BUCAPE-TECH seja memorável.' },
    { name:'Mário F.', role:'Técnico Sénior',
      photo:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&h=700&fit=crop&auto=format',
      bio:'Mário lidera o departamento técnico com expertise em hardware, redes e sistemas. É o responsável por avaliar cada produto antes de entrar no catálogo, garantindo os mais altos padrões de qualidade e desempenho.' }
  ];

  var overlay = document.getElementById('teamModalOverlay');

  function openModal(i) {
    var m = teamData[i];
    document.getElementById('tmPhoto').src = m.photo;
    document.getElementById('tmPhoto').alt = m.name;
    document.getElementById('tmRole').textContent = m.role;
    document.getElementById('tmName').textContent = m.name;
    document.getElementById('tmBio').textContent  = m.bio;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* Clique nos cards — delegado no document para evitar qualquer bloqueio */
  document.addEventListener('click', function(e) {
    var card = e.target.closest('[data-member]');
    if (card) {
      openModal(parseInt(card.dataset.member, 10));
      return;
    }
    if (e.target === overlay) { closeModal(); return; }
    if (e.target.closest('#tmClose')) { closeModal(); return; }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
})();