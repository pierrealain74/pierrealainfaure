$(document).ready(function(){

      
    $(document).on('galleryCreated2', function () {


        /**
         * Creation de la galerie main (div projects__main)
         * 
         */

        $('.projects__main').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.projects__thumb'
        });

      /**
         * Creation de la nav (div projects__thumb)
         * 
         */
        $('.projects__thumb').slick({
          vertical: true,
          verticalSwiping: false,
          arrows: false, 
          slidesToShow: 3,
          asNavFor: '.projects__main', 
          slidesToScroll: 1, 
          autoplay: true,
          autoplaySpeed: 1000,
          centerMode: false,
          focusOnSelect: true
        });

    });


  });   