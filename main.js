/**
 * BUCAPE-TECH E-commerce - JavaScript Principal
 * Moeda: Kwanza (Kz) — Angola 🇦🇴
 */

// ========== DADOS DOS PRODUTOS ==========
const products = [
    // --- Auriculares COM desconto (badge "Oferta!") ---
    {
        id: 1,
        name: 'Fone de ouvido Barda',
        category: 'audio',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format',
        originalPrice: 42000,
        discountedPrice: 32000,
        discount: 24,
        onSale: true
    },
    {
        id: 2,
        name: 'Fone de ouvido Airmax TWS',
        category: 'audio',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format',
        originalPrice: 30000,
        discountedPrice: 14000,
        discount: 53,
        onSale: true
    },
    {
        id: 3,
        name: 'Fone de ouvido TWS',
        category: 'audio',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop&auto=format',
        originalPrice: 40000,
        discountedPrice: 32000,
        discount: 20,
        onSale: true
    },
    {
        id: 4,
        name: 'Botões BlueDoo TWS',
        category: 'audio',
        image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop&auto=format',
        originalPrice: 30000,
        discountedPrice: 21000,
        discount: 30,
        onSale: true
    },
    {
        id: 5,
        name: 'Headset Gamer Pro X',
        category: 'audio',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&auto=format',
        originalPrice: 50000,
        discountedPrice: 35000,
        discount: 30,
        onSale: true
    },
    {
        id: 6,
        name: 'Earbuds Noise Cancel',
        category: 'audio',
        image: 'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=400&h=400&fit=crop&auto=format',
        originalPrice: 35000,
        discountedPrice: 24500,
        discount: 30,
        onSale: true
    },
    // --- Outros produtos SEM desconto ---
    {
        id: 7,
        name: 'Teclado Mecânico RGB',
        category: 'perifericos',
        image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&auto=format',
        originalPrice: null,
        discountedPrice: 58000,
        discount: null,
        onSale: false
    },
    {
        id: 8,
        name: 'Mouse Gamer Óptico',
        category: 'perifericos',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&auto=format',
        originalPrice: null,
        discountedPrice: 29000,
        discount: null,
        onSale: false
    },
    {
        id: 9,
        name: 'Webcam Full HD 1080p',
        category: 'perifericos',
        image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=400&fit=crop&auto=format',
        originalPrice: null,
        discountedPrice: 42000,
        discount: null,
        onSale: false
    },
    {
        id: 10,
        name: 'Monitor Curvo 27"',
        category: 'monitores',
        image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop&auto=format',
        originalPrice: null,
        discountedPrice: 280000,
        discount: null,
        onSale: false
    },
    {
        id: 11,
        name: 'SSD NVMe 1TB Gen4',
        category: 'componentes',
        image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&h=400&fit=crop&auto=format',
        originalPrice: null,
        discountedPrice: 65000,
        discount: null,
        onSale: false
    },
    {
        id: 12,
        name: 'Placa de Vídeo RTX 4060',
        category: 'componentes',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=400&fit=crop&auto=format',
        originalPrice: null,
        discountedPrice: 320000,
        discount: null,
        onSale: false
    },
    {
        id: 13,
        name: 'Fonte 750W Modular',
        category: 'componentes',
        image: 'Nova pasta/andrey-matveev-DQifcVCtF1M-unsplash.jpg',
        originalPrice: null,
        discountedPrice: 78000,
        discount: null,
        onSale: false
    },
    {
        id: 14,
        name: 'Mousepad XL Gaming',
        category: 'perifericos',
        image: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=400&h=400&fit=crop&auto=format',
        originalPrice: null,
        discountedPrice: 18000,
        discount: null,
        onSale: false
    },
    {
        id: 15,
        name: 'Hub USB-C 7 em 1',
        category: 'perifericos',
        image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop&auto=format',
        originalPrice: null,
        discountedPrice: 32000,
        discount: null,
        onSale: false
    },
    {
        id: 16,
        name: 'Monitor',
        category: 'monitores',
        image: 'Nova pasta/nicolas-gonzalez-183F_vNaN8A-unsplash.jpg',
        originalPrice: null,
        discountedPrice: 24000,
        discount: null,
        onSale: false
    }
];

// ========== FORMATAR PREÇO EM KWANZA ==========
function formatKz(value) {
    return value.toLocaleString('pt-PT') + ' Kz';
}

// ========== DADOS DO BLOG ==========
const blogPosts = [
    {
        id: 1,
        title: 'Como Escolher o Melhor Fone de Ouvido',
        date: '15 de Maio de 2025',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop&auto=format',
        excerpt: 'Dicas essenciais para escolher o fone perfeito para as suas necessidades e estilo de vida.'
    },
    {
        id: 2,
        title: 'Tecnologia de Cancelamento de Ruído Explicada',
        date: '10 de Maio de 2025',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=400&fit=crop&auto=format',
        excerpt: 'Entenda como funciona a tecnologia ANC e por que ela é importante para a sua experiência.'
    },
    {
        id: 3,
        title: 'Manutenção e Cuidados com Fones Premium',
        date: '5 de Maio de 2025',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop&auto=format',
        excerpt: 'Guia completo para manter os seus fones em perfeito estado por mais tempo.'
    }
];

// ========== VARIÁVEIS GLOBAIS ==========
let cart = [];
const cartCountElement = document.querySelector('.cart-count');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const blogGrid = document.getElementById('blogGrid');

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    initializeNovidades();
    initializeBlog();
    setupEventListeners();
    loadCartFromStorage();
});

// ========== MENU MOBILE + SIDEBAR DESKTOP ==========
const sidebarEl      = document.getElementById('desktopSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose   = document.getElementById('sidebarClose');

function isDesktop() { return window.innerWidth >= 768; }

/* --- Sidebar desktop --- */
function openSidebar() {
    sidebarEl.classList.add('open');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeSidebar() {
    sidebarEl.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}
function toggleSidebar() {
    sidebarEl.classList.contains('open') ? closeSidebar() : openSidebar();
}

/* --- Mobile menu --- */
function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('active');
    isOpen ? closeMobileMenu() : openMobileMenu();
}
function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    menuToggle.querySelector('i').classList.replace('fa-bars', 'fa-times');
    document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
    document.body.style.overflow = '';
}

function setupEventListeners() {
    /* Hamburguer: comportamento condicionado ao breakpoint */
    menuToggle.addEventListener('click', () => {
        if (isDesktop()) toggleSidebar();
        else             toggleMobileMenu();
    });

    /* Fechar sidebar */
    if (sidebarClose)   sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    /* Botão de fechar e overlay do mobile menu */
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    if (mobileMenuClose)   mobileMenuClose.addEventListener('click', closeMobileMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    /* Fechar ao pressionar Escape */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeSidebar(); closeMobileMenu(); }
    });

    /* Links no mobile menu fecham o menu */
    document.querySelectorAll('.mobile-nav-link').forEach(link =>
        link.addEventListener('click', closeMobileMenu)
    );

    /* Links de navegação no sidebar fecham o sidebar e fazem scroll */
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            closeSidebar();
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 350);
            }
        });
    });

    /* Filtro de categorias via sidebar — NÃO fecha o sidebar */
    document.querySelectorAll('.sidebar-cat-link[data-cat]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.sidebar-cat-link').forEach(b => b.classList.remove('active-cat'));
            btn.classList.add('active-cat');
            filterProductsByCategory(btn.dataset.cat);
            // Scroll suave até à secção de produtos sem fechar o sidebar
            const target = document.querySelector('#products');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    /* Pesquisa rápida no sidebar */
    const searchInput = document.getElementById('sidebarSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            filterProductsBySearch(searchInput.value.trim().toLowerCase());
        });
        /* Pressionar Enter na pesquisa fecha o sidebar e vai para os produtos */
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const target = document.querySelector('#products');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
                closeSidebar();
            }
        });
    }

    /* Botão de lupa no header abre o sidebar */
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            openSidebar();
            // Focar o campo de pesquisa após abrir
            setTimeout(() => {
                const input = document.getElementById('sidebarSearchInput');
                if (input) input.focus();
            }, 350);
        });
    }

    /* Smooth scroll global */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* ========== FILTRO DE PRODUTOS ========== */
let currentFilter = 'all';

function filterProductsByCategory(cat) {
    currentFilter = cat;
    const track = document.getElementById('infCarouselTrack');
    if (!track) return;
    track.querySelectorAll('.product-card').forEach(card => {
        const id  = parseInt(card.querySelector('.product-btn')?.getAttribute('onclick')?.match(/\d+/)?.[0]);
        const p   = products.find(x => x.id === id);
        if (!p) return;
        const show = cat === 'all'
            || (cat === 'sale' && p.onSale)
            || p.category === cat;
        card.style.opacity    = show ? '1' : '0.15';
        card.style.transform  = show ? '' : 'scale(0.9)';
        card.style.pointerEvents = show ? '' : 'none';
    });
}

function filterProductsBySearch(query) {
    const track = document.getElementById('infCarouselTrack');
    if (!track) return;
    track.querySelectorAll('.product-card').forEach(card => {
        const name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
        const show = !query || name.includes(query);
        card.style.opacity    = show ? '1' : '0.15';
        card.style.pointerEvents = show ? '' : 'none';
    });
}

