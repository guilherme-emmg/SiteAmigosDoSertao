/* ==========================================================================
   AMIGOS DO SERTÃO - ARTESANATO BRASILEIRO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. Base de Dados dos Produtos do Sertão
     ------------------------------------------------------------------------ */
  const PRODUTOS = [
    {
      id: 'prod-1',
      name: 'Vaso Moringa Terracota Sertaneja',
      category: 'barro',
      price: 189.00,
      oldPrice: 220.00,
      rating: 4.9,
      reviews: 38,
      artisan: 'Mestre Vitalino Inspired',
      origin: 'Caruaru - PE',
      tag: 'Mais Vendido',
      image: '/assets/imagens/hero-banner.svg',
      fallbackImage: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80',
      description: 'Moringa de barro tradicional moldada manualmente e queimada em forno de lenha. Conserva a água naturalmente fresca com o aroma característico da terra molhada do Sertão.',
      dimensions: '32cm (A) x 18cm (L) | 1.8kg',
      material: 'Barro argiloso natural e pigmentos minerais'
    },
    {
      id: 'prod-2',
      name: 'Cesto Mandacaru em Fibra de Carnaúba',
      category: 'cestaria',
      price: 145.00,
      oldPrice: 170.00,
      rating: 5.0,
      reviews: 24,
      artisan: 'Dona Maria da Carnaúba',
      origin: 'Sobral - CE',
      tag: 'Ecológico',
      image: '/assets/imagens/cesto-carnauba.svg',
      fallbackImage: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80',
      description: 'Trançado à mão por rendeiras do Ceará utilizando palha de carnaúba sustentável. Perfeito para organizar mantas, revistas ou como vaso decorativo.',
      dimensions: '40cm (A) x 35cm (Ø) | 0.9kg',
      material: '100% Fibra Natural de Carnaúba'
    },
    {
      id: 'prod-3',
      name: 'Escultura Retirantes em Cerâmica',
      category: 'escultura',
      price: 279.00,
      oldPrice: 320.00,
      rating: 4.8,
      reviews: 19,
      artisan: 'Oficina Vale do Jequitinhonha',
      origin: 'Vale do Jequitinhonha - MG',
      tag: 'Edição Rara',
      image: '/assets/imagens/escultura-retirantes.svg',
      fallbackImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
      description: 'Obra de arte lírica esculpida pelas artesãs do Jequitinhonha. Representa a força, a resiliência e a poesia da família nordestina.',
      dimensions: '28cm (A) x 22cm (L) | 2.1kg',
      material: 'Cerâmica com engobe natural'
    },
    {
      id: 'prod-4',
      name: 'Vaso Cacto Terracota com Suporte',
      category: 'barro',
      price: 165.00,
      oldPrice: null,
      rating: 4.9,
      reviews: 42,
      artisan: 'Mestre Zezinho de Juazeiro',
      origin: 'Juazeiro - BA',
      tag: 'Lançamento',
      image: '/assets/imagens/vaso-cacto.svg',
      fallbackImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
      description: 'Vaso estilizado em formato de cacto mandacaru, escavado à mão em argila vermelha. Acompanha base elevada em madeira de reflorestamento.',
      dimensions: '35cm (A) x 20cm (L) | 1.5kg',
      material: 'Barro Terracota & Madeira de Jacarandá'
    },
    {
      id: 'prod-5',
      name: 'Conjunto Pratos Cerâmicos Serra da Capivara',
      category: 'ceramica',
      price: 320.00,
      oldPrice: 360.00,
      rating: 5.0,
      reviews: 15,
      artisan: 'Cooperativa Capivara Arte',
      origin: 'São Raimundo Nonato - PI',
      tag: 'Coleção Exclusiva',
      image: '/assets/imagens/hero-banner.svg',
      fallbackImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      description: 'Jogo com 3 pratos murais em cerâmica vitrificada com gravuras rupestres inspiradas no Parque Nacional da Serra da Capivara.',
      dimensions: 'Diâmetros: 25cm, 20cm, 15cm | 2.4kg',
      material: 'Cerâmica esmaltada de alta temperatura'
    },
    {
      id: 'prod-6',
      name: 'Moringa de Barro Queimado com Copo',
      category: 'barro',
      price: 129.00,
      oldPrice: 150.00,
      rating: 4.7,
      reviews: 29,
      artisan: 'Mestre Nuca Inspired',
      origin: 'Tracunhaém - PE',
      tag: 'Clássico',
      image: '/assets/imagens/vaso-moringa.svg',
      fallbackImage: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
      description: 'Moringa de cabeceira com copo combinando. Design rustic-chic com textura polida à mão usando pedra sabão antes da queima.',
      dimensions: '24cm (A) x 14cm (Ø) | 1.1kg',
      material: 'Argila natural purificada'
    },
    {
      id: 'prod-7',
      name: 'Luminária Pendente Chapéu de Palha',
      category: 'cestaria',
      price: 240.00,
      oldPrice: null,
      rating: 4.9,
      reviews: 18,
      artisan: 'Artesãos do Araripe',
      origin: 'Crato - CE',
      tag: 'Design Sustentável',
      image: '/assets/imagens/cesto-carnauba.svg',
      fallbackImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
      description: 'Luminária escultural em fibra de sisal e palha de Ouricuri. Cria projeções de sombra acolhedoras e calorosas no ambiente.',
      dimensions: '45cm (Ø) x 25cm (A) | 0.8kg',
      material: 'Palha de Ouricuri e Fio de Sisal'
    },
    {
      id: 'prod-8',
      name: 'Painel Decorativo Cordel em Madeira',
      category: 'escultura',
      price: 195.00,
      oldPrice: 230.00,
      rating: 4.8,
      reviews: 31,
      artisan: 'Xilogravura Sertão',
      origin: 'Bezerros - PE',
      tag: 'Cultura Viva',
      image: '/assets/imagens/escultura-retirantes.svg',
      fallbackImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      description: 'Quadro em madeira de demolição com relevo em xilogravura entalhada à mão, retratando folclore, poesia e a fauna sertaneja.',
      dimensions: '50cm (A) x 35cm (L) | 1.9kg',
      material: 'Madeira maciça entalhada'
    }
  ];

  /* ------------------------------------------------------------------------
     2. Estado Global (Carrinho & Favoritos com LocalStorage)
     ------------------------------------------------------------------------ */
  let cart = JSON.parse(localStorage.getItem('amigos_sertao_cart')) || [];
  let wishlist = JSON.parse(localStorage.getItem('amigos_sertao_wishlist')) || [];
  let appliedDiscount = 0;

  /* ------------------------------------------------------------------------
     3. Seletores DOM Principais
     ------------------------------------------------------------------------ */
  const header = document.querySelector('.site-header');
  const navMenu = document.getElementById('navMenu');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const produtosGrid = document.getElementById('produtosGrid');
  const categoryTabs = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('productSearchInput');
  const sortSelect = document.getElementById('productSortSelect');

  const cartDrawer = document.getElementById('cartDrawer');
  const modalOverlay = document.getElementById('modalOverlay');
  const cartBtn = document.getElementById('cartBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartBadge = document.getElementById('cartBadge');
  const wishlistBadge = document.getElementById('wishlistBadge');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const freeShippingBarFill = document.getElementById('freeShippingBarFill');
  const freeShippingText = document.getElementById('freeShippingText');

  const quickviewModal = document.getElementById('quickviewModal');
  const quickviewClose = document.getElementById('quickviewClose');

  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxClose = document.getElementById('lightboxClose');
  const toastContainer = document.getElementById('toastContainer');
  const backToTopBtn = document.getElementById('backToTopBtn');

  let index = 0;
const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
const btnEsq = document.querySelector('.esquerda');
const btnDir = document.querySelector('.direita');

function mostrarSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

btnDir.addEventListener('click', () => {
  index = (index + 1) % imagens.length;
  mostrarSlide();
});

btnEsq.addEventListener('click', () => {
  index = (index - 1 + imagens.length) % imagens.length;
  mostrarSlide();
});

setInterval(() => {
  index = (index + 1) % imagens.length;
  mostrarSlide();
}, 3000);

  /* ------------------------------------------------------------------------
     4. Renderização do Catálogo de Produtos
     ------------------------------------------------------------------------ */
  function renderProducts(filterCategory = 'todos', searchTerm = '', sortBy = 'relevancia') {
    if (!produtosGrid) return;

    let filtered = PRODUTOS.filter(p => {
      const matchCat = filterCategory === 'todos' || p.category === filterCategory;
      const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.origin.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });

    // Ordenação
    if (sortBy === 'preco-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'preco-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'avaliacao') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      produtosGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
          <svg style="width: 48px; height: 48px; margin-bottom: 1rem; opacity: 0.5;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <h3 style="font-family: var(--font-family-display); font-size: 1.3rem; margin-bottom: 0.5rem;">Nenhum artesanato encontrado</h3>
          <p>Tente buscar por outro termo ou selecione outra categoria.</p>
        </div>
      `;
      return;
    }

    produtosGrid.innerHTML = filtered.map(p => {
      const isFav = wishlist.includes(p.id);
      return `
        <article class="produto-card" data-id="${p.id}">
          <div class="produto-image-container">
            ${p.tag ? `<span class="produto-tag">${p.tag}</span>` : ''}
            <button class="produto-favorite-btn ${isFav ? 'active' : ''}" data-id="${p.id}" title="Adicionar aos Favoritos">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#E74C3C' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <img src="${p.image}" alt="${p.name}" class="produto-image" loading="lazy" onerror="this.onerror=null; this.src='${p.fallbackImage}';" />
            <div class="produto-hover-actions">
              <button class="btn-quickview" data-id="${p.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                Espiar Detalhes
              </button>
            </div>
          </div>
          <div class="produto-body">
            <span class="produto-artesao">${p.artisan} • ${p.origin}</span>
            <h3 class="produto-title">${p.name}</h3>
            <div class="produto-rating">
              ${'★'.repeat(Math.floor(p.rating))}
              <span>(${p.rating} / ${p.reviews} avaliações)</span>
            </div>
            <div class="produto-footer">
              <div class="produto-price">
                <span class="price-current">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
                ${p.oldPrice ? `<span class="price-old">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
              </div>
              <button class="btn-add-cart" data-id="${p.id}" title="Adicionar ao Carrinho">
                +
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Rebind Click Listeners
    attachProductEvents();
  }

  function attachProductEvents() {
    // Quick View buttons
    document.querySelectorAll('.btn-quickview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openQuickView(id);
      });
    });

    // Add to Cart buttons
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        addToCart(id, 1);
      });
    });

    // Favorite heart buttons
    document.querySelectorAll('.produto-favorite-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        toggleWishlist(id, e.currentTarget);
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Lógica do Carrinho de Compras (Cart Drawer)
     ------------------------------------------------------------------------ */
  function addToCart(productId, quantity = 1) {
    const product = PRODUTOS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].qty += quantity;
    } else {
      cart.push({ ...product, qty: quantity });
    }

    saveCart();
    updateCartUI();
    openCart();
    showToast(`"${product.name}" adicionado ao carrinho!`, 'sucesso');
  }

  function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }

    saveCart();
    updateCartUI();
  }

  function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Item removido do carrinho', 'info');
  }

  function saveCart() {
    localStorage.setItem('amigos_sertao_cart', JSON.stringify(cart));
  }

  function updateCartUI() {
    // Atualizar Contadores
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartBadge) cartBadge.textContent = totalItems;

    // Atualizar Lista
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p style="font-weight: 700; color: var(--color-marrom-dark); margin-bottom: 0.3rem;">Seu carrinho está vazio</p>
          <p style="font-size: 0.88rem;">Que tal levar a beleza do Sertão para sua casa?</p>
        </div>
      `;
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='${item.fallbackImage}';" />
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="window.updateCartQty('${item.id}', -1)">-</button>
              <span style="font-weight: 700; font-size: 0.9rem;">${item.qty}</span>
              <button class="qty-btn" onclick="window.updateCartQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="window.removeFromCart('${item.id}')" title="Remover">✕</button>
        </div>
      `).join('');
    }

    // Cálculos do Subtotal
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const finalTotal = Math.max(0, subtotal - appliedDiscount);

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
    }

    // Barra de Frete Grátis (Meta R$ 250,00)
    const FRETE_GRATIS_TARGET = 250.00;
    if (freeShippingBarFill && freeShippingText) {
      const pct = Math.min(100, (subtotal / FRETE_GRATIS_TARGET) * 100);
      freeShippingBarFill.style.width = `${pct}%`;

      if (subtotal >= FRETE_GRATIS_TARGET) {
        freeShippingText.innerHTML = `🎉 <strong>Parabéns!</strong> Você ganhou <strong>Frete Grátis</strong>!`;
        freeShippingBarFill.style.backgroundColor = 'var(--color-verde-cacto)';
      } else {
        const remaining = FRETE_GRATIS_TARGET - subtotal;
        freeShippingText.innerHTML = `Faltam <strong>R$ ${remaining.toFixed(2).replace('.', ',')}</strong> para <strong>Frete Grátis</strong>!`;
        freeShippingBarFill.style.backgroundColor = 'var(--color-terracota)';
      }
    }
  }

  // Expor funções globais para os handlers inline
  window.updateCartQty = updateCartQty;
  window.removeFromCart = removeFromCart;

  function openCart() {
    if (cartDrawer && modalOverlay) {
      cartDrawer.classList.add('active');
      modalOverlay.classList.add('active');
    }
  }

  function closeCart() {
    if (cartDrawer && modalOverlay) {
      cartDrawer.classList.remove('active');
      modalOverlay.classList.remove('active');
    }
  }

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);

  /* ------------------------------------------------------------------------
     6. Lógica de Favoritos (Wishlist)
     ------------------------------------------------------------------------ */
  function toggleWishlist(productId, buttonEl) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
      wishlist.splice(index, 1);
      showToast('Item removido dos favoritos', 'info');
    } else {
      wishlist.push(productId);
      showToast('Item adicionado aos seus favoritos! ❤️', 'sucesso');
    }

    localStorage.setItem('amigos_sertao_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts(getActiveCategory(), searchInput ? searchInput.value : '', sortSelect ? sortSelect.value : 'relevancia');
  }

  function updateWishlistUI() {
    if (wishlistBadge) wishlistBadge.textContent = wishlist.length;
  }

  /* ------------------------------------------------------------------------
     7. Quick View Modal (Espiada Rápida)
     ------------------------------------------------------------------------ */
  function openQuickView(productId) {
    const product = PRODUTOS.find(p => p.id === productId);
    if (!product || !quickviewModal) return;

    document.getElementById('qvImage').src = product.image;
    document.getElementById('qvImage').onerror = function() { this.src = product.fallbackImage; };
    document.getElementById('qvTitle').textContent = product.name;
    document.getElementById('qvArtisan').textContent = `${product.artisan} • ${product.origin}`;
    document.getElementById('qvPrice').textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
    document.getElementById('qvDescription').textContent = product.description;
    document.getElementById('qvDimensions').textContent = product.dimensions;
    document.getElementById('qvMaterial').textContent = product.material;

    const qvAddBtn = document.getElementById('qvAddToCart');
    if (qvAddBtn) {
      qvAddBtn.onclick = () => {
        const qty = parseInt(document.getElementById('qvQuantity').value) || 1;
        addToCart(product.id, qty);
        closeQuickView();
      };
    }

    quickviewModal.classList.add('active');
    modalOverlay.classList.add('active');
  }

  function closeQuickView() {
    if (quickviewModal && modalOverlay) {
      quickviewModal.classList.remove('active');
      modalOverlay.classList.remove('active');
    }
  }

  if (quickviewClose) quickviewClose.addEventListener('click', closeQuickView);

  /* ------------------------------------------------------------------------
     8. Modal Overlay Click (Fechar Modais ao clicar fora)
     ------------------------------------------------------------------------ */
  if (modalOverlay) {
    modalOverlay.addEventListener('click', () => {
      closeCart();
      closeQuickView();
      closeLightbox();
    });
  }

  /* ------------------------------------------------------------------------
     9. Lightbox da Galeria de Imagens
     ------------------------------------------------------------------------ */
  const galeriaItems = document.querySelectorAll('.galeria-item');
  galeriaItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.getAttribute('data-title') || 'Artesanato Amigos do Sertão';
      openLightbox(img.src, title);
    });
  });

  function openLightbox(src, title) {
    if (!lightboxModal) return;
    document.getElementById('lightboxImage').src = src;
    document.getElementById('lightboxCaption').textContent = title;
    lightboxModal.classList.add('active');
  }

  function closeLightbox() {
    if (lightboxModal) lightboxModal.classList.remove('active');
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

  /* ------------------------------------------------------------------------
     10. Depoimentos (Slider / Carrossel)
     ------------------------------------------------------------------------ */
  const testimonials = [
    {
      text: "super recomendo,atendimento perfeito,os produtos todos de otima qualidade ,sempre com muitas novidades.voces estao de parabens.sucesssoooo",
      author: "Fernando Viana",
      location: "Ibirité, MG",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Ótimos produtos, preços excelentes e atendimento nota 10. Parabéns família.... Trabalhando unidos e no mesmo objetivo... muito simpáticos.....",
      author: "Jair Barbosa",
      location: "Ibirité, MG",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Loja linda, muita coisa interessante tanto pra casa como pra presentear, ótimo atendimento",
      author: "Wander Lucio",
      location: "Ibirité, MG",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
    }
  ];

  let testimonialIdx = 0;
  const testimonialContainer = document.getElementById('depoimentoCard');
  const dotsContainer = document.getElementById('sliderDots');

  function renderTestimonial(index) {
    if (!testimonialContainer) return;
    const t = testimonials[index];
    testimonialContainer.style.opacity = 0;

//para colocar imagem: inserir a tag abaixo da linha da div.depoimento-author, " <img src="${t.avatar}" alt="${t.author}" class="depoimento-avatar" />"

    setTimeout(() => {
      testimonialContainer.innerHTML = `
        <div class="depoimento-quote-icon">“</div>
        <p class="depoimento-text">${t.text}</p>
        <div class="depoimento-author">
          
          <div class="depoimento-info">
            <h4 class="depoimento-name">${t.author}</h4>
            <span class="depoimento-location">${t.location}</span>
          </div>
        </div>
      `;
      testimonialContainer.style.opacity = 1;
    }, 200);

    // Atualizar Dots
    if (dotsContainer) {
      dotsContainer.innerHTML = testimonials.map((_, i) => `
        <span class="slider-dot ${i === index ? 'active' : ''}" onclick="window.setTestimonial(${i})"></span>
      `).join('');
    }
  }

  window.setTestimonial = (i) => {
    testimonialIdx = i;
    renderTestimonial(testimonialIdx);
  };

  document.getElementById('prevTestimonial')?.addEventListener('click', () => {
    testimonialIdx = (testimonialIdx - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(testimonialIdx);
  });

  document.getElementById('nextTestimonial')?.addEventListener('click', () => {
    testimonialIdx = (testimonialIdx + 1) % testimonials.length;
    renderTestimonial(testimonialIdx);
  });

  // Autoplay Slider
  setInterval(() => {
    testimonialIdx = (testimonialIdx + 1) % testimonials.length;
    renderTestimonial(testimonialIdx);
  }, 6000);

  /* ------------------------------------------------------------------------
     11. Formulário de Newsletter (CTA)
     ------------------------------------------------------------------------ */
  const ctaForm = document.getElementById('ctaNewsletterForm');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = ctaForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast('🎉 Inscrição realizada! Seu cupom de 10% OFF é: SERTAO10', 'sucesso');
        appliedDiscount = 15.00;
        updateCartUI();
        emailInput.value = '';
      }
    });
  }

  /* ------------------------------------------------------------------------
     12. Toast Notification System
     ------------------------------------------------------------------------ */
  function showToast(message, type = 'info') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 350);
    }, 3500);
  }

  /* ------------------------------------------------------------------------
     13. Menu Mobile Hamburger & Scroll Events
     ------------------------------------------------------------------------ */
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Fechar menu mobile ao clicar em um link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('active');
    });
  });

  // Scroll Handler (Header Sticky & Back To Top Button)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     14. Handlers de Filtros, Busca e Inicialização
     ------------------------------------------------------------------------ */
  function getActiveCategory() {
    const activeTab = document.querySelector('.tab-btn.active');
    return activeTab ? activeTab.getAttribute('data-category') : 'todos';
  }

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const cat = e.currentTarget.getAttribute('data-category');
      renderProducts(cat, searchInput ? searchInput.value : '', sortSelect ? sortSelect.value : 'relevancia');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderProducts(getActiveCategory(), e.target.value, sortSelect ? sortSelect.value : 'relevancia');
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      renderProducts(getActiveCategory(), searchInput ? searchInput.value : '', e.target.value);
    });
  }

  // Inicialização Geral
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  renderTestimonial(0);
});
