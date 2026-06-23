document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.grade-card-link');
    
    const playSound = () => {
        const audio = new Audio('click.mp3');
        audio.play().catch(() => {});
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            playSound();
            console.log("High School Grade: " + card.querySelector('h2').innerText);
            
            card.style.transform = "scale(0.95)";
            setTimeout(() => { card.style.transform = "scale(1.05)"; }, 100);
        });
    });
});
