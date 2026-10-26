/* RajMap: draws Rajasthan on a canvas with no libraries.
   Projection: Albers equal-area conic (standard parallels 24 and 30 N, origin 27 N, 74 E), the same projection
   the data build uses for centroids, so equal areas on the ground look equal on the screen and a choropleth is fair. */
window.RajMap = (function () {
  'use strict';

  var D = Math.PI / 180;
  var EARTH_R_KM = 6371.0088;               // mean Earth radius; one projection unit = this many km

  /* ---------- pure helpers (also used by tests.html) ---------- */
  function makeAlbers(phi1, phi2, phi0, lam0) {
    phi1 *= D; phi2 *= D; phi0 *= D; lam0 *= D;
    var n = (Math.sin(phi1) + Math.sin(phi2)) / 2;
    var C = Math.cos(phi1) * Math.cos(phi1) + 2 * n * Math.sin(phi1);
    var rho0 = Math.sqrt(C - 2 * n * Math.sin(phi0)) / n;
    return function (lon, lat) {
      var rho = Math.sqrt(C - 2 * n * Math.sin(lat * D)) / n, th = n * (lon * D - lam0);
      return [rho * Math.sin(th), rho0 - rho * Math.cos(th)];          // y points north
    };
  }
  var albers = makeAlbers(24, 30, 27, 74);

  function pointInRing(x, y, ring) {                                    // ring: flat [x0,y0,x1,y1,...]
    var inside = false;
    for (var i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
      var xi = ring[i], yi = ring[i + 1], xj = ring[j], yj = ring[j + 1];
      if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }
  function pointInPolygon(x, y, rings) {                                // even-odd over outer ring and holes
    var inside = false;
    for (var r = 0; r < rings.length; r++) if (pointInRing(x, y, rings[r])) inside = !inside;
    return inside;
  }

  /* quantile classes: returns thresholds (ascending, unique) and a function value -> class index */
  function quantileClasses(values, k) {
    var s = values.slice().sort(function (a, b) { return a - b; }), cuts = [];
    for (var i = 1; i < k; i++) {
      var c = s[Math.floor(i * s.length / k)];
      if (c > s[0] && cuts.indexOf(c) === -1) cuts.push(c);
    }
    return {
      cuts: cuts,
      classOf: function (v) { var c = 0; while (c < cuts.length && v >= cuts[c]) c++; return c; }
    };
  }

  function luminance(hex) {
    var m = /^#?([0-9a-f]{6})$/i.exec(hex);
    if (!m) return 0.5;
    var n = parseInt(m[1], 16), ch = [n >> 16, (n >> 8) & 255, n & 255].map(function (v) {
      v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
  }

  function toPolygons(geom) { return geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates; }

  /* ---------- the map ---------- */
  function create(canvas, districts, context, opts) {
    opts = opts || {};
    var ctx = canvas.getContext('2d');
    var PAD = 26, w = 0, h = 0, dpr = 1, scale = 1;
    var handlers = { select: [], hover: [] };
    var state = { selected: null, hover: null, fill: function () { return '#cccccc'; }, label: function (f) { return f.properties.id; }, lang: 'en' };

    function projectFeature(f) {
      return { f: f, id: f.properties.id, polys: toPolygons(f.geometry).map(function (poly) {
        return poly.map(function (ring) {
          var out = [];
          for (var i = 0; i < ring.length; i++) { var p = albers(ring[i][0], ring[i][1]); out.push(p[0], p[1]); }
          return out;
        });
      }) };
    }
    var dist = districts.features.map(projectFeature);
    var ctxStates = context.features.map(projectFeature);
    var byId = {};
    dist.forEach(function (d) { byId[d.id] = d; });

    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    dist.forEach(function (d) {
      d.polys.forEach(function (rings) {
        var r = rings[0];
        for (var i = 0; i < r.length; i += 2) {
          if (r[i] < minX) minX = r[i]; if (r[i] > maxX) maxX = r[i];
          if (r[i + 1] < minY) minY = r[i + 1]; if (r[i + 1] > maxY) maxY = r[i + 1];
        }
      });
    });
    var bw = maxX - minX, bh = maxY - minY;

    /* screen-space copies of every shape, rebuilt on resize; used for both drawing and hit-testing */
    function toScreen(item) {
      item.sp = item.polys.map(function (rings) {
        return rings.map(function (r) {
          var o = new Array(r.length);
          for (var i = 0; i < r.length; i += 2) { o[i] = PAD + (r[i] - minX) * scale; o[i + 1] = PAD + (maxY - r[i + 1]) * scale; }
          return o;
        });
      });
      var bx0 = Infinity, bx1 = -Infinity;
      item.sp.forEach(function (rings) { var r = rings[0]; for (var i = 0; i < r.length; i += 2) { if (r[i] < bx0) bx0 = r[i]; if (r[i] > bx1) bx1 = r[i]; } });
      item.sw = bx1 - bx0;                                                 // on-screen width, used to decide if a label fits
      var lp = albers(item.f.properties.label_point[0], item.f.properties.label_point[1]);
      item.lx = PAD + (lp[0] - minX) * scale; item.ly = PAD + (maxY - lp[1]) * scale;
    }
    function spanAt(item, y, x) {                                            // free width of the district on the horizontal line y, around x
      var xs = [];
      item.sp.forEach(function (rings) {
        rings.forEach(function (r) {
          for (var i = 0, j = r.length - 2; i < r.length; j = i, i += 2) {
            var yi = r[i + 1], yj = r[j + 1];
            if ((yi > y) !== (yj > y)) xs.push(r[i] + (y - yi) * (r[j] - r[i]) / (yj - yi));
          }
        });
      });
      xs.sort(function (a, b) { return a - b; });
      for (var k = 0; k + 1 < xs.length; k += 2) if (x >= xs[k] && x <= xs[k + 1]) return xs[k + 1] - xs[k];
      return 0;
    }
    function screenXY(lon, lat) { var p = albers(lon, lat); return [PAD + (p[0] - minX) * scale, PAD + (maxY - p[1]) * scale]; }

    function layout() {
      var holder = canvas.parentNode;
      w = Math.max(280, Math.floor(holder.clientWidth));
      scale = (w - 2 * PAD) / bw;
      h = Math.round(bh * scale + 2 * PAD);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dist.forEach(toScreen); ctxStates.forEach(toScreen);
    }

    function tracePath(item) {
      ctx.beginPath();
      item.sp.forEach(function (rings) {
        rings.forEach(function (r) {
          ctx.moveTo(r[0], r[1]);
          for (var i = 2; i < r.length; i += 2) ctx.lineTo(r[i], r[i + 1]);
          ctx.closePath();
        });
      });
    }

    function cssv(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

    function drawGraticule(col, labels) {
      ctx.save(); ctx.direction = 'ltr';
      ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip();
      ctx.strokeStyle = col.grid; ctx.lineWidth = 1; ctx.fillStyle = col.muted;
      ctx.font = '11px ' + col.mono; ctx.textBaseline = 'middle';
      var lat, lon, pts, i, p;
      for (lon = 68; lon <= 80; lon += 2) {                                // meridians, label at the bottom edge
        pts = []; for (lat = 20; lat <= 32; lat += 0.25) pts.push(screenXY(lon, lat));
        if (!labels) { ctx.beginPath(); pts.forEach(function (q, k) { if (k) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }); ctx.stroke(); continue; }
        var best = null; pts.forEach(function (q) { if (q[0] > 14 && q[0] < w - 14 && q[1] < h - 6 && (!best || q[1] > best[1])) best = q; });
        if (best) { ctx.textAlign = 'center'; ctx.fillText(lon + '°E', best[0], best[1] - 7); }
      }
      for (lat = 22; lat <= 32; lat += 2) {                                // parallels, label at the left edge
        pts = []; for (lon = 64; lon <= 84; lon += 0.25) pts.push(screenXY(lon, lat));
        if (!labels) { ctx.beginPath(); pts.forEach(function (q, k) { if (k) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }); ctx.stroke(); continue; }
        var left = null; pts.forEach(function (q) { if (q[1] > 12 && q[1] < h - 12 && q[0] > 4 && (!left || q[0] < left[0])) left = q; });
        if (left) { ctx.textAlign = 'left'; ctx.fillText(lat + '°N', left[0] + 4, left[1] - 8); }
      }
      ctx.restore();
    }

    function haloText(text, x, y, fill, halo, size, weight) {
      ctx.font = (weight || '600') + ' ' + size + 'px ' + cssv('--font-map');
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
      ctx.lineWidth = 3.5; ctx.strokeStyle = halo; ctx.strokeText(text, x, y);
      ctx.fillStyle = fill; ctx.fillText(text, x, y);
    }

    function draw() {
      if (!w) return;
      var col = {
        bg: cssv('--surface-2'), state: cssv('--bg-alt'), border: cssv('--border'), edge: cssv('--surface'),
        text: cssv('--text'), muted: cssv('--muted'), accent: cssv('--accent'), surface: cssv('--surface'),
        grid: cssv('--contour'), mono: cssv('--font-map')
      };
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = col.bg; ctx.fillRect(0, 0, w, h);

      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip();
      ctxStates.forEach(function (s) {                                     // neighbouring states, for context only
        tracePath(s); ctx.fillStyle = col.state; ctx.fill(); ctx.strokeStyle = col.border; ctx.lineWidth = 1; ctx.stroke();
      });
      ctx.restore();
      drawGraticule(col, false);                                           // grid lines sit over the states, under the districts

      dist.forEach(function (d) {
        tracePath(d); d.fill = state.fill(d.id); ctx.fillStyle = d.fill; ctx.fill();
        ctx.strokeStyle = col.edge; ctx.lineWidth = 1; ctx.lineJoin = 'round'; ctx.stroke();
      });

      // labels: a name is drawn only when it fits inside its district at that height and does not collide
      var taken = [];
      function rect(d, name, size) {
        ctx.font = '600 ' + size + 'px ' + col.mono;
        var tw = ctx.measureText(name).width;
        return { x0: d.lx - tw / 2 - 2, x1: d.lx + tw / 2 + 2, y0: d.ly - size * 0.9, y1: d.ly + size * 0.9, tw: tw };
      }
      function overlaps(a) { return taken.some(function (b) { return a.x0 < b.x1 && a.x1 > b.x0 && a.y0 < b.y1 && a.y1 > b.y0; }); }
      [state.selected, state.hover].forEach(function (id) { var d = id && byId[id]; if (d) taken.push(rect(d, state.label(d.f), 12.5)); });
      dist.slice().sort(function (a, b) { return b.f.properties.area_km2 - a.f.properties.area_km2; }).forEach(function (d) {
        if (d.id === state.selected || d.id === state.hover) return;
        var name = state.label(d.f), r = rect(d, name, 11);
        if (r.tw + 6 > spanAt(d, d.ly, d.lx) * 0.94 || overlaps(r)) return;
        taken.push(r);
        haloText(name, d.lx, d.ly, luminance(d.fill) > 0.42 ? '#1f1a14' : '#ffffff', 'rgba(0,0,0,0)', 11, '600');
      });

      [[state.hover, col.text, 2], [state.selected, col.accent, 3.2]].forEach(function (e) {
        var d = e[0] && byId[e[0]];
        if (!d) return;
        tracePath(d); ctx.strokeStyle = e[1]; ctx.lineWidth = e[2]; ctx.lineJoin = 'round'; ctx.stroke();
        haloText(state.label(d.f), d.lx, d.ly, col.text, col.surface, 12.5, '700');
      });

      // neighbouring state names and Pakistan, in muted italics
      ctx.font = 'italic 500 11px ' + col.mono; ctx.fillStyle = col.muted; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctxStates.forEach(function (s) {
        var nm = state.stateLabel ? state.stateLabel(s.f) : s.f.properties.id;
        var lp = screenXY(s.f.properties.label_point[0], s.f.properties.label_point[1]);
        if (lp[0] > 20 && lp[0] < w - 20 && lp[1] > 14 && lp[1] < h - 14) ctx.fillText(nm, lp[0], lp[1]);
      });
      var pk = screenXY(71.2, 29.6);
      if (state.countryLabel) ctx.fillText(state.countryLabel, pk[0], pk[1]);

      drawGraticule(col, true);

      // scale bar: 100 km, true along the standard parallels
      var barPx = 100 * scale / EARTH_R_KM, bx = w - PAD - barPx, by = h - 46;      // above the longitude labels
      ctx.fillStyle = col.text; ctx.fillRect(bx, by, barPx, 3); ctx.fillRect(bx, by - 4, 2, 11); ctx.fillRect(bx + barPx - 2, by - 4, 2, 11);
      ctx.save(); ctx.direction = 'ltr';
      ctx.font = '600 11px ' + col.mono; ctx.textAlign = 'right'; ctx.textBaseline = 'alphabetic';
      ctx.fillText('100 km', bx - 6, by + 6);
      ctx.restore();
    }

    function hit(x, y) {
      for (var i = 0; i < dist.length; i++) {
        var d = dist[i], inside = false;
        for (var p = 0; p < d.sp.length && !inside; p++) inside = pointInPolygon(x, y, d.sp[p]);
        if (inside) return d.id;
      }
      return null;
    }

    function emit(kind, a, b) { handlers[kind].forEach(function (fn) { fn(a, b); }); }
    function local(e) { var r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }

    canvas.addEventListener('pointermove', function (e) {
      var p = local(e), id = hit(p[0], p[1]);
      if (id !== state.hover) { state.hover = id; draw(); }
      emit('hover', id, p);
    });
    canvas.addEventListener('pointerleave', function () { if (state.hover) { state.hover = null; draw(); } emit('hover', null); });
    canvas.addEventListener('click', function (e) {
      var p = local(e), id = hit(p[0], p[1]);
      if (id) emit('select', id);
    });

    layout();
    if (window.ResizeObserver) new ResizeObserver(function () { if (canvas.parentNode.clientWidth !== w) { layout(); draw(); } }).observe(canvas.parentNode);

    return {
      draw: draw, relayout: function () { layout(); draw(); },
      select: function (id) { state.selected = id; draw(); },
      setFill: function (fn) { state.fill = fn; draw(); },
      setLabels: function (fn, stateFn, country) { state.label = fn; state.stateLabel = stateFn; state.countryLabel = country; draw(); },
      on: function (kind, fn) { handlers[kind].push(fn); },
      hitTest: hit,
      screenPoint: function (id) { var d = byId[id]; return d ? [d.lx, d.ly] : null; },
      size: function () { return { w: w, h: h }; }
    };
  }

  return {
    create: create,
    core: { makeAlbers: makeAlbers, albers: albers, pointInRing: pointInRing, pointInPolygon: pointInPolygon, quantileClasses: quantileClasses, luminance: luminance, EARTH_R_KM: EARTH_R_KM }
  };
})();
