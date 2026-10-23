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

// Use the final transparent illustrated portrait at a stable size.
// Keeping the image itself free of pointer transforms avoids browser resampling
// artifacts while the surrounding architecture elements can continue to move.
const heroVisual = document.querySelector('.hero-visual');
const heroPortrait = heroVisual?.querySelector('img');

if (heroPortrait) {
  heroPortrait.src = '/assets/manoj-cutout.svg';
  heroPortrait.alt = 'Illustrated portrait of Manoj Paidimarri';
  heroPortrait.decoding = 'async';
  heroPortrait.loading = 'eager';
  heroPortrait.style.animation = 'none';
  heroPortrait.style.transform = 'none';
  heroPortrait.style.width = 'min(100%, 640px)';
  heroPortrait.style.height = 'auto';
  heroPortrait.style.imageRendering = 'auto';
}

if (heroVisual) {
  heroVisual.setAttribute('aria-label', 'Illustrated portrait of Manoj Paidimarri with cloud architecture ideas');
}
