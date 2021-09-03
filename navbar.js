const navSlide = () => {
    const mobilemenu = document.querySelector(".mobile-menu");
    const navbarlist = document.querySelector(".navbar-list");
    const navbarLinks = document.querySelectorAll(".navbar-list li");

    mobilemenu.addEventListener("click", () => {
        navbarlist.classList.toggle("nav-active");

        navbarLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navListFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}

navSlide();