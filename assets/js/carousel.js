$(document).ready(function() {
   
    $('.slider img').click(function() {
        
        var imageSrc = $(this).attr('src');
        
        
        //$('.slide:nth-child(4)').html('<img src="' + imageSrc + '">');
        $('.slide:nth-child(4)').css('background-image', 'url(' + imageSrc + ')');

        $("#slideCheckbox2").click();

    });
});


/* document.addEventListener("DOMContentLoaded", function () {
    
    const imgCarousel = document.querySelectorAll("slick-slide");

    const slide = document.querySelector(".slide:nth-child(4)");

    


    imgCarousel.forEach((image) => {

        console.log(image);

        image.addEventListener('click', () => {

            const imgSrc = image.getAttribute('src');

            slide.style.backgroundImage = `url(${imgSrc})`;

            document.getElementById("slideCheckbox2").click();

        });
    });
});
 */