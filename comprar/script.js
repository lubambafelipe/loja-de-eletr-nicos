
// ── DATA ──
const products = [
    { id:1,  name:'Fone de ouvido Barda',      category:'audio',       price:32000, origPrice:42000, discount:24, onSale:true,
      images:['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop'] },
    { id:2,  name:'Fone de ouvido Airmax TWS', category:'audio',       price:14000, origPrice:30000, discount:53, onSale:true,
      images:['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&h=600&fit=crop'] },
    { id:3,  name:'Fone de ouvido TWS',        category:'audio',       price:32000, origPrice:40000, discount:20, onSale:true,
      images:['https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=600&h=600&fit=crop'] },
    { id:4,  name:'Botões BlueDoo TWS',         category:'audio',       price:21000, origPrice:30000, discount:30, onSale:true,
      images:['https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=600&h=600&fit=crop'] },
    { id:5,  name:'Headset Gamer Pro X',        category:'audio',       price:35000, origPrice:50000, discount:30, onSale:true,
      images:['https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop'] },
    { id:6,  name:'Earbuds Noise Cancel',       category:'audio',       price:24500, origPrice:35000, discount:30, onSale:true,
      images:['https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1617526738882-1ea945ce3acc?w=600&h=600&fit=crop'] },
    { id:7,  name:'Teclado Mecânico RGB',       category:'perifericos', price:58000, origPrice:null,  discount:null, onSale:false,
      images:['https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop'] },
    { id:8,  name:'Mouse Gamer Óptico',         category:'perifericos', price:29000, origPrice:null,  discount:null, onSale:false,
      images:['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=600&fit=crop'] },
    { id:9,  name:'Webcam Full HD 1080p',       category:'perifericos', price:42000, origPrice:null,  discount:null, onSale:false,
      images:['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop'] },
    { id:10, name:'Monitor Curvo 27"',          category:'monitores',   price:280000, origPrice:null, discount:null, onSale:false,
      images:['https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1547119957-637f8679db1e?w=600&h=600&fit=crop'] },
    { id:11, name:'SSD NVMe 1TB Gen4',          category:'componentes', price:65000, origPrice:null,  discount:null, onSale:false,
      images:['https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&fit=crop'] },
    { id:12, name:'Placa de Vídeo RTX 4060',    category:'componentes', price:320000, origPrice:null, discount:null, onSale:false,
      images:['https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&h=600&fit=crop'] },
    { id:13, name:'Fonte 750W Modular',         category:'componentes', price:78000, origPrice:null,  discount:null, onSale:false,
      images:['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop'] },
    { id:14, name:'Mousepad XL Gaming',         category:'perifericos', price:18000, origPrice:null,  discount:null, onSale:false,
      images:['https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&h=600&fit=crop'] },
    { id:15, name:'Hub USB-C 7 em 1',           category:'perifericos', price:32000, origPrice:null,  discount:null, onSale:false,
      images:['https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop'] },
    { id:16, name:'Monitor 24" Full HD',        category:'monitores',   price:240000, origPrice:null, discount:null, onSale:false,
      images:['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop','https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?w=600&h=600&fit=crop'] },
];

// ── STATE ──
let cart = JSON.parse(localStorage.getItem('bt_cart') || '[]');
let activeCategory = 'all';
let maxPrice = 320000;
let sortBy = 'relevance';
let onlyOffers = false;
let searchQuery = '';
let listView = false;
let wishlist = new Set();

// ── FORMAT ──
function fmt(n) { return n.toLocaleString('pt-PT') + ' Kz'; }

// ── CART ──
function updateCartBadge() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById('cartCount').textContent = total;
}
function addToCart(id) {
    const p = products.find(x => x.id === id);
    const existing = cart.find(x => x.id === id);
    if (existing) existing.qty++;
    else cart.push({ id, name: p.name, price: p.price, qty: 1 });
    localStorage.setItem('bt_cart', JSON.stringify(cart));
    updateCartBadge();
    showToast(`"${p.name}" adicionado ao carrinho!`);
}

// ── TOAST ──
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── FILTER & SORT ──
function getFiltered() {
    let list = products.filter(p => {
        if (activeCategory !== 'all' && p.category !== activeCategory) return false;
        if (p.price > maxPrice) return false;
        if (onlyOffers && !p.onSale) return false;
        if (searchQuery && !p.name.toLowerCase().includes(searchQuery)) return false;
        return true;
    });
    if (sortBy === 'price-asc')  list.sort((a,b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a,b) => b.price - a.price);
    if (sortBy === 'name')       list.sort((a,b) => a.name.localeCompare(b.name));
    if (sortBy === 'discount')   list.sort((a,b) => (b.discount||0) - (a.discount||0));
    return list;
}

