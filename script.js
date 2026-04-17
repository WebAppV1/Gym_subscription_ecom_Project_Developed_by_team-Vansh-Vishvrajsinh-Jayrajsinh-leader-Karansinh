/* ============================================================
   ASCEND 2.0 — script.js
   Shared utilities + per-page logic
============================================================ */

'use strict';

/* ============================================================
   SHARED NAVBAR / FOOTER INJECTION
============================================================ */
(function injectSharedUI() {
  const page = document.body.getAttribute('data-page') || 'home';

  // ── Navbar ──
  const navEl = document.getElementById('navbar');
  if (navEl) {
    const cartCount = getCart().reduce((s, i) => s + i.qty, 0);
    const wishCount = getWishlist().length;

    navEl.innerHTML = `
      <a class="nav-logo" href="index.html">
        <span class="logo-bracket">[</span>ASCEND<span class="logo-v">2.0</span><span class="logo-bracket">]</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" class="${page==='home'?'nav-active':''}">Home</a></li>
        <li><a href="equipment.html" class="${page==='equipment'?'nav-active':''}">Equipment</a></li>
        <li><a href="index.html#plans" class="${page==='home'?'':''}">Plans</a></li>
        <li><a href="cart.html" class="${page==='cart'?'nav-active':''}">Cart <span class="nav-badge" id="nav-cart-badge">${cartCount||''}</span></a></li>
        <li><a href="wishlist.html" class="${page==='wishlist'?'nav-active':''}">Wishlist <span class="nav-badge nav-badge-pink" id="nav-wish-badge">${wishCount||''}</span></a></li>
        <li><a href="account.html" class="${page==='account'?'nav-active':''}">Account</a></li>
      </ul>
      <button class="nav-cta ripple-btn" onclick="location.href='billing.html'">Checkout</button>
      <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    `;
  }

  // ── Mobile Menu ──
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.innerHTML = `
      <ul>
        <li><a href="index.html" class="mobile-link">Home</a></li>
        <li><a href="equipment.html" class="mobile-link">Equipment</a></li>
        <li><a href="index.html#plans" class="mobile-link">Plans</a></li>
        <li><a href="cart.html" class="mobile-link">Cart</a></li>
        <li><a href="wishlist.html" class="mobile-link">Wishlist</a></li>
        <li><a href="account.html" class="mobile-link">Account</a></li>
        <li><a href="billing.html" class="mobile-link">Checkout</a></li>
      </ul>
    `;
  }

  // ── Footer ──
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="footer-logo">
        <a href="index.html"><span class="logo-bracket">[</span>ASCEND<span class="logo-v">2.0</span><span class="logo-bracket">]</span></a>
      </div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="equipment.html">Equipment</a>
        <a href="cart.html">Cart</a>
        <a href="wishlist.html">Wishlist</a>
        <a href="account.html">Account</a>
        <a href="billing.html">Billing</a>
      </div>
      <div class="footer-copy mono-text">© 2025 ASCEND 2.0 · Built by the Architects · All rights reserved</div>
    `;
  }
})();


/* ============================================================
   NAVBAR SCROLL + HAMBURGER
============================================================ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }
})();

(function initHamburger() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('#hamburger');
    if (!btn) return;
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.mobile-link').forEach(l =>
    l.addEventListener('click', () => {
      document.getElementById('mobile-menu')?.classList.remove('open');
      document.getElementById('hamburger')?.classList.remove('open');
    })
  );
})();


/* ============================================================
   PARTICLE SYSTEM (shared)
============================================================ */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;
  const COUNT = 70;

  function resize() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * (W||800);
      this.y = init ? Math.random() * (H||600) : (H||600) + 10;
      this.r = 0.6 + Math.random() * 1.2;
      this.vy = -(0.3 + Math.random() * 0.5);
      this.vx = (Math.random() - 0.5) * 0.2;
      this.alpha = 0.1 + Math.random() * 0.4;
      this.hue = Math.random() < 0.5 ? 195 : 265;
    }
    update() { this.x += this.vx; this.y += this.vy; if (this.y < -10) this.reset(false); }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = `hsl(${this.hue},100%,70%)`;
      ctx.shadowColor = `hsl(${this.hue},100%,60%)`;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
    }
  }

  resize();
  particles = Array.from({ length: COUNT }, () => new Particle());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  addEventListener('resize', resize);
  animate();
})();


/* ============================================================
   SCROLL FADE-IN
============================================================ */
(function initScrollReveal() {
  const els = document.querySelectorAll('.fade-in-section');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();


/* ============================================================
   RIPPLE
============================================================ */
document.addEventListener('click', e => {
  const btn = e.target.closest('.ripple-btn');
  if (!btn) return;
  btn.classList.add('btn-flash');
  setTimeout(() => btn.classList.remove('btn-flash'), 400);
});


/* ============================================================
   CART — localStorage helpers
============================================================ */
function getCart() {
  try { return JSON.parse(localStorage.getItem('ascend_cart') || '[]'); }
  catch { return []; }
}
function saveCart(cart) { localStorage.setItem('ascend_cart', JSON.stringify(cart)); }

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.id === +productId);
  if (existing) existing.qty += qty;
  else cart.push({ id: +productId, qty });
  saveCart(cart);
  updateBadges();
  showToast('Added to Cart 🛒');
}

function removeFromCart(productId) {
  saveCart(getCart().filter(i => i.id !== +productId));
  updateBadges();
}

function updateCartQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === +productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
}


/* ============================================================
   WISHLIST — localStorage helpers
============================================================ */
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('ascend_wishlist') || '[]'); }
  catch { return []; }
}
function saveWishlist(list) { localStorage.setItem('ascend_wishlist', JSON.stringify(list)); }

function toggleWishlist(productId) {
  const list = getWishlist();
  const idx = list.indexOf(+productId);
  if (idx === -1) { list.push(+productId); showToast('Saved to Wishlist ❤️'); }
  else { list.splice(idx, 1); showToast('Removed from Wishlist'); }
  saveWishlist(list);
  updateBadges();
  return idx === -1;
}

function isWishlisted(productId) { return getWishlist().includes(+productId); }


/* ============================================================
   NAV BADGE UPDATER
============================================================ */
function updateBadges() {
  const cartBadge = document.getElementById('nav-cart-badge');
  const wishBadge = document.getElementById('nav-wish-badge');
  const cartCount = getCart().reduce((s, i) => s + i.qty, 0);
  const wishCount = getWishlist().length;
  if (cartBadge) cartBadge.textContent = cartCount || '';
  if (wishBadge) wishBadge.textContent = wishCount || '';
}


/* ============================================================
   TOAST NOTIFICATION
============================================================ */
function showToast(msg) {
  let t = document.getElementById('ascend-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'ascend-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('toast-show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('toast-show'), 2200);
}


/* ============================================================
   PRODUCT CARD BUILDER
============================================================ */
function buildProductCard(product) {
  const wished = isWishlisted(product.id);
  const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));
  const tagHtml = product.tag
    ? `<div class="prod-tag ${product.tag === 'best' ? 'tag-best' : 'tag-new'}">${product.tag === 'best' ? '🔥 BEST' : '✦ NEW'}</div>`
    : '';
  return `
    <div class="prod-card glass fade-in-section" data-id="${product.id}">
      ${tagHtml}
      <div class="prod-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <button class="wish-btn ${wished?'wished':''}" data-id="${product.id}" title="Wishlist">
          ${wished ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="prod-info">
        <div class="prod-cat mono-text">${product.category}</div>
        <h3 class="prod-name">${product.name}</h3>
        <div class="prod-stars" title="${product.rating}/5">
          <span class="stars-filled">${stars}</span>
          <span class="prod-rating">${product.rating}</span>
        </div>
        <div class="prod-bottom">
          <div class="prod-price">$${product.price.toLocaleString()}</div>
          <button class="btn-add-cart ripple-btn" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}


/* ============================================================
   DELEGATE CARD EVENTS (add to cart, wishlist)
============================================================ */
function initCardEvents(container) {
  container.addEventListener('click', e => {
    const addBtn = e.target.closest('.btn-add-cart');
    if (addBtn) { addToCart(addBtn.dataset.id); return; }

    const wishBtn = e.target.closest('.wish-btn');
    if (wishBtn) {
      const added = toggleWishlist(wishBtn.dataset.id);
      wishBtn.textContent = added ? '❤️' : '🤍';
      wishBtn.classList.toggle('wished', added);
    }
  });
}


/* ============================================================
   INTRO OVERLAY (home page only)
============================================================ */
(function runIntro() {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;
  setTimeout(() => {
    overlay.classList.add('hidden');
    setTimeout(() => overlay.remove(), 900);
  }, 4200);
})();


/* ============================================================
   HERO MOUSE PARALLAX
============================================================ */
(function initParallax() {
  const glow = document.querySelector('.hero-bg-glow');
  if (!glow) return;
  document.addEventListener('mousemove', e => {
    glow.style.transform = `translate(${(e.clientX/innerWidth-.5)*60}px,${(e.clientY/innerHeight-.5)*40}px)`;
  }, { passive: true });
})();


/* ============================================================
   BILLING TOGGLE (home page plans)
============================================================ */
(function initBillingToggle() {
  const toggle = document.getElementById('billing-switch');
  if (!toggle) return;
  const prices = document.querySelectorAll('.price-amount');
  const lblM = document.getElementById('lbl-monthly');
  const lblY = document.getElementById('lbl-yearly');

  function animateNumber(el, target) {
    const start = parseInt(el.textContent, 10) || 0;
    const diff = target - start;
    let begin = null;
    (function step(ts) {
      if (!begin) begin = ts;
      const p = Math.min((ts - begin) / 350, 1);
      el.textContent = Math.round(start + diff * (1 - Math.pow(1-p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }

  toggle.addEventListener('change', () => {
    const yearly = toggle.checked;
    prices.forEach(el => animateNumber(el, parseInt(yearly ? el.dataset.yearly : el.dataset.monthly, 10)));
    if (lblM) lblM.style.color = yearly ? '#666' : '#f0f0f0';
    if (lblY) lblY.style.color = yearly ? '#f0f0f0' : '#666';
  });
})();


/* ============================================================
   XP SYSTEM (home page)
============================================================ */
(function initProgress() {
  const xpBar = document.getElementById('xp-bar');
  const xpCounter = document.getElementById('xp-counter');
  const earnBtn = document.getElementById('earn-xp-btn');
  const levelItems = document.querySelectorAll('.level-item');
  if (!xpBar && !xpCounter) return;

  let currentXP = 0;
  const maxXP = 10000;
  const TARGET_XP = 1240;
  const levelThresholds = [0, 500, 1500, 2800, 4200, 5800, 7000, 8000, 9000, 9600, 10000];

  function getLvl(xp) {
    let l = 1;
    for (let i = 1; i < levelThresholds.length; i++) if (xp >= levelThresholds[i]) l = i + 1;
    return Math.min(l, 10);
  }

  function updateDisplay(xp) {
    if (xpBar) xpBar.style.width = Math.min(xp/maxXP*100, 100) + '%';
    if (xpCounter) xpCounter.textContent = `${xp.toLocaleString()} / ${maxXP.toLocaleString()} XP`;
    const lvl = getLvl(xp);
    levelItems.forEach((item, idx) => {
      item.classList.remove('active-level', 'unlocked');
      if (idx + 1 === lvl) item.classList.add('active-level');
      else if (idx + 1 < lvl) item.classList.add('unlocked');
    });
  }

  setTimeout(() => {
    const dur = 1800; let begin = null;
    (function step(ts) {
      if (!begin) begin = ts;
      const p = Math.min((ts-begin)/dur, 1);
      currentXP = Math.round(TARGET_XP * (1 - Math.pow(1-p, 4)));
      updateDisplay(currentXP);
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }, 4500);

  if (earnBtn) {
    earnBtn.addEventListener('click', () => {
      if (currentXP >= maxXP) return;
      const prev = currentXP, next = Math.min(currentXP + 100, maxXP);
      earnBtn.textContent = '+100 XP Earned! 🎯';
      earnBtn.style.background = 'linear-gradient(135deg,#22d3a5,#059669)';
      setTimeout(() => { earnBtn.textContent = '+ Earn 100 XP (Demo)'; earnBtn.style.background = ''; }, 1500);
      const dur = 600; let begin = null;
      (function step(ts) {
        if (!begin) begin = ts;
        const p = Math.min((ts-begin)/dur, 1);
        currentXP = Math.round(prev + (next-prev)*p);
        updateDisplay(currentXP);
        if (p < 1) requestAnimationFrame(step);
      })(performance.now());
    });
  }
})();


/* ============================================================
   STAT COUNTERS
============================================================ */
(function initCounters() {
  const els = document.querySelectorAll('.stat-val[data-target]');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      const dur = 1500; let begin = null;
      (function step(ts) {
        if (!begin) begin = ts;
        const p = Math.min((ts-begin)/dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1-p, 3))).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
      })(performance.now());
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  els.forEach(el => io.observe(el));
})();


/* ============================================================
   EQUIPMENT PAGE
============================================================ */
(function initEquipmentPage() {
  if (document.body.dataset.page !== 'equipment') return;

  const mostPurchasedGrid = document.getElementById('most-purchased-grid');
  const newArrivalsGrid = document.getElementById('new-arrivals-grid');
  const allProductsGrid = document.getElementById('all-products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('product-search');
  let activeCategory = 'All';
  let searchQuery = '';

  function renderGrid(container, products) {
    if (!container) return;
    if (!products.length) {
      container.innerHTML = '<p class="no-results mono-text">No products found.</p>';
      return;
    }
    container.innerHTML = products.map(buildProductCard).join('');
    // re-run scroll observer for new cards
    container.querySelectorAll('.fade-in-section').forEach(el => {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
      }, { threshold: 0.05 });
      io.observe(el);
    });
    initCardEvents(container);
  }

  function renderAll() {
    let products = getByCategory(activeCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      products = products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    renderGrid(allProductsGrid, products);
  }

  // Most Purchased & New Arrivals
  renderGrid(mostPurchasedGrid, getMostPurchased(8));
  renderGrid(newArrivalsGrid, getNewArrivals(8));
  renderAll();

  // Category filters
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderAll();
    });
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value.trim();
      renderAll();
    });
  }
})();


/* ============================================================
   CART PAGE
============================================================ */
(function initCartPage() {
  if (document.body.dataset.page !== 'cart') return;

  const cartBody = document.getElementById('cart-body');
  const cartEmpty = document.getElementById('cart-empty');
  const cartTotal = document.getElementById('cart-total');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTax = document.getElementById('cart-tax');
  const cartCount = document.getElementById('cart-count');
  const checkoutBtn = document.getElementById('checkout-btn');

  function render() {
    const cart = getCart();
    if (!cart.length) {
      if (cartBody) cartBody.innerHTML = '';
      if (cartEmpty) cartEmpty.style.display = 'block';
      if (checkoutBtn) checkoutBtn.disabled = true;
      updateTotals(0);
      return;
    }
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (checkoutBtn) checkoutBtn.disabled = false;

    let html = '';
    let total = 0;
    cart.forEach(item => {
      const p = getProductById(item.id);
      if (!p) return;
      const subtotal = p.price * item.qty;
      total += subtotal;
      html += `
        <div class="cart-item glass fade-in-section visible" data-id="${p.id}">
          <img src="${p.image}" alt="${p.name}" class="cart-item-img" loading="lazy" />
          <div class="cart-item-info">
            <div class="cart-item-cat mono-text">${p.category}</div>
            <h3 class="cart-item-name">${p.name}</h3>
            <div class="cart-item-price gradient-text">$${p.price.toLocaleString()}</div>
          </div>
          <div class="cart-item-controls">
            <div class="qty-control">
              <button class="qty-btn ripple-btn" data-action="dec" data-id="${p.id}">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn ripple-btn" data-action="inc" data-id="${p.id}">+</button>
            </div>
            <div class="cart-line-total">$${subtotal.toLocaleString()}</div>
            <button class="cart-remove" data-id="${p.id}" title="Remove">✕</button>
          </div>
        </div>
      `;
    });

    if (cartBody) cartBody.innerHTML = html;
    if (cartCount) cartCount.textContent = cart.reduce((s,i)=>s+i.qty,0);
    updateTotals(total);

    // events
    cartBody.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        updateCartQty(btn.dataset.id, btn.dataset.action === 'inc' ? 1 : -1);
        render();
        updateBadges();
      });
    });
    cartBody.querySelectorAll('.cart-remove').forEach(btn => {
      btn.addEventListener('click', () => { removeFromCart(btn.dataset.id); render(); updateBadges(); });
    });
  }

  function updateTotals(total) {
    const tax = total * 0.08;
    if (cartSubtotal) cartSubtotal.textContent = `$${total.toLocaleString('en-US', {minimumFractionDigits:2})}`;
    if (cartTax) cartTax.textContent = `$${tax.toFixed(2)}`;
    if (cartTotal) cartTotal.textContent = `$${(total + tax).toFixed(2)}`;
  }

  if (checkoutBtn) checkoutBtn.addEventListener('click', () => location.href = 'billing.html');

  render();
})();


