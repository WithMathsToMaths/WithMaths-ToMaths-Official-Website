document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.grade-card-link');
    const backBtn = document.querySelector('.back-link');

    const playSound = () => {
        const audio = new Audio('click.mp3');
        audio.play().catch(() => {});
    };

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            playSound();
            console.log("Middle School sélectionné : " + card.querySelector('h2').innerText);
            
            // Effet visuel au clic
            card.style.transform = "scale(0.95)";
            setTimeout(() => { card.style.transform = "scale(1.05)"; }, 100);
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', () => playSound());
    }
});
