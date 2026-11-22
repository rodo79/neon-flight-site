/* Language navigation is URL-based and stores no preference or other data. */
(() => {
  const translations = [...document.querySelectorAll('[data-language]')];
  function showLanguage() {
    const hash = location.hash.slice(1);
    const language = hash === 'en' || hash.endsWith('-en') ? 'en'
      : hash === 'fr' || hash.endsWith('-fr') ? 'fr' : document.documentElement.lang;
    translations.forEach(section => { section.hidden = section.dataset.language !== language; });
    document.documentElement.lang = language;
    document.querySelectorAll('[data-language-link]').forEach(link => {
      if (link.dataset.languageLink === language) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    if (document.body.dataset.page === 'privacy') {
      document.title = language === 'fr' ? 'Neon Flight · Confidentialité' : 'Neon Flight · Privacy';
    }
    if (document.body.dataset.page !== 'privacy') {
      document.title = language === 'fr' ? 'Neon Flight · Combat aérien arcade sur iPhone' : 'Neon Flight · Arcade air combat on iPhone';
    }
    const target = document.getElementById(hash);
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }
  showLanguage();
  addEventListener('hashchange', showLanguage);
})();
