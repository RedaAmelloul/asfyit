// GSAP ANIMATIONS
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
    }
});

tl.from(".img_home", { x: 100, opacity: 0, duration: .5 })
    .from(".text_home", { x: -100, opacity: 0, duration: .8 })
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "center bottom"
    }
});

tl.from(".img_about", { x: 100, opacity: 0, duration: .5 })
    .from(".text_about", { x: -100, opacity: 0, duration: .8 })

// MENU EFFECT

var menu = document.querySelector(".menu");
var icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
    menu.classList.toggle("active");
})