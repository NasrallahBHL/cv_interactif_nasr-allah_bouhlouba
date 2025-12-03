// Code JavaScript très simple pour rendre la page un peu interactive

document.addEventListener("DOMContentLoaded", function () {

  var btnVoirPlus = document.getElementById("btnVoirPlus");
  var textePlus = document.getElementById("textePlus");

  btnVoirPlus.addEventListener("click", function () {
    if (textePlus.classList.contains("d-none")) {
      textePlus.classList.remove("d-none");
      btnVoirPlus.textContent = "Voir moins";
    } else {
      textePlus.classList.add("d-none");
      btnVoirPlus.textContent = "Voir plus";
    }
  });


  var contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    alert("Merci ! Votre message a été envoyé (simulation pour le mini-projet).");

  
    contactForm.reset();
  });
});
