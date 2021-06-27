$(document).ready(() => {
  $(".carousel-home-mobile").owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
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
    // margin: 15,
    dotsEach: 1,
    navText: [
      "<img src='../img/item/left.png'>",
      "<img src='../img/item/right.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: true,
        loop: true,
      },
      768: {
        items: 1,
        dots: false,
        nav: true,
        loop: true,
      },
      1024: {
        items: 1,
        dots: false,
        nav: true,
        loop: true,
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
  $(".carousel-child-page").owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText: [
      "<img src='../img/item/left.png'>",
      "<img src='../img/item/right.png'>",
    ],
    margin: 0,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
  });
  //
  $(".menu-item-mobile a").on("click", function () {
    $(this).find(".actions").toggleClass("active");
    $("body").find(".bg-overlay").css({ display: "block" });
  });
  $(".list-services:not(:first-child) .title").on("click", function (e) {
    e.preventDefault();
    $(this).find("~.actions").toggleClass("active");
    $("body").find(".bg-overlay").css({ display: "block" });
  });
  $(".bg-overlay").on("click", function () {
    $(this).css({ display: "none" });
    $("body").find(".actions").removeClass("active");
    $("body").find(".menu-mobile-sub").removeClass("active");
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
    $(this).parent().find("~ul").slideToggle(250);
  });
  $("#toc_container .dropdown-button").on("click", function () {
    $(this).parent().find("~ul").slideToggle(250);
  });
  $(".home .readmore-about").on("click", function (e) {
    e.preventDefault();
    $("body").find(".section-aboutst666 .item-about").toggleClass("active");
  });
  $(".menu-bottom .item-menu .btn-support").on("click", function (e) {
    // e.preventDefault();
    $(this).find(".menu-mobile-sub").toggleClass("active");
    $("body").find(".bg-overlay").css({ display: "block" });
  });
  if ($(window).width() >= 992) {
    $(".header").removeClass("header-mobile");
  } else {
    $(".header").addClass("header-mobile");
  }
  $(window).resize(function () {
    var width = $(window).width();
    if (width >= 992) {
      $(".header").removeClass("header-mobile");
    } else {
      $(".header").addClass("header-mobile");
    }
  });
  // Submenu mobile click
  $('.menu-mobile .submenu').slideUp();
  $('.menu-mobile li i').click(function() {
    $(this).find('~ul.submenu').slideToggle(250);
  })
});
