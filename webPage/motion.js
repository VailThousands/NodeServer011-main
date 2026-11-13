(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  document.documentElement.classList.add('motion-ready');
  const revealItems = document.querySelectorAll('.hero-grid > *, .trust-item, .section-head, .category-card, .product-card, .card, .story-banner, .intro-grid > *, .value-card, .step, .closing-card');
  revealItems.forEach((item, index) => {
    item.classList.add('reveal');
    if (index % 4) item.dataset.delay = String(index % 4);
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -28px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.category-card, .product-card, .card, .value-card').forEach((card) => {
      card.classList.add('depth-card');
      card.addEventListener('pointermove', (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        card.style.setProperty('--tilt-x', `${x * 5}deg`);
        card.style.setProperty('--tilt-y', `${y * -5}deg`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.removeProperty('--tilt-x');
        card.style.removeProperty('--tilt-y');
      });
    });
  }
})();
