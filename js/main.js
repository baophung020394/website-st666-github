$(document).ready(() => {
  $(".carousel-home").owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    // autoplayTimeout: 5000,
    // autoplay: true,
    navText: ["<img src='../img/item/left.jpg'>","<img src='../img/item/right.jpg'>"],
    responsive: {
      0: {
        items: 1,
        nav:true,
      },
      768: {
        items: 1,
        nav:true,
      },
      1024: {
        items: 1,
        nav:true,
        margin: 0,
      },
    },
  });
});
