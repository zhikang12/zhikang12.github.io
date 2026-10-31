/* CAPTURE: intentionally dependency-free. */
(() => {
  'use strict';
  const button = document.querySelector('[data-menu-toggle]');
  const nav = document.getElementById('mobile-navigation');
  if (!button || !nav) return;
  const close = () => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', document.documentElement.lang.startsWith('zh') ? '打开菜单' : 'Open menu');
    nav.hidden = true;
  };
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    if (expanded) close();
    else {
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', document.documentElement.lang.startsWith('zh') ? '关闭菜单' : 'Close menu');
      nav.hidden = false;
    }
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !nav.hidden) { close(); button.focus(); }
  });
  document.addEventListener('click', event => {
    if (!nav.hidden && !nav.contains(event.target) && !button.contains(event.target)) close();
  });
  window.matchMedia('(min-width: 1321px)').addEventListener('change', event => {
    if (event.matches) close();
  });
})();
