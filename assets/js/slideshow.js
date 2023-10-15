const jsonfile = themeDirectoryUri + '/assets/json/portfolio-data.json';

fetch(jsonfile)
    .then(response => response.json())
    .then(data => {
       
        const container = document.querySelector(".owl-carousel.owl-theme");

        data.forEach(item => {

            const thumbnailfull = item.thumbnailfull;
            
            if (thumbnailfull) {


                
                const divItem = document.createElement('div');
                divItem.classList.add('item');

                const imgItem = document.createElement('img');
                imgItem.src = thumbnailfull;
                imgItem.classList.add('imgTest');

                // AppendChild
                divItem.appendChild(imgItem);
                container.appendChild(divItem);


            }
        });

        $(document).trigger('galleryCreated');

    });


    

    /**
     * Seconde partie du code
     * Img slideshow OnClick
     * Display img in slide
     * 
     */

$(document).ready(function() {
  
    $(document).on('galleryCreated', function () {
  
  
      $('.item img').hover(
      function() {
          // Lorsque la souris survole l'image
          $(this).css('animation', 'biggerImgCarousel 0.5 ease-in');
          $(this).css('transform', 'scale(1.1)');
          $(this).css('filter', 'unset');
          $(this).css('opacity', '1');
  
      },
      function() {
          // Lorsque la souris quitte l'image
          $(this).css('transform', 'scale(1)');
          $(this).css('filter', 'grayscale(1)');
          $(this).css('opacity', '0.5');
      }
  );
  
  
      $('.item img').click(function() {
          
          var imageSrc = $(this).attr('src');
          
          
          //$('.slide:nth-child(4)').html('<img src="' + imageSrc + '">');
          $('.slide:nth-child(4)').css('background-image', 'url(' + imageSrc + ')');
  
          $("#slideCheckbox2").click();
  
      });
          
  
  
        });
  });
  


