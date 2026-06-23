document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader-wrapper');
    const siteContent = document.getElementById('site-content');
    const hamburger_menu = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");
    const listItems = document.querySelectorAll(".nav-menu li");

    // 1. FIN DU CHARGEMENT (Professional Reveal)
    setTimeout(() => {
        loader.classList.add('fade-out');
        siteContent.classList.add('visible');
        
        // Remove from DOM after transition
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 2000);

    // 2. TOGGLE DE L'ANIMATION DE PIVOT
    hamburger_menu.addEventListener("click", () => {
        container.classList.toggle("active");
    });

    // 3. EFFET DE FOCUS (OPACITÉ) SUR LE MENU 3D
    listItems.forEach(li => {
        li.addEventListener('mouseenter', () => {
            listItems.forEach(item => {
                if (item !== li) {
                    item.style.opacity = '0.2';
                }
            });
        });

        li.addEventListener('mouseleave', () => {
            listItems.forEach(item => {
                item.style.opacity = '1';
            });
        });
    });
});
