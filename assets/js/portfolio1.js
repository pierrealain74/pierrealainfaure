const slidesElement = document.querySelector('.slides');
const carousel = document.querySelector('.carousel');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', drag);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('mouseleave', dragEnd);

function dragStart(event) {
  isDragging = true;
  startPosition = getPositionX(event);
  previousTranslate = currentTranslate;
}

function drag(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = previousTranslate + currentPosition - startPosition;
  }
}

function dragEnd() {
  isDragging = false;
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function updateCarouselPosition() {
  slidesElement.style.transform = `translateX(${currentTranslate}px)`;
}

setInterval(updateCarouselPosition, 0);


//Recupere le tableau slides créé dans portfolio_array.js (lancé par functions.php)
slides.forEach((slide, index) => {
    
    // To create LI
    var liElement = document.createElement('li');

    // Créer un nouvel élément img
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', slide.image);
    imgElement.setAttribute('alt', 'image' + (index + 1) );

    // Définir d'autres attributs facultatifs
    //bannerImg.classList.add('banner-img');

    liElement.appendChild(imgElement);
    slidesElement.appendChild(liElement);
	
/* 	const pTag = document.querySelector('#banner p');
	pTag.innerHTML = slides[currentSlide].tagLine;//inner permet de garder les elts html comme span
	bannerImg.alt = pTag.textContent;// Integre le pTag dans le alt img */



});//end foreach
