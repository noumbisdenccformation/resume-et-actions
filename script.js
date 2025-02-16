document.addEventListener('DOMContentLoaded', () => {
    const connexionForm = document.getElementById('connexionForm');
    const emailOrPhoneInput = document.getElementById('emailOrPhone');
    const errorMessage = document.getElementById('errorMessage');
    const contenuCache = document.getElementById('contenuCache'); // L'ID de la section à afficher

    connexionForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêcher la soumission par défaut du formulaire

        const inputValue = emailOrPhoneInput.value;

        // Logique de vérification (exemple) :
        if (inputValue === 'test@example.com' || inputValue === '1234567890') {
            // Utilisateur vérifié, afficher le contenu
            contenuCache.style.display = 'block'; // Afficher la section
            $('#modalConnexion').modal('hide'); // Fermer la modale
            errorMessage.style.display = 'none'; // Masquer le message d'erreur
        } else {
            // Utilisateur non vérifié, afficher un message d'erreur
            errorMessage.textContent = 'Email ou téléphone incorrect.';
            errorMessage.style.display = 'block';
        }
    });
});

/* Fin du Code javascript pour logique de vérification  */

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