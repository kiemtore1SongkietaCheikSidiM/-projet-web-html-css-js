// script.js externe
// message d'accueil
alert('Votre reve d avoir des produits de qualite sera realise. Soyez la bienvenue');
// horloge en temps reel qui donne l'heure la minute et la seconde
function updateClock() {
  const now = new Date();

  
  const timeString = now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  document.getElementById("date").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);
// validation du formulaire

const form = document.getElementById("formulaire");

form.addEventListener("submit", function (e) {
  
  e.preventDefault();

  
  const nom = document.getElementById("le_nom").value.trim();
  const mail = document.getElementById("le_mail").value.trim();
  const message = document.getElementById("le_message").value.trim();
// Si le champ nom est vide, afficher une alerte
  if (nom === "") {
    alert(" Le nom ne peut pas etre vide.");
    return;
  }
//Si le champ email n'est pas valide, afficher une alerte
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(mail)) {
    alert(" Veuillez entrer une adresse email valide.");
    return;
  }
// Si le champ message contient moins de 10 caracteres, afficher une alerte
  if (message.length < 10) {
    alert(" Le message doit contenir au moins 10 caract�res.");
    return;
  }
// Au cas echeant, afficher un message de succes et envoyer le formulaire
  
  alert(" Formulaire valide et envoye avec succes !");
  form.submit(); 
});
// Changement de texte et de style au clic sur le bouton
const bouton = document.getElementById("changer");
const zone = document.getElementById("zone");

bouton.addEventListener("click", () => {
  
  zone.textContent = "Bienvenue sur TEEDABAYIRI";
  zone.style.color = "red";
  zone.style.background = "yellow";
});
// Bouton retour en haut de page qui s'affiche au scroll  
const retourHaut = document.getElementById("retourHaut");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    retourHaut.classList.add('show');
  } else {
    retourHaut.classList.remove('show');
  }
});
retourHaut.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
);
  

  
  





