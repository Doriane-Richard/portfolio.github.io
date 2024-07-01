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

    // Charger les paramètres depuis le stockage local
    const settings = JSON.parse(localStorage.getItem('accessibilitySettings')) || {};

    console.log(settings)

    // Appliquer le mode dyslexie si nécessaire
    if (settings.dyslexia) {
        document.body.classList.add('dyslexia-mode');
    }

    // Vérifier si la checkbox existe sur la page
    if (dyslexiaCheckbox) {
        dyslexiaCheckbox.checked = settings.dyslexia || false;

        // Sauvegarder les paramètres lorsque l'utilisateur les change
        dyslexiaCheckbox.addEventListener('change', () => {
            settings.dyslexia = dyslexiaCheckbox.checked;
            localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
            document.body.classList.toggle('dyslexia-mode', dyslexiaCheckbox.checked);
        });
    }
});


// scripts.js
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("Je suis sur l'accessibilité");
//     const dyslexiaCheckbox = document.getElementById('dyslexia');
//     const simplificationCheckbox = document.getElementById('simplification');
//     const themeSelect = document.getElementById('theme');

//     // Charger les paramètres depuis le stockage local
//     const settings = JSON.parse(localStorage.getItem('accessibilitySettings')) || {};

//     if (settings.dyslexia) {
//         dyslexiaCheckbox.checked = true;
//         document.body.classList.add('dyslexia-mode');
//     } else {
//         document.body.classList.remove('dyslexia-mode');
//     }

//     if (settings.simplification) {
//         simplificationCheckbox.checked = true;
//         document.body.classList.add('simplification-mode');
//     }

//     if (settings.theme) {
//         themeSelect.value = settings.theme;
//         document.body.classList.add(settings.theme);
//     }

//     // Sauvegarder les paramètres lorsque l'utilisateur les change
//     dyslexiaCheckbox.addEventListener('change', () => {
//         settings.dyslexia = dyslexiaCheckbox.checked;
//         localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
//         document.body.classList.toggle('dyslexia-mode', dyslexiaCheckbox.checked);
//     });

//     simplificationCheckbox.addEventListener('change', () => {
//         settings.simplification = simplificationCheckbox.checked;
//         localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
//         document.body.classList.toggle('simplification-mode', simplificationCheckbox.checked);
//     });

//     themeSelect.addEventListener('change', () => {
//         document.body.classList.remove(settings.theme);
//         settings.theme = themeSelect.value;
//         localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
//         document.body.classList.add(settings.theme);
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const settings = JSON.parse(localStorage.getItem('accessibilitySettings')) 
//     console.log(settings) || {};

//     // Appliquer le mode dyslexie si nécessaire
//     if (settings.dyslexia) {
//         document.body.classList.add('dyslexia-mode');
//     } else {
//         document.body.classList.remove('dyslexia-mode');
//     }
// });
// // Fonction pour charger la barre de navigation
// function loadNavigation() {
//     fetch('barreNavigation.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('navigation-bar').innerHTML = data;
//         })
//         .catch(error => console.error('Erreur lors du chargement de la barre de navigation:', error));
// }

// // Charger la barre de navigation quand la page est prête
// document.addEventListener('DOMContentLoaded', loadNavigation);