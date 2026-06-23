document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader-wrapper');
    const siteContent = document.getElementById('site-content');
    const hamburger_menu = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");
    const listItems = document.querySelectorAll(".nav-menu li");
    const clickSound = document.getElementById('click-sound');

    // 1. LOADER
    setTimeout(() => {
        loader.classList.add('fade-out');
        siteContent.classList.add('visible');
        setTimeout(() => { loader.style.display = 'none'; }, 800);
    }, 2000);

    // 2. TOGGLE PIVOT
    hamburger_menu.addEventListener("click", () => {
        container.classList.toggle("active");
    });

    // 3. MENU FOCUS
    listItems.forEach(li => {
        li.addEventListener('mouseenter', () => {
            listItems.forEach(item => { if (item !== li) item.style.opacity = '0.2'; });
        });
        li.addEventListener('mouseleave', () => {
            listItems.forEach(item => { item.style.opacity = '1'; });
        });
    });

    // 4. SLIDER
    const list = document.querySelector('.list');
    const items = document.querySelectorAll('.item');
    const maskContainer = document.querySelector('.mask-container');
    const rotatingTextDiv = document.getElementById('rotating-text');
    const btnText = document.querySelector('.btn-text');
    const mainButton = document.getElementById('main-button');

    let active = 1; 
    let globalOffset = 0;

    const subjects = [
        { name: "COMPUTER SCIENCE", isSquare: true, scrollText: "SCRATCH JR • SCRATCH • ", file: "Computer Science.html" },
        { name: "MATHEMATICS", isSquare: true, scrollText: "MATHEMATICS • ", file: "AcademicPath.html" },
        { name: "LANGUAGES", isSquare: true, scrollText: "ENGLISH • FRANÇAIS • 한국어 • ", file: "Languages.html" }
    ];

    function updateSlider() {
        list.style.transform = `translateX(calc(-${active * 100}vw - 50vw))`;
        items.forEach((item, idx) => item.classList.toggle('active', idx === active));
        const current = subjects[active];
        btnText.innerText = current.name;
        maskContainer.classList.toggle('is-square', current.isSquare);
        renderRotatingText(current.scrollText, current.isSquare);
    }

    function renderRotatingText(text, isSquare) {
        rotatingTextDiv.innerHTML = '';
        const repeated = text.repeat(isSquare ? 4 : 8);
        repeated.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerText = char;
            rotatingTextDiv.appendChild(span);
        });
    }

    function animateText() {
        const spans = rotatingTextDiv.querySelectorAll('span');
        if (spans.length > 0) {
            const current = subjects[active];
            const side = 320;
            const perimeter = current.isSquare ? side * 4 : Math.PI * side;
            globalOffset += 1.2;
            spans.forEach((span, i) => {
                const charOffset = (i / spans.length) * perimeter;
                const pos = (charOffset + globalOffset) % perimeter;
                let x, y, rot;
                if (current.isSquare) {
                    if (pos < side) { x = pos - side/2; y = -side/2; rot = 0; }
                    else if (pos < side*2) { x = side/2; y = (pos-side)-side/2; rot = 90; }
                    else if (pos < side*3) { x = side/2-(pos-side*2); y = side/2; rot = 180; }
                    else { x = -side/2; y = side/2-(pos-side*3); rot = 270; }
                } else {
                    const angle = (pos / perimeter) * (Math.PI * 2);
                    x = (side/2) * Math.cos(angle - Math.PI/2);
                    y = (side/2) * Math.sin(angle - Math.PI/2);
                    rot = (angle * 180) / Math.PI;
                }
                span.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rot}deg)`;
            });
        }
        requestAnimationFrame(animateText);
    }

    // EVENT LISTENERS (Correction Bouton Next)
    const btnNext = document.getElementById('next');
    const btnPrev = document.getElementById('prev');

    btnNext.addEventListener('click', () => {
        console.log("Clic sur Next"); // Pour vérifier dans F12
        active = (active + 1) % items.length;
        updateSlider();
    });

    btnPrev.addEventListener('click', () => {
        active = (active - 1 + items.length) % items.length;
        updateSlider();
    });
    
    mainButton.onclick = () => { 
        if (clickSound) { clickSound.currentTime = 0; clickSound.play(); }
        setTimeout(() => { window.location.href = subjects[active].file; }, 200);
    };

    updateSlider();
    animateText();
});
