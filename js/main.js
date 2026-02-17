// AOS init + page fade-in
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('ready');

  // ⚡ On laisse le navigateur respirer avant d'initialiser AOS + thème
  requestIdleCallback(() => {
    if (window.AOS) AOS.init({ once: true, duration: 700, easing: 'ease-out-quart' });

    // Dark/Light mode toggle with preference memory
    const storageKey = 'pref-theme';
    const root = document.documentElement;

    function setTheme(mode) {
      if (mode === 'light') {
        root.classList.remove('dark');
        localStorage.setItem(storageKey, 'light');
      } else {
        root.classList.add('dark');
        localStorage.setItem(storageKey, 'dark');
      }

      // Swap hero overlay class
      requestAnimationFrame(() => {
        document.querySelectorAll('[data-hero-overlay]').forEach(el => {
          el.classList.toggle('hero-overlay-dark', root.classList.contains('dark'));
          el.classList.toggle('hero-overlay-light', !root.classList.contains('dark'));
        });
      });
    }

    const saved = localStorage.getItem(storageKey) || 'dark';
    setTheme(saved);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        setTheme(root.classList.contains('dark') ? 'light' : 'dark');
      });
    }
  });

  // Smooth anchor highlight on scroll
  const sections = ['accueil','apropos','services','realisations','avis','contact'];
  const links = sections.map(id => [id, document.querySelector(`a[href="#${id}"]`)]);

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = links.find(([id]) => id === entry.target.id)?.[1];
      if (link) link.classList.toggle('active', entry.isIntersecting && entry.intersectionRatio > 0.6);
    });
  }, { threshold: [0.6] });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });

  // Compare slider
  const slider = document.getElementById('compare-range');
  const after = document.getElementById('compare-after');
  const handle = document.getElementById('compare-handle');

  function update(v){
    const pct = Number(v);
    requestAnimationFrame(() => {
      after.style.clipPath = `inset(0 ${100-pct}% 0 0)`;
      handle.style.left = pct + '%';
    });
  }

  if (slider && after && handle){
    slider.addEventListener('input', e => update(e.target.value));

    // ⚡ On retarde l'update initial pour éviter un reflow pendant le rendu
    requestIdleCallback(() => update(slider.value));

    window.addEventListener('resize', () => update(slider.value));
  }

  // Simple testimonials slider (auto-rotate)
  const slides = document.querySelectorAll('.testimonial');
  let idx = 0;

  // ⚡ On démarre le slider après le LCP
  setTimeout(() => {
    setInterval(() => {
      if (!slides.length) return;
      slides[idx].classList.add('hidden');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.remove('hidden');
    }, 4000);
  }, 2000);
});

// Petit test JS (inchangé)
document.getElementById("changerTexte")?.addEventListener("click", () => {
  document.querySelector("h1").textContent = "Texte modifié avec JavaScript !";
});

// Filtre services (inchangé)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.service-card').forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

