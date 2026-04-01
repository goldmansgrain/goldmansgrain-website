// Goldman's Grain — main.js

// ── Product data ────────────────────────────────────────────────
const PRODUCTS = {
  'rocking-horse': {
    title: 'Solid Maple Wood Rocking Horse',
    material: 'Solid Maple · Solid Walnut',
    price: '$19.00',
    priceNote: 'With name + date engraving: $29.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/32a416/7861007734/il_fullxfull.7861007734_cdm0.jpg',
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
    stripeLink: 'https://buy.stripe.com/14A8wPc9m4CTdqg3j2aIM0b',
    etsyLink: 'https://www.etsy.com/listing/4475306872/handcrafted-solid-maple-wood-rocking',
  },
  'tool-set': {
    title: 'Solid Walnut Kids Tool Set',
    material: 'Solid Walnut',
    price: '$29.00',
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
    stripeLink: 'https://buy.stripe.com/cNi4gz0qE1qH0DudXGaIM0a',
    etsyLink: 'https://www.etsy.com/listing/4477274179/solid-walnut-kids-tool-set-montessori',
  },
  'animal-figures': {
    title: 'Solid Hardwood Animal Figure Set',
    material: 'Hard Maple · Black Walnut',
    price: '$29.00',
    priceNote: 'Set of 5 — Chick, Fox, Frog, Koala, Hippo',
    images: [
      'https://i.etsystatic.com/64682766/r/il/2b547f/7859011140/il_fullxfull.7859011140_441g.jpg',
      'https://i.etsystatic.com/64682766/r/il/09b445/7902191379/il_fullxfull.7902191379_cu2d.jpg',
      'https://i.etsystatic.com/64682766/r/il/e9ccdc/7902191479/il_fullxfull.7902191479_opcr.jpg',
    ],
    description: 'Five animals. Zero plastic. Just solid hardwood shaped into the creatures kids actually care about.\n\nIncludes a set of 5: Chick, Fox, Frog, Koala, and Hippo. Each figure cut from 100% solid hardwood — your choice of hard maple or dark walnut. Both are the same price because a good hippo shouldn\'t cost more in walnut.\n\nNo plywood. No paint. No mystery coating. Just real wood with a smooth finish that\'s safe for little hands and looks genuinely good on a nursery shelf.\n\nTwo toys in one — line them up on a shelf and they look like intentional décor. Hand them to a toddler and they become whatever story is happening right now.',
    specs: [
      'Set of 5 figures — Chick, Fox, Frog, Koala, Hippo',
      'Choice of Hard Maple (light) or Black Walnut (dark)',
      '100% solid hardwood — no plywood, no paint',
      'Food-safe oil finish — non-toxic, baby safe',
      'Made to order in Raleigh, NC · Allow 3–5 business days',
      'Free shipping · Returns accepted within 30 days',
    ],
    stripeLink: 'https://buy.stripe.com/3cI3cvgpCglB71S8DmaIM08',
    etsyLink: 'https://www.etsy.com/listing/4479421053/solid-hardwood-animal-figure-set',
  },
  'building-blocks': {
    title: 'Solid Walnut & Maple Building Blocks',
    material: 'Solid Walnut + Maple',
    price: '$29.00',
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
    title: 'Personalized Maple Name Blocks | Custom Mothers & Fathers Day Gift, Nursery Decor, Desktop Name Plate',
    material: 'Solid Maple',
    price: '$29.00',
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
    stripeLink: 'https://buy.stripe.com/4gMdR9ddq7P5ae46veaIM0c',
    etsyLink: 'https://www.etsy.com/listing/4473058353/personalized-solid-maple-wood-mom-or-dad',
  },
  'honeycomb-trivet': {
    title: 'Personalized Hard Maple Honeycomb Trivet',
    material: 'Hard Maple',
    price: '$29.00',
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
    price: '$32.00',
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
    price: '$29.00',
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
    stripeLink: 'https://buy.stripe.com/6oU3cv8Xa7P5gCs7ziaIM07',
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
    title: 'Solid Walnut Bunny Napkin Holder — Set of 4',
    material: 'Solid Walnut',
    price: '$29.00',
    priceNote: 'Set of 4 napkin holders',
    images: [
      'https://i.etsystatic.com/64682766/r/il/25a5ac/7876051219/il_fullxfull.7876051219_2iq4.jpg',
    ],
    description: 'Easter table decor and farmhouse kitchen accessory. A charming walnut bunny silhouette that holds napkins in style — seasonally cute, perennially useful.\n\nComes as a set of 4. Solid walnut with a natural oil finish. Cute enough to leave out year-round.',
    specs: [
      'Set of 4 napkin holders',
      '100% Solid Walnut Hardwood',
      'Food-safe oil finish',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    stripeLink: 'https://buy.stripe.com/eVq3cvddq1qHcmcdXGaIM09',
    etsyLink: 'https://www.etsy.com/listing/4466633716/solid-walnut-wood-bunny-napkin-holder',
  },
  'hugging-angel': {
    title: 'Hugging Angel Wood Carving – Solid Walnut or Maple, Minimalist Comfort Gift',
    material: 'Solid Maple · Black Walnut',
    price: '$29.00',
    priceNote: 'With name/scripture engraving: $34.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/531b49/7860933714/il_fullxfull.7860933714_fc2k.jpg',
      'https://i.etsystatic.com/64682766/r/il/97922e/7860933716/il_fullxfull.7860933716_t2op.jpg',
      'https://i.etsystatic.com/64682766/r/il/806e60/7909047463/il_fullxfull.7909047463_k4ge.jpg',
    ],
    description: 'This hugging guardian angel is cut from solid North American hardwood — not plywood, not MDF, not "wood composite." Real, premium timber.\n\nChoose the creamy, durable tones of Solid Maple or the deep, chocolatey richness of Black Walnut. Finished with a premium wood oil that is non-toxic and silk-smooth to the touch.\n\nThe "hugging" silhouette creates a striking modern look — a substantial, tactile token of protection for a nursery, a memorial, or a quiet space in your home.\n\nWant to add a name, initials, or scripture to the base? Message us before ordering and we\'ll work it in.',
    specs: [
      '100% Solid Maple or Black Walnut Hardwood',
      'Approx. 7″ Tall × 6″ Wide × ¾″ Thick',
      'Premium wood oil finish — non-toxic, silk-smooth',
      'Choice of Maple (light) or Black Walnut (dark)',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    stripeLink: 'https://buy.stripe.com/aFa7sLfly6L1dqg6veaIM0d',
    etsyLink: 'https://www.etsy.com/listing/4480427101/hugging-angel-wood-carving-solid-walnut',
  },
  'bunny-tray': {
    title: 'Solid Walnut Bunny Treat Tray',
    material: 'Solid Walnut',
    price: '$29.00',
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
  'toy-car': {
    title: 'Solid Hardwood Toy Car with Removable Canoe',
    material: 'Solid Maple · Solid Walnut',
    price: '$29.00',
    images: [
      'https://i.etsystatic.com/64682766/r/il/367a2b/7867504886/il_fullxfull.7867504886_a0va.jpg',
      'https://i.etsystatic.com/64682766/r/il/f0290d/7915467733/il_fullxfull.7915467733_eizc.jpg',
      'https://i.etsystatic.com/64682766/r/il/472403/7867505080/il_fullxfull.7867505080_4arb.jpg',
      'https://i.etsystatic.com/64682766/r/il/a6c87d/7915459643/il_fullxfull.7915459643_rn8a.jpg',
    ],
    description: 'Adventure awaits with the GoldmanGrains Overlander. Built for the little explorer with a big imagination. Designed for hands-on discovery, it features a removable roof-mounted canoe and a detachable spare tire on the back.\n\nUnlike mass-produced plastic toys, our Overlander is a heirloom-quality piece built to be passed down through generations. Every curve is smooth, every detail intentional — cut from solid North American hardwood and finished with food-safe oil.\n\nWant it personalised? Add a name, initials, or birth year — message us before ordering and we\'ll work it in.',
    specs: [
      '100% Solid Maple or Walnut Hardwood',
      'Approx. 6″ × 7″ × ¾″ thick',
      'Removable roof-mounted canoe + spare tire detail',
      'Food-safe oil finish — non-toxic, baby safe',
      'Made to order in Raleigh, NC',
      'Free shipping · Returns accepted within 30 days',
    ],
    stripeLink: 'https://buy.stripe.com/dRm14nddq9Xd1HybPyaIM0e',
    etsyLink: 'https://www.etsy.com/listing/4481424383/solid-hardwood-toy-car-with-removable',
  },
};

// ── Product Modal ───────────────────────────────────────────────
let modalImages = [];
let modalIndex  = 0;

function setModalImage(i) {
  modalIndex = (i + modalImages.length) % modalImages.length;
  const mainImg  = document.getElementById('modalMainImg');
  const thumbsEl = document.getElementById('modalThumbs');
  mainImg.style.opacity = '0';
  setTimeout(() => { mainImg.src = modalImages[modalIndex]; mainImg.style.opacity = '1'; }, 150);
  thumbsEl.querySelectorAll('.modal-thumb').forEach((t, idx) => t.classList.toggle('active', idx === modalIndex));
  const counter = document.getElementById('lightboxCounter');
  if (counter) counter.textContent = `${modalIndex + 1} / ${modalImages.length}`;
}

function openLightbox() {
  const lb  = document.getElementById('galleryLightbox');
  const img = document.getElementById('lightboxImg');
  img.src = modalImages[modalIndex];
  const counter = document.getElementById('lightboxCounter');
  if (counter) counter.textContent = `${modalIndex + 1} / ${modalImages.length}`;
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('galleryLightbox').classList.remove('open');
}

function setLightboxImage(i) {
  modalIndex = (i + modalImages.length) % modalImages.length;
  const img = document.getElementById('lightboxImg');
  img.style.opacity = '0';
  setTimeout(() => { img.src = modalImages[modalIndex]; img.style.opacity = '1'; }, 120);
  const counter = document.getElementById('lightboxCounter');
  if (counter) counter.textContent = `${modalIndex + 1} / ${modalImages.length}`;
  // sync modal thumb
  document.getElementById('modalThumbs').querySelectorAll('.modal-thumb')
    .forEach((t, idx) => t.classList.toggle('active', idx === modalIndex));
}

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
  const galleryMain = document.getElementById('modalGalleryMain');

  // Gallery state
  modalImages = p.images;
  modalIndex  = 0;

  // Populate text
  matEl.textContent   = p.material;
  titleEl.textContent = p.title;
  descEl.textContent  = p.description;
  priceEl.innerHTML   = `<span>${p.price}</span>`;
  if (p.priceNote) priceEl.innerHTML += `<div class="modal-price-note">${p.priceNote}</div>`;

  // Main image
  mainImg.src = p.images[0];
  mainImg.alt = p.title;
  mainImg.style.opacity = '1';

  // Arrow buttons (only show when >1 image)
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  if (prevBtn && nextBtn) {
    const show = p.images.length > 1;
    prevBtn.style.display = show ? '' : 'none';
    nextBtn.style.display = show ? '' : 'none';
  }

  // Thumbs
  thumbsEl.innerHTML = '';
  if (p.images.length > 1) {
    p.images.forEach((src, i) => {
      const div = document.createElement('div');
      div.className = 'modal-thumb' + (i === 0 ? ' active' : '');
      div.innerHTML = `<img src="${src}" alt="${p.title} view ${i+1}" loading="lazy" />`;
      div.addEventListener('click', () => setModalImage(i));
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
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Swipe helper
function addSwipe(el, onLeft, onRight) {
  let startX = null;
  el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend',   e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { dx < 0 ? onLeft() : onRight(); }
    startX = null;
  });
  let dragX = null;
  el.addEventListener('mousedown', e => { dragX = e.clientX; });
  el.addEventListener('mouseup',   e => {
    if (dragX === null) return;
    const dx = e.clientX - dragX;
    if (Math.abs(dx) > 40) { dx < 0 ? onLeft() : onRight(); }
    dragX = null;
  });
}

// Wire up card clicks
document.addEventListener('DOMContentLoaded', () => {
  // Inject lightbox HTML
  const lb = document.createElement('div');
  lb.id = 'galleryLightbox';
  lb.className = 'gallery-lightbox';
  lb.innerHTML = `
    <button class="gallery-lightbox-close" id="lightboxClose" aria-label="Close">&times;</button>
    <button class="lightbox-arrow lightbox-arrow-prev" id="lightboxPrev" aria-label="Previous">&#8592;</button>
    <img class="gallery-lightbox-img" id="lightboxImg" src="" alt="" />
    <button class="lightbox-arrow lightbox-arrow-next" id="lightboxNext" aria-label="Next">&#8594;</button>
    <div class="lightbox-counter" id="lightboxCounter"></div>
  `;
  document.body.appendChild(lb);

  // Lightbox controls
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => setLightboxImage(modalIndex - 1));
  document.getElementById('lightboxNext').addEventListener('click', () => setLightboxImage(modalIndex + 1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  addSwipe(lb, () => setLightboxImage(modalIndex + 1), () => setLightboxImage(modalIndex - 1));

  // Modal gallery arrow buttons + click to open lightbox
  const galleryMain = document.getElementById('modalGalleryMain');
  if (galleryMain) {
    document.getElementById('galleryPrev').addEventListener('click', e => { e.stopPropagation(); setModalImage(modalIndex - 1); });
    document.getElementById('galleryNext').addEventListener('click', e => { e.stopPropagation(); setModalImage(modalIndex + 1); });
    galleryMain.addEventListener('click', () => { if (modalImages.length) openLightbox(); });
    addSwipe(galleryMain, () => setModalImage(modalIndex + 1), () => setModalImage(modalIndex - 1));
  }

  // Product card clicks
  document.querySelectorAll('.product-card[data-id]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.id); }
    });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
  });

  // Close modal on overlay click / button / Escape
  const overlay = document.getElementById('productModal');
  if (overlay) {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    document.getElementById('modalClose').addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeLightbox(); closeModal(); }
    const lbOpen = document.getElementById('galleryLightbox')?.classList.contains('open');
    if (lbOpen) {
      if (e.key === 'ArrowLeft')  setLightboxImage(modalIndex - 1);
      if (e.key === 'ArrowRight') setLightboxImage(modalIndex + 1);
    } else if (document.getElementById('productModal')?.classList.contains('open')) {
      if (e.key === 'ArrowLeft')  setModalImage(modalIndex - 1);
      if (e.key === 'ArrowRight') setModalImage(modalIndex + 1);
    }
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

// ── Wood Selector ──────────────────────────────────────────────
(function () {
  const section    = document.querySelector('.wood-selector-section');
  const tabs       = document.querySelectorAll('.wood-tab');
  const imgPanels  = document.querySelectorAll('.wood-img-panel');
  const infoPanels = document.querySelectorAll('.wood-info-panel');
  const slider     = document.getElementById('woodSlider');
  if (!section || !tabs.length) return;

  // Slider centers: maple=0, white-oak=33, walnut=67, cherry=100
  const WOOD_ORDER = ['maple', 'white-oak', 'walnut', 'cherry'];
  const CENTERS    = { maple: 0, 'white-oak': 33, walnut: 67, cherry: 100 };

  // Triangle-blend opacity: peaks at center, falls off to 0 at ±34
  function blendOpacity(wood, value) {
    return Math.max(0, 1 - Math.abs(value - CENTERS[wood]) / 34);
  }

  function applySlider(value) {
    imgPanels.forEach(p => {
      p.style.opacity = blendOpacity(p.dataset.wood, value);
    });
    // Determine dominant wood for tab highlight and info panel
    const dominant = WOOD_ORDER.reduce((best, w) =>
      blendOpacity(w, value) > blendOpacity(best, value) ? w : best
    , 'maple');
    updateTabs(dominant);
    updateInfoPanels(dominant);
    section.dataset.active = dominant;
  }

  function updateTabs(wood) {
    tabs.forEach(t => {
      const on = t.dataset.wood === wood;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on);
    });
  }

  function updateInfoPanels(wood) {
    infoPanels.forEach(p => p.classList.toggle('active', p.dataset.wood === wood));
  }

  // Slider events
  if (slider) {
    slider.addEventListener('input', () => applySlider(Number(slider.value)));
    // Snap to nearest wood on release
    slider.addEventListener('change', () => {
      const v = Number(slider.value);
      const snapped = WOOD_ORDER.reduce((best, w) =>
        Math.abs(CENTERS[w] - v) < Math.abs(CENTERS[best] - v) ? w : best
      , 'maple');
      slider.value = CENTERS[snapped];
      applySlider(CENTERS[snapped]);
    });
  }

  // Tab clicks — jump slider to that wood's center
  tabs.forEach(tab => tab.addEventListener('click', () => {
    const wood = tab.dataset.wood;
    if (slider) slider.value = CENTERS[wood];
    applySlider(CENTERS[wood]);
  }));

  // Init: maple
  applySlider(0);
}());

document.querySelectorAll('.product-card, .craft-card, .wood-card, .review-card').forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── Email Capture ───────────────────────────────────────────────
// SETUP: Create a free form at https://formspree.io (use your goldmangrains@gmail.com)
//        Name it "Email Subscribers", then paste the form ID below.
//        Also create a coupon code "WELCOME10" (10% off) in your Etsy shop:
//        Etsy → Shop Manager → Marketing → Sales & Coupons → Create coupon
const EMAIL_ENDPOINT = 'https://formspree.io/f/YOUR_EMAIL_FORM_ID';
const EMAIL_KEY      = 'gg_email';
const DISCOUNT_CODE  = 'WELCOME10';

(function () {
  // ── Check if already handled ──────────────────────────────────
  const stored = localStorage.getItem(EMAIL_KEY);
  if (stored) {
    try {
      const { state, ts } = JSON.parse(stored);
      if (state === 'subscribed') return;
      if (state === 'dismissed' && (Date.now() - ts) < 7 * 24 * 60 * 60 * 1000) return;
    } catch (_) { /* ignore bad data */ }
  }

  // ── Shared submit handler (used by both popup and footer strip) ─
  async function handleEmailSubmit(form, onSuccess, onError) {
    const input = form.querySelector('input[type="email"]');
    const btn   = form.querySelector('button[type="submit"]');
    if (!input || !input.value) return;
    btn.disabled    = true;
    btn.textContent = 'Sending…';
    try {
      const res = await fetch(EMAIL_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify({ email: input.value, source: form.dataset.emailForm || 'unknown', _subject: 'New Email Subscriber — Goldman\'s Grain' }),
      });
      if (res.ok) {
        localStorage.setItem(EMAIL_KEY, JSON.stringify({ state: 'subscribed', ts: Date.now() }));
        onSuccess();
      } else { throw new Error(); }
    } catch (_) {
      btn.disabled    = false;
      btn.textContent = 'Try Again';
      onError();
    }
  }

  // ── Footer strip forms ────────────────────────────────────────
  document.querySelectorAll('[data-email-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const wrap    = form.closest('.email-strip-inner') || form.parentElement;
      const success = wrap.querySelector('.email-strip-success');
      handleEmailSubmit(form,
        () => { form.style.display = 'none'; if (success) success.classList.add('show'); },
        () => {}
      );
    });
  });

  // ── Popup ─────────────────────────────────────────────────────
  // Don't show popup on contact page (they're already engaging)
  if (window.location.pathname.includes('contact')) return;

  const popup = document.createElement('div');
  popup.id        = 'emailPopup';
  popup.className = 'email-popup';
  popup.setAttribute('role', 'dialog');
  popup.setAttribute('aria-label', 'Get 10% off your first order');
  popup.innerHTML = `
    <button class="email-popup-close" id="emailPopupClose" aria-label="Close offer">✕</button>
    <div class="email-popup-logo">Goldman's Grain</div>
    <h3>Get 10% Off Your First Order</h3>
    <p>Join the list for new drops, early access to custom orders, and exclusive discounts.</p>
    <form class="email-popup-form" id="emailPopupForm" data-email-form="popup">
      <input type="email" name="email" placeholder="Your email address" required autocomplete="email" />
      <button type="submit">Claim 10% Off &rarr;</button>
    </form>
    <div class="email-popup-success" id="emailPopupSuccess">
      <p>🎉 You&rsquo;re in!<br>Use code <strong>${DISCOUNT_CODE}</strong> at checkout.</p>
    </div>
    <p class="email-popup-fine">No spam, ever. Unsubscribe anytime.</p>
  `;
  document.body.appendChild(popup);

  function showPopup() {
    popup.classList.add('is-visible');
    triggered = true;
  }
  function hidePopup() {
    popup.classList.remove('is-visible');
  }

  let triggered = false;

  document.getElementById('emailPopupClose').addEventListener('click', () => {
    hidePopup();
    localStorage.setItem(EMAIL_KEY, JSON.stringify({ state: 'dismissed', ts: Date.now() }));
  });

  document.getElementById('emailPopupForm').addEventListener('submit', e => {
    e.preventDefault();
    handleEmailSubmit(
      document.getElementById('emailPopupForm'),
      () => {
        document.getElementById('emailPopupForm').style.display = 'none';
        document.getElementById('emailPopupSuccess').classList.add('show');
        setTimeout(hidePopup, 5000);
      },
      () => {}
    );
  });

  // Trigger 1: scroll past 45% of page
  function onScroll() {
    if (triggered) return;
    const scrolled = window.scrollY + window.innerHeight;
    const total    = document.documentElement.scrollHeight;
    if (scrolled / total > 0.45) showPopup();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Trigger 2: exit intent (desktop — mouse leaves viewport toward top)
  document.addEventListener('mouseleave', e => {
    if (!triggered && e.clientY <= 0) showPopup();
  });
}());
