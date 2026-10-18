/* Geography lab: three tools built from the B.A. syllabus.
   1. Map projections: 13 projections drawn live, with Tissot-style distortion circles.
   2. Compass traverse: latitudes, departures, closing error and Bowditch adjustment.
   3. Review an answer: find the first wrong step and classify the error, like an AI-training review. */
(function () {
  'use strict';

  var A = window.APP, S = window.SITE;
  var t = A.t, L = A.L, el = A.el, $ = A.$, $$ = A.$$;
  var tabsEl = $('#lab-tabs'), panelsEl = $('#lab-panels');
  if (!tabsEl || !panelsEl) return;

  var D = Math.PI / 180;
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }

  function setupCanvas(canvas, holder, h) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(260, Math.floor(holder.clientWidth));
    h = Math.round(typeof h === 'function' ? h(w) : h);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: w, h: h };
  }
  function legendItem(text, color, cls) {
    var s = el('span', { class: cls || '', text: text });
    s.style.setProperty('--lg', color);
    return s;
  }

  /* =====================================================================
     1. MAP PROJECTIONS
     ===================================================================== */
  var HOME = [27.22, 77.49];                                  // Bharatpur
  var CENTERS = { polar: [90, 0], equatorial: [0, 0], oblique: HOME };
  var PHI1 = 45 * D;                                          // standard parallel for the conics
  var ZEN_MAX = { ortho: 89.5, stereo: 110, gnomonic: 70, aeqd: 178, laea: 165 };   // how far from the centre each zenithal map reaches

  function zenithal(kind) {
    return function (phi, lam, c) {
      var p0 = c[0] * D, l0 = c[1] * D, dl = lam - l0;
      var cosc = Math.sin(p0) * Math.sin(phi) + Math.cos(p0) * Math.cos(phi) * Math.cos(dl);
      if (cosc < Math.cos((ZEN_MAX[kind] + 0.6) * D)) return null;
      var x = Math.cos(phi) * Math.sin(dl);
      var y = Math.cos(p0) * Math.sin(phi) - Math.sin(p0) * Math.cos(phi) * Math.cos(dl);
      var k = 1;
      if (kind === 'stereo') k = 2 / (1 + cosc);
      else if (kind === 'gnomonic') k = 1 / cosc;
      else if (kind === 'aeqd') { var cc = Math.acos(clamp(cosc, -1, 1)); k = cc < 1e-9 ? 1 : cc / Math.sin(cc); }
      else if (kind === 'laea') k = Math.sqrt(2 / (1 + cosc));
      return [k * x, k * y];
    };
  }
  var PF = {
    equirect: function (p, l) { return [l, p]; },
    mercator: function (p, l) { return Math.abs(p) > 82.5 * D ? null : [l, Math.log(Math.tan(Math.PI / 4 + p / 2))]; },
    cea: function (p, l) { return [l, Math.sin(p)]; },
    gall: function (p, l) { return [l / Math.SQRT2, (1 + Math.SQRT2 / 2) * Math.tan(p / 2)]; },
    ortho: zenithal('ortho'), stereo: zenithal('stereo'), gnomonic: zenithal('gnomonic'), aeqd: zenithal('aeqd'), laea: zenithal('laea'),
    conic: function (p, l) {
      if (p < -30.5 * D) return null;
      var n = Math.sin(PHI1), rho = 1 / Math.tan(PHI1) + (PHI1 - p), th = n * l;
      return [rho * Math.sin(th), 1 / Math.tan(PHI1) - rho * Math.cos(th)];
    },
    bonne: function (p, l) {
      var rho = 1 / Math.tan(PHI1) + PHI1 - p, E = l * Math.cos(p) / rho;
      return [rho * Math.sin(E), 1 / Math.tan(PHI1) - rho * Math.cos(E)];
    },
    sinu: function (p, l) { return [l * Math.cos(p), p]; },
    moll: function (p, l) {
      var th = p;
      if (Math.abs(p) < Math.PI / 2 - 1e-6) {
        for (var i = 0; i < 40; i++) {                          // solve 2θ + sin 2θ = π sin φ
          var d = 2 + 2 * Math.cos(2 * th);
          if (d < 1e-12) break;
          var step = (2 * th + Math.sin(2 * th) - Math.PI * Math.sin(p)) / d;
          th -= step;
          if (Math.abs(step) < 1e-10) break;
        }
      }
      return [2 * Math.SQRT2 / Math.PI * l * Math.cos(th), Math.SQRT2 * Math.sin(th)];
    }
  };
  function latLimits(id) { return id === 'mercator' ? [-82, 82] : (id === 'conic' ? [-30, 90] : [-90, 90]); }

  // points on a small circle of angular radius r (degrees) around (lat, lon)
  function smallCircle(lat, lon, r, step) {
    var out = [];
    step = step || 10;
    if (Math.abs(lat) > 89.9) {
      for (var lo = -180; lo <= 180; lo += step / 2) out.push([Math.sign(lat) * (90 - r), lo]);
      return out;
    }
    var p1 = lat * D, l1 = lon * D, d = r * D;
    for (var az = 0; az <= 360; az += step) {
      var th = az * D;
      var p2 = Math.asin(Math.sin(p1) * Math.cos(d) + Math.cos(p1) * Math.sin(d) * Math.cos(th));
      var l2 = l1 + Math.atan2(Math.sin(th) * Math.sin(d) * Math.cos(p1), Math.cos(d) - Math.sin(p1) * Math.sin(p2));
      out.push([p2 / D, l2 / D]);
    }
    return out;
  }
  function polyArea(pts) {
    var a = 0;
    for (var i = 0; i < pts.length; i++) { var p = pts[i], q = pts[(i + 1) % pts.length]; a += p[0] * q[1] - q[0] * p[1]; }
    return Math.abs(a) / 2;
  }

  function ProjectionTool(host) {
    var st = { id: 'mercator', center: 'oblique', tissot: true };
    var cache = {}, canvas, holder, info, csel;

    function meta(id) { for (var i = 0; i < S.projections.length; i++) if (S.projections[i].id === id) return S.projections[i]; return null; }
    function center() { return CENTERS[st.center]; }
    function raw(lat, lon) { return PF[st.id](lat * D, lon * D, center()); }

    function bounds() {
      var key = st.id + (meta(st.id).fam === 'zen' ? '-' + st.center : '');
      if (cache[key]) return cache[key];
      var lim = latLimits(st.id), b = { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity };
      for (var la = lim[0]; la <= lim[1]; la += 1.5) for (var lo = -180; lo <= 180; lo += 3) {
        var r = raw(la, lo); if (!r) continue;
        if (r[0] < b.minX) b.minX = r[0]; if (r[0] > b.maxX) b.maxX = r[0];
        if (r[1] < b.minY) b.minY = r[1]; if (r[1] > b.maxY) b.maxY = r[1];
      }
      return (cache[key] = b);
    }

    function render() {
      host.textContent = '';
      host.appendChild(el('p', { class: 'tool-intro', text: t('pj.intro') }));

      var sel = el('select', { class: 'select', id: 'pj-sel' });
      ['cyl', 'zen', 'con', 'conv'].forEach(function (fam) {
        var g = el('optgroup', { label: t('fam.' + fam) });
        S.projections.filter(function (p) { return p.fam === fam; }).forEach(function (p) { g.appendChild(el('option', { value: p.id, text: L(p.name) })); });
        sel.appendChild(g);
      });
      sel.value = st.id;
      csel = el('select', { class: 'select', id: 'pj-ctr' }, ['polar', 'equatorial', 'oblique'].map(function (c) { return el('option', { value: c, text: t('pj.' + c) }); }));
      csel.value = st.center;
      var chk = el('input', { type: 'checkbox', id: 'pj-tis' });
      chk.checked = st.tissot;

      holder = el('div', { class: 'plot-wrap' });
      canvas = el('canvas', { class: 'plot', role: 'img', 'aria-label': t('pj.canvas') });
      holder.appendChild(canvas);
      info = el('div', { class: 'info' });

      var legend = el('div', { class: 'legend' }, [
        legendItem(t('pj.lgEq'), 'var(--accent-2)'),
        legendItem(t('pj.lgTr'), 'var(--accent-2)', 'dashed'),
        legendItem(t('pj.lgHome'), 'var(--accent)', 'dotted')
      ]);
      host.appendChild(el('div', { class: 'tool-grid' }, [
        el('div', {}, [holder, legend]),
        el('div', {}, [
          el('div', { class: 'ctrl' }, [el('label', { for: 'pj-sel', text: t('pj.proj') }), sel]),
          el('div', { class: 'ctrl' }, [el('label', { for: 'pj-ctr', text: t('pj.center') }), csel]),
          el('label', { class: 'check' }, [chk, t('pj.tissot')]),
          info
        ])
      ]));

      sel.addEventListener('change', function () { st.id = sel.value; update(); });
      csel.addEventListener('change', function () { st.center = csel.value; update(); });
      chk.addEventListener('change', function () { st.tissot = chk.checked; draw(); });
      update();
    }

    function update() {
      csel.disabled = meta(st.id).fam !== 'zen';
      draw();
      renderInfo();
    }

    function draw() {
      if (!holder || !holder.offsetParent) return;
      var b = bounds(), bx = b.maxX - b.minX, by = b.maxY - b.minY;
      var c = setupCanvas(canvas, holder, function (w) { return clamp(w * by / bx + 24, 240, 520); });
      var ctx = c.ctx, w = c.w, h = c.h, pad = 14;
      var s = Math.min((w - 2 * pad) / bx, (h - 2 * pad) / by);
      var ox = (w - bx * s) / 2, oy = (h - by * s) / 2;
      function P(lat, lon) { var r = raw(lat, lon); return r ? [ox + (r[0] - b.minX) * s, oy + (b.maxY - r[1]) * s] : null; }
      function path(pts, close) {
        var pen = false, prev = null, first = null;
        ctx.beginPath();
        for (var i = 0; i < pts.length; i++) {
          var p = pts[i];
          if (!p) { pen = false; prev = null; continue; }
          if (pen && prev && Math.abs(p[0] - prev[0]) + Math.abs(p[1] - prev[1]) > w * 0.3) pen = false;
          if (!pen) { ctx.moveTo(p[0], p[1]); pen = true; if (!first) first = p; } else ctx.lineTo(p[0], p[1]);
          prev = p;
        }
        if (close) ctx.closePath();
      }
      var lim = latLimits(st.id), lat, lon, pts;
      var col = { ocean: A.cssv('--ocean'), border: A.cssv('--border'), muted: A.cssv('--muted'), teal: A.cssv('--accent-2'), acc: A.cssv('--accent'), tis: A.cssv('--c1'), surf: A.cssv('--surface'), text: A.cssv('--text') };

      ctx.clearRect(0, 0, w, h);

      // outline of the mapped world
      if (meta(st.id).fam === 'zen') {
        var ctr = center();
        pts = smallCircle(ctr[0], ctr[1], ZEN_MAX[st.id], 3).map(function (q) { return P(q[0], q[1]); });
      } else {
        pts = [];
        for (lat = lim[0]; lat <= lim[1]; lat += 2) pts.push(P(lat, -180));
        for (lon = -180; lon <= 180; lon += 2) pts.push(P(lim[1], lon));
        for (lat = lim[1]; lat >= lim[0]; lat -= 2) pts.push(P(lat, 180));
        for (lon = 180; lon >= -180; lon -= 2) pts.push(P(lim[0], lon));
      }
      path(pts, true);
      ctx.fillStyle = col.ocean; ctx.fill();
      ctx.strokeStyle = col.muted; ctx.lineWidth = 1.2; ctx.stroke();

      // graticule every 15°
      ctx.save();
      ctx.globalAlpha = 0.45; ctx.strokeStyle = col.muted; ctx.lineWidth = 0.8;
      for (lat = Math.ceil(lim[0] / 15) * 15; lat <= lim[1]; lat += 15) {
        if (Math.abs(lat) === 90 || lat === 0) continue;
        pts = []; for (lon = -180; lon <= 180; lon += 2) pts.push(P(lat, lon));
        path(pts); ctx.stroke();
      }
      for (lon = -180; lon <= 180; lon += 15) {
        pts = []; for (lat = lim[0]; lat <= lim[1]; lat += 2) pts.push(P(lat, lon));
        path(pts); ctx.stroke();
      }
      ctx.restore();

      // equator and tropics
      function parallel(la) { var q = []; for (var lo = -180; lo <= 180; lo += 2) q.push(P(la, lo)); path(q); ctx.stroke(); }
      ctx.strokeStyle = col.teal; ctx.lineWidth = 2; parallel(0);
      ctx.setLineDash([6, 5]); ctx.lineWidth = 1.4; parallel(23.44); parallel(-23.44); ctx.setLineDash([]);

      // distortion circles: equal 6° circles on the globe
      if (st.tissot) {
        ctx.save();
        [-60, -30, 0, 30, 60].forEach(function (la) {
          [-150, -90, -30, 30, 90, 150].forEach(function (lo) {
            var q = smallCircle(la, lo, 6, 12).map(function (g) { return P(g[0], g[1]); });
            for (var i = 0; i < q.length; i++) {
              if (!q[i]) return;
              if (i && Math.abs(q[i][0] - q[i - 1][0]) + Math.abs(q[i][1] - q[i - 1][1]) > w * 0.25) return;
            }
            path(q, true);
            ctx.globalAlpha = 0.28; ctx.fillStyle = col.tis; ctx.fill();
            ctx.globalAlpha = 0.9; ctx.strokeStyle = col.tis; ctx.lineWidth = 1; ctx.stroke();
          });
        });
        ctx.restore();
      }

      // Bharatpur
      var hp = P(HOME[0], HOME[1]);
      if (hp) {
        ctx.beginPath(); ctx.arc(hp[0], hp[1], 5.5, 0, 2 * Math.PI);
        ctx.fillStyle = col.acc; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = col.surf; ctx.stroke();
        ctx.font = '600 12px system-ui, sans-serif';
        ctx.fillStyle = col.text;
        var label = t('pj.lgHome'), tw = ctx.measureText(label).width;
        var lx = hp[0] + 9 + tw > w - 4 ? hp[0] - 9 - tw : hp[0] + 9;
        ctx.fillText(label, lx, hp[1] + 4);
      }
    }

    function areaRatio() {
      var zen = meta(st.id).fam === 'zen', c = center(), a, b2;
      if (zen) { a = c; b2 = [c[0] + 60 <= 89 ? c[0] + 60 : c[0] - 60, c[1]]; }
      else { a = [0, 0]; b2 = [60, 0]; }
      function area(pt) {
        var q = smallCircle(pt[0], pt[1], 6, 6).map(function (g) { return raw(g[0], g[1]); });
        for (var i = 0; i < q.length; i++) if (!q[i]) return null;
        return polyArea(q);
      }
      var A0 = area(a), A1 = area(b2);
      if (!A0 || !A1) return { zen: zen, x: null };
      var r = A1 / A0;
      return { zen: zen, x: r < 10 ? r.toFixed(2) : r.toFixed(1) };
    }

    function renderInfo() {
      var m = meta(st.id), r = areaRatio();
      info.textContent = '';
      info.appendChild(el('h4', { text: L(m.name) }));
      info.appendChild(el('dl', {}, [
        el('div', {}, [el('dt', { text: t('pj.family') }), el('dd', { text: t('fam.' + m.fam) })]),
        el('div', {}, [el('dt', { text: t('pj.preserves') }), el('dd', { text: t('prop.' + m.prop) })]),
        el('div', {}, [el('dt', { text: t('pj.note') }), el('dd', { text: L(m.note) })])
      ]));
      info.appendChild(el('p', { class: 'readout', role: 'status', 'aria-live': 'polite',
        text: r.x === null ? t('pj.areaNA') : t(r.zen ? 'pj.areaZ' : 'pj.area', { x: r.x }) }));
    }

    render();
    return { render: render, redraw: draw };
  }

  /* =====================================================================
     2. COMPASS TRAVERSE
     ===================================================================== */
  var PRESETS = {
    closed: { closed: true, legs: [[30, 100], [110, 120], [200, 90], [250, 80], [319.5, 87.6]] },
    open: { closed: false, legs: [[65, 140], [40, 120], [95, 160], [120, 110]] }
  };
  var LETTERS = 'ABCDEFGHIJKL';

  function fmtDeg(a) { return (Math.round(a * 10) / 10).toString(); }
  function reduced(b) {
    if (b < 90) return 'N ' + fmtDeg(b) + '° E';
    if (b < 180) return 'S ' + fmtDeg(180 - b) + '° E';
    if (b < 270) return 'S ' + fmtDeg(b - 180) + '° W';
    return 'N ' + fmtDeg(360 - b) + '° W';
  }
  function sgn(x) { return (x >= 0 ? '+' : '−') + Math.abs(x).toFixed(2); }

  function TraverseTool(host) {
    var st = { preset: 'closed', closed: true, exag: true, legs: PRESETS.closed.legs.map(function (l) { return l.slice(); }) };
    var tbody, out, canvas, holder, exagWrap;

    function legName(i) {
      var n = st.legs.length;
      return LETTERS[i] + '→' + (st.closed && i === n - 1 ? 'A' : LETTERS[i + 1]);
    }

    function render() {
      host.textContent = '';
      host.appendChild(el('p', { class: 'tool-intro', text: t('tv.intro') }));

      var psel = el('select', { class: 'select', id: 'tv-preset' }, [
        el('option', { value: 'closed', text: t('tv.pClosed') }),
        el('option', { value: 'open', text: t('tv.pOpen') })
      ]);
      psel.value = st.preset;
      var cchk = el('input', { type: 'checkbox', id: 'tv-closed' }); cchk.checked = st.closed;
      var echk = el('input', { type: 'checkbox', id: 'tv-exag' }); echk.checked = st.exag;
      exagWrap = el('label', { class: 'check' }, [echk, t('tv.exag')]);
      host.appendChild(el('div', { class: 'tv-top' }, [
        el('div', { class: 'ctrl' }, [el('label', { for: 'tv-preset', text: t('tv.preset') }), psel]),
        el('label', { class: 'check' }, [cchk, t('tv.isClosed')]),
        exagWrap
      ]));

      tbody = el('tbody');
      var inTable = el('table', { class: 'data' }, [
        el('thead', {}, [el('tr', {}, [t('tv.leg'), t('tv.bearing'), t('tv.length'), ''].map(function (h) { return el('th', { scope: 'col', text: h }); }))]),
        tbody
      ]);
      var add = el('button', { class: 'btn small', type: 'button', text: t('tv.add') });
      holder = el('div', { class: 'plot-wrap' });
      canvas = el('canvas', { class: 'plot', role: 'img', 'aria-label': t('tv.canvas') });
      holder.appendChild(canvas);
      out = el('div');

      host.appendChild(el('div', { class: 'tv-out' }, [
        el('div', {}, [el('div', { class: 'table-wrap' }, [inTable]), el('div', { class: 'ctrl-row cta' }, [add])]),
        el('div', {}, [holder, el('div', { class: 'legend' }, [
          legendItem(t('tv.lgObs'), 'var(--c1)', 'dashed'),
          legendItem(t('tv.lgAdj'), 'var(--c2)')
        ])])
      ]));
      host.appendChild(out);

      psel.addEventListener('change', function () {
        var p = PRESETS[psel.value];
        st.preset = psel.value; st.closed = p.closed; cchk.checked = p.closed;
        st.legs = p.legs.map(function (l) { return l.slice(); });
        renderInputs(); update();
      });
      cchk.addEventListener('change', function () { st.closed = cchk.checked; renderInputs(); update(); });
      echk.addEventListener('change', function () { st.exag = echk.checked; draw(); });
      add.addEventListener('click', function () {
        if (st.legs.length >= 10) return;
        st.legs.push([90, 50]);
        renderInputs(); update();
        var inputs = $$('input', tbody); inputs[inputs.length - 2].focus();
      });

      renderInputs();
      update();
    }

    function renderInputs() {
      tbody.textContent = '';
      st.legs.forEach(function (leg, i) {
        var bIn = el('input', { type: 'number', min: '0', max: '359.9', step: '0.5', inputmode: 'decimal', value: String(leg[0]), 'aria-label': legName(i) + ' ' + t('tv.bearing') });
        var lIn = el('input', { type: 'number', min: '0.1', step: '0.1', inputmode: 'decimal', value: String(leg[1]), 'aria-label': legName(i) + ' ' + t('tv.length') });
        var rm = el('button', { class: 'icon-x', type: 'button', text: '×', 'aria-label': t('tv.remove', { n: legName(i) }) });
        rm.disabled = st.legs.length <= 2;
        bIn.addEventListener('input', function () { st.legs[i][0] = parseFloat(bIn.value); update(); });
        lIn.addEventListener('input', function () { st.legs[i][1] = parseFloat(lIn.value); update(); });
        rm.addEventListener('click', function () { st.legs.splice(i, 1); renderInputs(); update(); });
        tbody.appendChild(el('tr', {}, [el('td', { text: legName(i) }), el('td', {}, [bIn]), el('td', {}, [lIn]), el('td', {}, [rm])]));
      });
    }

    function compute() {
      var ok = true;
      st.legs.forEach(function (l, i) {
        var good = isFinite(l[0]) && l[0] >= 0 && l[0] < 360 && isFinite(l[1]) && l[1] > 0;
        var row = tbody.children[i];
        if (row) { var ins = $$('input', row); ins[0].setAttribute('aria-invalid', String(!(isFinite(l[0]) && l[0] >= 0 && l[0] < 360))); ins[1].setAttribute('aria-invalid', String(!(isFinite(l[1]) && l[1] > 0))); }
        if (!good) ok = false;
      });
      if (!ok) return null;
      var rows = st.legs.map(function (l) { return { b: l[0], len: l[1], dN: l[1] * Math.cos(l[0] * D), dE: l[1] * Math.sin(l[0] * D) }; });
      var sN = 0, sE = 0, per = 0;
      rows.forEach(function (r) { sN += r.dN; sE += r.dE; per += r.len; });
      var res = { rows: rows, sN: sN, sE: sE, per: per, err: Math.hypot(sN, sE) };
      var obs = [[0, 0]], adj = [[0, 0]], n = 0, e = 0, an = 0, ae = 0;
      rows.forEach(function (r) {
        r.aN = r.dN - sN * r.len / per;       // Bowditch: share the misclosure in proportion to leg length
        r.aE = r.dE - sE * r.len / per;
        n += r.dN; e += r.dE; an += r.aN; ae += r.aE;
        obs.push([e, n]); adj.push([ae, an]);
      });
      res.obs = obs; res.adj = adj;
      return res;
    }

    function update() {
      exagWrap.hidden = !st.closed;
      var r = compute();
      out.textContent = '';
      if (!r) { out.appendChild(el('p', { class: 'note', role: 'status', text: t('tv.invalid') })); draw(null); return; }

      var heads = [t('tv.leg'), t('tv.rb'), t('tv.lat'), t('tv.dep')];
      if (st.closed) heads.push(t('tv.adjN'), t('tv.adjE'));
      var body = el('tbody', {}, r.rows.map(function (row, i) {
        var cells = [legName(i), reduced(row.b), sgn(row.dN), sgn(row.dE)];
        if (st.closed) cells.push(sgn(row.aN), sgn(row.aE));
        return el('tr', {}, cells.map(function (c) { return el('td', { text: c }); }));
      }));
      var foot = [t('tv.sum'), r.per.toFixed(2) + ' m', sgn(r.sN), sgn(r.sE)];
      if (st.closed) foot.push(sgn(0), sgn(0));
      out.appendChild(el('div', { class: 'table-wrap' }, [el('table', { class: 'data' }, [
        el('thead', {}, [el('tr', {}, heads.map(function (h) { return el('th', { scope: 'col', text: h }); }))]),
        body,
        el('tfoot', {}, [el('tr', {}, foot.map(function (c) { return el('td', { text: c }); }))])
      ])]));

      var note;
      if (st.closed) {
        note = r.err < 0.005 ? t('tv.errNone') : t('tv.err', { e: r.err.toFixed(r.err < 1 ? 3 : 2), p: r.per.toFixed(1), r: Math.round(r.per / r.err).toLocaleString('en-IN') }) + ' ' + t('tv.bow');
      } else {
        note = t('tv.openNote', { d: Math.hypot(r.sN, r.sE).toFixed(1) });
      }
      out.appendChild(el('p', { class: 'note', role: 'status', 'aria-live': 'polite', text: note }));
      draw(r);
    }

    var lastResult = null;
    function draw(r) {
      if (r !== undefined) lastResult = r;
      r = lastResult;
      if (!holder || !holder.offsetParent) return;
      var c = setupCanvas(canvas, holder, function (w) { return clamp(w * 0.68, 240, 420); });
      var ctx = c.ctx, w = c.w, h = c.h, pad = 36;
      ctx.clearRect(0, 0, w, h);
      if (!r) return;
      var k = st.closed && st.exag ? 50 : 1;
      var adj = st.closed ? r.adj : null;
      var obs = r.obs.map(function (p, i) { return st.closed ? [adj[i][0] + (p[0] - adj[i][0]) * k, adj[i][1] + (p[1] - adj[i][1]) * k] : p; });
      var all = obs.concat(adj || []);
      var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      all.forEach(function (p) { minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]); minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); });
      var sx = maxX - minX || 1, sy = maxY - minY || 1;
      var s = Math.min((w - 2 * pad) / sx, (h - 2 * pad) / sy);
      var ox = (w - sx * s) / 2, oy = (h - sy * s) / 2;
      function X(p) { return ox + (p[0] - minX) * s; }
      function Y(p) { return h - (oy + (p[1] - minY) * s); }
      var col = { c1: A.cssv('--c1'), c2: A.cssv('--c2'), muted: A.cssv('--muted'), text: A.cssv('--text'), border: A.cssv('--border'), surf: A.cssv('--surface'), bad: A.cssv('--bad') };

      // light survey grid
      ctx.strokeStyle = col.border; ctx.lineWidth = 1;
      for (var gx = 0; gx < w; gx += 40) { ctx.beginPath(); ctx.moveTo(gx + 0.5, 0); ctx.lineTo(gx + 0.5, h); ctx.stroke(); }
      for (var gy = 0; gy < h; gy += 40) { ctx.beginPath(); ctx.moveTo(0, gy + 0.5); ctx.lineTo(w, gy + 0.5); ctx.stroke(); }

      function line(pts, color, dash, width) {
        ctx.save(); ctx.setLineDash(dash); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineJoin = 'round';
        ctx.beginPath(); pts.forEach(function (p, i) { if (i) ctx.lineTo(X(p), Y(p)); else ctx.moveTo(X(p), Y(p)); }); ctx.stroke(); ctx.restore();
      }
      line(obs, col.c1, [7, 5], 2);
      if (adj) line(adj, col.c2, [], 2.6);

      // stations
      var stations = adj || obs, n = st.legs.length;
      ctx.font = '700 12px ui-monospace, monospace';
      stations.forEach(function (p, i) {
        if (st.closed && i === n) return;
        ctx.beginPath(); ctx.arc(X(p), Y(p), i === 0 ? 6 : 4.5, 0, 2 * Math.PI);
        ctx.fillStyle = i === 0 ? col.text : (adj ? col.c2 : col.c1); ctx.fill();
        ctx.lineWidth = 2; ctx.strokeStyle = col.surf; ctx.stroke();
        ctx.fillStyle = col.text; ctx.fillText(LETTERS[i], X(p) + 8, Y(p) - 8);
      });
      if (st.closed) {                                       // where the observed traverse actually ended
        var end = obs[obs.length - 1];
        ctx.beginPath(); ctx.arc(X(end), Y(end), 5, 0, 2 * Math.PI);
        ctx.strokeStyle = col.bad; ctx.lineWidth = 2; ctx.stroke();
      }

      // north arrow
      var nx = w - 24, ny = 14;
      ctx.beginPath(); ctx.moveTo(nx, ny); ctx.lineTo(nx - 7, ny + 20); ctx.lineTo(nx + 7, ny + 20); ctx.closePath();
      ctx.fillStyle = col.c1; ctx.fill();
      ctx.fillStyle = col.text; ctx.font = '700 11px ui-monospace, monospace'; ctx.textAlign = 'center'; ctx.fillText('N', nx, ny + 33); ctx.textAlign = 'start';

      // scale bar
      var target = (w / 4) / s, mag = Math.pow(10, Math.floor(Math.log10(target)));
      var len = [1, 2, 5, 10].map(function (m) { return m * mag; }).filter(function (v) { return v <= target; }).pop() || mag;
      var bx = 14, by = h - 16, bw = len * s;
      ctx.fillStyle = col.text; ctx.fillRect(bx, by, bw, 3);
      ctx.fillRect(bx, by - 4, 2, 10); ctx.fillRect(bx + bw - 2, by - 4, 2, 10);
      ctx.font = '600 11px ui-monospace, monospace'; ctx.fillText(len + ' m', bx + bw + 6, by + 5);
    }

    render();
    return { render: render, redraw: function () { draw(); } };
  }

  /* =====================================================================
     3. REVIEW AN ANSWER
     ===================================================================== */
  var TYPES = ['fact', 'calc', 'unit', 'logic'];

  function ReviewTool(host) {
    var st = { order: A.shuffled(S.cases.map(function (_, i) { return i; })), pos: 0, done: 0 };
    function fresh() { st.phase = 'find'; st.marks = {}; st.wrongTypes = []; st.msg = null; }
    fresh();

    function render() {
      var c = S.cases[st.order[st.pos]];
      host.textContent = '';
      host.setAttribute('data-k', c.k);
      host.appendChild(el('p', { class: 'tool-intro', text: t('rv.intro') }));
      host.appendChild(el('div', { class: 'quiz-top' }, [
        el('span', { class: 'pill', text: L(c.topic) }),
        el('span', { class: 'q-type', text: t('rv.case', { n: st.pos + 1, t: S.cases.length }) })
      ]));
      host.appendChild(el('div', { class: 'rv-q' }, [el('b', { text: t('rv.question') }), L(c.q)]));
      host.appendChild(el('p', { class: 'rv-prompt', text: t('rv.response') }));

      var list = el('ol', { class: 'rv-resp' });
      c.steps.forEach(function (s, i) {
        var cls = 'step';
        if (i === c.flaw && st.phase !== 'find') cls += ' flaw';
        else if (st.marks[i]) cls += ' ' + st.marks[i];
        var b = el('button', { class: cls, type: 'button', text: L(s) });
        b.disabled = st.phase !== 'find' || !!st.marks[i];
        b.addEventListener('click', function () { clickStep(c, i); });
        list.appendChild(el('li', {}, [b]));
      });
      host.appendChild(list);

      if (st.phase === 'find') host.appendChild(el('p', { class: 'rv-prompt', text: t('rv.step1') }));
      if (st.phase === 'type' || st.phase === 'done') {
        host.appendChild(el('p', { class: 'rv-prompt', text: t('rv.step2') }));
        host.appendChild(el('div', { class: 'types' }, TYPES.map(function (ty) {
          var b = el('button', { class: 'btn small' + (st.phase === 'done' && ty === c.type ? ' primary' : ''), type: 'button', text: t('et.' + ty) });
          b.disabled = st.phase === 'done' || st.wrongTypes.indexOf(ty) !== -1;
          b.addEventListener('click', function () { clickType(c, ty); });
          return b;
        })));
      }

      var fb = el('div', { class: 'feedback', role: 'status', 'aria-live': 'polite' });
      if (st.msg) {
        fb.appendChild(el('strong', { class: st.msg.ok ? 'ok' : 'bad', text: t(st.msg.lead) }));
        fb.appendChild(document.createTextNode(st.msg.body ? t(st.msg.body) : ''));
      }
      host.appendChild(fb);

      if (st.phase === 'done') {
        host.appendChild(el('p', { text: L(c.why) }));
        host.appendChild(el('div', { class: 'fix' }, [el('b', { text: t('rv.fix') }), L(c.fix)]));
        host.appendChild(el('p', { class: 'rv-prompt', text: t('rv.rubric') }));
        host.appendChild(el('div', { class: 'rubric' }, ['rb.acc', 'rb.reason', 'rb.clarity'].map(function (key, i) {
          var bar = el('span', { class: 'rbar' }, [el('span')]);
          bar.firstChild.style.width = (c.rubric[i] / 5 * 100) + '%';
          return el('div', { class: 'rubric-row' }, [el('span', { text: t(key) }), bar, el('b', { class: 'mono', text: String(c.rubric[i]) })]);
        })));
        var nb = el('button', { class: 'btn primary small rv-next', type: 'button', text: t('rv.next') });
        nb.addEventListener('click', function () {
          st.pos = (st.pos + 1) % st.order.length;
          if (st.pos === 0) st.order = A.shuffled(st.order);
          fresh(); render();
          var first = $('.step', host); if (first) first.focus({ preventScroll: true });
        });
        host.appendChild(nb);
      }
    }

    function clickStep(c, i) {
      if (i === c.flaw) {
        st.phase = 'type';
        st.msg = { ok: true, lead: 'rv.found', body: null };
      } else if (c.later.indexOf(i) !== -1) {
        st.marks[i] = 'later';
        st.msg = { ok: false, lead: 'q.notQuite', body: 'rv.later' };
      } else {
        st.marks[i] = 'fine';
        st.msg = { ok: false, lead: 'q.notQuite', body: 'rv.notThis' };
      }
      render();
      var focusEl = st.phase === 'type' ? $('.types .btn', host) : $('.step:not(:disabled)', host);
      if (focusEl) focusEl.focus({ preventScroll: true });
    }

    function clickType(c, ty) {
      if (ty === c.type) {
        st.phase = 'done'; st.done++;
        st.msg = { ok: true, lead: 'rv.correct', body: null };
        render();
        var nb = $('.rv-next', host); if (nb) nb.focus({ preventScroll: true });
      } else {
        st.wrongTypes.push(ty);
        st.msg = { ok: false, lead: 'q.notQuite', body: 'rv.typeWrong' };
        render();
        var b = $('.types .btn:not(:disabled)', host); if (b) b.focus({ preventScroll: true });
      }
    }

    render();
    return { render: render, redraw: function () {} };
  }

  /* =====================================================================
     Tabs
     ===================================================================== */
  var TOOLS = [
    { id: 'proj', key: 'lab.t1', k: 1, make: ProjectionTool },
    { id: 'trav', key: 'lab.t2', k: 2, make: TraverseTool },
    { id: 'rev', key: 'lab.t3', k: 6, make: ReviewTool }
  ];
  var current = 0;

  function show(i) {
    current = i;
    TOOLS.forEach(function (tool, j) {
      var on = i === j;
      tool.tab.setAttribute('aria-selected', String(on));
      tool.tab.setAttribute('tabindex', on ? '0' : '-1');
      tool.panel.hidden = !on;
    });
    var tool = TOOLS[i];
    if (!tool.inst) tool.inst = tool.make(tool.panel);
    else tool.inst.redraw();
  }

  TOOLS.forEach(function (tool, i) {
    tool.tab = el('button', { class: 'tab', role: 'tab', id: 'labtab-' + tool.id, type: 'button', 'aria-controls': 'labpanel-' + tool.id, 'data-k': tool.k },
      [el('span', { class: 'n', text: String(i + 1), 'aria-hidden': 'true' }), el('span', { class: 'lbl', text: t(tool.key) })]);
    tool.panel = el('div', { class: 'card lab-panel', role: 'tabpanel', id: 'labpanel-' + tool.id, 'aria-labelledby': 'labtab-' + tool.id, 'data-k': tool.k });
    tool.panel.hidden = true;
    tool.tab.addEventListener('click', function () { show(i); });
    tool.tab.addEventListener('keydown', function (e) {
      var rtl = A.lang() === 'ur', n = null;
      if (e.key === (rtl ? 'ArrowLeft' : 'ArrowRight')) n = (i + 1) % TOOLS.length;
      if (e.key === (rtl ? 'ArrowRight' : 'ArrowLeft')) n = (i - 1 + TOOLS.length) % TOOLS.length;
      if (n !== null) { e.preventDefault(); show(n); TOOLS[n].tab.focus(); }
    });
    tabsEl.appendChild(tool.tab);
    panelsEl.appendChild(tool.panel);
  });
  show(0);

  A.onLang(function () {
    TOOLS.forEach(function (tool) {
      $('.lbl', tool.tab).textContent = t(tool.key);
      if (tool.inst) tool.inst.render();
    });
  });

  function redrawCurrent() { var tool = TOOLS[current]; if (tool.inst) tool.inst.redraw(); }
  new MutationObserver(redrawCurrent).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  var rt = null, lastW = window.innerWidth;
  window.addEventListener('resize', function () {
    if (window.innerWidth === lastW) return;
    lastW = window.innerWidth;
    clearTimeout(rt); rt = setTimeout(redrawCurrent, 150);
  });
})();
