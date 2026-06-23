document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.card, .btn, .btn-pathway, .btn-back');
    interactiveElements.forEach(element => {
        element.addEventListener('click', () => {
            const audio = new Audio('click.mp3');
            audio.play().catch(() => {});
            element.style.transform = "scale(0.97)";
            setTimeout(() => element.style.transform = "", 100);
        });
    });
});
