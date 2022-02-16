$(document).ready(function () {
  TweenMax.set(".project-preview", {
    width: 0
  });

  var tl = new TimelineLite();

  $(document)
    .on("mouseover", ".navigation-item", function (evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 1, {
        width: "600px",
        ease: Expo.easeInOut
      });
    })
    .on("mouseout", ".navigation-item", function (evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 0.5, {
        width: 0,
        ease: Expo.easeInOut
      });
    });
});

$(".navigation-link-1").hover(function () {
  $(".project-preview").css({
    "background-image": "url(3.jpg)"
  });
});

$(".navigation-link-2").hover(function () {
  $(".project-preview").css({
    "background-image": "url(./images/design3.jpg)"
  });
});

$(".navigation-link-3").hover(function () {
  $(".project-preview").css({
    "background-image": "url(./images/design7.jpg)"
  });
});

$(".navigation-link-4").hover(function () {
  $(".project-preview").css({
    "background-image": "url(./images/design4.jpg)"
  });
});

$(".navigation-link-5").hover(function () {
  $(".project-preview").css({
    "background-image": "url(./images/design2.jpg)"
  });
});

$(".navigation-link-6").hover(function () {
  $(".project-preview").css({
    "background-image": "url(./images/design6.jpg)"
  });
});

$(".navigation-link-7").hover(function () {
  $(".project-preview").css({
    "background-image": "url(./images/design8.jpg)"
  });
});

$(".navigation-link-8").hover(function () {
  $(".project-preview").css({
    "background-image": "url(./images/design5.jpg)"
  });
});


$(".navigation-link-9").hover(function () {
  $(".project-preview").css({
    "background-image": "url(./images/design9.png)"
  });
});

$(".navigation-link-10").hover(function () {
  $(".project-preview").css({
    "background-image": "url(https://lh6.googleusercontent.com/AB-z8Cp1caqbTlMyTmLtANFwgR9yJv8lZq7rdi-GxVwqqQghAtWC14N2DP10GJYTBI-u34auKSVbkGFhPw8cMs9AI8fPABWQR7DG8fny-75sasqMvUscRABZ8NZxjNC7U9TfsZPR)"
  });
});

$(".navigation-link-11").hover(function () {
  $(".project-preview").css({
    "background-image": "url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b21d5637079289.5733b24de7d9b.png)"
  });
});


$(".navigation-link-12").hover(function () {
  $(".project-preview").css({
    "background-image": "url(https://mir-s3-cdn-cf.behance.net/project_modules/hd/c12fb442391797.57cb247e864c1.jpg)"
  });
});


$(".navigation-link-13").hover(function () {
  $(".project-preview").css({
    "background-image": "url(https://lh5.googleusercontent.com/aIWg6lA6NEyaaa6IUJcyaMj-dM1oZd1Ye8ihqchcl5KHLBNYUlmIcAxwMEQgs7-7qH7uqKszLUz2g2XivSbEBj4dYlGc-a6n-reCGBzn7QAi9dX5lDGe9GTh6L1l0Ui55b0J7sg-)"
  });
});

$(".navigation-link-14").hover(function () {
  $(".project-preview").css({
    "background-image": "url(https://lh4.googleusercontent.com/MFgNLU-uJA__JtDOSJcpHBWWHUOkOQYIc5yxGAa5Rn6D3ObGApxO7H4R4qih55mz1vgoA4uqhOM-85p8R8TMtkcirO7No8TKrE_YskoHdjHoU-lV6wVYvbMT7zTrWOPcXXBH3k7P)"
  });
});


$(".navigation-link-15").hover(function () {
  $(".project-preview").css({
    "background-image": "url(https://lh3.googleusercontent.com/Tnh7w8-Stn-X_4ZnNug95quwii6hBT-qoq7CjkozEgixhbYgt4kYD_WSc1r9VuWcSf5h9D7THY9Xhl153hlRKUpVdD6GIohpqBYWZ_5NZjT2se1VXtDxXW3MaPQBiQwt0BDMZD5H)"
  });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
  scrollPercent = (scroll / (dh - wh)) * 100;
  $(".progressbar").css("height", scrollPercent + "%");
});