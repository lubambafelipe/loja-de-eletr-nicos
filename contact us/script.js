
    /* ── CART BADGE ── */
    (function() {
        const cart = JSON.parse(localStorage.getItem('bt_cart') || '[]');
        const total = cart.reduce((s, i) => s + i.qty, 0);
        document.getElementById('cartCount').textContent = total;
    })();

    /* ── MOBILE MENU ── */
    (function() {
        var toggle   = document.getElementById('menuToggle');
        var menu     = document.getElementById('mobileMenu');
        var overlay  = document.getElementById('mobileMenuOverlay');
        var closeBtn = document.getElementById('mobileMenuClose');

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
        if (closeBtn) closeBtn.addEventListener('click', closeMenu);
        if (overlay)  overlay.addEventListener('click', closeMenu);
        document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeMenu(); });
        document.querySelectorAll('.mobile-nav-link').forEach(function(l) { l.addEventListener('click', closeMenu); });
    })();

    /* ── FORM SUBMIT ── */
    function handleSubmit(e) {
        e.preventDefault();
        const btn = e.target.querySelector('.submit-btn');
        btn.textContent = 'Enviado! ✓';
        btn.style.background = '#16a34a';
        setTimeout(() => {
            btn.textContent = 'Submit';
            btn.style.background = '';
            e.target.reset();
        }, 3000);
    }
