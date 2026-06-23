const alphabetGrec = [
    { name: "alpha", upper: "\u0391", lower: "\u03B1" }, { name: "beta", upper: "\u0392", lower: "\u03B2" },
    { name: "gamma", upper: "\u0393", lower: "\u03B3" }, { name: "delta", upper: "\u0394", lower: "\u03B4" },
    { name: "epsilon", upper: "\u0395", lower: "\u03B5" }, { name: "zeta", upper: "\u0396", lower: "\u03B6" },
    { name: "eta", upper: "\u0397", lower: "\u03B7" }, { name: "theta", upper: "\u0398", lower: "\u03B8" },
    { name: "iota", upper: "\u0399", lower: "\u03B9" }, { name: "kappa", upper: "\u039A", lower: "\u03BA" },
    { name: "lambda", upper: "\u039B", lower: "\u03BB" }, { name: "mu", upper: "\u039C", lower: "\u03BC" },
    { name: "nu", upper: "\u039D", lower: "\u03BD" }, { name: "xi", upper: "\u039E", lower: "\u03BE" },
    { name: "omicron", upper: "\u039F", lower: "\u03BF" }, { name: "pi", upper: "\u03A0", lower: "\u03C0" },
    { name: "rho", upper: "\u03A1", lower: "\u03C1" }, { name: "sigma", upper: "\u03A3", lower: "\u03C3" },
    { name: "tau", upper: "\u03A4", lower: "\u03C4" }, { name: "upsilon", upper: "\u03A5", lower: "\u03C5" },
    { name: "phi", upper: "\u03A6", lower: "\u03C6" }, { name: "chi", upper: "\u03A7", lower: "\u03C7" },
    { name: "psi", upper: "\u03A8", lower: "\u03C8" }, { name: "omega", upper: "\u03A9", lower: "\u03C9" }
];

// Mise à jour aléatoire des cartes dans le slider
function updateSliderCards() {
    // Mélange pour garantir des lettres uniques sur les 3 cartes
    const shuffled = [...alphabetGrec].sort(() => 0.5 - Math.random());
    
    for (let i = 1; i <= 3; i++) {
        const lettre = shuffled[i - 1];
        const card = document.getElementById(`card-${i}`);
        if(card) {
            card.innerHTML = `
                <header class="honk-title">WITHMATHS<br>TOMATHS</header>
                <p class="label">UPPERCASE</p>
                <div class="symbol">${lettre.upper}</div>
                <p class="label">lowercase</p>
                <div class="symbol-small">${lettre.lower}</div>
                <div class="name-text">${lettre.name}</div>
            `;
        }
    }
}

// Initialisation et intervalle de changement (20 secondes)
updateSliderCards();
setInterval(updateSliderCards, 20000);

// Apparition fluide des éléments au chargement
setTimeout(() => {
    document.getElementById('info-box').classList.add('show');
    document.getElementById('welcome-cube').classList.add('fly-in');
}, 1000);

// Effet Confetti sur le bouton Cube
document.querySelector('.cube-button').addEventListener('click', (e) => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});
