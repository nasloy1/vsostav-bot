// Telegram Web App init
const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); }

// ─── DOM refs ────────────────────────────────────────────────
const searchInput    = document.getElementById('search-input');
const searchBtn      = document.getElementById('search-btn');
const searchResults  = document.getElementById('search-results');
const textarea       = document.getElementById('ingredients-input');
const analyzeBtn     = document.getElementById('analyze-btn');
const clearBtn       = document.getElementById('clear-btn');
const resultsSection = document.getElementById('results');
const statsEl        = document.getElementById('stats');
const listEl         = document.getElementById('ingredients-list');
const safetyBadge    = document.getElementById('safety-badge');

// ─── Theme ───────────────────────────────────────────────────
function applyTheme() {
  if (!tg) return;
  document.documentElement.setAttribute('data-theme', tg.colorScheme || 'light');
}
if (tg) { tg.onEvent('themeChanged', applyTheme); applyTheme(); }

// ─── Open Beauty Facts API ───────────────────────────────────
const OBF_SEARCH  = 'https://world.openbeautyfacts.org/cgi/search.pl';
const OBF_PRODUCT = 'https://world.openbeautyfacts.org/api/v2/product';

async function searchProduct() {
  const query = searchInput.value.trim();
  if (!query) return;

  searchResults.hidden = false;
  searchResults.innerHTML = '<div class="search-status">⏳ Ищем в базе продуктов...</div>';

  try {
    let products = [];

    if (/^\d{8,13}$/.test(query)) {
      // Штрихкод
      const res  = await fetch(`${OBF_PRODUCT}/${query}?fields=product_name,brands,ingredients_text,image_front_small_url`);
      const data = await res.json();
      if (data.status === 1 && data.product) products = [data.product];
    } else {
      // Поиск по тексту
      const params = new URLSearchParams({
        search_terms: query,
        search_simple: 1,
        action:        'process',
        json:          1,
        fields:        'product_name,brands,ingredients_text,image_front_small_url',
        page_size:     7
      });
      const res  = await fetch(`${OBF_SEARCH}?${params}`);
      const data = await res.json();
      products   = data.products || [];
    }

    renderSearchResults(products);

  } catch {
    searchResults.innerHTML = '<div class="search-status search-status--error">❌ Ошибка соединения. Проверьте интернет.</div>';
  }
}

function renderSearchResults(products) {
  const valid = products.filter(p => p.ingredients_text?.trim());

  if (!valid.length) {
    searchResults.innerHTML = `
      <div class="search-status">
        😔 Продукт не найден или состав отсутствует в базе.<br>
        <small>Попробуйте другое название или введите состав вручную ниже.</small>
      </div>`;
    return;
  }

  window._foundProducts = valid;

  searchResults.innerHTML = valid.map((p, i) => {
    const name    = [p.brands, p.product_name].filter(Boolean).join(' — ') || 'Без названия';
    const img     = p.image_front_small_url || '';
    const preview = (p.ingredients_text || '').slice(0, 90).trim();

    return `
      <div class="product-card" onclick="selectProduct(${i})">
        ${img
          ? `<img class="product-card__img" src="${esc(img)}" alt="" loading="lazy">`
          : `<div class="product-card__img product-card__img--empty">🧴</div>`
        }
        <div class="product-card__info">
          <div class="product-card__name">${esc(name)}</div>
          <div class="product-card__preview">${esc(preview)}…</div>
        </div>
        <span class="product-card__arrow">›</span>
      </div>`;
  }).join('');
}

function selectProduct(i) {
  const p = window._foundProducts?.[i];
  if (!p?.ingredients_text) return;

  textarea.value = p.ingredients_text;
  searchResults.hidden = true;
  searchInput.value    = '';

  document.getElementById('manual-section').scrollIntoView({ behavior: 'smooth' });
  setTimeout(analyze, 400);

  tg?.HapticFeedback?.selectionChanged();
}

// ─── Ingredient matching ─────────────────────────────────────
function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function normalize(raw) {
  return raw.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
}

function findIngredient(raw) {
  const norm = normalize(raw);
  if (!norm || norm.length < 2) return null;

  // Exact
  for (const ing of INGREDIENTS)
    for (const n of ing.names)
      if (norm === n.toLowerCase()) return ing;

  // Short names (≤4 chars) — match at start
  for (const ing of INGREDIENTS)
    for (const n of ing.names)
      if (n.length <= 4 && new RegExp('^' + escapeRegex(n) + '([\\-\\s\\d]|$)', 'i').test(norm))
        return ing;

  // Long names (≥5 chars) — substring
  for (const ing of INGREDIENTS)
    for (const n of ing.names)
      if (n.length >= 5 && (norm.includes(n.toLowerCase()) || n.toLowerCase().includes(norm)))
        return ing;

  return null;
}

