// Goldman's Grain — main.js

// ── Product data ────────────────────────────────────────────────
const PRODUCTS = {
  'rocking-horse': {
    title: 'Solid Maple Wood Rocking Horse',
    material: 'Solid Maple · Solid Walnut',
    price: '$24.00',
    priceNote: 'With name + date engraving: $34.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/cc0583/7875971579/il_fullxfull.7875971579_ix6r.jpg',
      'https://i.etsystatic.com/64682766/r/il/7ee302/7875971577/il_fullxfull.7875971577_905o.jpg',
      'https://i.etsystatic.com/64682766/r/il/c731c3/7876136341/il_fullxfull.7876136341_a33j.jpg',
      'https://i.etsystatic.com/64682766/r/il/d999c0/7828099858/il_fullxfull.7828099858_ao7h.jpg',
      'https://i.etsystatic.com/64682766/r/il/b3d45b/7880522477/il_fullxfull.7880522477_fp4y.jpg',
    ],
    description: 'Cut from solid maple hardwood — not plywood, not MDF, not "wood composite." Real maple. The kind of wood that\'ll still be around when your kid passes it down to their kid.\n\nFinished with food-safe oil that\'s completely non-toxic and baby-safe. The grain is tight, the edges are smooth, and the weight tells you immediately this isn\'t a toy from a big box store.\n\nWant it personalised? Add a name, initials, or birth year — message us before ordering and we\'ll work it in.',
    specs: [
      '100% Solid Maple or Walnut Hardwood',
      'Approx. 5″ × 5″ × ¾″ thick',
      'Food-safe oil finish — non-toxic, baby safe',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    stripeLink: 'https://buy.stripe.com/5kQdR96P2b1h4TKf1KaIM00',
    etsyLink: 'https://www.etsy.com/listing/4475306872/handcrafted-solid-maple-wood-rocking',
  },
  'tool-set': {
    title: 'Solid Walnut Kids Tool Set',
    material: 'Solid Walnut',
    price: '$42.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/3a7581/7840054210/il_fullxfull.7840054210_au9e.jpg',
    ],
    description: 'Montessori pretend play hardwood tools, intricately crafted from solid walnut. Because even the smallest hands deserve real wood tools.\n\nEvery piece is smooth, weighty, and sized right for little hands. No plastic, no shortcuts — just solid walnut, the way tools should feel.',
    specs: [
      '100% Solid Walnut Hardwood',
      'Food-safe oil finish — non-toxic, baby safe',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    stripeLink: 'https://buy.stripe.com/aFabJ1ehu0mDcmc8DmaIM03',
    etsyLink: 'https://www.etsy.com/listing/4477274179/solid-walnut-kids-tool-set-montessori',
  },
  'building-blocks': {
    title: 'Solid Walnut & Maple Building Blocks',
    material: 'Solid Walnut + Maple',
    price: '$30.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/39c912/7876038325/il_fullxfull.7876038325_pc74.jpg',
    ],
    description: 'Two contrasting hardwoods — no dyes, no mystery finishes. Just beautiful, weighty blocks kids and parents both love.\n\nMontessori sensory play at its simplest: rich walnut dark beside bright maple light, smooth edges, real weight. The kind of toy that teaches through texture and feel.',
    specs: [
      '100% Solid Walnut and Hard Maple',
      'Food-safe oil finish — non-toxic, baby safe',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    etsyLink: 'https://www.etsy.com/listing/4461327913/solid-walnut-maple-hardwood-building',
  },
  'letter-blocks': {
    title: 'Personalized Solid Maple Wood Letter Blocks',
    material: 'Solid Maple',
    price: '$28.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/23fa13/7828100358/il_fullxfull.7828100358_a73h.jpg',
    ],
    description: 'Custom name gift for nursery or desk decor. Each block cut from solid hard maple with your choice of letters — a personalized keepsake that grows with them.\n\nMessage us with the letters or name you\'d like. Ships made to order.',
    specs: [
      '100% Solid Hard Maple',
      'Custom letters — specify at checkout',
      'Food-safe oil finish — non-toxic, baby safe',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    stripeLink: 'https://buy.stripe.com/4gM4gz1uI3yPfyo1aUaIM02',
    etsyLink: 'https://www.etsy.com/listing/4473058353/personalized-solid-maple-wood-mom-or-dad',
  },
  'honeycomb-trivet': {
    title: 'Personalized Hard Maple Honeycomb Trivet',
    material: 'Hard Maple',
    price: '$42.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/5d9fc0/7778048452/il_fullxfull.7778048452_32d5.jpg',
    ],
    description: 'Custom initial wood hot pad with a precision-cut honeycomb pattern. Functional kitchen art made from solid hard maple — a custom gift that lasts.\n\nSpecify your initial at checkout. Each trivet is cut to order and finished with food-safe oil.',
    specs: [
      '100% Solid Hard Maple',
      'Custom initial — specify at checkout',
      'Food-safe oil finish',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    etsyLink: 'https://www.etsy.com/listing/4467795953/personalized-hard-maple-honeycomb-trivet',
  },
  'kitchen-riser': {
    title: 'Handcrafted Solid Walnut Kitchen Riser',
    material: 'Solid Walnut',
    price: '$42.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/33dae8/7735979702/il_fullxfull.7735979702_ers3.jpg',
    ],
    description: 'Luxury hardwood pedestal for your sink, counter, or display. The organizer that makes your whole kitchen look intentional.\n\nSolid walnut — no veneer, no shortcuts. The rich dark grain adds instant warmth to any kitchen or bathroom counter.',
    specs: [
      '100% Solid Walnut Hardwood',
      'Food-safe oil finish',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    etsyLink: 'https://www.etsy.com/listing/4461405119/handcrafted-solid-walnut-kitchen-riser',
  },
  'book-rest': {
    title: 'Solid Cherry Book Rest',
    material: 'Solid Cherry',
    price: '$52.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/f7f8a8/7739922546/il_fullxfull.7739922546_lskl.jpg',
    ],
    description: 'Minimalist reading stand, desk organizer, and page holder. Crafted from solid cherry in Raleigh, NC — built for people who love real things.\n\nCherry develops a beautiful reddish-amber patina over time, making this book rest more beautiful the longer you use it.',
    specs: [
      '100% Solid Cherry Hardwood',
      'Food-safe oil finish',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    etsyLink: 'https://www.etsy.com/listing/4461562555/solid-cherry-wood-book-rest-minimalist',
  },
  'name-sign': {
    title: 'Custom Solid Maple Standing Name Sign',
    material: 'Solid Maple',
    price: '$14.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/97a3d0/7828098346/il_fullxfull.7828098346_99ez.jpg',
    ],
    description: '3D block letter name sign for nurseries, desks, and shelves. Custom-cut to order — each letter individually crafted from solid hard maple.\n\nSpecify the name at checkout. Priced per letter — perfect for nurseries, playrooms, or office desks.',
    specs: [
      '100% Solid Hard Maple',
      'Custom name — specify at checkout',
      'Food-safe oil finish',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    etsyLink: 'https://www.etsy.com/listing/4470546400/custom-solid-maple-wood-standing-name',
  },
  'bunny-napkin': {
    title: 'Solid Walnut Bunny Napkin Holder',
    material: 'Solid Walnut',
    price: '$22.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/25a5ac/7876051219/il_fullxfull.7876051219_2iq4.jpg',
    ],
    description: 'Easter table decor and farmhouse kitchen accessory. A charming walnut bunny silhouette that holds napkins in style — seasonally cute, perennially useful.\n\nSolid walnut with a natural oil finish. Cute enough to leave out year-round.',
    specs: [
      '100% Solid Walnut Hardwood',
      'Food-safe oil finish',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    etsyLink: 'https://www.etsy.com/listing/4466633716/solid-walnut-wood-bunny-napkin-holder',
  },
  'bunny-tray': {
    title: 'Solid Walnut Bunny Treat Tray',
    material: 'Solid Walnut',
    price: '$42.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/4269f8/7772683858/il_fullxfull.7772683858_jkdf.jpg',
    ],
    description: 'Easter wood serving decor, handmade in NC. A solid walnut serving tray shaped like a bunny — perfect for Easter baskets, candy, or seasonal display.\n\nRich walnut grain, smooth finish, made to order. A piece that earns a permanent spot on your shelf long after Easter.',
    specs: [
      '100% Solid Walnut Hardwood',
      'Food-safe oil finish',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    etsyLink: 'https://www.etsy.com/listing/4466760281/handmade-solid-walnut-bunny-treat-tray',
  },
};

