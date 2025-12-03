document.getElementById("btnVoirPlus").addEventListener("click", function () {
  const texte = document.getElementById("textePlus");
  texte.classList.toggle("d-none");

  if (texte.classList.contains("d-none")) {
    this.textContent = "Voir plus";
  } else {
    this.textContent = "Voir moins";
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message envoyé !");
});

document.querySelectorAll('a.nav-link[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
