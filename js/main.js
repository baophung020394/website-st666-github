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
  $(".list-menu .dropdown-button").on("click", function () {
    $(this).find('~ol').slideToggle(250);
  });
});
