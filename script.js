// =========================================================
// 1. MOBILE NAVIGATION TOGGLE
// =========================================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');

  const isOpen = navMenu.classList.contains('active');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// =========================================================
// 2. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
// =========================================================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target); // animate once only
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// =========================================================
// 3. BACK TO TOP BUTTON
// =========================================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =========================================================
// 4. CONTACT FORM (front-end only demo handling)
// =========================================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stop actual page reload since there's no backend

  // Simple front-end validation feedback
  formStatus.textContent = 'Thanks! Your message has been noted (demo only — connect a backend or form service to actually send it).';
  formStatus.style.color = '#2F4156';

  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = '';
  }, 6000);
});

// =========================================================
// 5. AUTO-UPDATE FOOTER YEAR
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// =========================================================
// 6. ACTIVE NAV LINK HIGHLIGHT ON SCROLL (bonus UX touch)
// =========================================================
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navHighlightObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!link) return;

    if (entry.isIntersecting) {
      navLinks.forEach(l => l.style.color = '');
      link.style.color = '#2F4156';
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => navHighlightObserver.observe(section));
