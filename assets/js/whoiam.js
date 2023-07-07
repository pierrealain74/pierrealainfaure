function introToWhoiam() {

    // Check scoll direction : wheel fastword backwrd
    //Delta = value take +-100 each wheel scroll
    delta += event.deltaY || event.detail || event.wheelDelta;
    var direction = (delta > 0) ? 1 : -1;


    // Delta and opacity may stay btw 0 et 1 or 0 1000
    delta = Math.max(0, delta);
    delta = Math.min(1000, delta);  
    opacity = Math.max(0, opacity);
    opacity = Math.min(1, opacity);

    //opacity is % of delta
    var opacity = 100 - (delta / 10);

    posMouse.innerHTML = `delta: ${delta}<br />direction: ${direction}<br />opacity: ${opacity}%`;
  
    sectionLogo.style.opacity = (opacity / 100).toFixed(2);
  
  if (sectionLogo.style.opacity == '0') {
    
    //console.log('opacity 0');
    sectionWhoiam.style.display = 'block';

    window.addEventListener("scroll", function (event) {
      document.body.style.overflowY = 'scroll';

      /*
      
      FIN DU FICHIER WHOIAM : CHANGEMENT DE CONCEPTION......
      
      
      */
      
    });



  }else if(sectionLogo.style.opacity !== '0') {
    sectionWhoiam.style.display = 'none';
  }

}

///////////
var delta = 0;
var posMouse = document.querySelector('.posMouse');
var sectionLogo = document.querySelector('section#logo');
var sectionWhoiam = document.querySelector('section#whoiam');
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