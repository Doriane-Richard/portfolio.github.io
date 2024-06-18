function appelerPage(nomPageHtml, nomElementHtml) {
  console.log(`nom page : ${nomPageHtml} et nom élément : ${nomElementHtml}`);

  fetch(`${nomPageHtml}`)
  .then(response => response.text())
  .then(data => {
    nomElementHtml.innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur lors du chargement du contenu:', error);
    nomElementHtml.innerHTML = '<p>Une erreur s\'est produite lors du chargement du contenu.</p>';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // const pageContact = document.getElementById('pageContact');
  // const pageProjetProfessionnel = document.getElementById('pageProjetProfessionnel');
  // const pageProjetPersonnel = document.getElementById('pageProjetPersonnel');

  // appelerPage("contact.html", pageContact);
  // appelerPage("projetProfessionnel.html", pageProjetProfessionnel);
  // appelerPage("projetPersonnel.html", pageProjetPersonnel);

  // const pageEnTete = document.getElementById('enTete');
  // const pageBasDePage = document.getElementById('basDePage');

  // appelerPage("enTete.html", pageEnTete);
  // appelerPage("basDePage.html", pageBasDePage);
});
