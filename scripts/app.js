const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.text_home, .img_home,
            .text_about, .img_about,
            .title_team, .box,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 100
})

// MENU EFFECT

var menu = document.querySelector(".menu");
var icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
    menu.classList.toggle("active");
})