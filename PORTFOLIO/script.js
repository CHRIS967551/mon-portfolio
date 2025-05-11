// Animation de texte typewriter
const phrases = [
  "BIENVENUE SUR MON PORTFOLIO",
  "JE SUIS DÉVELOPPEUR WEB",
  "ÉTUDIANT EN SLAM",
  "PASSIONNÉ PAR LE CODE"
];

const typewriter = document.getElementById("typewriter");
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  const currentText = currentPhrase.substring(0, letterIndex);

  typewriter.innerHTML = currentText;

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(type, 1000);
  }
}

window.addEventListener("load", type);

// Scroll vers À propos quand on clique sur le logo
function scrollToApropos() {
  document.getElementById("apropos").scrollIntoView({ behavior: "smooth" });
}

// Mode sombre / clair
const modeBtn = document.getElementById("mode-toggle");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeBtn.innerText = "Mode Clair";
  } else {
    modeBtn.innerText = "Mode Sombre";
  }
});

// AOS animations
AOS.init({
  duration: 800,
  once: true
});
