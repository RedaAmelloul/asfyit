// gsap animation
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top center"
    }
});
tl.from(".text_home", { duration: 1, y: -50, opacity: 0 })
    .from(".img_home", { duration: 1, y: -50, opacity: 0 })

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top center"
    }
});
tl.from(".text_about", { duration: 1, y: 50, opacity: 0 })
    .from(".img_about", { duration: 1, y: 50, opacity: 0 })
    // MENU EFFECT
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".team",
        start: "top center"
    }
});
tl.from(".title_team", { duration: 1, y: -50, opacity: 0 })
    .from(".box", { duration: 1, y: -50, opacity: 0 })
    // MENU EFFECT

// MENU EFFECT

var menu = document.querySelector(".menu");
var icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
    menu.classList.toggle("active");
})