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
          fade: false,
          asNavFor: '.projects__thumb',
/*           useCSS: false,
          useTransform: true */
            
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
          autoplaySpeed: 2000,
          centerMode: false,
          focusOnSelect: true
        });

    });


}); 
  
