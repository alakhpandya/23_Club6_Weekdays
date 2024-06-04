$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  navText: [
    '<i class="fa-solid fa-arrow-left-long"></i>',
    '<i class="fa-solid fa-arrow-right-long"></i>',
  ],
  dots: false,
  // autoplay: true,
  // autoplayTimeout: 2000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
  },
});

AOS.init();
