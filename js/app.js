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


document.addEventListener('DOMContentLoaded', () => {
  const dyslexiaCheckbox = document.getElementById('dyslexia');
  const themeSelect = document.getElementById('theme');
  const simplifyCheckbox = document.getElementById('simplify');

  // Charger les paramètres depuis le stockage local
  const settings = JSON.parse(localStorage.getItem('accessibilitySettings')) || {};

  // Appliquer le mode dyslexie si nécessaire
  if (settings.dyslexia) {
      document.body.classList.add('dyslexia-mode');
  }

  // Appliquer le thème sélectionné
  if (settings.theme) {
      document.body.classList.add(settings.theme);
  }

  // Appliquer la simplification si nécessaire
  if (settings.simplification) {
      document.querySelectorAll('.normal-vision').forEach(element => element.classList.add('hide'));
      document.querySelectorAll('.simplified-vision').forEach(element => element.classList.add('discover'));
  }

  // Vérifier si la checkbox et le select existent sur la page
  if (dyslexiaCheckbox) {
      dyslexiaCheckbox.checked = settings.dyslexia || false;

      // Sauvegarder les paramètres lorsque l'utilisateur les change
      dyslexiaCheckbox.addEventListener('change', () => {
          settings.dyslexia = dyslexiaCheckbox.checked;
          localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
          document.body.classList.toggle('dyslexia-mode', dyslexiaCheckbox.checked);
      });
  }

  if (themeSelect) {
      themeSelect.value = settings.theme || 'light';

      // Sauvegarder le thème lorsque l'utilisateur le change
      themeSelect.addEventListener('change', () => {
          // Enlever l'ancien thème
          document.body.classList.remove(settings.theme);
          
          // Ajouter le nouveau thème
          settings.theme = themeSelect.value;
          localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
          document.body.classList.add(settings.theme);
      });
  }

  if (simplifyCheckbox) {
      simplifyCheckbox.checked = settings.simplification || false;

      // Gérer le changement de simplification
      simplifyCheckbox.addEventListener('change', () => {
          settings.simplification = simplifyCheckbox.checked;
          localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
          
          if (simplifyCheckbox.checked) {
              document.querySelectorAll('.normal-vision').forEach(element => element.classList.add('hide'));
              document.querySelectorAll('.simplified-vision').forEach(element => element.classList.add('discover'));
          } else {
              document.querySelectorAll('.normal-vision').forEach(element => element.classList.remove('hide'));
              document.querySelectorAll('.simplified-vision').forEach(element => element.classList.remove('discover'));
          }
      });
  }
});