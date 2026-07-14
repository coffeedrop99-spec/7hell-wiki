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

  // community
  const commEl = modalEl.querySelector('.modal-community');
  if (commEl) {
    if (char.community) {
      const c = char.community;
      const byPart = c.creator
        ? ` · by ${c.url ? `<a href="${c.url}" target="_blank" rel="noopener">${c.creator}</a>` : c.creator}`
        : '';
      commEl.innerHTML = `✦ community submission${byPart}`;
      commEl.style.display = '';
    } else {
      commEl.innerHTML = '';
      commEl.style.display = 'none';
    }
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
      ${char.community ? `<span class="char-card-community">✦ OC</span>` : ''}
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
  buildStartHere();
});

// ── LOST? START HERE ─────────────────────────────────────
function buildStartHere() {
  const btn = document.createElement('button');
  btn.className = 'starthere-btn';
  btn.innerHTML = '<span class="starthere-btn-q">?</span> Lost? Start here';

  const overlay = document.createElement('div');
  overlay.className = 'starthere-overlay';
  overlay.innerHTML = `
    <div class="starthere-panel">
      <button class="starthere-close" aria-label="Close">✕</button>
      <p class="starthere-eyebrow">New here? This takes two minutes.</p>
      <h2 class="starthere-title">LOST? START HERE</h2>

      <div class="starthere-section">
        <div class="starthere-label">The basics</div>
        <p>It's <strong>2004</strong>. Flip phones, burned CDs, gas under a dollar a litre. <strong>Marsten</strong> is a dead-end town in southwest Canada, split by a bridge: <strong>Northside</strong> (strip malls, gas stations, the last paycheck before the highway) and <strong>Southside</strong> (docks, factories, and most of the town's <strong>demi-humans</strong> — people born with animal features, pushed south by rent and habit). Nobody famous has ever come from Marsten. Nobody is coming to save it.</p>
      </div>

      <div class="starthere-section">
        <div class="starthere-label">The store</div>
        <p><strong>7-Hell Convenience</strong> is the only 24-hour gas station in Northside — the unofficial living room for insomniacs, club kids, warehouse crews, dealers, and anyone with nowhere else to be. The fluorescent lights buzz in B-flat. If two characters are going to collide, they collide here, usually near the nacho cheese machine.</p>
      </div>

      <div class="starthere-section">
        <div class="starthere-label">The people, fast</div>
        <ul>
          <li><strong>Night shift:</strong> Gary (anxious manager, genuinely tries, it's sad), Romeo (the muscle, ignores Gary), Presley (6'7" of unsettling calm), Zak (polite, reliable, impossible to pin down), Dr. Miller (overqualified pharmacist in a plexiglass cage).</li>
          <li><strong>Day shift:</strong> Dallas (accurate and mean about it), his dad Collin (peaked in 1989), Ashley (zero medical knowledge, immaculate vibes).</li>
          <li><strong>The regulars:</strong> Clem &amp; Kit (conspiracy duo), Jett (parked outside again), Maisy (Romeo's ex — knows things), Cassy (rat hunter).</li>
          <li><strong>The club:</strong> Kaleb, Gaige, and Peter perform at the ConXtion down the street.</li>
          <li><strong>The trade:</strong> the Beanie Baby Boys (Northside) and the Southside Rig do not like each other.</li>
          <li><strong>The law:</strong> Officer Ward and intern Holden. Very polite. Hm.</li>
          <li><strong>Corporate:</strong> a regional auditor named Sawyer White visits unannounced. Everyone behaves. Nobody knows why.</li>
        </ul>
      </div>

      <div class="starthere-section">
        <div class="starthere-label">What's going on right now</div>
        <ul>
          <li>Russell, a longtime regular, stopped showing up. Nobody filed anything.</li>
          <li>Nobody — <em>nobody</em> — talks about the old staff retreats.</li>
          <li>The auditor's visits keep running longer. Gary has started keeping a notebook of his advice.</li>
          <li>The whole plaza is owned by a holding company that refuses to sell. At any price. To anyone.</li>
          <li>Zak parks somewhere different every shift. There's no pattern. That's the pattern.</li>
          <li>The Beanies and the Rig are circling each other over territory.</li>
        </ul>
        <p class="starthere-note">Things in Marsten feel slightly off. That's not sloppy writing — that's the show. Watch the boring people.</p>
      </div>

      <div class="starthere-section">
        <div class="starthere-label">How to use this wiki</div>
        <p><a href="characters.html">Characters</a> — click a card, then click the relationship tags to hop through the web. <a href="locations.html">Locations</a> — who hangs out where. <a href="lore.html">Lore</a> — the rules of the town. Pick whoever looks fun and pull the thread.</p>
      </div>
    </div>`;

  function openStartHere()  { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeStartHere() { overlay.classList.remove('open'); document.body.style.overflow = ''; }

  btn.addEventListener('click', openStartHere);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeStartHere(); });
  overlay.querySelector('.starthere-close').addEventListener('click', closeStartHere);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeStartHere(); });

  document.body.appendChild(btn);
  document.body.appendChild(overlay);
}
