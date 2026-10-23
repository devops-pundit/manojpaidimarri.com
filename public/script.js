const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.primary-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVisual.addEventListener('pointermove', (event) => {
    const r = heroVisual.getBoundingClientRect();
    const x = ((event.clientX - r.left) / r.width - 0.5) * 10;
    const y = ((event.clientY - r.top) / r.height - 0.5) * 10;
    heroVisual.style.setProperty('--mx', `${x}px`);
    heroVisual.style.setProperty('--my', `${y}px`);
    heroVisual.querySelector('img').style.transform = `translate(${x * .35}px, ${y * .35}px)`;
  });
  heroVisual.addEventListener('pointerleave', () => {
    heroVisual.querySelector('img').style.transform = '';
  });
}
