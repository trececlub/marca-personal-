// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal con stagger suave
const items = Array.from(document.querySelectorAll(".reveal"));

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    // Stagger por grupo: usa el orden visual
    const el = entry.target;
    const parent = el.closest(".grid, .stack, .bullets, .stats") || document.body;
    const group = Array.from(parent.querySelectorAll(".reveal")).filter(x => x.closest(".grid, .stack, .bullets, .stats") === parent);

    const idx = group.indexOf(el);
    el.style.transitionDelay = `${Math.min(idx * 60, 240)}ms`;
    el.classList.add("in");

    io.unobserve(el);
  });
}, { threshold: 0.18 });

items.forEach(el => io.observe(el));
