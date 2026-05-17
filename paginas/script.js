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
    function openMenu()  { menu.classList.add('active'); overlay.classList.add('active'); toggle.querySelector('i').className = 'fas fa-times'; document.body.style.overflow = 'hidden'; }
    function closeMenu() { menu.classList.remove('active'); overlay.classList.remove('active'); toggle.querySelector('i').className = 'fas fa-bars'; document.body.style.overflow = ''; }
    toggle.addEventListener('click', function() { menu.classList.contains('active') ? closeMenu() : openMenu(); });
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay)  overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeMenu(); });
    document.querySelectorAll('.mobile-nav-link').forEach(function(l) { l.addEventListener('click', closeMenu); });
})();

/* ── CATEGORY FILTER ── */
var activeCat = 'all';
var searchQ   = '';

document.querySelectorAll('.cat-tag').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.cat-tag').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCat = btn.dataset.cat;
        applyFilters();
    });
});

function filterPosts() {
    searchQ = document.getElementById('blogSearch').value.trim().toLowerCase();
    applyFilters();
}
document.getElementById('blogSearch').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') filterPosts();
});

function applyFilters() {
    var cards = document.querySelectorAll('#postsGrid .post-card');
    var visible = 0;
    cards.forEach(function(card) {
        var catMatch  = activeCat === 'all' || card.dataset.cat === activeCat;
        var title     = card.querySelector('.post-title').textContent.toLowerCase();
        var excerpt   = card.querySelector('.post-excerpt').textContent.toLowerCase();
        var textMatch = !searchQ || title.includes(searchQ) || excerpt.includes(searchQ);
        if (catMatch && textMatch) { card.style.display = ''; visible++; }
        else card.style.display = 'none';
    });
    document.getElementById('emptyState').style.display = visible === 0 ? 'block' : 'none';
}

/* ── PAGINATION ── */
document.querySelectorAll('.page-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});