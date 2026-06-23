const greekAlphabet = [
    { char: 'α', name: 'Alpha', color: '#ff5722', bg: '#ffe0b2' },
    { char: 'β', name: 'Beta', color: '#e91e63', bg: '#f8bbd0' },
    { char: 'γ', name: 'Gamma', color: '#9c27b0', bg: '#e1bee7' },
    { char: 'δ', name: 'Delta', color: '#3f51b5', bg: '#c5cae9' },
    { char: 'ε', name: 'Epsilon', color: '#2196f3', bg: '#bbdefb' },
    { char: 'ζ', name: 'Zeta', color: '#00bcd4', bg: '#b2ebf2' },
    { char: 'η', name: 'Eta', color: '#009688', bg: '#b2dfdb' },
    { char: 'θ', name: 'Theta', color: '#4caf50', bg: '#c8e6c9' },
    { char: 'ι', name: 'Iota', color: '#8bc34a', bg: '#dcedc8' },
    { char: 'κ', name: 'Kappa', color: '#fbc02d', bg: '#fff9c4' },
    { char: 'λ', name: 'Lambda', color: '#ff9800', bg: '#ffe0b2' },
    { char: 'μ', name: 'Mu', color: '#795548', bg: '#d7ccc8' },
    { char: 'ν', name: 'Nu', color: '#607d8b', bg: '#cfd8dc' },
    { char: 'ξ', name: 'Xi', color: '#ff5722', bg: '#ffe0b2' },
    { char: 'ο', name: 'Omicron', color: '#e91e63', bg: '#f8bbd0' },
    { char: 'π', name: 'Pi', color: '#9c27b0', bg: '#e1bee7' },
    { char: 'ρ', name: 'Rho', color: '#3f51b5', bg: '#c5cae9' },
    { char: 'σ', name: 'Sigma', color: '#2196f3', bg: '#bbdefb' },
    { char: 'τ', name: 'Tau', color: '#00bcd4', bg: '#b2ebf2' },
    { char: 'υ', name: 'Upsilon', color: '#009688', bg: '#b2dfdb' },
    { char: 'φ', name: 'Phi', color: '#4caf50', bg: '#c8e6c9' },
    { char: 'χ', name: 'Chi', color: '#8bc34a', bg: '#dcedc8' },
    { char: 'ψ', name: 'Psi', color: '#fbc02d', bg: '#fff9c4' },
    { char: 'ω', name: 'Omega', color: '#ff9800', bg: '#ffe0b2' }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('cards-grid');
    
    greekAlphabet.forEach((letter, index) => {
        const card = document.createElement('div');
        card.className = 'math-card';
        card.style.borderColor = letter.color;
        card.innerHTML = `
            <p class="card-letter" style="color: ${letter.color};">${letter.char}</p>
            <p class="card-name">${letter.name}</p>
            <span class="card-category" style="background-color: ${letter.bg};">Letter ${index + 1}</span>
        `;
        
        card.addEventListener('click', function() {
            const allCards = document.querySelectorAll('.math-card');
            document.getElementById('grid-header').classList.add('fade-out');
            
            allCards.forEach(c => { 
                if (c !== card) c.classList.add('fade-out'); 
            });
            
            card.classList.add('zoom-and-spin');
            
            // Redirection vers le fichier unique post-page après 1.2s
            setTimeout(() => {
                window.location.href = `post-page.html?letter=${letter.name}`;
            }, 1200);
        });
        
        grid.appendChild(card);
    });
});
