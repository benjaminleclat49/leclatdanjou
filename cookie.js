(function () {
  const COOKIE_NAME = 'cookies_accepted';
  const COOKIE_DURATION_DAYS = 365;

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(value)};path=/;expires=${d.toUTCString()}`;
  }

  function getCookie(name) {
    const match = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return match ? decodeURIComponent(match[2]) : null;
  }

  function showBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'flex';
  }

  function hideBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
  }

  function handleConsent(value) {
    setCookie(COOKIE_NAME, value, COOKIE_DURATION_DAYS);
    hideBanner();
    // 👉 Ici tu peux déclencher des scripts tiers si "true"
    if (value === 'true') {
      // Exemple : lancer Google Analytics ou Elfsight
      // initAnalytics();
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    const consent = getCookie(COOKIE_NAME);
    if (consent === null) {
      showBanner();
    } else {
      hideBanner();
    }

    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    if (acceptBtn) acceptBtn.addEventListener('click', () => handleConsent('true'));
    if (declineBtn) declineBtn.addEventListener('click', () => handleConsent('false'));
  });
})();