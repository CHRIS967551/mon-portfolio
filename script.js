// AOS
AOS.init({ duration: 800, once: true });

// TYPEWRITER
const phrases = [
  "Bienvenue sur mon portfolio",
  "Développeur Web",
  "Étudiant en SLAM",
  "Passionné par le code"
];

let i = 0;
let j = 0;
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  typewriter.textContent = phrases[i].substring(0, j);

  if (!isDeleting && j < phrases[i].length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// MODE SOMBRE
const toggle = document.getElementById("mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark")
    ? "Mode Clair"
    : "Mode Sombre";
});

// PROJETS TOGGLE
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const details = btn.nextElementSibling;
    details.style.display =
      details.style.display === "block" ? "none" : "block";
  });
});

// MENU BURGER MOBILE
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fermer le menu au clic
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


