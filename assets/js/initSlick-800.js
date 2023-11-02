$(document).ready(function(){

    
    $(document).on('galleryCreated800', function () {

        $('#lightSlider').lightSlider({
            gallery: true,
            item: 1,
            loop:true,
            slideMargin: 0,
            thumbItem: 2
        });
         
    });
  
  }); 
    
  