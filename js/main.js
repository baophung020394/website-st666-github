$(document).ready(() => {
  $(".carousel-home").owlCarousel({
    loop: true,
    responsiveClass: true,
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
          "<img src='../img/item/left.jpg'>",
          "<img src='../img/item/right.jpg'>",
        ],
      },
      1024: {
        items: 1,
        dots: false,
        nav: true,
        navText: [
          "<img src='../img/item/left.jpg'>",
          "<img src='../img/item/right.jpg'>",
        ],
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
    $(this).find('.actions').toggleClass('active');
    $('body').find('.bg-overlay').css({ 'display': 'block'});
  }); 
  $(".bg-overlay").on("click", function () {
    $(this).css({ 'display': 'none'});
    $('body').find('.actions').removeClass('active');
  }); 
  $(".open-menu").on("click", function () {
    $('body').find('.menu-mobile').addClass('active');
    $('body').find('.bg-overlay-black').css({ 'display': 'block'});
  }); 
  $(".btn-closes").on("click", function () {
    $('body').find('.menu-mobile').removeClass('active');
    $('body').find('.bg-overlay-black').css({ 'display': 'none'});
  }); 
  $(".bg-overlay-black").on("click", function () {
    $(this).css({ 'display': 'none'});
    $('body').find('.menu-mobile').removeClass('active');
  });
});
