var t1 = new TimelineMax({
    paused: true
});

t1.to(".one", 0.2, {
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
});
t1.to(".two", 0.2, {
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.2
});

t1.to(".menu", 1, {
    top: "0vh",
    ease: Expo.easeInOut,
    delay: -0.1
});

t1.staggerFrom(".data ul li", 0.1, {
    y: 10,
    opacity: 0,
    ease: Expo.easeOut
}, 0.1);

t1.reverse();
$(document).on("click", ".toggle-btn", function () {
    t1.reversed(!t1.reversed());
});
$(document).on("click", ".data ul li a", function () {
    t1.reversed(!t1.reversed());
});