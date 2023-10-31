
//Force la redirection de home vers l'accueil du site
//sinon probleme de rafraichissement
const firstNavLink = document.querySelector("nav label:first-child a");
console.log('firstNavLink : ',firstNavLink);
firstNavLink.onclick = function() {
    window.location.href = `http://${window.location.hostname}`;
    //window.location.href = `https://google.fr`;
  };

/**Ouvre / Ferme le bouton Toggle */
const menuToggle = document.getElementById('menuToggle');
const fullscreenMenu = document.querySelector('.fullscreenMenu');
//console.log('fulscreen : ', fullscreenMenu);

menuToggle.addEventListener('click', () => {


    
     if (menuToggle.classList.contains('active')) { // Pour le burger button

        menuToggle.classList.remove('active');
        menuToggle.classList.add('inactive');
    } else {
        console.log('ajout active')
        menuToggle.classList.remove('inactive');
        menuToggle.classList.add('active');
    }
    fullscreenMenu.classList.toggle('active');// Pour l'ecran menu à 100% 


});



/**Ouvre / Ferme le menu bg au clique sur un lien du menu */
const menuLinks = document.querySelectorAll(".slide-button");

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');//Rendre activ le burger button
        menuToggle.classList.add('inactive');
        fullscreenMenu.classList.remove('active');//Cacher l'écran 100%
    });
});