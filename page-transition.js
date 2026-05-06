/**
 * BUCAPE-TECH — Transição de Cortina Global
 *
 * IMPORTANTE: Substitui o snippet anterior no <head> por este,
 * como PRIMEIRO script (inline, sem defer/async):
 *
 *   <script>
 *     document.documentElement.style.visibility = 'hidden';
 *   </script>
 *
 * A visibilidade é sempre escondida no arranque e só é revelada
 * depois de a animação (ou o acesso direto sem animação) decidir o momento certo.
 */

(function () {
  'use strict';

  const EASE        = 'cubic-bezier(0.77,0,0.18,1)';
  const SESSION_KEY = 'bt-internal-nav';
  const RELOAD_KEY  = 'bt-reload';

  const T = {
    exitClose:    700,
    exitNavigate: 750,
    enterOpen:    900,
    enterLogo:    400,
    enterDone:    950,
  };

  const style = document.createElement('style');
  style.textContent = `
    #bt-curtain-left,
    #bt-curtain-right {
      position: fixed;
      top: 0; bottom: 0;
      width: 51%;
      background: #1a56db;
      z-index: 99999;
      pointer-events: none;
    }
    #bt-curtain-left  { left: 0;  transform: translateX(-101%); }
    #bt-curtain-right { right: 0; transform: translateX(101%);  }

    #bt-curtain-logo {
      position: fixed;
      inset: 0;
      z-index: 100000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(18px, 3vw, 28px);
      font-weight: 800;
      letter-spacing: 3px;
      color: #fff;
      opacity: 0;
      pointer-events: none;
      user-select: none;
    }

    body.bt-busy * { pointer-events: none !important; }
  `;
  document.head.appendChild(style);

  let leftEl, rightEl, logoEl;

  function removeAntiFlash() {
    document.documentElement.style.visibility = '';
  }

  function injectCurtain() {
    if (document.getElementById('bt-curtain-left')) return;
    leftEl  = document.createElement('div'); leftEl.id  = 'bt-curtain-left';
    rightEl = document.createElement('div'); rightEl.id = 'bt-curtain-right';
    logoEl  = document.createElement('div'); logoEl.id  = 'bt-curtain-logo';
    logoEl.textContent = 'BUCAPE-TECH';
    document.body.appendChild(leftEl);
    document.body.appendChild(rightEl);
    document.body.appendChild(logoEl);
  }

  function getEls() {
    leftEl  = leftEl  || document.getElementById('bt-curtain-left');
    rightEl = rightEl || document.getElementById('bt-curtain-right');
    logoEl  = logoEl  || document.getElementById('bt-curtain-logo');
  }

  function setInstant(el, transform, opacity) {
    el.style.transition = 'none';
    if (transform !== undefined) el.style.transform = transform;
    if (opacity   !== undefined) el.style.opacity   = opacity;
  }

  function setAnimated(el, transform, opacity, ms) {
    el.style.transition = `transform ${ms}ms ${EASE}, opacity ${ms}ms ease`;
    if (transform !== undefined) el.style.transform = transform;
    if (opacity   !== undefined) el.style.opacity   = opacity;
  }

  function playEnter() {
    getEls();
    document.body.classList.add('bt-busy');

    // Posiciona a cortina fechada antes de revelar a página — sem flash
    setInstant(leftEl,  'translateX(0)', undefined);
    setInstant(rightEl, 'translateX(0)', undefined);
    setInstant(logoEl,  undefined,       '1');

    // Força reflow para garantir que as posições acima são aplicadas
    void leftEl.offsetHeight;

    // Só agora revela a página (cortina já cobre tudo)
    removeAntiFlash();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Segundo rAF garante que o browser pintou a cortina antes de animar
        setAnimated(leftEl,  'translateX(-101%)', undefined, T.enterOpen);
        setAnimated(rightEl, 'translateX(101%)',  undefined, T.enterOpen);
        setAnimated(logoEl,  undefined,           '0',       T.enterLogo);

        setTimeout(() => document.body.classList.remove('bt-busy'), T.enterDone);
      });
    });
  }

  function playDirect() {
    // Primeiro acesso sem animação: revela a página imediatamente
    removeAntiFlash();
  }

  function playExit(href) {
    getEls();
    if (document.body.classList.contains('bt-busy')) return;
    document.body.classList.add('bt-busy');

    setInstant(leftEl,  'translateX(-101%)', undefined);
    setInstant(rightEl, 'translateX(101%)',  undefined);
    setInstant(logoEl,  undefined,           '0');

    void leftEl.offsetHeight;

    requestAnimationFrame(() => {
      setAnimated(leftEl,  'translateX(0)', undefined, T.exitClose);
      setAnimated(rightEl, 'translateX(0)', undefined, T.exitClose);
      setAnimated(logoEl,  undefined,       '1',       T.exitClose * 0.4);

      sessionStorage.setItem(SESSION_KEY, '1');

      setTimeout(() => { window.location.href = href; }, T.exitNavigate);
    });
  }

  function playReloadExit() {
    getEls();
    if (document.body.classList.contains('bt-busy')) return;
    document.body.classList.add('bt-busy');

    setInstant(leftEl,  'translateX(-101%)', undefined);
    setInstant(rightEl, 'translateX(101%)',  undefined);
    setInstant(logoEl,  undefined,           '0');

    void leftEl.offsetHeight;

    requestAnimationFrame(() => {
      setAnimated(leftEl,  'translateX(0)', undefined, T.exitClose);
      setAnimated(rightEl, 'translateX(0)', undefined, T.exitClose);
      setAnimated(logoEl,  undefined,       '1',       T.exitClose * 0.4);

      sessionStorage.setItem(RELOAD_KEY, '1');

      setTimeout(() => { window.location.reload(); }, T.exitNavigate);
    });
  }

  function isReload() {
    const navEntry = performance.getEntriesByType('navigation')[0];
    if (navEntry) return navEntry.type === 'reload';
    return performance.navigation && performance.navigation.type === 1;
  }

  function isInternalLink(href) {
    if (!href || href.startsWith('#') || href.startsWith('mailto:') ||
        href.startsWith('tel:') || href.startsWith('javascript:')) return false;
    try {
      const url = new URL(href, window.location.href);
      return url.origin === window.location.origin &&
             url.pathname + url.search !== window.location.pathname + window.location.search;
    } catch { return false; }
  }

  function attachLinkListeners() {
    // Cliques em links internos
    document.addEventListener('click', function (e) {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!isInternalLink(href)) return;
      if (link.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey) return;
      e.preventDefault();
      playExit(link.href);
    });

    // Ctrl+R / Cmd+R / F5 — intercepta antes do browser recarregar
    document.addEventListener('keydown', function (e) {
      const isF5    = e.key === 'F5';
      const isCtrlR = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'r';
      if (!isF5 && !isCtrlR) return;
      if (document.body.classList.contains('bt-busy')) return;
      e.preventDefault();
      playReloadExit();
    });
  }

  function init() {
    injectCurtain();
    attachLinkListeners();

    const fromInternal = sessionStorage.getItem(SESSION_KEY);
    const fromReload   = sessionStorage.getItem(RELOAD_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(RELOAD_KEY);

    if (fromInternal || fromReload || isReload()) {
      // Navegação interna, reload interceptado, ou reload direto pelo botão do browser
      playEnter();
    } else {
      // Primeiro acesso — sem animação, só revela
      playDirect();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      document.body.classList.remove('bt-busy');
      playEnter();
    }
  });

})();