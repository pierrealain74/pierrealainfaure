
/*Init OWL par defaut */


$(document).ready(function() {
  
  $(document).on('galleryCreated', function () {
    

     
      $('.owl-carousel').owlCarousel({
          loop: true,
          margin:0,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:8
              }
          }
      });
    
    
  });
});

