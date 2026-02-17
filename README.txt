
L’Éclat d’Anjou – Site statique (vFinal)
========================================

Contenu
-------
- index.html (site principal, mode sombre par défaut, toggle dark/light)
- css/custom.css (styles complémentaires : comparateur, cartes, transitions)
- js/main.js (AOS, comparateur avant/après, slider d’avis, menu highlight, thème)
- assets/logo.png (votre logo)
- assets/hero.jpg (image d’accueil)
- assets/compare-before.jpg (image AVANT – générée)
- assets/compare-after.jpg (image APRÈS – votre image)
- favicon.ico (générée à partir de votre logo)

Comment tester
-------------
Ouvrez simplement `index.html` dans votre navigateur (double-clic).

Modifier les textes
-------------------
- Accueil / Héros : section #accueil (titre, sous-titre, boutons)
- À propos : section #apropos
- Services : section #services (icônes et textes)
- Réalisations / Comparateur : section #realisations
- Avis : section #avis (les citations dans les <figure>)
- Contact : section #contact (téléphone, email, zone)

Changer les images
------------------
- Remplacez `assets/hero.jpg` pour l’image d’accueil
- Remplacez `assets/compare-after.jpg` (l’APRÈS)
- (Optionnel) remplacez `assets/compare-before.jpg` si vous avez une vraie photo “avant”
- Remplacez `assets/logo.png` si besoin (le nom doit rester identique)

Couleurs & Police
-----------------
- Les couleurs principales sont gérées via Tailwind et quelques classes custom (turquoise #64ffda, bleu nuit #0a192f).
- La police utilisée est **Montserrat** (Google Fonts), définie dans `<head>` et in `css/custom.css`.

Dark/Light mode
---------------
- Par défaut : mode **sombre** (classe `dark` sur `<html>`).
- Le bouton 🌓 (id `theme-toggle`) enregistre la préférence dans `localStorage` (clé `pref-theme`).

Animations
----------
- AOS est chargé via CDN. Les attributs `data-aos` sont sur chaque section/carte.
- Le comparateur avant/après est interactif (slider en bas de l’image).
- Les avis défilent automatiquement toutes les 4 secondes.

SEO
---
- La meta-description est déjà configurée dans `<head>`.
- Pas de balises schema.org (selon votre choix).

Mise en ligne (facile)
----------------------
- **GitHub Pages** : créez un repo, uploadez ces fichiers à la racine, puis activez Pages sur la branche `main`.
- **Netlify** : glissez-déposez le dossier sur app.netlify.com → un lien sera créé automatiquement.
- **OVH/Autre** : uploadez tous les fichiers via FTP à la racine du domaine.

Bon site !
