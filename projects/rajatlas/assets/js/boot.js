/* Runs in <head> before the page paints: applies the saved theme and language so there is no flash. */
(function () {
  var root = document.documentElement;
  var theme = null, lang = null;
  try { theme = localStorage.getItem('theme'); lang = localStorage.getItem('lang'); } catch (e) { /* storage blocked */ }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (lang !== 'en' && lang !== 'hi' && lang !== 'ur') {
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    lang = nav === 'hi' || nav === 'ur' ? nav : 'en';
  }
  root.setAttribute('data-theme', theme);
  root.setAttribute('lang', lang);
  root.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
  root.classList.add('js');
})();
