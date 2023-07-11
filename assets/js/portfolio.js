const slides = [
	{
		"image":"slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupérer les éléments du DOM
const banner = document.getElementById('banner');
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const pDots = document.querySelector('.dots');


// Créer un point pour chaque slide
slides.forEach((slide, index) => {
	
	// Créer un élément span pour représenter un point
	const dot = document.createElement('span');

	
	// Ajouter un attribut data-index pour stocker l'index du slide associé
	// avec la methode setAttribute
	dot.setAttribute('data-index', index);
		
	dot.classList.add('dot');//ajout une classe dot par defaut

	// Ajouter la classe 'dot_selected' au premier point par defaut
	if (index === 0) {
		dot.classList.add('dot_selected');
	}

	// Ajouter un gestionnaire d'événement pour changer de slide lorsque le point est cliqué
	dot.addEventListener('click', (event) => {
	const clickedDotIndex = event.target.getAttribute('data-index');// récupère le n° index 
	currentSlide = clickedDotIndex;
	
	modifySlide();


	}); 

	// Ajoute dynamiquement chaque point
	pDots.appendChild(dot);

});

let currentSlide = 0;

// Fonction pour afficher le slide selectionné
function modifySlide() {

	bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image;  
	
	const pTag = document.querySelector('#banner p');
	pTag.innerHTML = slides[currentSlide].tagLine;//inner permet de garder les elts html comme span
	bannerImg.alt = pTag.textContent;// Integre le pTag dans le alt img


	// Supprimer la classe 'dot_selected' de tous les points
	const dots = document.querySelectorAll('.dots span');//<span data-index="0" class="dot"></span>
    dots.forEach(dot => dot.classList.remove('dot_selected'));

    // Ajouter la classe 'dot_selected' au point correspondant au slide actuel
	const currentDot = document.querySelector('.dots span[data-index="' + currentSlide + '"]'); // définir le dot actuel = currentslide
    currentDot.classList.add('dot_selected'); // lui affecter la class selected
}

// Créer le numéro de slide avec Event listener : bouton droite
arrowRight.addEventListener(
	'click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {//si on arrive au dernier slide
        currentSlide = 0;
    }
    modifySlide();

}
);

// bouton gauche
arrowLeft.addEventListener(
	'click', () => {
		currentSlide--;
		if(currentSlide < 0){ // si negatif afficher le dernier (mais -1 car l'index comment à zéro)
			currentSlide = slides.length -1;
		}
		modifySlide();

}
);
