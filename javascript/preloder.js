TweenMax.to(".overlay h1", 2, {
      opacity: 0,
      // y: -60,
      ease: Expo.easeInOut
})

TweenMax.to(".overlay img", 2, {
      opacity: 0,
      // y: -60,
      ease: Expo.easeInOut
})




TweenMax.to(".overlay", 2, {
      delay: 1,
      // top: "-100vh",
      // top: "-120%",
      opacity:0,
      ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
      delay: 2,
      top: "-100vh",
      // top: "-120%",
      // opacity:0,
      ease: Expo.easeInOut
})

TweenMax.from(".logo", 1, {
      delay: 2.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
})

