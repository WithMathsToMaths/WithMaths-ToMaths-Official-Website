document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader-wrapper');
    const siteContent = document.getElementById('site-content');
    const hamburger = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");
    const listItems = document.querySelectorAll(".nav-menu li");

    // 1. FIN DU CHARGEMENT (1.8s est le timing idéal)
    setTimeout(() => {
        loader.classList.add('fade-out');
        siteContent.classList.add('visible');
        document.body.style.overflow = 'auto'; // Réactive le scroll
        
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 2000);

    // 2. BOUTON HAMBURGER
    hamburger.addEventListener("click", () => {
        container.classList.toggle("active");
    });

    // 3. EFFET DE FOCUS CYBERPUNK (Menu 3D)
    listItems.forEach(li => {
        li.addEventListener('mouseenter', () => {
            listItems.forEach(item => {
                if (item !== li) item.style.opacity = '0.2';
            });
        });

        li.addEventListener('mouseleave', () => {
            listItems.forEach(item => {
                item.style.opacity = '1';
            });
        });
    });
});
