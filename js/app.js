function appelerPage(nomPageHtml, nomElementHtml) {
  fetch(`html/${nomPageHtml}`)
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
  const pageContact = document.getElementById('pageContact');
  const pageProjetProfessionnel = document.getElementById('pageProjetProfessionnel');
  const pageProjetPersonnel = document.getElementById('pageProjetPersonnel');

  appelerPage("contact.html", pageContact);
  appelerPage("projetProfessionnel.html", pageProjetProfessionnel);
  appelerPage("projetPersonnel.html", pageProjetPersonnel);
});

function envoyerEmail(nom, email, message) {
  console.log(`Le nom de l'expéditeur est : ${nom}, son adresse mail est : ${email} et son message est : ${message}`)

  Email.send({
    Host: "smtp.gmail.com",
    Username: "doriane.richard.portfolio@gmail.com",
    Password: "IlNeFautPasLireLeMDPDesAutres1234",
    To: "doriane.richard.portfolio@gmail.com",
    From: email,
    Subject: `Nouveau message de ${nom} via le formulaire de contact`,
    Body: message
  }).then(
    message => alert("Email envoyé avec succès!")
  ).catch(error => {
    console.error('Erreur lors de l\' envoi du mail :', error);
  });;
}
