(() => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const cards = [...grid.querySelectorAll('.card')];
  const originalOrder = new Map(cards.map((card, index) => [card, index]));
  const search = document.getElementById('productSearch');
  const sort = document.getElementById('productSort');
  const count = document.getElementById('resultCount');
  const empty = document.getElementById('emptyState');
  const pagination = document.getElementById('pagination');
  const pageNumbers = document.getElementById('pageNumbers');
  const previousButton = document.getElementById('previousPage');
  const nextButton = document.getElementById('nextPage');
  const pageSize = 8;
  let category = 'all';
  let currentPage = 1;

  function updateProducts() {
    const query = search.value.trim().toLocaleLowerCase('th');
    const matches = cards.filter((card) => {
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const matchesSearch = card.dataset.name.toLocaleLowerCase('th').includes(query);
      return matchesCategory && matchesSearch;
    });

    matches.sort((a, b) => {
      if (sort.value === 'low') return Number(a.dataset.price) - Number(b.dataset.price);
      if (sort.value === 'high') return Number(b.dataset.price) - Number(a.dataset.price);
      return originalOrder.get(a) - originalOrder.get(b);
    });

    const pageCount = Math.max(1, Math.ceil(matches.length / pageSize));
    currentPage = Math.min(currentPage, pageCount);
    cards.forEach((card) => { card.hidden = true; });
    grid.append(...matches);

    const pageStart = (currentPage - 1) * pageSize;
    matches.slice(pageStart, pageStart + pageSize).forEach((card) => { card.hidden = false; });

    count.textContent = matches.length
      ? `พบ ${matches.length} รายการ · หน้า ${currentPage} จาก ${pageCount}`
      : 'ไม่พบสินค้า';
    empty.classList.toggle('visible', matches.length === 0);
    pagination.hidden = pageCount <= 1;
    previousButton.disabled = currentPage <= 1;
    nextButton.disabled = currentPage >= pageCount;

    pageNumbers.replaceChildren();
    for (let page = 1; page <= pageCount; page += 1) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'page-number';
      button.textContent = String(page);
      button.setAttribute('aria-label', `หน้า ${page}`);
      if (page === currentPage) button.setAttribute('aria-current', 'page');
      button.addEventListener('click', () => {
        currentPage = page;
        updateProducts();
        document.querySelector('.catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      pageNumbers.append(button);
    }
  }

  document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      category = button.dataset.filter;
      currentPage = 1;
      document.querySelectorAll('[data-filter]').forEach((item) => {
        item.setAttribute('aria-pressed', String(item === button));
      });
      updateProducts();
    });
  });

  search.addEventListener('input', () => {
    currentPage = 1;
    updateProducts();
  });
  sort.addEventListener('change', () => {
    currentPage = 1;
    updateProducts();
  });
  previousButton.addEventListener('click', () => {
    currentPage -= 1;
    updateProducts();
  });
  nextButton.addEventListener('click', () => {
    currentPage += 1;
    updateProducts();
  });

  updateProducts();
})();

