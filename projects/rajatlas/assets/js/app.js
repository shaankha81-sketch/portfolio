/* RajAtlas page logic: loads the data, colours the map by the chosen layer, shows district details, handles language and theme. */
(function () {
  'use strict';

  var root = document.documentElement;
  var I = window.I18N;
  var core = window.RajMap.core;
  var lang = root.getAttribute('lang') || 'en';
  var NUM_LOCALE = 'en-IN';                                  // Latin digits with Indian grouping in all three languages

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function el(tag, props, kids) {
    var n = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      if (k === 'text') n.textContent = props[k];
      else if (k === 'class') n.className = props[k];
      else n.setAttribute(k, props[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* storage blocked */ } }
  function cssv(name) { return getComputedStyle(root).getPropertyValue(name).trim(); }

  function t(key, vars) {
    var e = I[key], s = (e && (e[lang] || e.en)) || key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] !== undefined ? vars[k] : m; });
    return s;
  }
  function nm(o) { return o[lang] || o.en; }
  function fmt(v, d) { return v.toLocaleString(NUM_LOCALE, { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function num(text) { return el('bdi', { class: 'num', text: text }); }          // keeps digits and units in order inside Urdu text

  /* ---------------- layers: what the map can be coloured by ---------------- */
  var LAYERS = {
    area:    { key: 'layer.area',    val: function (p) { return p.area_km2; },          fmt: function (v) { return fmt(v, 0); } },
    perim:   { key: 'layer.perim',   val: function (p) { return p.perimeter_km; },      fmt: function (v) { return fmt(v, 0); } },
    compact: { key: 'layer.compact', val: function (p) { return p.compactness; },       fmt: function (v) { return v.toFixed(2); } },
    nbrs:    { key: 'layer.nbrs',    val: function (p) { return p.neighbours.length; }, fmt: function (v) { return String(v); } },
    border:  { key: 'layer.border',  cat: true,
               val: function (p) { return p.intl_border_km > 0 ? 0 : (p.border_states.length ? 1 : 2); },
               fmt: function (v) { return t(['cat.pk', 'cat.state', 'cat.interior'][v]); },
               cats: [{ key: 'cat.pk', css: '--c1' }, { key: 'cat.state', css: '--c3' }, { key: 'cat.interior', css: '--c2' }] }
  };

  var S = { layer: 'area', selected: null, query: '' };
  var feats = [], props = {}, stateProps = {}, manifest = null, map = null, fills = {}, ranks = {};

  /* ---------------- loading ---------------- */
  function getJSON(url) {
    return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); });
  }
  Promise.all([getJSON('assets/data/districts-2011.geojson'), getJSON('assets/data/context-states.geojson'), getJSON('assets/data/manifest.json')])
    .then(function (res) { start(res[0], res[1], res[2]); })
    .catch(function (err) {
      if (window.console) console.error(err);
      var e = $('#load-error'); e.hidden = false;
    });

  function start(districts, context, man) {
    manifest = man;
    feats = districts.features;
    feats.forEach(function (f) { props[f.properties.id] = f.properties; });
    context.features.forEach(function (f) { stateProps[f.properties.id] = f.properties; });
    Object.keys(props).sort(function (a, b) { return props[b].area_km2 - props[a].area_km2; }).forEach(function (id, i) { ranks[id] = i + 1; });

    map = window.RajMap.create($('#map'), districts, context);
    map.on('select', function (id) { select(id, true); });
    map.on('hover', showTip);

    $('#layer').addEventListener('change', function (e) { S.layer = e.target.value; applyLayer(); renderList(); });
    $('#search').addEventListener('input', function (e) { S.query = e.target.value.trim().toLowerCase(); renderList(); });
    $('#lang').addEventListener('change', function (e) { setLang(e.target.value); });
    $('#theme').addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next); store('theme', next);
    });
    window.addEventListener('hashchange', function () { var id = idFromHash(); if (id !== S.selected) select(id, false); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { map.relayout(); });

    $('#lang').value = lang;
    setLang(lang, true);
    var id = idFromHash();
    if (id) select(id, false); else renderPanel();
  }

  /* ---------------- theme and language ---------------- */
  function applyTheme(th) {
    root.setAttribute('data-theme', th);
    var m = $('meta[name="theme-color"]'); if (m) m.setAttribute('content', th === 'dark' ? '#0d1416' : '#f6f1e7');
    if (map) applyLayer();                                   // the colour ramp differs between themes
  }

  function setLang(next, silent) {
    lang = next === 'hi' || next === 'ur' ? next : 'en';
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
    $$('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    $$('[data-i18n-ph]').forEach(function (n) { n.setAttribute('placeholder', t(n.getAttribute('data-i18n-ph'))); });
    document.title = t('meta.title');
    $('#l3').hidden = !!manifest.names_reviewed_by_owner;
    if (!silent) store('lang', lang);
    map.setLabels(function (f) { return nm(f.properties.name); }, function (f) { return nm(f.properties.name); }, t('map.country'));
    applyLayer();
    renderList(); renderPanel(); renderNumbers(); renderToday();
  }

  /* ---------------- colouring ---------------- */
  function applyLayer() {
    var L = LAYERS[S.layer], legend = $('#legend');
    legend.textContent = '';
    fills = {};
    if (L.cat) {
      var counts = [0, 0, 0];
      feats.forEach(function (f) {
        var c = L.val(f.properties); counts[c]++;
        fills[f.properties.id] = cssv(L.cats[c].css);
      });
      L.cats.forEach(function (c, i) {
        legend.appendChild(legendItem(cssv(c.css), t(c.key), counts[i]));
      });
    } else {
      var values = feats.map(function (f) { return L.val(f.properties); });
      var q = core.quantileClasses(values, 5), k = q.cuts.length + 1;
      var ramp = [1, 2, 3, 4, 5].map(function (i) { return cssv('--seq-' + i); });
      var color = function (cls) { return ramp[k === 1 ? 0 : Math.round(cls * 4 / (k - 1))]; };
      var lo = [], hi = [], n = [];
      feats.forEach(function (f, i) {
        var v = values[i], cls = q.classOf(v);
        fills[f.properties.id] = color(cls);
        lo[cls] = lo[cls] === undefined ? v : Math.min(lo[cls], v);
        hi[cls] = hi[cls] === undefined ? v : Math.max(hi[cls], v);
        n[cls] = (n[cls] || 0) + 1;
      });
      for (var c = 0; c < k; c++) {
        var range = lo[c] === hi[c] ? L.fmt(lo[c]) : L.fmt(lo[c]) + ' – ' + L.fmt(hi[c]);
        legend.appendChild(legendItem(color(c), range, n[c]));
      }
    }
    map.setFill(function (id) { return fills[id]; });
    $('#map').setAttribute('aria-label', t('map.aria', { n: feats.length, layer: t(L.key) }));
  }

  function legendItem(color, label, count) {
    var sw = el('span', { class: 'sw' }); sw.style.background = color;
    return el('span', { class: 'item' }, [sw, el('bdi', { text: label }), el('span', { class: 'count', text: '· ' + (count === 1 ? t('legend.n1') : t('legend.n', { n: count })) })]);
  }

  function showTip(id, p) {
    var tip = $('#tip');
    if (!id) { tip.hidden = true; return; }
    var L = LAYERS[S.layer], pr = props[id];
    tip.textContent = nm(pr.name) + ': ' + L.fmt(L.val(pr)) + (S.layer === 'area' ? ' km²' : S.layer === 'perim' ? ' km' : '');
    tip.style.left = Math.min(p[0], map.size().w - 170) + 'px'; tip.style.top = p[1] + 'px';
    tip.hidden = false;
  }

  /* ---------------- selection ---------------- */
  function idFromHash() {
    var m = /^#d=([a-z-]+)$/.exec(location.hash);
    return m && props[m[1]] ? m[1] : null;
  }

  function select(id, fromMap) {
    S.selected = id;
    map.select(id);
    renderPanel(); markList();
    if (id) {
      $('#status').textContent = t('panel.sel', { name: nm(props[id].name) });
      if (history.replaceState) history.replaceState(null, '', '#d=' + id);
      if (fromMap) {                                          // on narrow screens the panel sits below the map
        var panel = $('#panel'), r = panel.getBoundingClientRect();
        if (r.top > window.innerHeight * 0.85) panel.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
      }
    } else if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
  }

  /* ---------------- panel ---------------- */
  function row(labelKey, valueNode, help) {
    return el('div', {}, [el('dt', { text: t(labelKey) }), el('dd', {}, [valueNode, help ? el('span', { class: 'help', text: help }) : null])]);
  }
  function coord(v, pos, neg) { return Math.abs(v).toFixed(1) + '° ' + (v >= 0 ? pos : neg); }

  function renderPanel() {
    var host = $('#panel');
    host.textContent = '';
    if (!S.selected) {
      var ids = Object.keys(ranks).sort(function (a, b) { return ranks[a] - ranks[b]; });
      var big = props[ids[0]], small = props[ids[ids.length - 1]];
      host.appendChild(el('p', { text: t('panel.empty') }));
      host.appendChild(el('p', { class: 'note', text: t('panel.sum', {
        big: nm(big.name) + ' (' + fmt(big.area_km2) + ' km²)', small: nm(small.name) + ' (' + fmt(small.area_km2) + ' km²)' }) }));
      host.appendChild(el('p', { class: 'later', text: t('panel.later') }));
      return;
    }
    var p = props[S.selected];
    host.appendChild(el('h3', { class: 'dname', text: nm(p.name) }));
    host.appendChild(el('p', { class: 'dnames' }, ['en', 'hi', 'ur'].filter(function (l) { return l !== lang; }).reduce(function (a, l, i) {
      if (i) a.push(' · ');
      a.push(el('bdi', { lang: l, text: p.name[l] }));
      return a;
    }, [])));

    var nb = p.neighbours.slice().sort(function (a, b) { return nm(props[a].name).localeCompare(nm(props[b].name), lang); });
    var nbNode = el('ul', { class: 'chips' }, nb.map(function (id) {
      var b = el('button', { class: 'chip', type: 'button', text: nm(props[id].name) });
      b.addEventListener('click', function () { select(id, false); });
      return el('li', {}, [b]);
    }));
    var stNode = p.border_states.length
      ? el('ul', { class: 'chips' }, p.border_states.map(function (b) {
          return el('li', {}, [el('span', { class: 'chip static' }, [nm(stateProps[b.state].name) + ' · ', num(fmt(b.km) + ' km')])]);
        }))
      : el('span', { text: t('f.none') });

    var rows = [
      row('f.area', num(fmt(p.area_km2, 1) + ' km²')),
      row('f.rank', num(t('f.rankV', { r: ranks[p.id], n: feats.length }))),
      row('f.division', el('bdi', { text: t('f.divV', { d: nm(props[p.division].name) }) })),
      row('f.perim', num(fmt(p.perimeter_km, 1) + ' km')),
      row('f.compact', num(p.compactness.toFixed(3)), t('f.compactHelp')),
      row('f.nbrs', nbNode),
      row('f.states', stNode)
    ];
    if (p.intl_border_km > 0) rows.push(row('f.intl', num(fmt(p.intl_border_km) + ' km')));
    rows.push(row('f.centre', num(coord(p.centroid[1], 'N', 'S') + ', ' + coord(p.centroid[0], 'E', 'W'))));
    rows.push(row('f.code', num(String(p.census_district_code))));
    host.appendChild(el('dl', { class: 'facts' }, rows));
    host.appendChild(el('p', { class: 'later', text: t('panel.later') }));
  }

  /* ---------------- district list ---------------- */
  function renderList() {
    var L = LAYERS[S.layer], list = $('#list');
    list.textContent = '';
    var q = S.query;
    var shown = feats.map(function (f) { return f.properties; }).filter(function (p) {
      if (!q) return true;
      return p.id.indexOf(q) !== -1 || ['en', 'hi', 'ur'].some(function (l) { return p.name[l].toLowerCase().indexOf(q) !== -1; });
    }).sort(function (a, b) { return nm(a.name).localeCompare(nm(b.name), lang); });
    shown.forEach(function (p) {
      var b = el('button', { class: 'dist', type: 'button', 'data-id': p.id, 'aria-pressed': String(p.id === S.selected) },
        [el('span', { text: nm(p.name) }), el('span', { class: 'val', text: L.fmt(L.val(p)) })]);
      b.addEventListener('click', function () { select(p.id, false); });
      list.appendChild(el('li', {}, [b]));
    });
    $('#list-none').hidden = shown.length > 0;
  }
  function markList() {
    $$('.dist', $('#list')).forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-id') === S.selected)); });
  }

  /* ---------------- today's district list: the districts that are not on the 2011 map ---------------- */
  function renderToday() {
    var cur = manifest.current_list, list = $('#cur-new');
    $('#cur-lead').textContent = t('cur.lead', { n: cur.counts.total, d: Object.keys(cur.divisions).length, k: cur.counts.new_since_2011 });
    list.textContent = '';
    cur.new_districts.slice().sort(function (a, b) { return nm(a.name).localeCompare(nm(b.name), lang); }).forEach(function (d) {
      list.appendChild(el('li', {}, [el('span', { class: 'chip static' }, [nm(d.name) + ' · ', el('bdi', { text: t('f.divV', { d: nm(props[d.division_id].name) }) })])]));
    });
    $('#cur-note').textContent = t('cur.note', { rev: cur.source.revision_id });
    var parts = t('credit2').split('{link}'), c2 = $('#credit2');
    c2.textContent = '';
    c2.appendChild(document.createTextNode(parts[0]));
    c2.appendChild(el('a', { href: cur.source.url, rel: 'noopener', text: t('wiki') }));
    c2.appendChild(document.createTextNode(parts[1] || ''));
  }

  /* ---------------- "behind the map" numbers, read from the build manifest ---------------- */
  function renderNumbers() {
    var c = manifest.checks, dl = $('#numbers');
    dl.textContent = '';
    [['n.districts', String(manifest.layers['districts-2011'].features)],
     ['n.area', fmt(c.total_area_km2_original) + ' km²'],
     ['n.simp', (c.simplification_area_change_percent >= 0 ? '+' : '') + c.simplification_area_change_percent.toFixed(3) + ' %'],
     ['n.border', fmt(c.international_border_km_computed) + ' km'],
     ['n.built', manifest.built_utc.slice(0, 10)]].forEach(function (r) {
      dl.appendChild(row(r[0], num(r[1])));
    });
  }
})();
