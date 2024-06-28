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

// Gestion des cookies
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    const cookieString = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(`Setting cookie: ${cookieString}`);
    document.cookie = cookieString;
    console.log(`Current cookies: ${document.cookie}`);
}

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    console.log(`Decoded cookies: ${decodedCookie}`);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            console.log(`Found cookie: ${c}`);
            return c.substring(name.length, c.length);
        }
    }
    console.log('Cookie not found');
    return "";
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
    console.log(`Applied theme: ${theme}`);
}

function switchTheme(theme) {
    setCookie('theme', theme, 30); // Le cookie expire dans 30 jours
    applyTheme(theme);
}

document.addEventListener('DOMContentLoaded', (event) => {
    let theme = getCookie('theme');
    console.log(`Loaded theme: ${theme}`);
    if (!theme) {
        theme = 'light'; // Thème par défaut
    }
    applyTheme(theme);

    // Event listeners pour les boutons de changement de thème
    document.getElementById('dark-theme-button').addEventListener('click', () => switchTheme('dark'));
    document.getElementById('light-theme-button').addEventListener('click', () => switchTheme('light'));
});
