document.addEventListener('DOMContentLoaded', () => {
    // 1. Sélection des éléments cliquables
    const backButton = document.querySelector('.back-link');
    const seeAllButton = document.querySelector('.btn-outline');
    const gradeCards = document.querySelectorAll('.grade-card-link');
    
    // Fonction pour jouer un son (optionnel, basé sur ton fichier click.mp3)
    const playClickSound = () => {
        const audio = new Audio('click.mp3'); 
        audio.play().catch(err => console.log("Son désactivé par le navigateur"));
    };

    // 2. Logique pour le bouton "Back to Pathways"
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le saut de page immédiat si c'est un lien #
            playClickSound();
            console.log("Retour aux parcours...");
            // window.location.href = "pathways.html"; // Remplace par ton lien réel
        });
    }

    // 3. Logique pour les cartes Pre-K et Kindergarten
    gradeCards.forEach(card => {
        card.addEventListener('click', (e) => {
            playClickSound();
            const gradeName = card.querySelector('h2').innerText;
            console.log("Grade sélectionné : " + gradeName);
            
            // Animation de clic rapide avant redirection
            card.style.transform = "scale(0.95)";
            setTimeout(() => {
                card.style.transform = "scale(1)";
            }, 100);
        });
    });

    // 4. Logique pour "See All Educational Pathway"
    if (seeAllButton) {
        seeAllButton.addEventListener('click', () => {
            playClickSound();
            console.log("Ouverture de tous les parcours...");
        });
    }
});
