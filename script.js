// ── Configuración ──────────────────────────────────
const INTERVALO = 4000; // milisegundos entre fotos (4 segundos)

// ── Referencias al DOM ────────────────────────────
const slides       = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
const prevBtn      = document.getElementById('prevBtn');
const nextBtn      = document.getElementById('nextBtn');
const currentEl    = document.getElementById('current');
const totalEl      = document.getElementById('total');
const progressFill = document.getElementById('progressFill');

let current  = 0;
let timer    = null;
let progTimer = null;

// ── Inicializar ───────────────────────────────────
function init() {
  const total = slides.length;
  totalEl.textContent = String(total).padStart(2, '0');

  // Crear puntos
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Ir a foto ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  goTo(0);
  startAuto();
}

// ── Ir a un slide ─────────────────────────────────
function goTo(index) {
  slides[current].classList.remove('active');
  dotsContainer.children[current].classList.remove('active');

  current = (index + slides.length) % slides.length;

  slides[current].classList.add('active');
  dotsContainer.children[current].classList.add('active');
  currentEl.textContent = String(current + 1).padStart(2, '0');

  resetProgress();
}

// ── Autoplay ──────────────────────────────────────
function startAuto() {
  clearInterval(timer);
  timer = setInterval(() => goTo(current + 1), INTERVALO);
}

function resetAuto() {
  startAuto();
}

// ── Barra de progreso ─────────────────────────────
function resetProgress() {
  progressFill.style.transition = 'none';
  progressFill.style.width = '0%';

  // Forzar reflow para reiniciar la animación
  void progressFill.offsetWidth;

  progressFill.style.transition = `width ${INTERVALO}ms linear`;
  progressFill.style.width = '100%';
}

// ── Botones ───────────────────────────────────────
prevBtn.addEventListener('click', () => {
  goTo(current - 1);
  resetAuto();
});

nextBtn.addEventListener('click', () => {
  goTo(current + 1);
  resetAuto();
});

// ── Teclado ───────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft')  { goTo(current - 1); resetAuto(); }
  if (e.key === 'ArrowRight') { goTo(current + 1); resetAuto(); }
});

// ── Iniciar ───────────────────────────────────────
init();
