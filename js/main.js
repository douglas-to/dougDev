/* ============================================================
   PORTFOLIO — main.js
   Estrutura:
   1. Cursor Customizado
   2. Scroll Reveal (IntersectionObserver)
   3. Stagger (atraso escalonado nos filhos)
   ============================================================ */


/* ── 1. CURSOR CUSTOMIZADO ── */

const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

// Posição atual do mouse
let mx = 0, my = 0;

// Posição atual do anel (suave, com lag)
let rx = 0, ry = 0;

// Atualiza a posição do mouse a cada movimento
document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

// Loop de animação: cursor segue o mouse instantaneamente,
// o anel segue com interpolação suave (lerp)
(function loop() {
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;

  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  ring.style.left   = rx + 'px';
  ring.style.top    = ry + 'px';

  requestAnimationFrame(loop);
})();

// Efeito hover: cursor cresce ao passar em elementos interativos
const interactiveElements = document.querySelectorAll(
  'a, button, .btn, .skill-pill, .project-card, .stat-card'
);

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width        = '28px';
    cursor.style.height       = '28px';
    ring.style.borderColor    = 'var(--accent4)';
  });

  el.addEventListener('mouseleave', () => {
    cursor.style.width        = '14px';
    cursor.style.height       = '14px';
    ring.style.borderColor    = 'var(--accent1)';
  });
});


/* ── 2. SCROLL REVEAL (IntersectionObserver) ── */

// Observa elementos com .reveal e .skill-pill
// Quando entram na viewport, adiciona .visible (que dispara a animação via CSS)

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // Para de observar após revelar
    }
  });
}, {
  threshold: 0.15 // Revela quando 15% do elemento está visível
});

document.querySelectorAll('.reveal, .skill-pill').forEach(el => {
  revealObserver.observe(el);
});


/* ── 3. STAGGER (atraso escalonado nos filhos) ── */

// Aplica um transition-delay crescente em cada filho
// para criar o efeito de entrada em cascata

const staggerParents = document.querySelectorAll(
  '.about-stats, .skills-grid, .projects-grid, .timeline'
);

staggerParents.forEach(parent => {
  [...parent.children].forEach((child, index) => {
    child.style.transitionDelay = (index * 0.08) + 's';
  });
});
