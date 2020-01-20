const nav = document.querySelector('#main-nav');

const home = document.querySelector('#main-header');
const optionsHome = {
  rootMargin: '-75px'
};

const homeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add('bg-dark');
    } else {
      nav.classList.remove('bg-dark');
    }
  });
}, optionsHome);

homeObserver.observe(home);
