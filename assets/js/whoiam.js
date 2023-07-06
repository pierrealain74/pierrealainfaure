function introToWhoiam() {



   

    // Check scoll direction : wheel fastword backwrd
    //Delta = value take +-100 each wheel scroll
    delta += event.deltaY || event.detail || event.wheelDelta;
    var direction = (delta > 0) ? 1 : -1;

    //console.log(delta);
    //To display wheel delta
    posMouse.innerHTML = `delta: ${delta}<br />direction: ${direction}`;
    
 
    var opacity = delta / 1000;

    // Delta and opacity may stay btw 0 et 1 or 0 1000
    delta = Math.max(0, delta);
    delta = Math.min(1000, delta);  
    opacity = Math.max(0, opacity);
    opacity = Math.min(1, opacity);

    // Logo opacity depends on wheel delta value
    //sectionLogo.style.opacity = opacity.toString();
  
    if (direction == -1 && sectionLogo.style.opacity == 1) {

      console.log('delta : ', delta);
      console.log('opa : ', sectionLogo.style.opacity);

/*       sectionLogo.style.opacity = opacity.toString() */


    }







}

///////////
var delta = 0;
var posMouse = document.querySelector('.posMouse');
var sectionLogo = document.querySelector('section#logo');
var logoSection = document.querySelector('h1');
var iconArrowRight = document.querySelector('.fa-arrow-right');
var iconArrowDown = document.querySelector('.fa-arrow-down');

/* document.getElementById("whoiam").addEventListener("wheel", introToWhoiam, { passive: false }); */
  
window.addEventListener("wheel", function(event) {
    
    introToWhoiam();



});


  





/*Un cran de roulette souris avant ou arrière declanche l'affichage de la section suivante ou precedente */
/*   window.addEventListener('wheel', function() {

        var logoSection = document.getElementById('logo');
        var whoiamSection = document.getElementById('whoiam');

        //Prends le css réel de la section dans la page
        var computedWHoIAmSection = window.getComputedStyle(whoiamSection);

        // Vérifie la direction du défilement : cran roulette avant ou arriere
        var delta = event.deltaY || event.detail || event.wheelDelta;
        var direction = (delta > 0) ? 1 : -1;
    
        if (computedWHoIAmSection.getPropertyValue('display') === 'none' && direction === 1) {
    
          logoSection.style.display = 'none';
          whoiamSection.style.display = 'block';
    
        }
        else if(logoSection.style.display = 'none' && direction === -1){
          logoSection.style.display = 'block';
          whoiamSection.style.display = 'none';
        }
        
    
  }); */