// ── Product Modal ───────────────────────────────────────────────
function openModal(productId) {
  const p = PRODUCTS[productId];
  if (!p) return;

  const overlay   = document.getElementById('productModal');
  const mainImg   = document.getElementById('modalMainImg');
  const thumbsEl  = document.getElementById('modalThumbs');
  const matEl     = document.getElementById('modalMaterial');
  const titleEl   = document.getElementById('modalTitle');
  const priceEl   = document.getElementById('modalPrice');
  const descEl    = document.getElementById('modalDescription');
  const specsEl   = document.getElementById('modalSpecs');
  const actionsEl = document.getElementById('modalActions');

  // Populate
  matEl.textContent   = p.material;
  titleEl.textContent = p.title;
  descEl.textContent  = p.description;

  // Price
  priceEl.innerHTML = `<span>${p.price}</span>`;
  if (p.priceNote) {
    priceEl.innerHTML += `<div class="modal-price-note">${p.priceNote}</div>`;
  }

  // Main image
  mainImg.src = p.images[0];
  mainImg.alt = p.title;

  // Thumbs
  thumbsEl.innerHTML = '';
  if (p.images.length > 1) {
    p.images.forEach((src, i) => {
      const div = document.createElement('div');
      div.className = 'modal-thumb' + (i === 0 ? ' active' : '');
      div.innerHTML = `<img src="${src}" alt="${p.title} view ${i+1}" loading="lazy" />`;
      div.addEventListener('click', () => {
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = src;
          mainImg.style.opacity = '1';
        }, 150);
        thumbsEl.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        div.classList.add('active');
      });
      thumbsEl.appendChild(div);
    });
  }

  // Specs
  specsEl.innerHTML = p.specs.map(s => `<li>${s}</li>`).join('');

  // Actions
  actionsEl.innerHTML = '';
  if (p.stripeLink) {
    const buyBtn = document.createElement('a');
    buyBtn.href = p.stripeLink;
    buyBtn.target = '_blank';
    buyBtn.rel = 'noopener';
    buyBtn.className = 'btn btn-stripe';
    buyBtn.textContent = 'Buy Now — Secure Checkout';
    actionsEl.appendChild(buyBtn);
  }
  const etsyBtn = document.createElement('a');
  etsyBtn.href = p.etsyLink;
  etsyBtn.target = '_blank';
  etsyBtn.rel = 'noopener';
  etsyBtn.className = 'btn btn-etsy';
  etsyBtn.textContent = p.stripeLink ? 'View on Etsy ↗' : 'Buy on Etsy ↗';
  actionsEl.appendChild(etsyBtn);

  // Open
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('productModal');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Wire up card clicks
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-card[data-id]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
  });

  // Close on overlay click
  const overlay = document.getElementById('productModal');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
    document.getElementById('modalClose').addEventListener('click', closeModal);
  }

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});


// ── Mobile nav toggle ──────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
}

// ── Shop page: category filter tabs ───────────────────────────
const tabBtns = document.querySelectorAll('.tab-btn');
const cards   = document.querySelectorAll('.product-card[data-category]');

if (tabBtns.length && cards.length) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ── Scroll-reveal: fade cards in as they enter the viewport ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity  = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .craft-card, .wood-card, .review-card').forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
