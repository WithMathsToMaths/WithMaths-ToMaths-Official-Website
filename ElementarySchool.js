document.addEventListener('DOMContentLoaded', () => {
    // 1. Sélection des éléments
    const cards = document.querySelectorAll('.grade-card-link');
    const backBtn = document.querySelector('.back-link');
    const seeAllBtn = document.querySelector('.btn-outline');

    /**
     * Fonction universelle pour le son de clic
     * Déclenchée sur 'mousedown' pour plus de réactivité
     */
    const playSound = () => {
        const audio = new Audio('click.mp3');
        audio.volume = 0.4;
        audio.play().catch(() => {
            // Empêche les erreurs si le navigateur bloque l'audio
            console.log("Audio en attente d'interaction");
        });
    };

    // 2. Gestion des cartes Grade (1st to 5th)
    cards.forEach(card => {
        // Déclenche le son dès l'appui
        card.addEventListener('mousedown', () => {
            playSound();
            card.style.transform = "scale(0.95)";
        });

        // Remet la taille normale si le clic est annulé
        card.addEventListener('mouseleave', () => {
            card.style.transform = "scale(1)";
        });

        // La redirection se fera naturellement via le href du HTML
        // car nous n'utilisons PAS e.preventDefault() ici.
    });

    // 3. Gestion du bouton Retour
    if (backBtn) {
        backBtn.addEventListener('mousedown', () => {
            playSound();
        });
    }

    // 4. Gestion du bouton See All Pathways
    if (seeAllBtn) {
        seeAllBtn.addEventListener('mousedown', () => {
            playSound();
        });
    }
});
