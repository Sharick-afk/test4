document.addEventListener("DOMContentLoaded", function () {
  $(".intro .owl-carousel").owlCarousel({
    nav: true,
    items: 1,
  });
  $(".news .owl-carousel").owlCarousel({
    nav: true,
    items: 3,
    margin: 16,
  });
})