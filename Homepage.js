document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader-wrapper');
    const siteContent = document.getElementById('site-content');
    const hamburger = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");
    const listItems = document.querySelectorAll(".nav-menu li");

    setTimeout(() => {
        loader.classList.add('fade-out');
        siteContent.classList.add('visible');
        document.body.style.overflow = 'auto'; // Réactive le scroll
        
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 2000);

    hamburger.addEventListener("click", () => {
        container.classList.toggle("active");
    });


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
