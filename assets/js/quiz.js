/* Quick checks: three random question cards. A wrong pick shows a hint; the right one shows the explanation. */
(function () {
  'use strict';

  var A = window.APP, S = window.SITE;
  var t = A.t, L = A.L, el = A.el, $ = A.$;
  var deck = $('#deck'), scoreEl = $('#score');
  if (!deck) return;

  var KEYS = { geo: 1, map: 2, stat: 3, soc: 5 };
  var used = [];
  var stats = { solved: 0, first: 0 };

  function pick() {
    var onTable = Array.prototype.map.call(deck.children, function (c) { return Number(c.getAttribute('data-q')); });
    var free = [];
    S.quiz.forEach(function (_, i) { if (used.indexOf(i) === -1 && onTable.indexOf(i) === -1) free.push(i); });
    if (!free.length) {                       // all shown: start a new round, never repeating a card on the table
      used = [];
      S.quiz.forEach(function (_, i) { if (onTable.indexOf(i) === -1) free.push(i); });
    }
    var idx = free[Math.floor(Math.random() * free.length)];
    used.push(idx);
    return idx;
  }

  function renderScore() {
    scoreEl.textContent = stats.solved ? t('q.score', { s: stats.solved, f: stats.first }) : t('q.pick');
  }

  function makeCard(qi) {
    var p = S.quiz[qi], tries = 0, finished = false;
    var card = el('article', { class: 'card quiz swap', 'data-k': KEYS[p.cat] || 1, 'data-q': qi });
    card.appendChild(el('div', { class: 'quiz-top' }, [
      el('span', { class: 'pill', text: t('cat.' + p.cat) }),
      el('span', { class: 'q-type mono', text: '#' + (qi + 1) })
    ]));
    card.appendChild(el('p', { class: 'q', text: L(p.q) }));

    var list = el('div', { class: 'opts' });
    var fb = el('div', { class: 'feedback', role: 'status', 'aria-live': 'polite' });
    var actions = el('div', { class: 'quiz-actions' });
    var skip = el('button', { class: 'linkish', type: 'button', text: t('q.skip') });
    actions.appendChild(skip);

    function next() {
      var fresh = makeCard(pick());
      deck.replaceChild(fresh, card);
      var first = $('.opt', fresh);
      if (first) first.focus({ preventScroll: true });
    }
    skip.addEventListener('click', next);

    var opts = A.shuffled(p.opts.map(function (o, i) { return { o: o, ok: i === 0 }; }));
    var buttons = opts.map(function (x) {
      var b = el('button', { class: 'opt', type: 'button', text: L(x.o.t) });
      b.addEventListener('click', function () {
        if (finished) return;
        fb.textContent = '';
        if (x.ok) {
          finished = true;
          b.classList.add('right');
          buttons.forEach(function (y) { y.disabled = true; });
          stats.solved++;
          if (tries === 0) stats.first++;
          renderScore();
          fb.appendChild(el('strong', { class: 'ok', text: tries === 0 ? t('q.correct') : t('q.got') }));
          fb.appendChild(document.createTextNode(L(p.exp)));
          actions.textContent = '';
          var nb = el('button', { class: 'btn primary small', type: 'button', text: t('q.next') });
          nb.addEventListener('click', next);
          actions.appendChild(nb);
        } else {
          tries++;
          b.classList.add('wrong');
          b.disabled = true;
          fb.appendChild(el('strong', { class: 'bad', text: t('q.notQuite') }));
          fb.appendChild(document.createTextNode(L(x.o.h)));
        }
      });
      list.appendChild(b);
      return b;
    });

    card.appendChild(list);
    card.appendChild(fb);
    card.appendChild(actions);
    return card;
  }

  function deal() {
    deck.textContent = '';
    for (var i = 0; i < 3; i++) deck.appendChild(makeCard(pick()));
  }

  $('#shuffle').addEventListener('click', deal);
  A.onLang(function () {                       // redraw the same three questions in the new language
    var ids = Array.prototype.map.call(deck.children, function (c) { return Number(c.getAttribute('data-q')); });
    deck.textContent = '';
    ids.forEach(function (qi) { deck.appendChild(makeCard(qi)); });
    renderScore();
  });
  renderScore();
  deal();
})();
