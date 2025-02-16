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


/*vérification de contrale humaine*/

inscriptionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Récupérer le jeton hCaptcha
    hcaptcha.execute('1ee86db0-7a28-4d86-b438-aabc03448024')
        .then(function(token) {
            // Envoyer les données au serveur, y compris le jeton
            fetch('/votre-route-pour-inscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nom, email, telephone, password, 'h-captcha-response': token })
            })
            .then(response => response.json())
            .then(data => {
                // Traiter la réponse du serveur
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
        });
});



/* script pour effectuer la recherche du livre */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput'); // Use getElementById
    const searchButton = document.getElementById('searchButton'); // Use getElementById
    const bookSections = document.querySelectorAll('#resume .row');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();

        bookSections.forEach(section => {
            const cards = section.querySelectorAll('.card');
            let sectionHasMatch = false;

            cards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const author = card.querySelector('.card-text').textContent.toLowerCase();

                if (title.includes(searchTerm) || author.includes(searchTerm)) {
                    card.style.display = 'block';
                    sectionHasMatch = true;
                } else {
                    card.style.display = 'none';
                }
            });

            if (sectionHasMatch) {
                section.style.display = 'flex';
            } else {
                section.style.display = 'none';
            }
        });
    });

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});