document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('pageAccueil');
  
    fetch('accueil.html')
      .then(response => response.text())
      .then(data => {
        appDiv.innerHTML = data;
      })
      .catch(error => {
        console.error('Erreur lors du chargement du contenu:', error);
        appDiv.innerHTML = '<p>Une erreur s\'est produite lors du chargement du contenu.</p>';
      });
  });
  