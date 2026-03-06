// Telegram Web App init
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

// ─── DOM refs ───────────────────────────────────────────────
const textarea        = document.getElementById('ingredients-input');
const analyzeBtn      = document.getElementById('analyze-btn');
const clearBtn        = document.getElementById('clear-btn');
const resultsSection  = document.getElementById('results');
const statsEl         = document.getElementById('stats');
const listEl          = document.getElementById('ingredients-list');
const safetyBadge     = document.getElementById('safety-badge');

// ─── Theme ───────────────────────────────────────────────────
function applyTheme() {
  if (!tg) return;
  document.documentElement.setAttribute('data-theme', tg.colorScheme || 'light');
}
if (tg) {
  tg.onEvent('themeChanged', applyTheme);
  applyTheme();
}

// ─── Matching ────────────────────────────────────────────────
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalize(raw) {
  return raw
    .toLowerCase()
    .replace(/\([^)]*\)/g, '')   // remove (Water), (2), etc.
    .replace(/\s+/g, ' ')
    .trim();
}

function findIngredient(raw) {
  const norm = normalize(raw);
  if (!norm || norm.length < 2) return null;

  // 1. Exact match
  for (const ing of INGREDIENTS) {
    for (const n of ing.names) {
      if (norm === n.toLowerCase()) return ing;
    }
  }

  // 2. Short names (≤4 chars) — must match at start of input
  for (const ing of INGREDIENTS) {
    for (const n of ing.names) {
      if (n.length <= 4) {
        const re = new RegExp('^' + escapeRegex(n) + '([\\-\\s\\d]|$)', 'i');
        if (re.test(norm)) return ing;
      }
    }
  }

  // 3. Long names (≥5 chars) — substring match
  for (const ing of INGREDIENTS) {
    for (const n of ing.names) {
      if (n.length >= 5) {
        if (norm.includes(n.toLowerCase()) || n.toLowerCase().includes(norm)) return ing;
      }
    }
  }

  return null;
}

function parseRawList(text) {
  return text
    .split(/[,;\n]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
}

// ─── Analysis ────────────────────────────────────────────────
function analyze() {
  const text = textarea.value.trim();
  if (!text) return;

  const rawList = parseRawList(text);
  if (!rawList.length) return;

  const results = rawList.map(raw => {
    const ing = findIngredient(raw);
    return { raw, ing, category: ing?.category ?? 'unknown' };
  });

  renderResults(results);
}

// ─── Render ──────────────────────────────────────────────────
const CATEGORY_META = {
  harmful: { icon: '⛔', label: 'Вредный',    color: 'harmful' },
  caution: { icon: '⚠️', label: 'Осторожно',  color: 'caution' },
  safe:    { icon: '✅', label: 'Безопасный', color: 'safe'    },
  unknown: { icon: '❓', label: 'Неизвестный',color: 'unknown' },
};

function renderResults(results) {
  const counts = { harmful: 0, caution: 0, safe: 0, unknown: 0 };
  results.forEach(r => counts[r.category]++);

  // Overall safety badge
  let overallStatus, overallText;
  if (counts.harmful > 0) {
    overallStatus = 'harmful';
    overallText = `Содержит ${counts.harmful} вредн. ингр.`;
  } else if (counts.caution > 0) {
    overallStatus = 'caution';
    overallText = `Требует внимания (${counts.caution} ингр.)`;
  } else if (counts.safe > 0 && counts.unknown === 0) {
    overallStatus = 'safe';
    overallText = 'Состав безопасный';
  } else {
    overallStatus = 'unknown';
    overallText = 'Состав требует проверки';
  }

  safetyBadge.className = `safety-badge safety-badge--${overallStatus}`;
  safetyBadge.textContent = overallText;

  // Stats
  statsEl.innerHTML = Object.entries(counts).map(([cat, cnt]) => `
    <div class="stat stat--${cat}">
      <span class="stat__count">${cnt}</span>
      <span class="stat__label">${CATEGORY_META[cat].label.toLowerCase()}</span>
    </div>
  `).join('');

  // Sort: harmful → caution → safe → unknown
  const order = { harmful: 0, caution: 1, safe: 2, unknown: 3 };
  const sorted = [...results].sort((a, b) => order[a.category] - order[b.category]);

  listEl.innerHTML = sorted.map(r => renderCard(r)).join('');

  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Haptic feedback
  if (tg?.HapticFeedback) {
    if (counts.harmful > 0) tg.HapticFeedback.notificationOccurred('error');
    else if (counts.caution > 0) tg.HapticFeedback.notificationOccurred('warning');
    else tg.HapticFeedback.notificationOccurred('success');
  }
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function renderCard({ raw, ing, category }) {
  const meta = CATEGORY_META[category];
  const displayINCIName = ing ? ing.names[0] : null;
  const showAlias = displayINCIName && displayINCIName.toLowerCase() !== raw.toLowerCase();

  return `
    <div class="card card--${category}">
      <div class="card__top">
        <div class="card__names">
          <span class="card__raw">${esc(raw)}</span>
          ${showAlias ? `<span class="card__inci">${esc(displayINCIName)}</span>` : ''}
        </div>
        <div class="card__badges">
          ${ing?.group ? `<span class="badge badge--group">${esc(ing.group)}</span>` : ''}
          <span class="badge badge--${category}">${meta.icon} ${meta.label}</span>
        </div>
      </div>
      ${ing?.concern ? `<div class="card__concern">⚡ ${esc(ing.concern)}</div>` : ''}
      <div class="card__desc">${esc(ing?.description ?? 'Нет данных в базе. Рекомендуем уточнить самостоятельно.')}</div>
    </div>
  `;
}

// ─── Events ──────────────────────────────────────────────────
analyzeBtn.addEventListener('click', analyze);

clearBtn?.addEventListener('click', () => {
  textarea.value = '';
  resultsSection.hidden = true;
  textarea.focus();
});

textarea.addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) analyze();
});

// Telegram Main Button
if (tg?.MainButton) {
  tg.MainButton.setText('🔍 Анализировать');
  tg.MainButton.show();
  tg.MainButton.onClick(analyze);
}