function parseList(text) {
  return text.split(/[,;\n]+/).map(s => s.trim()).filter(Boolean);
}

// ─── Analysis ────────────────────────────────────────────────
function analyze() {
  const text = textarea.value.trim();
  if (!text) return;

  const items = parseList(text);
  if (!items.length) return;

  const results = items.map(raw => {
    const ing = findIngredient(raw);
    return { raw, ing, category: ing?.category ?? 'unknown' };
  });

  renderResults(results);
}

// ─── Render results ──────────────────────────────────────────
const CATEGORY_META = {
  harmful: { icon: '⛔', label: 'Вредный'    },
  caution: { icon: '⚠️', label: 'Осторожно'  },
  safe:    { icon: '✅', label: 'Безопасный' },
  unknown: { icon: '❓', label: 'Неизвестный'},
};

function renderResults(results) {
  const counts = { harmful: 0, caution: 0, safe: 0, unknown: 0 };
  results.forEach(r => counts[r.category]++);

  // Overall verdict
  let status, text;
  if      (counts.harmful > 0)                        { status = 'harmful'; text = `⛔ Содержит ${counts.harmful} вредных ингредиентов`; }
  else if (counts.caution > 0)                        { status = 'caution'; text = `⚠️ Требует внимания — ${counts.caution} ингр.`; }
  else if (counts.safe > 0 && counts.unknown === 0)   { status = 'safe';    text = '✅ Состав безопасный'; }
  else                                                { status = 'unknown'; text = '❓ Часть ингредиентов не найдена'; }

  safetyBadge.className   = `safety-badge safety-badge--${status}`;
  safetyBadge.textContent = text;

  // Stats
  statsEl.innerHTML = Object.entries(counts).map(([cat, cnt]) => `
    <div class="stat stat--${cat}">
      <span class="stat__count">${cnt}</span>
      <span class="stat__label">${CATEGORY_META[cat].label.toLowerCase()}</span>
    </div>`).join('');

  // Sorted cards
  const order  = { harmful: 0, caution: 1, safe: 2, unknown: 3 };
  const sorted = [...results].sort((a, b) => order[a.category] - order[b.category]);
  listEl.innerHTML = sorted.map(renderCard).join('');

  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (tg?.HapticFeedback) {
    if      (counts.harmful > 0) tg.HapticFeedback.notificationOccurred('error');
    else if (counts.caution > 0) tg.HapticFeedback.notificationOccurred('warning');
    else                         tg.HapticFeedback.notificationOccurred('success');
  }
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function renderCard({ raw, ing, category }) {
  const meta      = CATEGORY_META[category];
  const aliasName = ing?.names[0];
  const showAlias = aliasName && aliasName.toLowerCase() !== raw.toLowerCase();

  return `
    <div class="card card--${category}">
      <div class="card__top">
        <div class="card__names">
          <span class="card__raw">${esc(raw)}</span>
          ${showAlias ? `<span class="card__inci">${esc(aliasName)}</span>` : ''}
        </div>
        <div class="card__badges">
          ${ing?.group ? `<span class="badge badge--group">${esc(ing.group)}</span>` : ''}
          <span class="badge badge--${category}">${meta.icon} ${meta.label}</span>
        </div>
      </div>
      ${ing?.concern ? `<div class="card__concern">⚡ ${esc(ing.concern)}</div>` : ''}
      <div class="card__desc">${esc(ing?.description ?? 'Нет данных в базе. Рекомендуем уточнить самостоятельно.')}</div>
    </div>`;
}

// ─── Event listeners ─────────────────────────────────────────
searchBtn.addEventListener('click', searchProduct);
searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') searchProduct(); });

analyzeBtn.addEventListener('click', analyze);
clearBtn?.addEventListener('click', () => {
  textarea.value = '';
  resultsSection.hidden = true;
  textarea.focus();
});
textarea.addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) analyze();
});

if (tg?.MainButton) {
  tg.MainButton.setText('🔍 Анализировать');
  tg.MainButton.show();
  tg.MainButton.onClick(analyze);
}