// ── RENDER ──
function renderCards() {
    const list = getFiltered();
    const grid = document.getElementById('productsGrid');
    const empty = document.getElementById('emptyState');
    document.getElementById('countNum').textContent = list.length;

    grid.className = 'products-grid' + (listView ? ' list-view' : '');

    if (list.length === 0) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        return;
    }
    empty.style.display = 'none';

    grid.innerHTML = list.map(p => {
        const wl = wishlist.has(p.id);
        return `
        <div class="product-card" data-id="${p.id}">
            <div class="card-img-wrap">
                <img class="card-img-main" src="${p.images[0]}" alt="${p.name}" loading="lazy">
                <img class="card-img-alt"  src="${p.images[1]}" alt="${p.name} — vista 2" loading="lazy">
                <div class="img-dots">
                    <div class="img-dot active"></div>
                    <div class="img-dot"></div>
                </div>
                ${p.onSale ? `<div class="badge-sale">Oferta!</div>` : ''}
                ${p.discount ? `<div class="badge-pct">-${p.discount}%</div>` : ''}
                <div class="card-actions">
                    <button class="quick-btn" title="Favorito" onclick="toggleWishlist(event,${p.id})">
                        <i class="${wl ? 'fas' : 'far'} fa-heart" style="${wl ? 'color:var(--accent)' : ''}"></i>
                    </button>
                    <button class="quick-btn" title="Visualização rápida" onclick="quickView(event,${p.id})">
                        <i class="far fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <p class="card-cat">${p.category}</p>
                <h3 class="card-name">${p.name}</h3>
                <div class="card-prices">
                    ${p.origPrice ? `<span class="price-orig">${fmt(p.origPrice)}</span>` : ''}
                    <span class="price-now">${fmt(p.price)}</span>
                </div>
                <button class="add-btn" onclick="addToCart(${p.id})">
                    <i class="fas fa-cart-plus"></i> ADICIONAR
                </button>
            </div>
        </div>`;
    }).join('');
}

// ── WISHLIST ──
function toggleWishlist(e, id) {
    e.stopPropagation();
    if (wishlist.has(id)) wishlist.delete(id);
    else { wishlist.add(id); showToast('Adicionado aos favoritos!'); }
    renderCards();
}

// ── QUICK VIEW (simple modal) ──
function quickView(e, id) {
    e.stopPropagation();
    const p = products.find(x => x.id === id);
    showToast(`"${p.name}" — ${fmt(p.price)}`);
}

// ── SEARCH ──
function applySearch() {
    searchQuery = document.getElementById('headerSearch').value.trim().toLowerCase();
    renderCards();
}
document.getElementById('headerSearch').addEventListener('keydown', e => {
    if (e.key === 'Enter') applySearch();
});

// ── FILTERS WIRING ──
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.cat;
        renderCards();
    });
});

const slider = document.getElementById('priceSlider');
slider.addEventListener('input', () => {
    maxPrice = +slider.value;
    document.getElementById('priceLabel').textContent = maxPrice.toLocaleString('pt-PT') + ' Kz';
    renderCards();
});

document.getElementById('sortSelect').addEventListener('change', e => {
    sortBy = e.target.value;
    renderCards();
});

document.getElementById('onlyOffers').addEventListener('change', e => {
    onlyOffers = e.target.checked;
    renderCards();
});

document.getElementById('clearFilters').addEventListener('click', () => {
    activeCategory = 'all';
    maxPrice = 320000;
    sortBy = 'relevance';
    onlyOffers = false;
    searchQuery = '';
    slider.value = 320000;
    document.getElementById('priceLabel').textContent = '320 000 Kz';
    document.getElementById('sortSelect').value = 'relevance';
    document.getElementById('onlyOffers').checked = false;
    document.getElementById('headerSearch').value = '';
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
    renderCards();
});

// ── VIEW TOGGLE ──
document.getElementById('gridViewBtn').addEventListener('click', () => {
    listView = false;
    document.getElementById('gridViewBtn').classList.add('active');
    document.getElementById('listViewBtn').classList.remove('active');
    renderCards();
});
document.getElementById('listViewBtn').addEventListener('click', () => {
    listView = true;
    document.getElementById('listViewBtn').classList.add('active');
    document.getElementById('gridViewBtn').classList.remove('active');
    renderCards();
});

// ── INIT ──
updateCartBadge();
renderCards();

