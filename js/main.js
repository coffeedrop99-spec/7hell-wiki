// ── NAV ACTIVE STATE ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

// ── MODAL ────────────────────────────────────────────────
const backdrop = document.getElementById('modal-backdrop');
const modalEl  = document.getElementById('modal');

function openModal(char) {
  if (!char || !backdrop) return;
  const faction = FACTIONS[char.faction];
  const fc      = faction?.color || '#888';

  modalEl.querySelector('.modal-inner').style.setProperty('--fc', fc);
  modalEl.querySelector('.modal-faction-tag').textContent = faction?.label || '';
  modalEl.querySelector('.modal-name').textContent        = char.name;
  modalEl.querySelector('.modal-role').textContent        = char.role + (char.age ? ` · Age ${char.age}` : '');
  modalEl.querySelector('.modal-desc').textContent        = char.desc;

  // portrait
  const imgEl = modalEl.querySelector('.modal-portrait');
  const phEl  = modalEl.querySelector('.modal-portrait-placeholder');
  if (char.img) {
    imgEl.src = char.img; imgEl.style.display = 'block'; phEl.style.display = 'none';
  } else {
    imgEl.style.display = 'none'; phEl.style.display = 'flex';
  }

  // traits
  modalEl.querySelector('.modal-traits').innerHTML =
    (char.traits || []).map(t => `<span class="modal-trait">${t}</span>`).join('');

  // relationships
  const relEl   = modalEl.querySelector('.modal-relationships');
  const relLabel = modalEl.querySelector('.modal-rel-label');
  if (char.relationships?.length) {
    relEl.innerHTML = char.relationships.map(r =>
      `<button class="rel-tag" data-id="${r.id}" title="${r.note || ''}" style="--fc:${FACTIONS[CHARACTERS.find(c=>c.id===r.id)?.faction]?.color||'#888'}">${r.name}</button>`
    ).join('');
    relEl.querySelectorAll('.rel-tag').forEach(btn => {
      btn.addEventListener('click', () => openModalById(btn.dataset.id));
    });
    relEl.style.display = 'flex';
    if (relLabel) relLabel.style.display = '';
  } else {
    relEl.innerHTML = ''; relEl.style.display = 'none';
    if (relLabel) relLabel.style.display = 'none';
  }

  // details
  modalEl.querySelector('.modal-details').innerHTML =
    Object.entries(char.details || {}).map(([k, v]) =>
      `<div><div class="modal-detail-label">${k}</div><div class="modal-detail-value">${v}</div></div>`
    ).join('');

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openModalById(id) {
  const char = CHARACTERS.find(c => c.id === id);
  if (char) openModal(char);
}

function closeModal() {
  if (!backdrop) return;
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

if (backdrop) {
  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}
const closeBtn = document.getElementById('modal-close');
if (closeBtn) closeBtn.addEventListener('click', closeModal);

// ── CHARACTER GRID ───────────────────────────────────────
function buildCharGrid() {
  const grid = document.getElementById('char-grid');
  if (!grid) return;

  CHARACTERS.forEach(char => {
    const faction = FACTIONS[char.faction];
    const fc = faction?.color || '#888';
    const card = document.createElement('div');
    card.className = 'char-card';
    card.dataset.faction = char.faction;
    card.dataset.name = char.name.toLowerCase();
    card.style.setProperty('--fc', fc);

    card.innerHTML = `
      <span class="char-card-faction">${faction?.label || ''}</span>
      ${char.img
        ? `<img class="char-card-img" src="${char.img}" alt="${char.name}" loading="lazy">`
        : `<div class="char-card-placeholder">?</div>`}
      <div class="char-card-body">
        <div class="char-card-name">${char.name}</div>
        <div class="char-card-meta">${char.age ? `${char.age} · ` : ''}${char.role.split('—')[0].trim()}</div>
      </div>`;

    card.addEventListener('click', () => openModal(char));
    grid.appendChild(card);
  });
}

// ── LOCATION GRID ────────────────────────────────────────
function buildLocGrid() {
  const grid = document.getElementById('loc-grid');
  if (!grid) return;

  LOCATIONS.forEach(loc => {
    const card = document.createElement('div');
    card.className = 'loc-card';
    card.style.setProperty('--lc', loc.color);

    const peopleTags = (loc.key_people || []).map(name => {
      const char = CHARACTERS.find(c => c.name === name || c.name.startsWith(name) || c.name.includes(name));
      if (char) {
        return `<button class="loc-person-tag loc-person-clickable" data-id="${char.id}">${name}</button>`;
      }
      return `<span class="loc-person-tag">${name}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="loc-header">
        <div class="loc-icon">${loc.icon}</div>
        <div class="loc-title-block">
          <div class="loc-name">${loc.name}</div>
          <div class="loc-zone">${loc.zone}</div>
        </div>
      </div>
      <p class="loc-desc">${loc.desc}</p>
      ${loc.atmosphere ? `<p class="loc-atmosphere">${loc.atmosphere}</p>` : ''}
      ${loc.key_people?.length ? `<div class="loc-key-people">${peopleTags}</div>` : ''}`;

    card.querySelectorAll('.loc-person-clickable').forEach(btn => {
      btn.addEventListener('click', () => openModalById(btn.dataset.id));
    });

    grid.appendChild(card);
  });
}

// ── FACTION FILTER ───────────────────────────────────────
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;
  let active = 'all';

  function applyFilter() {
    const search = (document.getElementById('char-search')?.value || '').toLowerCase();
    document.querySelectorAll('.char-card').forEach(card => {
      const factionMatch = active === 'all' || card.dataset.faction === active;
      const nameMatch    = !search || card.dataset.name.includes(search);
      card.classList.toggle('hidden', !factionMatch || !nameMatch);
    });
  }

  filterBtns.forEach(btn => {
    const fc = btn.dataset.color;
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (fc) btn.style.setProperty('--fc', fc);
      active = btn.dataset.faction;
      applyFilter();
    });
  });

  const search = document.getElementById('char-search');
  if (search) search.addEventListener('input', applyFilter);
}

document.addEventListener('DOMContentLoaded', () => {
  buildCharGrid();
  buildLocGrid();
  setupFilters();
});
