$(document).ready(() => {
  $(".carousel-home-mobile").owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      768: {
        items: 1,
        dots: true,
      },
      1024: {
        items: 1,
        dots: true,
      },
    },
  });
  $(".carousel-home-desk").owlCarousel({
    loop: true,
    responsiveClass: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false,
      },
      768: {
        items: 1,
        dots: false,
        nav: true,
        navText: [
          "<img src='../img/item/left.png'>",
          "<img src='../img/item/right.png'>",
        ],
      },
      1024: {
        items: 1,
        dots: false,
        nav: true,
        navText: [
          "<img src='../img/item/left.png'>",
          "<img src='../img/item/right.png'>",
        ],
      },
    },
  });
  $(".carousel-sport").owlCarousel({
    loop: true,
    responsiveClass: true,
    margin: 15,
    navText: [
      "<img src='../img/item/left.png'>",
      "<img src='../img/item/right.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: true,
      },
      768: {
        items: 1,
        dots: false,
        nav: true,
      },
      1024: {
        items: 1,
        dots: false,
        nav: true,
      },
    },
  });
  $(".carousel-mobile").owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 1,
        margin: 0,
      },
    },
  });
  //
  $(".menu-item-mobile a").on("click", function () {
    $(this).find(".actions").toggleClass("active");
    $("body").find(".bg-overlay").css({ display: "block" });
  });
  $(".list-services .title").on("click", function (e) {
    e.preventDefault();
    $(this).find("~.actions").toggleClass("active");
    $("body").find(".bg-overlay").css({ display: "block" });
  });
  $(".bg-overlay").on("click", function () {
    $(this).css({ display: "none" });
    $("body").find(".actions").removeClass("active");
  });
  $(".open-menu").on("click", function () {
    $("body").find(".menu-mobile").addClass("active");
    $("body").find(".bg-overlay-black").css({ display: "block" });
  });
  $(".btn-closes").on("click", function () {
    $("body").find(".menu-mobile").removeClass("active");
    $("body").find(".bg-overlay-black").css({ display: "none" });
  });
  $(".bg-overlay-black").on("click", function () {
    $(this).css({ display: "none" });
    $("body").find(".menu-mobile").removeClass("active");
  });
  $(".list-menu .dropdown-button").on("click", function () {
    $(this).find("~ul").slideToggle(250);
  });
  $("#ez-toc-container .dropdown-button").on("click", function () {
    $(this).find("~ul").slideToggle(250);
  });
  $(".readmore-about").on("click", function (e) {
    e.preventDefault();
    $("body").find(".section-aboutst666 .item-about").toggleClass("active");
  });
});
