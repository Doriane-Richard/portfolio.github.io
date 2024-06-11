function appelerPage(nomPageHtml, nomElementHtml) {
  fetch('html/' . nomPageHtml)
  .then(response => response.text())
  .then(data => {
    const element = document.getElementById(nomElementHtml);
    element.innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur lors du chargement du contenu:', error);
    nomElementHtml.innerHTML = '<p>Une erreur s\'est produite lors du chargement du contenu.</p>';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const pageContact = document.getElementById('pageContact');
  const pageProjetProfessionnel = document.getElementById('pageProjetProfessionnel');
  const pageProjetPersonnel = document.getElementById('pageProjetPersonnel');

  appelerPage("contact.html", pageContact);
  appelerPage("pageProjetProfessionnel.html", pageProjetProfessionnel);
  appelerPage("pageProjetPersonnel.html", pageProjetPersonnel);
});

