
/*Init OWL par defaut */


$(document).ready(function() {
  // Attendre que toutes les images soient chargées
  $(".owl-carousel .item img").on("load", function() {
      // Initialiser le carousel OWL une fois que toutes les images sont chargées
      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      })
  });
});



/*Init OWL avec Boostrap */
/* document.addEventListener("DOMContentLoaded", function() {
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
}); */