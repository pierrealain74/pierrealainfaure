

document.addEventListener("DOMContentLoaded", function () {   
    const imgCarousel = document.querySelectorAll("section img");
    const slide4 = document.querySelector(".slide:nth-child(4)");

    imgCarousel.forEach((image) => {
        image.addEventListener('click', () => {
            const imgSrc = image.getAttribute('src');
            slide4.style.backgroundImage = `url(${imgSrc})`;
            document.getElementById("slideCheckbox2").click();
        });
    });
});
