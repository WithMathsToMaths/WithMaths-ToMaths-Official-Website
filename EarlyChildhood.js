document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sélection des éléments
    const backButton = document.querySelector('.back-link');
    const seeAllButton = document.querySelector('.btn-outline');
    const gradeCards = document.querySelectorAll('.grade-card-link');

    /**
     * Fonction pour jouer le son de clic
     * Nous utilisons une fonction simple qui ne bloque pas l'exécution du reste du code
     */
    const playClickSound = () => {
        const audio = new Audio('click.mp3');
        audio.volume = 0.4; // Volume à 40%
        audio.play().catch(() => {
            // On ignore l'erreur si le navigateur bloque l'autostart du son
            console.log("Audio en attente d'interaction");
        });
    };

    // 2. Logique pour le bouton "Back to Pathways"
    if (backButton) {
        // On utilise 'mousedown' pour jouer le son dès le début du clic
        backButton.addEventListener('mousedown', () => {
            playClickSound();
        });
        // Note : On ne met PAS de 'click' event avec preventDefault 
        // pour laisser le lien AcademicPath.html fonctionner normalement.
    }

    // 3. Logique pour les cartes Pre-K et Kindergarten
    gradeCards.forEach(card => {
        card.addEventListener('mousedown', () => {
            playClickSound();
        });
        
        // Petit effet visuel au clic
        card.addEventListener('click', () => {
            card.style.transform = "scale(0.98)";
        });
    });

    // 4. Logique pour le bouton "See All Educational Pathway"
    if (seeAllButton) {
        seeAllButton.addEventListener('mousedown', () => {
            playClickSound();
        });
    }

});
