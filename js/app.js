// Gère la couleur de l'onglet actif
document.addEventListener("DOMContentLoaded", function() {
  // Sélectionne tous les liens de la barre de navigation
  const navLinks = document.querySelectorAll(".navbar a");

  // Obtient le chemin de l'URL actuelle
  const currentPath = window.location.pathname;

  // Parcourt tous les liens et ajoute la classe 'active' au lien correspondant à l'URL actuelle
  navLinks.forEach(link => {

      // Si le lien correspond à l'URL actuelle, ajoute la classe 'active'
      if (link.href.includes(currentPath)) {
          
          link.classList.add("active");
      } else {
          // Sinon, supprime la classe 'active' (utile si on revient à la page précédente)
          link.classList.remove("active");
      }
  });
});

// Gère l'affichage de la description détaillée
document.addEventListener("DOMContentLoaded", function() {
  // Sélectionne tous les boutons "En savoir plus"
  const btnsEnSavoirPlus = document.querySelectorAll(".btn-en-savoir-plus");

  // Ajoute un gestionnaire d'événement de clic à chaque bouton
  btnsEnSavoirPlus.forEach(btn => {
      btn.addEventListener("click", function() {
          // Trouve la description du projet associée (élément parent)
          const projectItem = this.parentNode;
          const descriptionProjet = projectItem.querySelector(".description-projet");

          // Bascule la visibilité de la description
          descriptionProjet.classList.toggle("show");

          // Change le texte du bouton en fonction de la visibilité
          if (descriptionProjet.classList.contains("show")) {
              this.textContent = "Réduire";
          } else {
              this.textContent = "En savoir plus";
          }
      });
  });
});