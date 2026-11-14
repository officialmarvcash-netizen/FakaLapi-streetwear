const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// FAKA LAPI story language selector
const storyLanguageButtons = document.querySelectorAll('[data-story-lang]');
const storyLanguagePanels = document.querySelectorAll('[data-story-panel]');

storyLanguageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLanguage = button.dataset.storyLang;

    storyLanguageButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle('is-active', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });

    storyLanguagePanels.forEach((panel) => {
      panel.hidden = panel.dataset.storyPanel !== selectedLanguage;
    });
  });
});


// Compact back-to-top control
const scrollTopButton = document.querySelector('.scroll-top');
if (scrollTopButton) {
  const updateScrollTopButton = () => {
    scrollTopButton.hidden = window.scrollY < 420;
  };
  window.addEventListener('scroll', updateScrollTopButton, { passive: true });
  updateScrollTopButton();

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  });
}