// ========== NOVIDADES DA SEMANA ==========
// Produtos de destaque para a secção "As Novidades da Semana"
const novidadesData = [
    { name: 'Microsoft Surface Laptop Studio', cat: 'Ultrabook',         ref: '30902', top: true,  price: 895000, oldPrice: 1050000, img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop' },
    { name: 'HP ZBook Firefly 14 G8',          cat: 'Ultrabook',         ref: '30901', top: false, price: 760000, oldPrice: null,    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop' },
    { name: 'HP Victus 16-e0174nw',            cat: 'Gaming Laptop',     ref: '30898', top: true,  price: 680000, oldPrice: 820000,  img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop' },
    { name: 'Samsung Galaxy Tab S7 Plus',      cat: 'Android Tablets',   ref: '30919', top: false, price: 320000, oldPrice: null,    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop' },
    { name: 'Apple iPhone Air',                cat: 'Smartphones',       ref: '321134',top: false, price: 990000, oldPrice: null,    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop' },
    { name: 'Apple iPhone 17 Pro',             cat: 'Smartphones',       ref: '321133',top: false, price: 1150000,oldPrice: 1280000, img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop' },
    { name: 'Cygnett MagDesk 3-in-1',         cat: 'Wireless chargers', ref: '320207',top: false, price: 85000,  oldPrice: null,    img: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400&h=400&fit=crop' },
    { name: 'Belkin BoostCharge Pro 2-in-1',  cat: 'Wireless chargers', ref: '320206',top: false, price: 72000,  oldPrice: 95000,   img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop' },
    { name: 'Belkin BoostCharge USB-C',        cat: 'Data cables',       ref: '320202',top: false, price: 18500,  oldPrice: null,    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop' },
    { name: 'Samsung Galaxy Fold7',            cat: 'Smartphones',       ref: '320194',top: false, price: 1380000,oldPrice: 1550000, img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop' },
];

function initializeNovidades() {
    const grid = document.getElementById('novidadesGrid');
    if (!grid) return;

    novidadesData.forEach(p => {
        const topBadge = p.top ? `<div class="nov-badge-top">TOP</div>` : '';
        const stars = Array(5).fill('<i class="fas fa-star"></i>').join('');
        const priceHTML = p.oldPrice
            ? `<div class="nov-card-price-original">${formatKz(p.oldPrice)}</div>
               <div class="nov-card-price">${formatKz(p.price)}</div>`
            : `<div class="nov-card-price">${formatKz(p.price)}</div>`;

        const card = document.createElement('div');
        card.className = 'nov-card';
        card.innerHTML = `
            ${topBadge}
            <div class="nov-card-actions">
                <button class="nov-action-btn" title="Comparar"><i class="fas fa-random"></i></button>
                <button class="nov-action-btn" title="Ver"><i class="fas fa-search"></i></button>
                <button class="nov-action-btn" title="Favoritar"><i class="far fa-heart"></i></button>
            </div>
            <div class="nov-card-img">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
            </div>
            <div class="nov-card-name">${p.name}</div>
            <div class="nov-card-cat">${p.cat}</div>
            <div class="nov-card-ref"><span>REF:</span> ${p.ref}</div>
            <div class="nov-card-stars">${stars}</div>
            ${priceHTML}
            <button class="nov-card-btn" onclick="addNovidadeToCart(this, '${p.ref}', '${p.name}', ${p.price}, '${p.img}')">Adicionar ao Carrinho</button>
        `;
        grid.appendChild(card);
    });
}

// ========== ADICIONAR NOVIDADES AO CARRINHO ==========
function addNovidadeToCart(btn, ref, name, price, img) {
    // Procura se já existe no carrinho pelo ref
    const existing = cart.find(item => item.id === 'nov-' + ref);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: 'nov-' + ref,
            name: name,
            discountedPrice: price,
            image: img,
            quantity: 1
        });
    }
    updateCartCount();
    saveCartToStorage();
    showCartNotification();
}

// ========== CARROSSEL INFINITO COM AUTO-SCROLL E DRAG ==========
function initializeProducts() {
    const section = document.querySelector('.featured-products .container');
    const oldGrid = document.getElementById('productsGrid');
    if (oldGrid) oldGrid.remove();

    section.insertAdjacentHTML('beforeend', `
        <div class="inf-carousel-outer" id="infCarouselOuter">
            <div class="inf-carousel-track" id="infCarouselTrack"></div>
        </div>
    `);

    const outer = document.getElementById('infCarouselOuter');
    const track = document.getElementById('infCarouselTrack');

    // Triplicar os cards para loop suave
    const allCards = [...products, ...products, ...products];
    allCards.forEach(p => track.appendChild(createProductCard(p)));

    const GAP = 24;
    let cardW = 0;
    let setW  = 0;

    function measure() {
        const first = track.querySelector('.product-card');
        if (!first) return;
        cardW = first.offsetWidth + GAP;
        setW  = cardW * products.length;
    }

    let pos    = 0;
    let paused = false;

    const SPEED = 0.55; // px por frame — menor = mais lento

    function autoScroll() {
        if (!paused) {
            pos += SPEED;
            if (pos >= setW) pos -= setW;
            track.style.transform = `translateX(${-pos}px)`;
        }
        requestAnimationFrame(autoScroll);
    }

    // ── Mouse drag ──────────────────────────────────────────
    let isDragging = false, dragStartX = 0, posOnDrag = 0;
    let dragVel = 0, lastX = 0, lastT = 0;

    outer.addEventListener('mousedown', (e) => {
        isDragging = true; paused = true;
        dragStartX = e.clientX; posOnDrag = pos;
        dragVel = 0; lastX = e.clientX; lastT = performance.now();
        outer.style.cursor = 'grabbing';
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const now = performance.now(), dt = now - lastT || 1;
        dragVel = (e.clientX - lastX) / dt * 16;
        lastX = e.clientX; lastT = now;
        pos = posOnDrag - (e.clientX - dragStartX);
        pos = ((pos % setW) + setW) % setW;
        track.style.transform = `translateX(${-pos}px)`;
    });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        outer.style.cursor = 'grab';
        let vel = -dragVel;
        (function momentum() {
            if (Math.abs(vel) < 0.05) { paused = false; return; }
            pos += vel; vel *= 0.92;
            pos = ((pos % setW) + setW) % setW;
            track.style.transform = `translateX(${-pos}px)`;
            requestAnimationFrame(momentum);
        })();
    });

    // ── Touch ───────────────────────────────────────────────
    let touchStartX = 0, posOnTouch = 0;

    outer.addEventListener('touchstart', (e) => {
        paused = true; touchStartX = e.touches[0].clientX;
        posOnTouch = pos; lastX = touchStartX; lastT = performance.now(); dragVel = 0;
    }, { passive: true });

    outer.addEventListener('touchmove', (e) => {
        const now = performance.now(), dt = now - lastT || 1;
        dragVel = (e.touches[0].clientX - lastX) / dt * 16;
        lastX = e.touches[0].clientX; lastT = now;
        pos = posOnTouch - (e.touches[0].clientX - touchStartX);
        pos = ((pos % setW) + setW) % setW;
        track.style.transform = `translateX(${-pos}px)`;
    }, { passive: true });

    outer.addEventListener('touchend', () => {
        let vel = -dragVel;
        (function momentum() {
            if (Math.abs(vel) < 0.05) { paused = false; return; }
            pos += vel; vel *= 0.92;
            pos = ((pos % setW) + setW) % setW;
            track.style.transform = `translateX(${-pos}px)`;
            requestAnimationFrame(momentum);
        })();
    });

    // ── Pausa ao hover ──────────────────────────────────────
    outer.addEventListener('mouseenter', () => { if (!isDragging) paused = true; });
    outer.addEventListener('mouseleave', () => { if (!isDragging) paused = false; });

    // ── Inicia ──────────────────────────────────────────────
    requestAnimationFrame(() => {
        measure();
        pos = setW; // começa no 2º conjunto
        track.style.transform = `translateX(${-pos}px)`;
        autoScroll();
    });

    window.addEventListener('resize', measure);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const badgeHTML = product.onSale
        ? `<div class="product-badge-oferta">Oferta!</div>` : '';

    const priceHTML = product.onSale
        ? `<span class="product-original-price">${formatKz(product.originalPrice)}</span>
           <span class="product-current-price">${formatKz(product.discountedPrice)}</span>`
        : `<span class="product-current-price">${formatKz(product.discountedPrice)}</span>`;

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${badgeHTML}
            <div class="product-card-actions">
                <button class="product-action-btn" title="Comparar"><i class="fas fa-random"></i></button>
                <button class="product-action-btn product-action-search" title="Ver detalhes"><i class="fas fa-search"></i></button>
                <button class="product-action-btn product-action-wish" title="Favoritar"><i class="far fa-heart"></i></button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">${priceHTML}</div>
            <button class="product-btn" onclick="addToCart(${product.id})">
                ADICIONAR AO CARRINHO
            </button>
        </div>
    `;
    return card;
}

// ========== CARRINHO ==========
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
    saveCartToStorage();
    showCartNotification();
}

function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = total;
}

function saveCartToStorage() {
    localStorage.setItem('bucape_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('bucape_cart');
    if (saved) { cart = JSON.parse(saved); updateCartCount(); }
}

function showCartNotification() {
    // Atualizar o drawer se estiver aberto
    if (typeof cartDrawer !== 'undefined' && document.getElementById('cartDrawer')?.classList.contains('open')) {
        cartDrawer.refresh();
    }
    const n = document.createElement('div');
    n.style.cssText = `
        position:fixed; top:20px; right:20px;
        background:#1e40af; color:#fff;
        padding:1rem 1.5rem; border-radius:.5rem;
        box-shadow:0 10px 15px rgba(0,0,0,.15);
        z-index:9999; font-weight:600;
        font-family:'Montserrat',sans-serif; font-size:.875rem;
        animation: slideIn .3s ease;
        display:flex; align-items:center; gap:.6rem;
        cursor:pointer;
    `;
    n.innerHTML = '<i class="fas fa-check-circle"></i> Produto adicionado ao carrinho!';
    n.addEventListener('click', () => { n.remove(); cartDrawer.open(); });
    document.body.appendChild(n);
    setTimeout(() => {
        n.style.animation = 'slideOut .3s ease';
        setTimeout(() => n.remove(), 300);
    }, 2500);
}

// ========== BLOG ==========
function initializeBlog() {
    blogGrid.innerHTML = '';
    blogPosts.forEach(post => blogGrid.appendChild(createBlogCard(post)));
}

function createBlogCard(post) {
    const card = document.createElement('article');
    card.className = 'blog-card';
    card.innerHTML = `
        <div class="blog-image"><img src="${post.image}" alt="${post.title}"></div>
        <div class="blog-content">
            <p class="blog-date">${post.date}</p>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <a href="#" class="blog-link">Leia Mais <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    return card;
}

// ========== ANIMAÇÕES ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn  { from{transform:translateX(400px);opacity:0} to{transform:translateX(0);opacity:1} }
    @keyframes slideOut { from{transform:translateX(0);opacity:1} to{transform:translateX(400px);opacity:0} }
    @keyframes fadeIn   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
`;
document.head.appendChild(style);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.blog-card, .trust-item, .banner').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// ========== SCROLL ==========
window.addEventListener('scroll', () => {
    const h = document.querySelector('.header-inner');
    if (h) h.style.boxShadow = window.scrollY > 50
        ? '0 4px 6px rgba(0,0,0,.15)'
        : '0 4px 6px rgba(0,0,0,.1)';
});

// ========== PESQUISA & FILTRO ==========

// Estado dos filtros
const filterState = {
    query:    '',
    category: 'todos',
    sort:     'relevancia',
    onSale:   false,
    maxPrice: 320000
};

// Abre/fecha o painel de pesquisa
const searchOverlay = (() => {
    const overlay = document.createElement('div');
    overlay.id = 'searchOverlay';
    overlay.innerHTML = `
        <div class="so-backdrop"></div>
        <div class="so-panel">
            <div class="so-header">
                <div class="so-search-bar">
                    <i class="fas fa-search so-search-icon"></i>
                    <input type="text" id="soInput" class="so-input" placeholder="Pesquisar produtos..." autocomplete="off">
                    <button class="so-clear" id="soClear" title="Limpar"><i class="fas fa-times"></i></button>
                </div>
                <button class="so-close" id="soClose"><i class="fas fa-times"></i></button>
            </div>

            <div class="so-body">
                <!-- Filtros -->
                <aside class="so-filters">
                    <h4 class="so-filter-title">Categoria</h4>
                    <div class="so-cat-list" id="soCatList">
                        <button class="so-cat active" data-cat="todos">Todos</button>
                        <button class="so-cat" data-cat="audio">Áudio</button>
                        <button class="so-cat" data-cat="perifericos">Periféricos</button>
                        <button class="so-cat" data-cat="componentes">Componentes</button>
                        <button class="so-cat" data-cat="monitores">Monitores</button>
                    </div>

                    <h4 class="so-filter-title" style="margin-top:1.5rem;">Preço máximo</h4>
                    <div class="so-price-wrap">
                        <input type="range" id="soPriceRange" class="so-range"
                               min="0" max="320000" step="1000" value="320000">
                        <div class="so-price-label">Até <strong id="soPriceVal">320 000 Kz</strong></div>
                    </div>

                    <h4 class="so-filter-title" style="margin-top:1.5rem;">Ordenar por</h4>
                    <select id="soSort" class="so-select">
                        <option value="relevancia">Relevância</option>
                        <option value="preco-asc">Preço: menor → maior</option>
                        <option value="preco-desc">Preço: maior → menor</option>
                        <option value="nome-az">Nome A → Z</option>
                    </select>

                    <label class="so-toggle-wrap" style="margin-top:1.5rem;">
                        <input type="checkbox" id="soOnSale">
                        <span class="so-toggle-label">Só ofertas</span>
                    </label>

                    <button class="so-reset-btn" id="soReset">
                        <i class="fas fa-undo"></i> Limpar filtros
                    </button>
                </aside>

                <!-- Resultados -->
                <div class="so-results-wrap">
                    <div class="so-results-meta" id="soMeta"></div>
                    <div class="so-results-grid" id="soGrid"></div>
                    <div class="so-empty" id="soEmpty" style="display:none;">
                        <i class="fas fa-search-minus"></i>
                        <p>Nenhum produto encontrado.</p>
                        <span>Tenta outros termos ou filtros.</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    // Fechar
    overlay.querySelector('#soClose').onclick    = close;
    overlay.querySelector('.so-backdrop').onclick = close;
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    function open() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => overlay.querySelector('#soInput').focus(), 100);
        applyFilters();
    }
    function close() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Input de pesquisa
    const input = overlay.querySelector('#soInput');
    const clearBtn = overlay.querySelector('#soClear');
    input.addEventListener('input', () => {
        filterState.query = input.value.trim().toLowerCase();
        clearBtn.style.display = filterState.query ? 'flex' : 'none';
        applyFilters();
    });
    clearBtn.addEventListener('click', () => {
        input.value = ''; filterState.query = '';
        clearBtn.style.display = 'none';
        input.focus(); applyFilters();
    });

    // Categorias
    overlay.querySelector('#soCatList').addEventListener('click', e => {
        const btn = e.target.closest('.so-cat');
        if (!btn) return;
        overlay.querySelectorAll('.so-cat').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterState.category = btn.dataset.cat;
        applyFilters();
    });

    // Preço
    const rangeEl = overlay.querySelector('#soPriceRange');
    const priceValEl = overlay.querySelector('#soPriceVal');
    rangeEl.addEventListener('input', () => {
        filterState.maxPrice = +rangeEl.value;
        priceValEl.textContent = (+rangeEl.value).toLocaleString('pt-PT') + ' Kz';
        applyFilters();
    });

    // Ordenação
    overlay.querySelector('#soSort').addEventListener('change', e => {
        filterState.sort = e.target.value; applyFilters();
    });

    // Só ofertas
    overlay.querySelector('#soOnSale').addEventListener('change', e => {
        filterState.onSale = e.target.checked; applyFilters();
    });

    // Reset
    overlay.querySelector('#soReset').addEventListener('click', () => {
        filterState.query = ''; filterState.category = 'todos';
        filterState.sort = 'relevancia'; filterState.onSale = false;
        filterState.maxPrice = 320000;
        input.value = ''; clearBtn.style.display = 'none';
        overlay.querySelectorAll('.so-cat').forEach(b => b.classList.remove('active'));
        overlay.querySelector('[data-cat="todos"]').classList.add('active');
        rangeEl.value = 320000;
        priceValEl.textContent = '320 000 Kz';
        overlay.querySelector('#soSort').value = 'relevancia';
        overlay.querySelector('#soOnSale').checked = false;
        applyFilters();
    });

    return { open, close };
})();

function applyFilters() {
    let list = [...products];

    // Pesquisa por texto
    if (filterState.query) {
        list = list.filter(p =>
            p.name.toLowerCase().includes(filterState.query)
        );
    }

    // Categoria
    if (filterState.category !== 'todos') {
        list = list.filter(p => p.category === filterState.category);
    }

    // Preço
    list = list.filter(p => p.discountedPrice <= filterState.maxPrice);

    // Só ofertas
    if (filterState.onSale) {
        list = list.filter(p => p.onSale);
    }

    // Ordenação
    if (filterState.sort === 'preco-asc')  list.sort((a,b) => a.discountedPrice - b.discountedPrice);
    if (filterState.sort === 'preco-desc') list.sort((a,b) => b.discountedPrice - a.discountedPrice);
    if (filterState.sort === 'nome-az')    list.sort((a,b) => a.name.localeCompare(b.name));

    renderSearchResults(list);
}

function highlight(text, query) {
    if (!query) return text;
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
    return text.replace(re, '<mark class="so-highlight">$1</mark>');
}

function renderSearchResults(list) {
    const grid  = document.getElementById('soGrid');
    const empty = document.getElementById('soEmpty');
    const meta  = document.getElementById('soMeta');

    meta.textContent = `${list.length} produto${list.length !== 1 ? 's' : ''} encontrado${list.length !== 1 ? 's' : ''}`;

    grid.innerHTML = '';

    if (list.length === 0) {
        empty.style.display = 'flex';
        return;
    }
    empty.style.display = 'none';

    list.forEach((p, i) => {
        const badgeHTML = p.onSale ? `<div class="product-badge-oferta">Oferta!</div>` : '';

        const pricesHTML = p.onSale
            ? `<div class="so-card-prices">
                 <span class="so-original-price">${formatKz(p.originalPrice)}</span>
                 <span class="so-current-price">${formatKz(p.discountedPrice)}</span>
               </div>`
            : `<div class="so-card-prices">
                 <span class="so-current-price">${formatKz(p.discountedPrice)}</span>
               </div>`;

        const card = document.createElement('div');
        card.className = 'so-card';
        card.style.animationDelay = `${i * 35}ms`;
        card.innerHTML = `
            <div class="so-card-img">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                ${badgeHTML}
            </div>
            <div class="so-card-body">
                <p class="so-card-cat">${p.category}</p>
                <h3 class="so-card-name">${highlight(p.name, filterState.query)}</h3>
                ${pricesHTML}
                <button class="so-add-btn" onclick="addToCart(${p.id})">
                    <i class="fas fa-cart-plus"></i> Adicionar
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ========== BOTÕES HEADER ==========
document.getElementById('searchBtn').addEventListener('click', () => searchOverlay.open());
// ========== CART DRAWER ==========
const cartDrawer = (() => {
    // Injetar HTML do drawer
    const drawerHTML = `
        <div id="cartDrawerOverlay" class="cd-overlay"></div>
        <aside id="cartDrawer" class="cd-drawer" role="dialog" aria-label="Carrinho de compras">
            <div class="cd-header">
                <div class="cd-header-left">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="cd-title">Meu Carrinho</span>
                    <span class="cd-badge" id="cdBadge">0</span>
                </div>
                <button class="cd-close" id="cdClose" aria-label="Fechar carrinho">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <div class="cd-body" id="cdBody">
                <!-- itens injetados por JS -->
            </div>

            <div class="cd-footer" id="cdFooter">
                <div class="cd-subtotal">
                    <span class="cd-subtotal-label">Subtotal</span>
                    <span class="cd-subtotal-value" id="cdTotal">0 Kz</span>
                </div>
                <p class="cd-shipping-note"><i class="fas fa-truck"></i> Entrega calculada no checkout</p>
                <button class="cd-checkout-btn">
                    Finalizar Compra &nbsp;<i class="fas fa-arrow-right"></i>
                </button>
                <button class="cd-continue-btn" id="cdContinue">Continuar Comprando</button>
            </div>
        </aside>
    `;
    document.body.insertAdjacentHTML('beforeend', drawerHTML);

    // Injetar estilos
    const style = document.createElement('style');
    style.textContent = `
        /* ===== CART DRAWER ===== */
        .cd-overlay {
            display: none;
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.45);
            backdrop-filter: blur(3px);
            z-index: 9000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .cd-overlay.active { display: block; opacity: 1; }

        .cd-drawer {
            position: fixed;
            top: 0; right: 0;
            width: 420px; max-width: 100vw;
            height: 100%;
            background: #fff;
            z-index: 9001;
            display: flex;
            flex-direction: column;
            transform: translateX(100%);
            transition: transform 0.38s cubic-bezier(0.4,0,0.2,1);
            box-shadow: -8px 0 40px rgba(0,0,0,0.15);
        }
        .cd-drawer.open { transform: translateX(0); }

        /* Header */
        .cd-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.25rem 1.5rem;
            border-bottom: 1px solid #e5e7eb;
            background: #1e40af;
            color: #fff;
            flex-shrink: 0;
        }
        .cd-header-left {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        .cd-header-left i { font-size: 1.1rem; }
        .cd-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }
        .cd-badge {
            background: #06b6d4;
            color: #fff;
            font-size: 0.7rem;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 99px;
            min-width: 22px;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
        }
        .cd-close {
            background: rgba(255,255,255,0.15);
            border: none;
            color: #fff;
            width: 34px; height: 34px;
            border-radius: 50%;
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            font-size: 0.95rem;
            transition: background 0.2s;
        }
        .cd-close:hover { background: rgba(255,255,255,0.3); }

        /* Body — items */
        .cd-body {
            flex: 1;
            overflow-y: auto;
            padding: 1.25rem 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        /* Empty state */
        .cd-empty {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            height: 100%;
            color: #9ca3af;
            text-align: center;
        }
        .cd-empty i { font-size: 3.5rem; opacity: 0.3; }
        .cd-empty p { font-size: 1rem; font-weight: 600; color: #374151; margin: 0; }
        .cd-empty span { font-size: 0.85rem; color: #9ca3af; }

        /* Item */
        .cd-item {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            border-radius: 12px;
            border: 1px solid #f3f4f6;
            background: #fafafa;
            transition: box-shadow 0.2s;
            animation: cdItemIn 0.3s ease both;
        }
        @keyframes cdItemIn {
            from { opacity:0; transform:translateY(10px); }
            to   { opacity:1; transform:translateY(0); }
        }
        .cd-item:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }

        .cd-item-img {
            width: 72px; height: 72px;
            border-radius: 8px;
            overflow: hidden;
            flex-shrink: 0;
            background: #e5e7eb;
        }
        .cd-item-img img {
            width: 100%; height: 100%;
            object-fit: cover;
        }
        .cd-item-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .cd-item-name {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.85rem;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.3;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .cd-item-price {
            font-size: 0.95rem;
            font-weight: 700;
            color: #1e40af;
            font-family: 'Montserrat', sans-serif;
        }
        .cd-item-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
        }
        .cd-qty-wrap {
            display: flex;
            align-items: center;
            gap: 0;
            border: 1.5px solid #e5e7eb;
            border-radius: 8px;
            overflow: hidden;
        }
        .cd-qty-btn {
            width: 28px; height: 28px;
            background: none;
            border: none;
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            font-size: 0.9rem;
            color: #6b7280;
            transition: background 0.15s, color 0.15s;
        }
        .cd-qty-btn:hover { background: #eff6ff; color: #1e40af; }
        .cd-qty-val {
            min-width: 28px;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.85rem;
            font-weight: 700;
            color: #1a1a1a;
            border-left: 1.5px solid #e5e7eb;
            border-right: 1.5px solid #e5e7eb;
            padding: 0 4px;
            line-height: 28px;
        }
        .cd-remove-btn {
            background: none;
            border: none;
            cursor: pointer;
            color: #d1d5db;
            font-size: 0.85rem;
            padding: 4px;
            border-radius: 6px;
            transition: color 0.2s, background 0.2s;
        }
        .cd-remove-btn:hover { color: #1e40af; background: #dbeafe; }

        /* Footer */
        .cd-footer {
            border-top: 1px solid #e5e7eb;
            padding: 1.25rem 1.5rem 1.5rem;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
            background: #fff;
        }
        .cd-subtotal {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .cd-subtotal-label {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .cd-subtotal-value {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.2rem;
            font-weight: 800;
            color: #1e40af;
        }
        .cd-shipping-note {
            font-size: 0.78rem;
            color: #9ca3af;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            margin: 0;
        }
        .cd-shipping-note i { color: #06b6d4; }
        .cd-checkout-btn {
            width: 100%;
            padding: 0.9rem;
            background: #1e40af;
            color: #fff;
            border: none;
            border-radius: 10px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        .cd-checkout-btn:hover { background: #1d4ed8; transform: translateY(-1px); }
        .cd-checkout-btn:active { transform: translateY(0); }
        .cd-continue-btn {
            width: 100%;
            padding: 0.7rem;
            background: none;
            color: #6b7280;
            border: 1.5px solid #e5e7eb;
            border-radius: 10px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.82rem;
            font-weight: 600;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s;
        }
        .cd-continue-btn:hover { border-color: #1e40af; color: #1e40af; }

        /* Responsivo */
        @media (max-width: 480px) {
            .cd-drawer { width: 100vw; }
            .cd-header { padding: 1rem 1.25rem; }
            .cd-body { padding: 1rem; }
            .cd-footer { padding: 1rem 1.25rem 1.25rem; }
            .cd-item { padding: 0.75rem; }
            .cd-item-img { width: 60px; height: 60px; }
        }
    `;
    document.head.appendChild(style);

    const overlayEl  = document.getElementById('cartDrawerOverlay');
    const drawerEl   = document.getElementById('cartDrawer');
    const bodyEl     = document.getElementById('cdBody');
    const totalEl    = document.getElementById('cdTotal');
    const badgeEl    = document.getElementById('cdBadge');
    const closeBtn   = document.getElementById('cdClose');
    const continueBtn= document.getElementById('cdContinue');

    function open() {
        renderDrawer();
        overlayEl.classList.add('active');
        drawerEl.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function close() {
        overlayEl.classList.remove('active');
        drawerEl.classList.remove('open');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', close);
    continueBtn.addEventListener('click', close);
    overlayEl.addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    function renderDrawer() {
        const qty   = cart.reduce((s, i) => s + i.quantity, 0);
        const total = cart.reduce((s, i) => s + i.discountedPrice * i.quantity, 0);

        badgeEl.textContent = qty;
        totalEl.textContent = formatKz(total);

        bodyEl.innerHTML = '';

        if (cart.length === 0) {
            bodyEl.innerHTML = `
                <div class="cd-empty">
                    <i class="fas fa-shopping-cart"></i>
                    <p>O carrinho está vazio</p>
                    <span>Adicione produtos para continuar</span>
                </div>
            `;
            document.getElementById('cdFooter').style.display = 'none';
            return;
        }

        document.getElementById('cdFooter').style.display = 'flex';

        cart.forEach((item, idx) => {
            const el = document.createElement('div');
            el.className = 'cd-item';
            el.style.animationDelay = `${idx * 40}ms`;
            el.innerHTML = `
                <div class="cd-item-img">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="cd-item-info">
                    <p class="cd-item-name">${item.name}</p>
                    <p class="cd-item-price">${formatKz(item.discountedPrice)}</p>
                    <div class="cd-item-controls">
                        <div class="cd-qty-wrap">
                            <button class="cd-qty-btn cd-dec" data-id="${item.id}"><i class="fas fa-minus"></i></button>
                            <span class="cd-qty-val">${item.quantity}</span>
                            <button class="cd-qty-btn cd-inc" data-id="${item.id}"><i class="fas fa-plus"></i></button>
                        </div>
                        <button class="cd-remove-btn" data-id="${item.id}" title="Remover">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            `;
            bodyEl.appendChild(el);
        });

        // Listeners de qty e remoção
        bodyEl.querySelectorAll('.cd-inc').forEach(btn =>
            btn.addEventListener('click', () => { changeQty(btn.dataset.id, 1); renderDrawer(); })
        );
        bodyEl.querySelectorAll('.cd-dec').forEach(btn =>
            btn.addEventListener('click', () => { changeQty(btn.dataset.id, -1); renderDrawer(); })
        );
        bodyEl.querySelectorAll('.cd-remove-btn').forEach(btn =>
            btn.addEventListener('click', () => { removeFromCart(btn.dataset.id); renderDrawer(); })
        );
    }

    return { open, close, refresh: renderDrawer };
})();

function changeQty(productId, delta) {
    const item = cart.find(i => String(i.id) === String(productId));
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter(i => String(i.id) !== String(productId));
    updateCartCount();
    saveCartToStorage();
}

function removeFromCart(productId) {
    cart = cart.filter(i => String(i.id) !== String(productId));
    updateCartCount();
    saveCartToStorage();
}

document.getElementById('cartBtn').addEventListener('click', () => cartDrawer.open());

// ========== HERO CAROUSEL ==========
const pcs = [
    {
        name: 'Legion Pro 7i', badge: 'Intel Core', type: 'intel',
        subtitle: 'Desempenho extremo para gaming e criação de conteúdo profissional.',
        img: 'Nova pasta/baixados__8_-removebg-preview.png',
        specs: [
            { label:'CPU', val:'Intel Core i9-14900HX' },
            { label:'GPU', val:'NVIDIA RTX 4080' },
            { label:'RAM', val:'64 GB DDR5 5600MHz' },
            { label:'Storage', val:'2TB NVMe Gen4' }
        ]
    },
    {
        name: 'ROG Strix G16', badge: 'AMD Ryzen', type: 'ryzen',
        subtitle: 'Poder AMD com gráficos de última geração para dominar qualquer jogo.',
        img: 'Nova pasta/2026_AMD_Ryzen_7_Gaming_Laptop___16GB_RAM___512GB_SSD___WiFi_6-removebg-preview.png',
        specs: [
            { label:'CPU', val:'AMD Ryzen 9 7945HX' },
            { label:'GPU', val:'AMD Radeon RX 7900M' },
            { label:'RAM', val:'32 GB DDR5 4800MHz' },
            { label:'Storage', val:'1TB NVMe PCIe 5.0' }
        ]
    },
    {
        name: 'Razer Blade 18', badge: 'NVIDIA RTX', type: 'nvidia',
        subtitle: 'Workstation portátil com RTX 4090 para criadores e gamers de elite.',
        img: 'Nova pasta/lenovo-loq.png',
        specs: [
            { label:'CPU', val:'Intel Core i9-14900HX' },
            { label:'GPU', val:'NVIDIA RTX 4090 16GB' },
            { label:'RAM', val:'64 GB DDR5 5600MHz' },
            { label:'Storage', val:'4TB NVMe RAID 0' }
        ]
    },
    {
        name: 'HP Omen Transcend', badge: 'Intel Core Ultra', type: 'intel',
        subtitle: 'Eficiência e velocidade de última geração num design premium e fino.',
        img: 'Nova pasta/ASUS_-_ROG_Strix_G17_17_3__Laptop_-_AMD_Ryzen_9_-_16GB_Memory_-_NVIDIA_GeForce_RTX_3060_-_512GB_SSD_-_Eclipse_Gray-removebg-preview.png',
        specs: [
            { label:'CPU', val:'Intel Core Ultra 9 185H' },
            { label:'GPU', val:'NVIDIA RTX 4070' },
            { label:'RAM', val:'32 GB DDR5 Dual Ch.' },
            { label:'Storage', val:'1TB NVMe Gen5' }
        ]
    }
];

let heroCur = 0, heroAnimating = false;

function heroRender(pc, animate) {
    const hero    = document.querySelector('.hero');
    const imgWrap = document.getElementById('heroImageWrap');
    const dotsEl  = document.getElementById('heroDots');

    hero.className = 'hero bg-' + pc.type;
    document.querySelector('.topbar').className = 'topbar bg-' + pc.type;
    document.querySelector('.header').className = 'header bg-' + pc.type;

    document.getElementById('heroBadge').textContent    = pc.badge;
    document.getElementById('heroTitle').textContent    = pc.name;
    document.getElementById('heroSubtitle').textContent = pc.subtitle;
    document.getElementById('heroImg').src              = pc.img;
    document.getElementById('heroImg').alt              = pc.name;

    const specsEl = document.getElementById('heroSpecs');
    specsEl.innerHTML = pc.specs.map(s =>
        `<div class="hero-spec-item">
            <span class="spec-label">${s.label}</span>
            <span class="spec-val">${s.val}</span>
        </div>`
    ).join('');

    dotsEl.innerHTML = '';
    pcs.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'hero-dot' + (i === heroCur ? ' active' : '');
        d.onclick = () => heroGoTo(i);
        dotsEl.appendChild(d);
    });

    if (animate) {
        imgWrap.classList.remove('hero-slide-in','hero-slide-out');
        void imgWrap.offsetWidth;
        imgWrap.classList.add('hero-slide-in');
        const title = document.getElementById('heroTitle');
        title.classList.remove('hero-fade-in');
        specsEl.classList.remove('hero-fade-in');
        void title.offsetWidth;
        title.classList.add('hero-fade-in');
        specsEl.style.animationDelay = '0.1s';
        specsEl.classList.add('hero-fade-in');
    }
}

function heroGoTo(idx) {
    if (heroAnimating || idx === heroCur) return;
    heroAnimating = true;

    const hero    = document.querySelector('.hero');
    const topbar  = document.querySelector('.topbar');
    const header  = document.querySelector('.header');
    const imgWrap = document.getElementById('heroImageWrap');

    // 1) Animar saída apenas da imagem
    imgWrap.classList.remove('hero-slide-in', 'hero-slide-out');
    void imgWrap.offsetWidth; // reflow para reiniciar animação

    // Fade out do texto também
    const titleEl = document.getElementById('heroTitle');
    const specsEl = document.getElementById('heroSpecs');
    titleEl.style.transition = 'opacity 0.25s ease';
    specsEl.style.transition = 'opacity 0.25s ease';
    titleEl.style.opacity = '0';
    specsEl.style.opacity = '0';

    imgWrap.classList.add('hero-slide-out');

    // 2) SÓ depois da animação de saída terminar: troca tema + conteúdo
    setTimeout(() => {
        heroCur = idx;
        const pc = pcs[heroCur];

        // Troca o tema agora (imagem já saiu)
        hero.className    = 'hero bg-' + pc.type;
        topbar.className  = 'topbar bg-' + pc.type;
        header.className  = 'header bg-' + pc.type;

        // Atualiza conteúdo de texto
        document.getElementById('heroBadge').textContent    = pc.badge;
        document.getElementById('heroTitle').textContent    = pc.name;
        document.getElementById('heroSubtitle').textContent = pc.subtitle;
        document.getElementById('heroImg').src              = pc.img;
        document.getElementById('heroImg').alt              = pc.name;

        specsEl.innerHTML = pc.specs.map(s =>
            `<div class="hero-spec-item">
                <span class="spec-label">${s.label}</span>
                <span class="spec-val">${s.val}</span>
            </div>`
        ).join('');

        // Atualiza dots
        const dotsEl = document.getElementById('heroDots');
        dotsEl.innerHTML = '';
        pcs.forEach((_, i) => {
            const d = document.createElement('button');
            d.className = 'hero-dot' + (i === heroCur ? ' active' : '');
            d.onclick = () => heroGoTo(i);
            dotsEl.appendChild(d);
        });

        // 3) Anima entrada
        imgWrap.classList.remove('hero-slide-in', 'hero-slide-out');
        void imgWrap.offsetWidth;
        imgWrap.classList.add('hero-slide-in');

        // Restaura texto com fade-in
        titleEl.style.transition = '';
        specsEl.style.transition = '';
        titleEl.style.opacity    = '';
        specsEl.style.opacity    = '';

        titleEl.classList.remove('hero-fade-in');
        specsEl.classList.remove('hero-fade-in');
        void titleEl.offsetWidth;
        titleEl.classList.add('hero-fade-in');
        specsEl.style.animationDelay = '0.1s';
        specsEl.classList.add('hero-fade-in');

        setTimeout(() => { heroAnimating = false; }, 450);
    }, 300); // espera a slide-out (0.3s) terminar completamente
}

document.addEventListener('DOMContentLoaded', () => {
    heroRender(pcs[0], false);
    let heroTimer = setInterval(() => heroGoTo((heroCur + 1) % pcs.length), 5000);
    document.getElementById('heroDots').addEventListener('click', () => {
        clearInterval(heroTimer);
        heroTimer = setInterval(() => heroGoTo((heroCur + 1) % pcs.length), 5000);
    });
});

console.log('BUCAPE-TECH carregado com sucesso! 🇦🇴');

// ========== MARCAS ==========
const brands = [
    { id: 'logitech', name: 'LOGITECH', img: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjUwIiB5PSIyOCIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDAwIj5sb2dpdGVjaDwvdGV4dD48L3N2Zz4=', color: '#00b5e2' },
    { id: 'philips',  name: 'PHILIPS',  img: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA1MGEwIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UGhpbGlwcyBIdWU8L3RpdGxlPjxwYXRoIGQ9Ik0yMC42NzIgOS42Yy0yLjA0MyAwLTMuNTA1IDEuMzg2LTMuNjgyIDMuNDE2aC0uNjY0Yy0uMjQ3IDAtLjM5NS4xNDQtLjM5NS4zODQgMCAuMjQuMTQ4LjM4NC4zOTUuMzg0aC42NjFjLjE1MiAyLjA5IDEuNjUyIDMuNDIzIDMuOTE1IDMuNDIzLjk0NCAwIDEuNjg1LS4xNDQgMi4zMzItLjQ1My4xNTgtLjA3NS4zMzctLjIxNy4yOTItLjQ3MWEuMzM0LjMzNCAwIDAgMC0uMTUtLjI0MmMtLjEwNC0uMDY1LS4yNS0uMDcyLS40MjItLjAyYTcuOTMgNy45MyAwIDAgMC0uMzUyLjEyYy0uNDE0LjE0Ni0uNzcxLjI3My0xLjU5OS4yNzMtMS43NSAwLTIuOTA4LTEuMDIzLTIuOTUyLTIuNjA1di0uMDI1aDUuNDQ0Yy4zMTMgMCAuNDkyLS4xNjQuNTA1LS40NjN2LS4wNThDMjMuOTk0IDkuODY1IDIxLjQ1MiA5LjYgMjAuNjcyIDkuNnptMi4zNzYgMy40MTZoLTVsLjAwNC0uMDM1Yy4xMjEtMS41OCAxLjE2MS0yLjYwMSAyLjY0OS0yLjYwMSAxLjEzNCAwIDIuMzQ3LjY4NSAyLjM0NyAyLjYwNnpNOS41NDIgMTAuMjIxYzAtLjMzNS0uMTk1LS41MzQtLjUyLS41MzRzLS41Mi4yLS41Mi41MzR2Mi43OTVoMS4wNHptNC4yOSAzLjgxN2MwIDEuMzI0LS45NDggMi4zNjEtMi4xNiAyLjM2MS0xLjQzMyAwLTIuMTMtLjc2My0yLjEzLTIuMzMzdi0uMjgyaC0xLjA0di4zNGMwIDIuMDQ2Ljk2NSAzLjA4MyAyLjg2OCAzLjA4MyAxLjEyIDAgMS45NDMtLjQ4NiAyLjQ0My0xLjQ0NWwuMDItLjAzNnYuODYxYzAgLjMzNC4xOTMuNTM0LjUxOS41MzQuMzI1IDAgLjUyLS4yLjUyLS41MzR2LTIuODAzaC0xLjA0em0uNTItNC4zNTFjLS4zMjYgMC0uNTIuMi0uNTIuNTM0djIuNzk1aDEuMDR2LTIuNzk1YzAtLjMzNS0uMTk1LS41MzQtLjUyLS41MzR6TTMuNjQ1IDkuNmMtMS42NiAwLTIuMzEgMS4wNzItMi40NzEgMS40bC0uMTM1LjI3OFY3LjM1NWMwLS4zNDctLjE5OS0uNTYyLS41Mi0uNTYyLS4zMiAwLS41MTkuMjE1LS41MTkuNTYydjUuNjYxaDEuMDM5di0uMDE1YzAtMS4yNDkuNzItMi41OTIgMi4zMDQtMi41OTIgMS4yOSAwIDIuMDAxLjgyOCAyLjAwMSAyLjMzMnYuMjc1aDEuMDR2LS4yNDZjMC0yLjA0NC0uOTczLTMuMTctMi43MzktMy4xN3pNMCAxNi41NThjMCAuMzQ3LjE5OS41NjMuNTIuNTYzLjMyIDAgLjUxOS0uMjE2LjUxOS0uNTYzdi0yLjc3NEgwem01LjM0NCAwYzAgLjM0Ny4yLjU2My41Mi41NjNzLjUyLS4yMTYuNTItLjU2M3YtMi43NzRoLTEuMDR6Ii8+PC9zdmc+', color: '#0050a0' },
    { id: 'pioneer',  name: 'PIONEER',  img: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjY2MwMDAwIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UGlvbmVlciBESjwvdGl0bGU+PHBhdGggZD0iTTE1LjQ2IDUuNTY5YzEuNDc0IDEuMTQ0IDEuNzE1IDIuNjk1IDEuMTA3IDQuMzE5LS41NjUgMS41MDMtMS44MzMgMi45Ni0zLjgyNyA0LjA4Ny0yLjIxIDEuMjI3LTQuNDk4IDEuNTU0LTYuOTkzIDEuNTU0SDBMNC4yMTIgNC4zMDhoNS4wNTFjMi41NDggMCA0LjcuMSA2LjE5NyAxLjI2em0tMy4xMTIgNC4yMzVjLjMzLS44ODQuMjQ2LTIuMjAyLS4zNC0yLjkwNi0uNjU4LS43ODItMS42NzMtLjg3My0zLjEzOC0uODczbC0uNzE2LjAxNnMtLjYxNi0uMDctLjg2Ni40OWMtLjE1My4zNS4wNjQtLjI2My0yLjQxMiA2LjM0MS0uMzI2Ljg3Ni40NTIuOTE5LjQ1Mi45MTlzMi43OTQuMTcgNS4xMzItMS40NDhjLjk5MS0uNjg1IDEuNTc3LTEuNzA1IDEuODg4LTIuNTM5em01LjkzOC0xLjQ2N0wyNCA4LjM2NmwtMi44OTIgNy43MzFjLS45NDQgMi41MTgtMi44OTYgMy41OTUtNi44MTIgMy41OTVsLTMuMDU4LS4wNC43MzEtMS43NDZjNC40MjcuMjEgNS4yMjUtMS43NiA1LjM2NS0yLjEzOWwxLjg0Ni00Ljk2NnMuMzE3LS44ODQtLjQwMi0uODg0aC0xLjEzMloiLz48L3N2Zz4=', color: '#cc0000' },
    { id: 'samsung',  name: 'SAMSUNG',  img: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTQyOGEwIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U2Ftc3VuZzwvdGl0bGU+PHBhdGggZD0iTTE5LjgxNjYgMTAuMjgwOGwuMDQ1OSAyLjY5MzRoLS4wMjNsLS43NzkzLTIuNjkzNGgtMS4yODM3djMuMzkyNWguODQ4MWwtLjA0NTgtMi43ODVoLjAyM2wuODM2NiAyLjc4NWgxLjIyNjR2LTMuMzkyNXptLTE2LjE0OSAwbC0uNjQxOCAzLjQyN2guOTI4NGwuNDY5OS0zLjExNzVoLjAyMjlsLjQ1ODUgMy4xMTc0aC45MTY5bC0uNjMwNC0zLjQyNjl6bTUuMTgwNSAwbC0uNDI0IDIuNjEzMmgtLjAyM2wtLjQyNC0yLjYxMzJINi41Nzg4bC0uMDY4OCAzLjQyN2guODU5NmwuMDIzLTMuMDgzMmguMDExNGwuNTczIDMuMDgzMWguODcxMWwuNTczMS0zLjA4M2guMDIzbC4wMjI4IDMuMDgzaC44NTk2bC0uMDgwMi0zLjQyNjl6bS03LjI2NjQgMi40NTI3Yy4wMzQzLjA4MDIuMDIyOS4xOTQ5LjAxMTQuMjUyMi0uMDIyOS4xMTQ2LS4xMDMxLjIyOTItLjMzMjQuMjI5Mi0uMjE3NyAwLS4zNDM4LS4xMjYtLjM0MzgtLjMwOTV2LS4zMzIzSDB2LjI2MzZjMCAuNzY3OS42MDc0Ljk5NzEgMS4yNDkzLjk5NzEuNjE4OSAwIDEuMTM0Ni0uMjE3OCAxLjIxNDktLjc3OTQuMDQ1OC0uMjk4LjAxMTQtLjQ5MjggMC0uNTYxNi0uMTYwNS0uNzIyLTEuNDY3LS45MjgzLTEuNTU4OC0xLjMyOTUtLjAxMTQtLjA2ODgtLjAxMTQtLjEzNzUgMC0uMTgzNC4wMjMtLjExNDYuMTAzMi0uMjI5Mi4zMDk1LS4yMjkyLjIwNjMgMCAuMzIxLjEyNi4zMjEuMzA5NXYuMjA2M2guODU5NXYtLjI0MDdjMC0uNzQ1LS42NzYyLS44NTk2LTEuMTU3Ni0uODU5Ni0uNjA3NCAwLTEuMTExNy4yMDYzLTEuMjAzNC43NTY0LS4wMjMuMTQ5LS4wMzQ0LjI4NjYuMDExNC40NTg1LjEzNzYuNzEwNiAxLjM2NC45MTY5IDEuNTM1OCAxLjM1MjRtMTEuMTUyIDBjLjAzNDMuMDgwMy4wMjI4LjE4MzQuMDExNC4yNTIyLS4wMjMuMTE0Ni0uMTAzMi4yMjkyLS4zMzI0LjIyOTItLjIxNzggMC0uMzQzOC0uMTI2LS4zNDM4LS4zMDk1di0uMzMyM2gtLjkxN3YuMjYzNmMwIC43NTY0LjU5Ni45ODU3IDEuMjM3OS45ODU3LjYxODkgMCAxLjEyMzItLjIwNjMgMS4yMDM0LS43Nzk0LjA0NTktLjI5OC4wMTE1LS40ODE0IDAtLjU2MTYtLjEzNzUtLjcxMDYtMS40MzI3LS45Mjg0LTEuNTI0My0xLjMxOC0uMDExNS0uMDY4OC0uMDExNS0uMTM3NiAwLS4xODM1LjAyMjktLjExNDYuMTAzMS0uMjI5Mi4zMDk0LS4yMjkyLjE5NDggMCAuMzIxLjEyNi4zMjEuMzA5NXYuMjA2M2guODQ4di0uMjQwN2MwLS43NDUtLjY2NDctLjg1OTYtMS4xNDYtLjg1OTYtLjYwNzUgMC0xLjEwMDQuMTk0OC0xLjE5Mi43NTY0LS4wMjMuMTQ5LS4wMjMuMjg2Ni4wMTE0LjQ1ODUuMTM3Ni43MTA2IDEuMzQxLjkwNTQgMS41MTMgMS4zNTI0bTIuODg4Mi40NTg1Yy4yNDA3IDAgLjMwOTQtLjE2MDUuMzMyMy0uMjUyMi4wMTE1LS4wMzQzLjAxMTUtLjA5MTcuMDExNS0uMTI2di0yLjUzM2guODcxdjIuNDY0MmMwIC4wNjg4IDAgLjE5NDgtLjAxMTQuMjI5Mi0uMDU3My42NDE5LS41NjE2Ljg0ODItMS4xOTIuODQ4Mi0uNjMwMyAwLTEuMTM0Ni0uMjA2My0xLjE5Mi0uODQ4MiAwLS4wMzQ0LS4wMTE0LS4xNjA0LS4wMTE0LS4yMjkydi0yLjQ2NDJoLjg3MXYyLjUzM2MwIC4wNDU4IDAgLjA5MTYuMDExNS4xMjYgMCAuMDkxNy4wNjg4LjI1MjIuMzA5NS4yNTIybTcuMTUxOC0uMDM0NGMuMjUyMiAwIC4zMzI0LS4xNjA1LjM1NTMtLjI1MjIuMDExNS0uMDM0My4wMTE1LS4wOTE3LjAxMTUtLjEyNnYtLjQ5MjloLS4zNTUzdi0uNTA0M0gyNHYuOTE3YzAgLjA2ODcgMCAuMTE0NS0uMDExNS4yMjkyLS4wNTczLjYzMDMtLjU5Ni44NDgxLTEuMjAzNC44NDgxLS42MDc1IDAtMS4xNDYxLS4yMTc4LTEuMjAzNC0uODQ4MS0uMDExNS0uMTE0Ny0uMDExNS0uMTYwNS0uMDExNS0uMjI5M3YtMS40NDRjMC0uMDU3NC4wMTE1LS4xNzIuMDExNS0uMjI5My4wODAyLS42NDE5LjU5Ni0uODQ4MiAxLjIwMzQtLjg0ODJzMS4xMzQ3LjIwNjMgMS4yMDM0Ljg0ODJjLjAxMTUuMTAzMS4wMTE1LjIyOTIuMDExNS4yMjkydi4xMTQ2aC0uODU5NnYtLjE5NDhzMC0uMDgwMy0uMDExNS0uMTI2MWMtLjAxMTQtLjA4MDItLjA4MDItLjI1MjEtLjM0MzgtLjI1MjEtLjI1MjEgMC0uMzIxLjE2MDQtLjM0MzguMjUyMS0uMDExNS4wNDU4LS4wMTE1LjEwMzItLjAxMTUuMTYwNXYxLjU3MDJjMCAuMDQ1OCAwIC4wOTE2LjAxMTUuMTI2IDAgLjA5MTcuMDkxNy4yNTIyLjMzMjMuMjUyMiIvPjwvc3ZnPg==', color: '#1428a0' },
    { id: 'lenovo',   name: 'LENOVO',   img: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZTIyMzFhIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TGVub3ZvPC90aXRsZT48cGF0aCBkPSJNMjEuMDQ0IDEyLjI4OGMwIC41LS4zNDMuODY3LS44MTUuODY3LS40NjQgMC0uODI3LS4zOC0uODI3LS44NjcgMC0uNTEuMzQzLS44NjguODE1LS44NjguNDY0IDAgLjgyNy4zODEuODI3Ljg2OHptLTE0LjMwNS0uOTJhLjc4Ny43ODcgMCAwIDAtLjY1MS4zMDcuOTkxLjk5MSAwIDAgMC0uMTcyLjczOGwxLjQ3OS0uNjE0YS43MDguNzA4IDAgMCAwLS42NTYtLjQzem02Ljk2My4wNTJjLS40NzIgMC0uODE2LjM1OC0uODE2Ljg2OCAwIC40ODYuMzY0Ljg2Ny44MjguODY3LjQ3MiAwIC44MTUtLjM2OC44MTUtLjg2NyAwLS40ODctLjM2My0uODY4LS44MjctLjg2OHpNMjQgNy45OTd2OC4wMDZIMFY3Ljk5N2gyNHpNNS4wMSAxMy4wNUgzLjA4OFY5LjgyNUgyLjIzdjQuMDAzaDIuNzh2LS43Nzd6bTEuMTM3LS4wOTRsMi4xNjMtLjg5N2ExLjY2NyAxLjY2NyAwIDAgMC0uMzctLjg2Yy0uMjg0LS4zMy0uNzA0LS41MDUtMS4yMTYtLjUwNS0uOTMxIDAtMS42MzMuNjg2LTEuNjMzIDEuNTkzIDAgLjkzLjcwNCAxLjU5MyAxLjcyNiAxLjU5My41NzIgMCAxLjE1OC0uMjcyIDEuNDMyLS41ODlsLS41MzUtLjQxMWMtLjM1Ny4yNjQtLjU2LjMyNi0uODg1LjMyNi0uMjkyIDAtLjUyLS4wOS0uNjgyLS4yNXptNS41Ny0xLjAzOWMwLS43MDktLjUwNy0xLjIyMy0xLjI1Mi0xLjIyM2ExLjI4IDEuMjggMCAwIDAtMS4wMDUuNDk0di0uNDQyaC0uODQ2djMuMDgxaC44NDZ2LTEuNzUzYzAtLjMxNi4yNDUtLjY1MS42OTgtLjY1MS4zNSAwIC43MTIuMjQzLjcxMi42NTF2MS43NTNoLjg0N3YtMS45MXptMy42NDcuMzdjMC0uOTA0LS43MjUtMS41OTMtMS42NS0xLjU5My0uOTMzIDAtMS42NjMuNy0xLjY2MyAxLjU5MyAwIC45MDMuNzI2IDEuNTkyIDEuNjUxIDEuNTkyLjkzMiAwIDEuNjYyLS43IDEuNjYyLTEuNTkyem0yLjA2NiAxLjU0bDEuMjY4LTMuMDgxaC0uOTY3bC0uNzY1IDIuMDk5LS43NjUtMi4xaC0uOTY2bDEuMjY4IDMuMDgxaC45Mjd6bTQuNDQ5LTEuNTRjMC0uOTA0LS43MjUtMS41OTMtMS42NS0xLjU5My0uOTMyIDAtMS42NjIuNy0xLjY2MiAxLjU5MyAwIC45MDMuNzI1IDEuNTkyIDEuNjUgMS41OTIuOTMyIDAgMS42NjItLjcgMS42NjItMS41OTJ6Ii8+PC9zdmc+', color: '#e2231a' },
    { id: 'asus',     name: 'ASUS',     img: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA1MzliIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QVNVUzwvdGl0bGU+PHBhdGggZD0iTTIzLjkwNCAxMC43ODhWOS41MjJoLTQuNjU2Yy0uOTcyIDAtMS40MS42LTEuNDgyIDEuMTgydi4wMTgtMS4yaC0xLjM2OHYxLjI2NmgxLjM2MnptLTYuMTQ0LjQ1NmwtMS4zNjgtLjA3OHYxLjQ1OGMwIC40NTYtLjIyOC41OTQtMS4wMi41OTRIMTQuMjhjLS42NTQgMC0uOTMtLjE4Ni0uOTMtLjU5NHYtMS41OTZsLTEuMzg2LS4xMDJ2MS44MTJoLS4wM2MtLjA3OC0uNTI4LS4yNzYtMS4xNC0xLjU5Ni0xLjIzTDYgMTEuMjJjMCAuNjY2LjQ3NCAxLjA2MiAxLjIxOCAxLjE0bDMuMDI0LjMwNmMuMjQuMDE4LjQxNC4wOS40MTQuMjg4IDAgLjIxNi0uMTguMjQtLjQ1Ni4yNEg1Ljk0NlYxMS4yMmwtMS4zODYtLjA5djMuMzQ4aDUuNjQ2YzEuMjYgMCAxLjY2Mi0uNjU0IDEuNzIyLTEuMmguMDNjLjE1Ni44NjQuOTEyIDEuMiAyLjE5IDEuMmgxLjQxYzEuNDk0IDAgMi4yMDItLjQ1NiAyLjIwMi0xLjUyNHptNC4zOTguMjU4bC00LjMzOC0uMjU4YzAgLjY2Ni40MzggMS4xMSAxLjE4MiAxLjE3bDMuMDkuMjRjLjI0LjAxOC4zODQuMDc4LjM4NC4yNzYgMCAuMTg2LS4xNjguMjU4LS41MTYuMjU4aC00LjIxMnYxLjI5aDQuMzAyYzEuMzU2IDAgMS45NS0uNDc0IDEuOTUtMS41NTQgMC0uOTcyLS41MzQtMS4zMzgtMS44NDItMS40MjJ6bS0xMC4xOTQtMS45OGgxLjM4NnYxLjI2NmgtMS4zODZ6TTMuNzk4IDExLjA3bC0xLjUwNi0uMTVMMCAxNC40NzhoMS42ODZ6bTcuOTE0LTEuNTQ4aC00LjIzYy0uOTg0IDAtMS40MTYuNjEyLTEuNTE4IDEuMnYtMS4ySDMuNjE4Yy0uMzMgMC0uNDg2LjEwMi0uNjQyLjMzbC0uNjQ4LjkzNmg5LjM4NFoiLz48L3N2Zz4=', color: '#00539b' },
    { id: 'razer',    name: 'RAZER',    img: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDBkNzAwIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UmF6ZXI8L3RpdGxlPjxwYXRoIGQ9Ik0yMy40IDBhLjM4NS4zODUgMCAwMC0uMjc4LjEyNUwyMi45MS4zNWwtLjQwMS4xODJhLjcxMS43MTEgMCAwMC0uNDE3IDAgLjMwNS4zMDUgMCAwMS0uMTcxIDAgMS4wMDUgMS4wMDUgMCAwMC0uNTY3IDBBLjkzNi45MzYgMCAwMDIxIC41OTZhLjg3Ny44NzcgMCAwMC0uNDEyLjMzN2wtLjAzNy4wNDhhMS4yNDYgMS4yNDYgMCAwMC0uODk4LjY4NCAxLjA3IDEuMDcgMCAwMC0uMDcuMjI1IDEuOTM1IDEuOTM1IDAgMDAtLjMzNy0uMTkzIDIuMDI2IDIuMDI2IDAgMDAtMi4wNjMuMzA1IDIuMDggMi4wOCAwIDAwLS42OSAyLjEzOWMuMDg2LjM3Ni4yMy43MzcuNDI4IDEuMDY5LjQ5Ni43NzYgMS4wNzkgMS40OTQgMS43MzcgMi4xMzguNTI2LjUxMi45OTYgMS4wNzggMS40MDEgMS42OWwuMDUzLjA5NmMuMzk2Ljc1NC4zMjEgMS4zMS0uMjE5IDEuNjQ3YTEuMzU4IDEuMzU4IDAgMDEtLjU3Mi4xOTggMi40OTEgMi40OTEgMCAwMC0uMTQ0LTIuMDcgMi4zNDIgMi4zNDIgMCAwMC0uMy0uNDA2Yy0uNzktLjg2Ni0xLjYzLS42NzQtMS45NjItLjQ0OWEuMzg1LjM4NSAwIDAwLS4xNS40NTVsLjAyNy4wNThhLjM4NS4zODUgMCAwMC4zOC4xODggMS4wNyAxLjA3IDAgMDEuOTYyLjU4MmMuMjMuMzg0LjIzLjg2MiAwIDEuMjQ2YTQuODEyIDQuODEyIDAgMDEtLjUzNC0uNTM1bC0uMDctLjA3LS4wMzctLjA0MmEzLjM2OCAzLjM2OCAwIDAwLTEuOTItMS4yMDggMy4wOSAzLjA5IDAgMDAtLjQwNi0xLjQ1NSA0LjM2OCA0LjM2OCAwIDAwLTEuMzU4LTEuNDggMi42NzMgMi42NzMgMCAwMC0uMjY3LS4xNiAzLjA4NSAzLjA4NSAwIDAwLTIuMjUxLTIuNzE3IDIuNyAyLjcgMCAwMC0yLjk2OCAxLjEzOWMtLjA1My4wODYtLjExMi4xNzEtLjE2NS4yNjdhMTIuMjYgMTIuMjYgMCAwMC0xLjAzOCAyLjc4IDExLjY0IDExLjY0IDAgMDEtLjc3NSAyLjE4N2wtLjA1OS4xMDdjLS4yMTMuMzc0LS40MDYuNTgzLS42MDkuNjQ3YS40MDYuNDA2IDAgMDEtLjM3NC0uMDY0Yy0uMjAzLS4xNC0uMTU1LS40MjMgMC0uOTczYTMuMzMgMy4zMyAwIDAwLjEyOC0uNDVjLjA3LS4zMy0uMDA1LS42NzMtLjIwMy0uOTQ2YTEuMDcgMS4wNyAwIDAwLS43ODYtLjQxMWMtLjQ5LS4wMTgtLjk0LjI3LTEuMTI4LjcyMmwtLjA4LjE1YS45NjguOTY4IDAgMDAtLjMxNi0uNDYuOTM2LjkzNiAwIDAwLS4yOTQtLjEyOSAxLjAxNiAxLjAxNiAwIDAwLS41MzUtLjE5OC4zNDIuMzQyIDAgMDEtLjE3LS4wNTMuNzExLjcxMSAwIDAwLS40MzQtLjA5N2wtLjMyNi0uMjU2LS4xNDQtLjI3OGMtLjE4LS4zNS0uNzA3LS4yMzgtLjcyNy4xNTVhLjM4NS4zODUgMCAwMC4wMzIuNzI3bC4zMDUuMDc1LjM0Mi4yNjdjLjAyNi4xNC4wOTMuMjY4LjE5Mi4zNy4wNDMuMDQuMDcyLjA5Mi4wODYuMTQ5LjA1OC4xODQuMTY3LjM0Ny4zMTUuNDdhLjg3Ny44NzcgMCAwMC43MjcuNDY1aC4wNmMuMjYyLjMxMy42NjIuNDc3IDEuMDY4LjQzOWExLjA3IDEuMDcgMCAwMC4yMy0uMDU0IDEuOTM1IDEuOTM1IDAgMDAwIC4zOCAyLjAyNiAyLjAyNiAwIDAwMS4zIDEuNjM2IDIuMDggMi4wOCAwIDAwMi4yMDgtLjQ4MWMuMjc2LS4yNi41MS0uNTYyLjY5NS0uODkzLjQyMi0uODE3Ljc1LTEuNjguOTc4LTIuNTcyLjE3OS0uNzExLjQzMy0xLjQwMS43Ni0yLjA1OGwuMDU4LS4wOTZjLjQ1NC0uNzIyLjk3My0uOTM2IDEuNTM1LS42MzcuMTguMDk2LjMzOC4yMzEuNDYuMzk2LS43MTQuMTItMS4zNC41NDMtMS43MTcgMS4xNi0uMDg0LjE0Ni0uMTUyLjMtLjIwMy40Ni0uMzUzIDEuMTE3LjIzIDEuNzQ4LjU5MyAxLjkyNS4xNi4wNzcuMzUzLjAzNS40NjYtLjEwMmwuMDM3LS4wNTNhLjM4NS4zODUgMCAwMDAtLjQyMyAxLjA3IDEuMDcgMCAwMTAtMS4xMjhjLjIxOC0uMzg0LjYyNy0uNjIgMS4wNy0uNjE1LS4wNC4yNDUtLjEuNDg2LS4xNzcuNzIybC0uMDM0LjA5M2EzLjUzMyAzLjUzMyAwIDAwLS4wODQgMi4zMjQgMy4wOSAzLjA5IDAgMDAtMS4wNyAxLjA3IDQuMzY4IDQuMzY4IDAgMDAtLjYwMyAxLjkxMyAyLjY3NCAyLjY3NCAwIDAwMCAuMzEgMy4wODUgMy4wODUgMCAwMC0xLjIzIDMuMzEgMi43IDIuNyAwIDAwMi40NyAyaC4zMWExMi4yNiAxMi4yNiAwIDAwMi45MjUtLjQ5MyAxMS42NCAxMS42NCAwIDAxMi4yODMtLjQyMmguMTE3Yy4zMDQtLjAzNy42MS4wMzUuODY2LjIwMy4xMDIuMDkuMTUyLjIyNC4xMzQuMzU4IDAgLjI0Ni0uMjg5LjM0OC0uODU1LjQ2NmEzLjMzIDMuMzMgMCAwMC0uNDUuMTE3IDEuMTkyIDEuMTkyIDAgMDAtLjcyMS42NDcgMS4wNyAxLjA3IDAgMDAuMDM3Ljg4OGMuMjI5LjQzNS43MDQuNjgzIDEuMTkzLjYyaC4xNjVhLjk2OC45NjggMCAwMC0uMjM1LjUwMi45MzYuOTM2IDAgMDAwIC4zNjRjLS4wMTkuMTgzLjAxMy4zNjguMDkxLjUzNS4wMy4wNTQuMDQ1LjExNS4wNDMuMTc2LS4wMDIuMTUxLjA0NS4zLjEzMy40MjJsLS4wNTguNDEyLS4xNjYuMjYyYS4zODUuMzg1IDAgMDAuNDk3LjUzNWMuMjg3LjI2NS43NC0uMDE2LjYzLS4zOWwtLjA4NS0uMy4wNjQtLjQzM2EuNzExLjcxMSAwIDAwLjIyLS4zNTMuMzA1LjMwNSAwIDAxLjA4NS0uMTVjLjEzMS0uMTQxLjIxOC0uMzE4LjI1Mi0uNTA4YS45MzYuOTM2IDAgMDAuMTIyLS4zMzYuODc3Ljg3NyAwIDAwLS4wODUtLjUzNXYtLjA1M2MuMTM0LS4zNzYuMDgtLjc5NC0uMTQ0LTEuMTIzYTEuMDcgMS4wNyAwIDAwLS4xNi0uMTcxYy4xMTUtLjA1LjIyNi0uMTEuMzMtLjE4MmEyLjAyNiAyLjAyNiAwIDAwLjc3LTEuOTQgMi4wOCAyLjA4IDAgMDAtMS41MTgtMS42NzQgMy43MSAzLjcxIDAgMDAtMS4xMjMtLjE1NWMtLjkxOS4wNDMtMS44My4xOS0yLjcxNi40MzgtLjY5Ny4xOTgtMS40MTQuMzIyLTIuMTM4LjM2OWgtLjExMmMtLjg1LS4wMzItMS4yOTQtLjM3NC0xLjMxNi0xLjAxLS4wMDctLjIwNC4wMzEtLjQwNy4xMTMtLjU5NC40NTkuNTU5IDEuMTM4Ljg5IDEuODYuOTA5LjE3IDAgLjMzOC0uMDE4LjUwMy0uMDU0IDEuMTQ0LS4yNSAxLjQtMS4wNjkgMS4zNzQtMS40NzVhLjM4NS4zODUgMCAwMC0uMzIxLS4zNTNoLS4wNjRhLjM4NS4zODUgMCAwMC0uMzUzLjIzNSAxLjA3IDEuMDcgMCAwMS0uOTg0LjUzNSAxLjIxNCAxLjIxNCAwIDAxLTEuMDY5LS42MzFjLjIzMy0uMDg4LjQ3My0uMTU4LjcxNi0uMjA5aC4xNTVhMy4zNjggMy4zNjggMCAwMDIuMDEtMS4wNjljLjQ0OS4yNDMuOTUuMzcyIDEuNDYuMzc0LjY3OS4wMSAxLjM1LS4xMzggMS45NjItLjQzMy4wOTQtLjA0NC4xODUtLjA5NC4yNzMtLjE1YTMuMDg1IDMuMDg1IDAgMDAzLjQ4LS41ODcgMi43IDIuNyAwIDAwLjQ5OC0zLjEzOSA2Ljg4NCA2Ljg4NCAwIDAwLS4xNS0uMjczIDEyLjI1OSAxMi4yNTkgMCAwMC0xLjg4Ny0yLjI4OCAxMS42NCAxMS42NCAwIDAxLTEuNTA4LTEuNzY0bC0uMDY0LS4xMDJhMS4yOTQgMS4yOTQgMCAwMS0uMjU3LS44NS40MDYuNDA2IDAgMDEuMTYtLjI2N2MuMjI1LS4xMDcuNDQ0LjA4LjgzLjUwOC4xLjExOC4yMS4yMjguMzI2LjMzMS4yNS4yMjUuNTg0LjMzNC45Mi4zYTEuMDcgMS4wNyAwIDAwLjc0OC0uNDc2Yy4yNjMtLjQxNi4yNC0uOTUxLS4wNi0xLjM0MmwtLjA4NS0uMTQ1Yy4xOC4wMzUuMzY1LjAxOS41MzUtLjA0OGEuOTM2LjkzNiAwIDAwLjMyLS4xOTdjLjE3OC0uMDc2LjMzLS4yLjQ0LS4zNTlhLjM0Mi4zNDIgMCAwMS4xMzMtLjEyMy43MTEuNzExIDAgMDAuMy0uMzI2bC4zODQtLjE1NWguMzFhLjM4NS4zODUgMCAwMC4zNTMtLjU3N2wtLjAwNS4wMWEuMzg1LjM4NSAwIDAwLS4xMTgtLjEyOEEuMzg1LjM4NSAwIDAwMjMuNCAwem0uMDA2LjM5OGwtLjE4Ny4zMTUuMzQ3LjA4Ni0uMzk1LjAwNS0uNjU4LjI2MmEuMjYyLjI2MiAwIDAxLS4xNzEuMjYyYy0uMzE2LjE4Mi0uMTk4LjMyMS0uNTgzLjQ4Ny0uMDguMDMyLS4xMDcuMTAxLS4yNTYuMTc2LS4xNS4wNzUtLjQwNy0uMDI3LS41MzUgMGEuMzIuMzIgMCAwMC0uMjAzLjUzNWMuMDg1LjE0NC40ODYuNjc5LjE5MiAxLjExMmEuNzExLjcxMSAwIDAxLTEuMTA3LjEwMmMtLjM2OC0uMzA1LS44NjYtMS4yMTQtMS41NzctLjg3Ny0uNzEuMzM2LS41MDIgMS4xMjgtLjA4NSAxLjc5Ni44ODIgMS4zOSAyLjcwNSAyLjY3MyAzLjUyMyA0LjI3NyAxIDItMS4xMDcgNC4zMzYtMy42NzMgMy4xMTdhMi4zMjYgMi4zMjYgMCAwMS0uMzk2LjI0Yy0xLjA2OS41MzUtMi41MTIuNTc4LTMuMzk1LS4xMTctLjM5NS45NDEtMS43OSAxLjE4Mi0yLjAzMSAxLjI0LS40MjMuMDgtLjgzMi4yMi0xLjIxNC40MTguNDg3IDEuNjE0IDIuNDcgMS40NTQgMi45MDguNDI3IDAgMCAuMDU0LjgyNC0xLjA2OSAxLjA3YTIuMTM5IDIuMTM5IDAgMDEtMi4yODgtMS4xNmMtLjMzLjM0Ni0uNTA3LjgxLS40OTIgMS4yODguMDI3LjY5LjQ2IDEuMzM3IDEuNjkgMS4zODUgMS42NjIuMDY0IDQuMjUtMS4yMDMgNi4wMTQtLjY2OSAxLjM0NC4zMzUgMS43MjMgMi4wNjUuNjQyIDIuOTNhMi43MzIgMi43MzIgMCAwMS0xLjIzLjM4NWMtLjE4Mi4wMS0uMTk4LjA5MS0uMTgxLjE0NS4wMTYuMDUzLjExNy4wNTMuMjc4LjA1My41ODItLjA1MyAxLjIwOC4yODMuOTMgMS4xNjYtLjA0My4xMjMuMTU1LjM1Mi4xMTcuNTM0LS4wNTMuMjYyLS4xMTIuMjAzLS4xMTIuMjg5LS4wNy40MTItLjIzNS4zMjYtLjMzNy42NzlhLjI1Ny4yNTcgMCAwMS0uMjAzLjIwOGwtLjEwMS43MDYuMTEyLjM4LS4xODItLjMyMS0uMjUxLjI1Ny4yMTQtLjMzMi4xMDEtLjdhLjI2Mi4yNjIgMCAwMS0uMTYtLjI2N2MwLS4zNjQtLjE4Mi0uMzMyLS4xMjgtLjc1LjAzNy0uMDg1IDAtLjA0MiAwLS4zMS4wMTYtLjE4Ni4yMy0uMzQxLjI3Mi0uNDguMDQzLS4xNC4wNTQtLjQ1LS4zNjktLjQ1LS4xOTguMDA2LS44NS4wNzUtMS4wNjktLjM5YS43MTEuNzExIDAgMDEuNDY1LTEuMDFjLjQ1LS4xNiAxLjQ5Ny0uMTIzIDEuNTU2LS45MS4wNTktLjc4NS0uNzI3LS45OTktMS41MTMtLjk3Mi0xLjY1Ny4wNTktMy42NjMgMS4wMS01LjQ4LjkwMy0yLjIzLS4xMjgtMy4xOTgtMy4xMzMtLjg2MS00LjczN2EyLjMyNiAyLjMyNiAwIDAxMC0uNDY1Yy4wOS0xLjIxOS43Ny0yLjQ3IDEuODEyLTIuODUtLjU5My0uODE4LS4xMjgtMi4xNDktLjA1OC0yLjM4NC4xMzUtLjQuMjEzLS44MTguMjMtMS4yNC0xLjY0Mi0uMzctMi40OTcgMS40MTEtMS44MjQgMi4zMDQgMCAwLS43NDMtLjM2OS0uMzk1LTEuNDY1YTIuMTM5IDIuMTM5IDAgMDEyLjEzOC0xLjQgMS43ODYgMS43ODYgMCAwMC0uODcxLTEuMDdjLS42MS0uMy0xLjM4NS0uMjY3LTIuMDQzLjc3LS44ODcgMS40MTEtMS4wNjMgNC4yOTMtMi40MjcgNS41NDQtLjk2MSAxLTIuNjUyLjQ2My0yLjg2LS45MDlhMi43MzIgMi43MzIgMCAwMS4yNzgtMS4yNTZjLjA4LS4xNjYuMDMyLS4yMTQtLjAzOC0uMjMtLjA3LS4wMTYtLjEyMy4wNy0uMTg3LjIxNGEuODIzLjgyMyAwIDAxLTEuNDc1LjIyNGMtLjA5Ny0uMTA3LS4zNDIuMDA2LS41MzUtLjE3LS4xOTItLjE3Ny0uMTI4LS4xODgtLjE5Mi0uMjQxLS4zMjEtLjI3My0uMTYtLjM3NS0uNDE4LS42MzZhLjI1Ny4yNTcgMCAwMS0uMDgtLjI4NEwuNzk2IDcuMi40MSA3LjEwMmguMzhsLS4xMDItLjM0Ny4xODIuMzUzLjUzNC40MzhhLjI2Mi4yNjIgMCAwMS4zMSAwYy4zMjEuMTgyLjM4LjAxLjcxNy4yNjIuMDcuMDU0LjEzMy4wMjcuMjgzLjEzNC4xNS4xMDcuMTg3LjM3NC4yNzguNDc2YS4zMi4zMiAwIDAwLjU3Mi0uMDk2Yy4wODYtLjE5My4zMzItLjc3Ljg2Ni0uNzI4LjQ1Ny4wMjcuNzcuNDcuNjQyLjkxLS4wOTEuNDctLjY1MiAxLjM1NyAwIDEuODAxLjY1Mi40NDQgMS4yMzUtLjEzNCAxLjYwNC0uODI5Ljc3NS0xLjQ2Ljk1Ny0zLjY3OCAxLjk1Ny01LjIwMiAxLjIzLTEuODg3IDQuMzA5LTEuMjI0IDQuNTMzIDEuNjA0LjE0NS4wNi4yODMuMTM2LjQxMi4yMjUgMS4wMzIuNjkgMS43NTkgMS45MjQgMS41NjcgMi45OTQgMS4wMi0uMTI5IDEuOTE5Ljk1NyAyLjA5IDEuMTM4LjI4LjMyOC42MDYuNjEyLjk2OC44NDUgMS4xNjUtMS4yMy4wMzctMi44NjUtMS4wNy0yLjczMiAwIDAgLjY5LS40NiAxLjQ2Ni4zOS42MS43MjguNjY2IDEuNzcyLjEzOSAyLjU2MS40NjUuMTEzLjk1Ni4wMzQgMS4zNjMtLjIxOS41ODMtLjM1My45MjUtMS4wNy4zNTMtMi4xMzgtLjc3Ni0xLjQ3Ni0zLjE4Ny0zLjA3NS0zLjU4OC00Ljg3Ni0uMzg0LTEuMzMzLjkyOC0yLjUyOCAyLjIxOS0yLjAyMS4zOC4yMS43MDUuNTEuOTQ2Ljg3MS4xMDIuMTU1LjE2Ni4xMzQuMjE0LjA4Ni4wNDgtLjA0OC0uMDA1LS4xNC0uMDk2LS4yNjhhLjgyMy44MjMgMCAwMS41MzQtMS4zOWMuMTQ1LS4wMjcuMTYxLS4yODkuNDE4LS4zNzQuMjU2LS4wODYuMjMtLjAxNi4zMS0uMDQ4LjM5NS0uMTUuNDA2LjA0My43NTktLjA0OC4xLS4wMzguMjEyLS4wMS4yODMuMDdsLjY4LS4yNjN6bS0xMC4yOTcgNi4yNmMtLjA2NS41My0uMzQ4IDEuNjQ3LS4xODcgMi4zMzIuMTU1Ljg3MS44MjMuODIzIDEuMDY5LjM5NS4xNjMtLjMzMi4yLS43MTEuMTA3LTEuMDY5YTMuMTA2IDMuMTA2IDAgMDAtLjk4NC0xLjYzNnptLjI1Ni44NzJjLjE3LjI2Mi4yOTMuNTUxLjM2NC44NTZhMS4zIDEuMyAwIDAxMCAuNzU5Yy0uMDg2LjE4Ny0uMzMyLjE4Ny0uNDIzLS4yMy0uMDQtLjQ2Mi0uMDItLjkyOC4wNi0xLjM4NXptMS43MjcgMi42NjFjLS41MTcuMDEyLS42Ny40NzItLjQ3LjgyLjIwNy4zMS41MjEuNTM0Ljg4Mi42M2EzLjEwNiAzLjEwNiAwIDAwMS45MDgtLjAzN2MtLjQyMi0uMzItMS4yNS0xLjEyMy0xLjkwMy0xLjM0MmExLjI1NSAxLjI1NSAwIDAwLS40MTctLjA3em0uMDg4LjQwMWEuODA3LjgwNyAwIDAxLjIwMS4wNGMuNDI5LjE5Ny44My40NSAxLjE5Mi43NTNhMi44MiAyLjgyIDAgMDEtLjk2Mi0uMTA3IDEuMyAxLjMgMCAwMS0uNjQyLS4zOTZjLS4wOTUtLjEzNC0uMDM2LS4zLjIxLS4yOXptLTIuMjg1LjE4M2ExLjU0IDEuNTQgMCAwMC0uOTg0LjQ1IDMuMTA2IDMuMTA2IDAgMDAtLjkzNiAxLjY3M2MuNTM1LS4yMDMgMS42MDQtLjUxOSAyLjEzOS0uOTczLjY2My0uNTg4LjI1MS0xLjE2Ni0uMjItMS4xNXptLS4wMjUuMzQxYy4xODguMDA4LjI3Ni4yMTctLjA0LjQ4OGE1LjM5IDUuMzkgMCAwMS0xLjIzNC42MzFjLjEzNC0uMjc3LjMxNS0uNTI4LjUzNC0uNzQzYTEuMyAxLjMgMCAwMS43LS4zNzQuMjg0LjI4NCAwIDAxLjA0LS4wMDJ6Ii8+PC9zdmc+', color: '#00d700' },
    { id: 'hp',       name: 'HP',       img: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA5NmQ2IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SFA8L3RpdGxlPjxwYXRoIGQ9Ik0xMi4wMDY5IDI0aC0uMzU3MmwyLjQ1OS02Ljc0NTNoMy4zNzk2Yy41OTA3IDAgMS4yMzY0LS40NTMzIDEuNDQyNC0xLjAxNjZsMi42NjUyLTcuMzA4NWMuNDM5Ni0xLjE5NTItLjI0NzMtMi4xNzA2LTEuNTI1LTIuMTcwNmgtNC42OTgzbC0zLjkyOSAxMC43OTgtMi4yMjU1IDYuMTI3QzMuOTI5IDIyLjQzNCAwIDE3LjY4MDYgMCAxMi4wMDcgMCA2LjQ5OCAzLjcwOTIgMS44NTQ2IDguNzY0Ny40Mzk2TDYuNDcwNSA2Ljc1OSAyLjY1MTQgMTcuMjU0N2gyLjU0MTVMOC40NDg4IDguMzM5aDEuOTA5NWwtMy4yNTU4IDguOTE1OEg5LjY0NGwzLjAyMjMtOC4zMjUxYy40Mzk2LTEuMTk1Mi0uMjQ3My0yLjE3MDYtMS41MjUtMi4xNzA2aC0yLjE0M2wyLjQ1OS02Ljc0NTNDMTEuNjM2IDAgMTEuODE0NSAwIDExLjk5MzEgMCAxOC42Mjg1IDAgMjQgNS4zNzE1IDI0IDEyLjAwN2MuMDEzNyA2LjYyMTYtNS4zNTc4IDExLjk5My0xMS45OTMxIDExLjk5M3pNMTkuMjc0MiA4LjMyNWgtMS45MDk2bC0yLjY3ODkgNy4zMzZoMS45MDk2bDIuNjc4OS03LjMzNnoiLz48L3N2Zz4=', color: '#0096d6' },
    { id: 'polaroid', name: 'POLAROID', img: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjIiIHk9IjQiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgcng9IjIiIGZpbGw9IiNlNjM5NDYiLz48cmVjdCB4PSI0IiB5PSI2IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIxIiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMTMiIGN5PSIxNSIgcj0iNS41IiBmaWxsPSIjZTYzOTQ2Ii8+PHRleHQgeD0iNzMiIHk9IjIyIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzIyMiI+UG9sYXJvaWQ8L3RleHQ+PC9zdmc+', color: '#222222' },
    { id: 'ngs',      name: 'NGS',      img: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODAgMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOCIgY3k9IjE4IiByPSI3IiBmaWxsPSIjZmY2NjAwIi8+PHRleHQgeD0iNDYiIHk9IjI2IiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMiIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmNjYwMCI+TkdTPC90ZXh0Pjwvc3ZnPg==', color: '#ff6600' },
];

// Associar marcas aos produtos existentes
const productBrands = {
    1:  'ngs',      // Fone de ouvido Barda
    2:  'ngs',      // Fone de ouvido Airmax TWS
    3:  'philips',  // Fone de ouvido TWS
    4:  'logitech', // Botões BlueDoo TWS
    5:  'razer',    // Headset Gamer Pro X
    6:  'samsung',  // Earbuds Noise Cancel
    7:  'logitech', // Teclado Mecânico RGB
    8:  'logitech', // Mouse Gamer Óptico
    9:  'hp',       // Webcam Full HD
    10: 'samsung',  // Monitor Curvo 27"
    11: 'asus',     // SSD NVMe 1TB
    12: 'asus',     // Placa de Vídeo RTX 4060
    13: 'lenovo',   // Fonte 750W Modular
    14: 'razer',    // Mousepad XL Gaming
    15: 'hp',       // Hub USB-C 7 em 1
    16: 'philips',  // Monitor
};

function initBrandsCarousel() {
    const track    = document.getElementById('brandsTrack');
    const prevBtn  = document.getElementById('brandsPrev');
    const nextBtn  = document.getElementById('brandsNext');
    if (!track) return;

    // Criar cards para todos os brands + duplicar para loop infinito
    function makeCard(brand) {
        const count = products.filter(p => productBrands[p.id] === brand.id).length;
        const card  = document.createElement('button');
        card.className  = 'brand-card';
        card.dataset.brandId = brand.id;
        card.innerHTML = `
            <div class="brand-card-logo-wrap">
                <img 
                    src="${brand.img}" 
                    alt="${brand.name}" 
                    class="brand-logo-img"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
                >
                <div class="brand-logo-fallback" style="display:none;background:${brand.color};">
                    <span>${brand.name.slice(0,2)}</span>
                </div>
            </div>
            <span class="brand-card-name">${brand.name}</span>
            <span class="brand-card-count">${count} produto${count !== 1 ? 's' : ''}</span>
        `;
        card.addEventListener('click', () => openBrandModal(brand.id));
        return card;
    }

    // Triplicar para loop suave
    [...brands, ...brands, ...brands].forEach(b => track.appendChild(makeCard(b)));

    // Auto-scroll com CSS animation (pausar no hover/clique)
    const CARD_W  = 158; // largura + gap aproximada
    const SET_W   = brands.length * CARD_W;

    // Inserir keyframes dinamicamente
    const style = document.createElement('style');
    style.textContent = `
        @keyframes brandsScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-${SET_W}px); }
        }
        .brands-auto-scroll {
            animation: brandsScroll ${brands.length * 2.2}s linear infinite;
        }
        .brands-auto-scroll:hover,
        .brands-auto-scroll.paused {
            animation-play-state: paused;
        }
    `;
    document.head.appendChild(style);
    track.classList.add('brands-auto-scroll');

    // Scroll manual com botões
    let manualOffset = 0;

    function pauseAndScroll(dir) {
        track.classList.add('paused');
        // Ler posição actual da animação
        const computed = window.getComputedStyle(track).transform;
        const matrix   = new DOMMatrix(computed);
        manualOffset   = matrix.m41; // translateX actual

        // Desligar a animation e usar transform manual
        track.style.animation = 'none';
        track.style.transform = `translateX(${manualOffset}px)`;

        manualOffset += dir * CARD_W * 2;
        // Normalizar dentro do 2º conjunto
        if (manualOffset > 0) manualOffset -= SET_W;
        if (manualOffset < -SET_W * 2) manualOffset += SET_W;

        track.style.transition = 'transform 0.45s ease';
        requestAnimationFrame(() => {
            track.style.transform = `translateX(${manualOffset}px)`;
        });

        // Retomar auto-scroll após 4 seg
        clearTimeout(track._resumeTimer);
        track._resumeTimer = setTimeout(() => {
            track.style.transition = 'none';
            track.style.animation  = '';
            track.classList.remove('paused');
        }, 4000);
    }

    prevBtn.addEventListener('click', () => pauseAndScroll(+1));
    nextBtn.addEventListener('click', () => pauseAndScroll(-1));
}

function openBrandModal(brandId) {
    const brand    = brands.find(b => b.id === brandId);
    const filtered = products.filter(p => productBrands[p.id] === brandId);
    const overlay  = document.getElementById('brandModalOverlay');
    const grid     = document.getElementById('brandProductsGrid');
    const empty    = document.getElementById('brandEmpty');

    document.getElementById('brandModalName').textContent  = brand.name;
    const logoEl = document.getElementById('brandModalLogo');
    logoEl.innerHTML = `<img src="${brand.img}" alt="${brand.name}" style="max-width:100%;max-height:100%;object-fit:contain;" onerror="this.style.display='none'">`;
    logoEl.style.background = '#f3f4f6';
    document.getElementById('brandModalCount').textContent =
        `${filtered.length} produto${filtered.length !== 1 ? 's' : ''} disponíve${filtered.length !== 1 ? 'is' : 'l'}`;

    grid.innerHTML = '';

    if (filtered.length === 0) {
        empty.style.display = 'flex';
    } else {
        empty.style.display = 'none';
        filtered.forEach((p, i) => {
            const priceHTML = p.onSale
                ? `<span class="bm-orig">${formatKz(p.originalPrice)}</span>
                   <span class="bm-price">${formatKz(p.discountedPrice)}</span>`
                : `<span class="bm-price">${formatKz(p.discountedPrice)}</span>`;
            const badgeHTML = p.onSale ? `<div class="bm-badge">Oferta!</div>` : '';
            const card = document.createElement('div');
            card.className = 'bm-card';
            card.style.animationDelay = `${i * 50}ms`;
            card.innerHTML = `
                <div class="bm-img-wrap">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                    ${badgeHTML}
                </div>
                <div class="bm-info">
                    <p class="bm-cat">${p.category}</p>
                    <h4 class="bm-name">${p.name}</h4>
                    <div class="bm-prices">${priceHTML}</div>
                    <button class="bm-add-btn" onclick="addToCart(${p.id}); closeBrandModal();">
                        <i class="fas fa-cart-plus"></i> Adicionar
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Marcar card activo
    document.querySelectorAll('.brand-card').forEach(c => {
        c.classList.toggle('active', c.dataset.brandId === brandId);
    });
}

function closeBrandModal() {
    document.getElementById('brandModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
    document.querySelectorAll('.brand-card').forEach(c => c.classList.remove('active'));
}

document.addEventListener('DOMContentLoaded', () => {
    initBrandsCarousel();
    document.getElementById('brandModalClose').addEventListener('click', closeBrandModal);
    document.getElementById('brandModalOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeBrandModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeBrandModal();
    });
});