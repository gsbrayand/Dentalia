// Menú hamburguesa
const btnMenu = document.getElementById('btnMenu');
const nav = document.getElementById('nav');
if (btnMenu && nav) {
  btnMenu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btnMenu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Año dinámico en footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Slider básico
const track = document.getElementById('sliderTrack');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

if (track && prev && next) {
  let i = 0;
  const slides = track.children;
  const total = slides.length;

  function go(n) {
    i = (n + total) % total;
    track.style.transform = `translateX(-${i * 100}%)`;
  }

  prev.addEventListener('click', () => go(i - 1));
  next.addEventListener('click', () => go(i + 1));

  // Auto-play
  setInterval(() => go(i + 1), 5000);
}

// Acordeón suave (opcional: cierre exclusivo)
const acordeon = document.getElementById('acordeon');
if (acordeon) {
  const items = acordeon.querySelectorAll('details');
  items.forEach(d => d.addEventListener('toggle', () => {
    if (d.open) items.forEach(o => { if (o !== d) o.open = false; });
  }));
}
