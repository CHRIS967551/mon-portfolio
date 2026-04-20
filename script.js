// MODE SOMBRE
const toggle = document.getElementById('mode-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// NAVBAR SCROLL
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// BURGER MENU
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// TYPEWRITER
const phrases = [
  'Développeur Web ',
  'Étudiant BTS SIO SLAM ',
  'Passionné par le code ',
  'En recherche d\'alternance '
];

let i = 0, j = 0, deleting = false;
const el = document.getElementById('typewriter');

function type() {
  if (!el) return;
  const current = phrases[i];

  if (!deleting) {
    el.textContent = current.substring(0, j++);
    if (j > current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = current.substring(0, j--);
    if (j < 0) {
      deleting = false;
      i = (i + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 50 : 80);
}

type();

// SKILL BARS ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.getAttribute('style').match(/width:([^%]+%)/)[1];
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.competence-group').forEach(group => {
  group.querySelectorAll('.skill-fill').forEach(fill => {
    const w = fill.style.width;
    fill.style.width = '0';
    fill.dataset.width = w;
  });
  observer.observe(group);
});

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.dataset.width;
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.competence-group').forEach(g => skillObserver.observe(g));

// FADE IN ON SCROLL
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.projet-card, .competence-group, .apropos-grid').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  fadeObserver.observe(el);
});

// FORM
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Message envoyé !';
  btn.style.background = '#16a34a';
  setTimeout(() => {
    btn.textContent = 'Envoyer le message';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
});
