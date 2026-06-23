document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.grade-card-link');
    const backBtn = document.querySelector('.back-link');

    const playClick = () => {
        const audio = new Audio('click.mp3');
        audio.play().catch(() => console.log("Audio bloqué"));
    };

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            playClick();
            const year = card.querySelector('h2').innerText;
            console.log("Navigation vers : " + year);
            
            // Animation de pression
            card.style.transform = "scale(0.96)";
            setTimeout(() => {
                card.style.transform = "scale(1.05)";
            }, 100);
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', playClick);
    }
});
