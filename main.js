// Initialisation AOS + fondu enchaîné de la page
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('ready');

  // ⚡ On laisse le navigateur respirer avant d'initialiser AOS + thème
  requestIdleCallback(() => {
    if (window.AOS) AOS.init({ once: true, duration: 700, easing: 'ease-out-quart' });

    // Basculement entre le mode sombre et le mode clair avec mémoire de préférences
    const storageKey = 'pref-theme';
    const racine = document.documentElement;

    fonction setTheme(mode) {
      si (mode === 'light') {
        racine.classList.remove('dark');
        localStorage.setItem(storageKey, 'light');
      } autre {
        racine.classList.add('sombre');
        localStorage.setItem(storageKey, 'dark');
      }

      // Classe de superposition du héros inversée
      requestAnimationFrame(() => {
        document.querySelectorAll('[data-hero-overlay]').forEach(el => {
          el.classList.toggle('hero-overlay-dark', root.classList.contains('dark'));
          el.classList.toggle('hero-overlay-light', !root.classList.contains('dark'));
        });
      });
    }

    const saved = localStorage.getItem(storageKey) || 'dark';
    définirThème(enregistré);

    const toggleBtn = document.getElementById('theme-toggle');
    si (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        définirTheme(root.classList.contains('dark') ? 'light' : 'dark');
      });
    }
  });

  // Mise en surbrillance fluide de l'ancre au défilement
  const sections = ['accueil','à propos','services','réalisations','avis','contact'];
  const links = sections.map(id => [id, document.querySelector(`a[href="#${id}"]`)]);

  const obs = new IntersectionObserver((entries) => {
    entrées.forEach(entrée => {
      const link = links.find(([id]) => id === entry.target.id)?.[1];
      si (lien) lien.classList.toggle('active', entry.isIntersecting && entry.intersectionRatio > 0.6);
    });
  }, { seuil : [0,6] });

  sections.forEach(id => {
    const el = document.getElementById(id);
    si (el) obs.observe(el);
  });

  // Comparateur de curseur
  const slider = document.getElementById('compare-range');
  const après = document.getElementById('compare-after');
  const handle = document.getElementById('compare-handle');

  fonction mise à jour(v){
    const pct = Nombre(v);
    requestAnimationFrame(() => {
      après.style.clipPath = `inset(0 ${100-pct}% 0 0)`;
      handle.style.left = pct + '%';
    });
  }

  si (curseur && après && poignée){
    slider.addEventListener('input', e => update(e.target.value));

    // ⚡ On retarde l'update initial pour éviter un reflow pendant le rendu
    requestIdleCallback(() => mise à jour(slider.value));

    fenêtre.addEventListener('resize', () => update(slider.value));
  }

  // Diaporama de témoignages simples (rotation automatique)
  const slides = document.querySelectorAll('.testimonial');
  soit idx = 0 ;

  // ⚡ On démarre le slider après le LCP
  setTimeout(() => {
    définirInterval(() => {
      si (!slides.length) retourner;
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

// Services de filtres (inchangé)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.service-card').forEach(card => {
      si (filtre === 'all' || carte.classList.contains(filtre)) {
        carte.classList.remove('hidden');
      } autre {
        carte.classList.add('caché');
      }
    });
  });
});