/* ============================================================
   WISHLIST PAGE
============================================================ */
(function initWishlistPage() {
  if (document.body.dataset.page !== 'wishlist') return;

  const grid = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');

  function render() {
    const list = getWishlist();
    if (!list.length) {
      if (grid) grid.innerHTML = '';
      if (empty) empty.style.display = 'block';
      return;
    }
    if (empty) empty.style.display = 'none';
    const products = list.map(getProductById).filter(Boolean);
    grid.innerHTML = products.map(p => `
      <div class="prod-card glass fade-in-section visible" data-id="${p.id}">
        <div class="prod-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="prod-info">
          <div class="prod-cat mono-text">${p.category}</div>
          <h3 class="prod-name">${p.name}</h3>
          <div class="prod-price">$${p.price.toLocaleString()}</div>
          <div class="wish-actions">
            <button class="btn-add-cart ripple-btn" data-id="${p.id}">Move to Cart</button>
            <button class="btn-ghost-sm ripple-btn wish-remove" data-id="${p.id}">Remove ✕</button>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        addToCart(btn.dataset.id);
        // optionally remove from wishlist after moving to cart
        const list2 = getWishlist().filter(id => id !== +btn.dataset.id);
        saveWishlist(list2);
        updateBadges();
        render();
      });
    });
    grid.querySelectorAll('.wish-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleWishlist(btn.dataset.id);
        render();
      });
    });
  }

  render();
})();


/* ============================================================
   ACCOUNT PAGE
============================================================ */
(function initAccountPage() {
  if (document.body.dataset.page !== 'account') return;

  const profileForm = document.getElementById('profile-form');
  const saveBtn = document.getElementById('save-profile-btn');

  // Load saved profile
  try {
    const saved = JSON.parse(localStorage.getItem('ascend_profile') || '{}');
    ['name','email','phone'].forEach(field => {
      const el = document.getElementById(`field-${field}`);
      if (el && saved[field]) el.value = saved[field];
    });
  } catch(e) {}

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const profile = {};
      ['name','email','phone'].forEach(field => {
        const el = document.getElementById(`field-${field}`);
        if (el) profile[field] = el.value;
      });
      localStorage.setItem('ascend_profile', JSON.stringify(profile));
      showToast('Profile saved ✓');
      saveBtn.textContent = 'Saved! ✓';
      setTimeout(() => saveBtn.textContent = 'Save Changes', 2000);
    });
  }

  // Render order history
  const orderBody = document.getElementById('order-history-body');
  const orders = [
    { id: '#A2-00421', date: 'Apr 10, 2025', items: 'Pro Hex Dumbbell Set', total: '$289.00', status: 'Delivered' },
    { id: '#A2-00398', date: 'Mar 22, 2025', items: 'Olympic Power Bar', total: '$299.00', status: 'Delivered' },
    { id: '#A2-00371', date: 'Mar 01, 2025', items: 'Adjustable FID Bench', total: '$249.00', status: 'Delivered' },
    { id: '#A2-00310', date: 'Feb 14, 2025', items: 'Monster Loop Band Set', total: '$44.00', status: 'Delivered' },
  ];
  if (orderBody) {
    orderBody.innerHTML = orders.map(o => `
      <tr>
        <td class="mono-text" style="color:var(--blue)">${o.id}</td>
        <td>${o.date}</td>
        <td>${o.items}</td>
        <td style="color:var(--green)">${o.total}</td>
        <td><span class="status-badge">${o.status}</span></td>
      </tr>
    `).join('');
  }
})();


/* ============================================================
   BILLING PAGE
============================================================ */
(function initBillingPage() {
  if (document.body.dataset.page !== 'billing') return;

  const summaryBody = document.getElementById('billing-summary-body');
  const billingTotal = document.getElementById('billing-total');
  const billingSubtotal = document.getElementById('billing-subtotal');
  const billingTax = document.getElementById('billing-tax');
  const placeOrderBtn = document.getElementById('place-order-btn');
  const successModal = document.getElementById('order-success');

  // Payment method tabs
  document.querySelectorAll('.pay-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.pay-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('pay-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

  // Pre-fill name from profile
  try {
    const profile = JSON.parse(localStorage.getItem('ascend_profile') || '{}');
    const nameField = document.getElementById('billing-name');
    const phoneField = document.getElementById('billing-phone');
    if (nameField && profile.name) nameField.value = profile.name;
    if (phoneField && profile.phone) phoneField.value = profile.phone;
  } catch(e) {}

  // Render cart summary
  const cart = getCart();
  let total = 0;
  if (summaryBody) {
    if (!cart.length) {
      summaryBody.innerHTML = '<tr><td colspan="3" style="text-align:center;color:var(--muted)">Your cart is empty</td></tr>';
    } else {
      summaryBody.innerHTML = cart.map(item => {
        const p = getProductById(item.id);
        if (!p) return '';
        const sub = p.price * item.qty;
        total += sub;
        return `<tr>
          <td>${p.name}</td>
          <td style="text-align:center;color:var(--muted)">×${item.qty}</td>
          <td style="text-align:right;color:var(--green)">$${sub.toLocaleString()}</td>
        </tr>`;
      }).join('');
    }
  }

  const tax = total * 0.08;
  if (billingSubtotal) billingSubtotal.textContent = `$${total.toLocaleString('en-US',{minimumFractionDigits:2})}`;
  if (billingTax) billingTax.textContent = `$${tax.toFixed(2)}`;
  if (billingTotal) billingTotal.textContent = `$${(total+tax).toFixed(2)}`;

  // Place order
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', () => {
      // Validate fields
      const requiredFields = ['billing-name','billing-address','billing-city','billing-phone'];
      let valid = true;
      requiredFields.forEach(id => {
        const el = document.getElementById(id);
        if (!el || !el.value.trim()) {
          valid = false;
          if (el) el.classList.add('input-error');
        } else {
          if (el) el.classList.remove('input-error');
        }
      });

      if (!valid) { showToast('Please fill in all required fields ⚠️'); return; }

      // Clear cart & show success
      saveCart([]);
      updateBadges();
      if (successModal) {
        successModal.classList.add('visible');
        successModal.querySelector('.order-id').textContent = '#A2-00' + Math.floor(400 + Math.random()*100);
      }
    });
  }

  if (successModal) {
    successModal.addEventListener('click', e => {
      if (e.target === successModal || e.target.closest('.success-continue')) {
        location.href = 'index.html';
      }
    });
  }
})();
