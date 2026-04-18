document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.grade-card-link');
    const backBtn = document.querySelector('.back-link');

    // Fonction de clic
    const handleAction = (label) => {
        const audio = new Audio('click.mp3');
        audio.play().catch(() => {});
        console.log("Action: " + label);
    };

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const title = card.querySelector('h2').innerText;
            handleAction("Entrée dans " + title);
            
            // Simulation de changement de page
            card.style.transform = "scale(0.95)";
            setTimeout(() => { card.style.transform = "scale(1.05)"; }, 100);
        });
    });

    if(backBtn) {
        backBtn.addEventListener('click', () => handleAction("Retour aux Pathways"));
    }
});