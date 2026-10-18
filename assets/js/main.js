/* Core page behaviour: language, theme, navigation, hero contours, skills, education, contact. */
(function () {
  'use strict';

  var root = document.documentElement;
  var S = window.SITE;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

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

  /* ---------------- Language ---------------- */
  // English is read from the HTML itself, so the page works and reads correctly without JavaScript.
  var EN = {};
  $$('[data-i18n]').forEach(function (n) { EN[n.getAttribute('data-i18n')] = n.textContent.trim(); });
  EN['meta.title'] = document.title;

  var lang = root.getAttribute('lang') || 'en';

  function t(key, vars) {
    var e = S.ui[key];
    var s = (e && (e[lang] || e.en)) || EN[key] || '';
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] !== undefined ? vars[k] : m; });
    return s;
  }
  function L(o) {
    if (o == null) return '';
    if (typeof o === 'string') return o;
    return o[lang] || o.en || '';
  }

  function setLang(next, silent) {
    lang = next === 'hi' || next === 'ur' ? next : 'en';
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
    $$('[data-i18n]').forEach(function (n) {
      var v = t(n.getAttribute('data-i18n'));
      if (v) n.textContent = v;
    });
    document.title = t('meta.title');
    $('#lang').value = lang;
    store('lang', lang);
    if (!silent) document.dispatchEvent(new CustomEvent('site:lang', { detail: lang }));
  }

  // shared helpers for quiz.js and lab.js
  window.APP = {
    t: t, L: L, el: el, $: $, $$: $$, store: store, reduceMotion: reduceMotion,
    lang: function () { return lang; },
    onLang: function (fn) { document.addEventListener('site:lang', fn); },
    cssv: function (name) { return getComputedStyle(root).getPropertyValue(name).trim(); },
    shuffled: function (arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x; }
      return a;
    }
  };

  setLang(lang, true);
  $('#lang').addEventListener('change', function (e) { setLang(e.target.value); });

  /* ---------------- Theme ---------------- */
  function applyTheme(th) {
    root.setAttribute('data-theme', th);
    var m = $('meta[name="theme-color"]');
    if (m) m.setAttribute('content', th === 'dark' ? '#0d1416' : '#f6f1e7');
  }
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  $('#theme').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    store('theme', next);
  });

  /* ---------------- "#top" links scroll up without leaving #top in the address bar ---------------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href="#top"]') : null;
    if (!a) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    if (location.hash && history.replaceState) history.replaceState(null, '', location.pathname + location.search);
  });

  /* ---------------- Mobile menu ---------------- */
  var nav = $('#nav'), menuBtn = $('#menu');
  function closeMenu() { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------------- Active nav link, reveal on scroll, counters ---------------- */
  function fmtCount(n, end) {
    var dec = parseInt(n.getAttribute('data-dec') || '0', 10);
    return end.toFixed(dec) + (n.getAttribute('data-suffix') || '');
  }
  if ('IntersectionObserver' in window) {
    var links = {};
    $$('a', nav).forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        $$('a', nav).forEach(function (a) { a.classList.remove('active'); });
        if (links[en.target.id]) links[en.target.id].classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { spy.observe(s); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(function (n) { io.observe(n); });

    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        countIO.unobserve(en.target);
        var n = en.target, end = parseFloat(n.getAttribute('data-count'));
        if (reduceMotion) { n.textContent = fmtCount(n, end); return; }
        var start = performance.now(), dur = 1100;
        (function tick(now) {
          var p = Math.min((now - start) / dur, 1);
          n.textContent = fmtCount(n, end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        })(start);
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(function (n) { countIO.observe(n); });
  } else {
    $$('.reveal').forEach(function (n) { n.classList.add('in'); });
  }

  /* ---------------- Live clock (India Standard Time) ---------------- */
  var clock = $('#clock');
  function tickClock() {
    try {
      var f = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' });
      clock.textContent = f.format(new Date()) + ' IST (UTC+5:30)';
    } catch (e) { /* keep the static text */ }
  }
  tickClock();
  setInterval(tickClock, 20000);

  /* ---------------- Hero: animated contour lines (value noise + marching squares) ---------------- */
  (function contours() {
    var canvas = $('#contours');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var W = 0, H = 0, dpr = 1, cell = 16, z = Math.random() * 100;
    var colors = { thin: '', thick: '' };
    var visible = true, last = 0, raf = 0;

    // 3-D value noise: smooth random values on an integer lattice, blended between lattice points
    function hash(x, y, zz) {
      var h = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(zz, 1442695041)) | 0;
      h = Math.imul(h ^ (h >>> 13), 1274126177);
      h = h ^ (h >>> 16);
      return (h & 0xffff) / 0xffff;
    }
    function fade(t) { return t * t * (3 - 2 * t); }
    function lerp(a, b, t) { return a + (b - a) * t; }
    function noise(x, y, zz) {
      var xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(zz);
      var xf = fade(x - xi), yf = fade(y - yi), zf = fade(zz - zi);
      function plane(k) {
        var a = lerp(hash(xi, yi, k), hash(xi + 1, yi, k), xf);
        var b = lerp(hash(xi, yi + 1, k), hash(xi + 1, yi + 1, k), xf);
        return lerp(a, b, yf);
      }
      return lerp(plane(zi), plane(zi + 1), zf);
    }
    function field(x, y, zz) {
      return noise(x, y, zz) * 0.6 + noise(x * 2.1, y * 2.1, zz * 1.3) * 0.28 + noise(x * 4.3, y * 4.3, zz) * 0.12;
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = W < 640 ? 14 : 16;
      readColors();
      draw();
    }
    function readColors() {
      colors.thin = window.APP.cssv('--contour');
      colors.thick = window.APP.cssv('--contour-strong');
    }

    function draw() {
      var cols = Math.ceil(W / cell) + 1, rows = Math.ceil(H / cell) + 1, scale = 1 / 190;
      var v = new Float32Array(cols * rows);
      for (var j = 0; j < rows; j++) for (var i = 0; i < cols; i++) v[j * cols + i] = field(i * cell * scale, j * cell * scale, z);
      ctx.clearRect(0, 0, W, H);
      ctx.lineJoin = 'round';
      var levels = 16;
      for (var lv = 1; lv < levels; lv++) {
        var L = 0.12 + lv * (0.76 / levels), index = lv % 4 === 0;
        ctx.beginPath();
        for (j = 0; j < rows - 1; j++) {
          for (i = 0; i < cols - 1; i++) {
            var tl = v[j * cols + i], tr = v[j * cols + i + 1], br = v[(j + 1) * cols + i + 1], bl = v[(j + 1) * cols + i];
            var idx = (tl > L ? 8 : 0) | (tr > L ? 4 : 0) | (br > L ? 2 : 0) | (bl > L ? 1 : 0);
            if (idx === 0 || idx === 15) continue;
            var x0 = i * cell, y0 = j * cell;
            var top = [x0 + cell * (L - tl) / (tr - tl), y0];
            var right = [x0 + cell, y0 + cell * (L - tr) / (br - tr)];
            var bottom = [x0 + cell * (L - bl) / (br - bl), y0 + cell];
            var left = [x0, y0 + cell * (L - tl) / (bl - tl)];
            switch (idx) {
              case 1: case 14: seg(left, bottom); break;
              case 2: case 13: seg(bottom, right); break;
              case 3: case 12: seg(left, right); break;
              case 4: case 11: seg(top, right); break;
              case 5: seg(left, top); seg(bottom, right); break;
              case 6: case 9: seg(top, bottom); break;
              case 7: case 8: seg(left, top); break;
              case 10: seg(left, bottom); seg(top, right); break;
            }
          }
        }
        ctx.strokeStyle = index ? colors.thick : colors.thin;
        ctx.lineWidth = index ? 1.6 : 1;
        ctx.stroke();
      }
    }
    function seg(a, b) { ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); }

    function loop(now) {
      raf = 0;
      if (!visible || document.hidden) return;
      if (now - last > 66) { last = now; z += 0.004; draw(); }   // about 15 frames a second: smooth enough, light on battery
      raf = requestAnimationFrame(loop);
    }
    function start() { if (!reduceMotion && !raf) raf = requestAnimationFrame(loop); }

    resize();
    var rt = null, lastW = window.innerWidth;
    window.addEventListener('resize', function () {
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      clearTimeout(rt); rt = setTimeout(resize, 150);
    });
    new MutationObserver(function () { readColors(); draw(); }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) start(); }).observe(canvas);
    }
    document.addEventListener('visibilitychange', function () { if (!document.hidden) start(); });
    start();
  })();

  /* ---------------- Skills atlas ---------------- */
  var atlasTabs = $('#atlas-tabs'), atlasPanel = $('#atlas-panel'), atlasIdx = 0;

  function renderAtlasTabs() {
    atlasTabs.textContent = '';
    S.atlas.forEach(function (d, i) {
      var b = el('button', { class: 'tab', role: 'tab', id: 'atab-' + d.id, type: 'button', 'aria-controls': 'atlas-panel', 'data-k': d.k,
        'aria-selected': String(i === atlasIdx), tabindex: i === atlasIdx ? '0' : '-1' },
        [el('span', { class: 'n', text: String(i + 1), 'aria-hidden': 'true' }), L(d.name)]);
      b.addEventListener('click', function () { showAtlas(i); });
      b.addEventListener('keydown', function (e) {
        var n = null, last = S.atlas.length - 1, fwd = lang === 'ur' ? 'ArrowLeft' : 'ArrowRight', back = lang === 'ur' ? 'ArrowRight' : 'ArrowLeft';
        if (e.key === fwd) n = i === last ? 0 : i + 1;
        if (e.key === back) n = i === 0 ? last : i - 1;
        if (e.key === 'Home') n = 0;
        if (e.key === 'End') n = last;
        if (n !== null) { e.preventDefault(); showAtlas(n); $$('.tab', atlasTabs)[n].focus(); }
      });
      atlasTabs.appendChild(b);
    });
  }
  function showAtlas(i) {
    atlasIdx = i;
    var d = S.atlas[i];
    $$('.tab', atlasTabs).forEach(function (b, j) {
      b.setAttribute('aria-selected', String(i === j));
      b.setAttribute('tabindex', i === j ? '0' : '-1');
    });
    atlasPanel.setAttribute('aria-labelledby', 'atab-' + d.id);
    atlasPanel.setAttribute('data-k', d.k);
    atlasPanel.textContent = '';
    var count = d.groups.reduce(function (s, g) { return s + g.items.en.length; }, 0);
    atlasPanel.appendChild(el('div', { class: 'panel-head' }, [
      el('h3', { text: L(d.name) }),
      el('span', { class: 'pill', text: t('ui.topics', { n: count }) })
    ]));
    d.groups.forEach(function (g) {
      var label = d.groups.length > 1 ? L(g.label) : t('ui.studied');
      atlasPanel.appendChild(el('span', { class: 'block-label', text: label }));
      atlasPanel.appendChild(el('ul', { class: 'chips' }, (g.items[lang] || g.items.en).map(function (x) { return el('li', { text: x }); })));
    });
    atlasPanel.appendChild(el('span', { class: 'block-label', text: t('ui.details') }));
    atlasPanel.appendChild(el('p', { class: 'detail', text: L(d.detail) }));
    atlasPanel.appendChild(el('span', { class: 'block-label', text: t('ui.applies') }));
    atlasPanel.appendChild(el('p', { class: 'relevant', text: L(d.use) }));
  }

  function renderCourseMap() {
    var host = $('#course-map');
    host.textContent = '';
    S.courses.forEach(function (s) {
      host.appendChild(el('div', { class: 'sem' + (s.final ? ' final' : '') }, [
        el('h4', {}, [t('ui.sem') + ' ' + s.sem, el('small', { text: s.year })]),
        el('ul', {}, s.papers.map(function (p) {
          return el('li', { 'data-k': p.k }, [el('code', { text: p.code }), L(p.t)]);
        }))
      ]));
    });
  }

  /* ---------------- Education ---------------- */
  function renderEducation() {
    var tl = $('#timeline');
    tl.textContent = '';
    S.edu.forEach(function (e) {
      var card = el('div', { class: 'card tl-card' }, [
        el('p', { class: 'tl-when', text: L(e.when) }),
        el('h3', { text: L(e.what) }),
        el('p', { class: 'tl-where', text: L(e.where) }),
        e.badges.length ? el('ul', { class: 'badges' }, e.badges.map(function (b) { return el('li', { text: L(b) }); })) : null,
        el('p', { text: L(e.body) })
      ]);
      tl.appendChild(el('li', { class: 'tl-item reveal in', 'data-k': e.k }, [card]));
    });
  }

  /* ---------------- Profiles ---------------- */
  function renderProfiles() {
    var host = $('#profiles');
    host.textContent = '';
    S.profiles.forEach(function (p) {
      var logo = el('span', { class: 'logo', text: p.abbr, 'aria-hidden': 'true' });
      logo.style.background = p.color;
      var a = el('a', { class: 'card profile', href: p.url, target: '_blank', rel: 'noopener noreferrer' }, [
        logo,
        el('div', {}, [el('b', { text: p.name }), el('span', { class: 'h', text: p.handle })]),
        el('span', { class: 'arrow', text: '↗', 'aria-hidden': 'true' })
      ]);
      host.appendChild(a);
    });
  }

  renderAtlasTabs(); showAtlas(0);
  renderCourseMap();
  renderEducation();
  renderProfiles();
  window.APP.onLang(function () { renderAtlasTabs(); showAtlas(atlasIdx); renderCourseMap(); renderEducation(); });

  /* ---------------- Contact ---------------- */
  var EMAIL = $('#email-link').textContent.trim();
  $('#copy').addEventListener('click', function () {
    var msg = $('#copy-msg');
    function done() { msg.textContent = t('contact.copied'); setTimeout(function () { msg.textContent = ''; }, 3000); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(EMAIL).then(done, function () { msg.textContent = EMAIL; });
    else msg.textContent = EMAIL;
  });

  $('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('#cf-name').value.trim(), org = $('#cf-org').value.trim(), msg = $('#cf-msg').value.trim();
    var note = $('#cf-note');
    $('#cf-name').setAttribute('aria-invalid', String(!name));
    $('#cf-msg').setAttribute('aria-invalid', String(!msg));
    if (!name || !msg) { note.textContent = t('contact.need'); (name ? $('#cf-msg') : $('#cf-name')).focus(); return; }
    var subject = 'Hello Shaan — from ' + name + (org ? ' (' + org + ')' : '');
    var body = msg + '\n\n— ' + name + (org ? ', ' + org : '');
    note.textContent = t('contact.opening');
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  $('#year').textContent = new Date().getFullYear();
})();
