const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');

loginLink.addEventListener('click', () => {
    // Afficher la modale de connexion
    // Il n'y a pas besoin de code JavaScript ici, 
    // car l'attribut data-bs-toggle="modal" 
    // gère automatiquement l'ouverture de la modale
});

registerLink.addEventListener('click', () => {
    // Afficher la modale d'inscription
    // Il n'y a pas besoin de code JavaScript ici, 
    // car l'attribut data-bs-toggle="modal" 
    // gère automatiquement l'ouverture de la modale
});

// Fonction pour envoyer les données du formulaire (exemple avec Fetch API)
function submitForm(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Traiter la réponse du serveur
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}

//gestion de recupération des paramètres d'inscription

const inscriptionForm = document.getElementById('inscriptionForm');

inscriptionForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const password = document.getElementById('password').value;

    // Envoyer les données au serveur
    fetch('/votre-route-pour-inscription', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom, email, telephone, password })
    })
    .then(response => response.json())
    .then(data => {
        // Traiter la réponse du serveur
        console.log(data);
        // Afficher un message de succès ou d'erreur à l'utilisateur
    })
    .catch(error => {
        console.error('Erreur:', error);
        // Afficher un message d'erreur à l'utilisateur
    });
});