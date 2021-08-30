// gsap animation

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top center"
    }
});
tl.from("text_home", { duration: .5, y: 30, opacity: 0 })

// MENU EFFECT

var menu = document.querySelector(".menu");
var icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
    menu.classList.toggle("active");
})