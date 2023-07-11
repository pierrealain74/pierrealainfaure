function fadeLogoOnWheel()
{
    
    var opacity = opacityWheel();
    /* console.log(opacity) */

    //posMouse.innerHTML = `delta: ${delta}<br />direction: ${direction}<br />opacity: ${opacity}%`;

    //Fade in-out logo depending wheel
    sectionLogo.style.opacity = (opacity / 100).toFixed(2);

      
    if (sectionLogo.style.opacity == '0') { // si logo =0 whoiam = 1
        
        //console.log('opacity 0');
        sectionWhoiam.classList.add('show');
        document.documentElement.style.setProperty('--home-color', whoiamColor);

    }
    else if (sectionLogo.style.opacity > '0') { // si logo > whoiam = 0
        
        sectionWhoiam.classList.remove('show');
        document.documentElement.style.setProperty('--home-color', homeColor);

    }
    if (sectionWhoiam.classList.contains('show')) {
       
        console.log('whoiam show')

        var delta = 0;
        var opacity = opacityWheel();

        sectionWhoiam.classList.remove('show');
        sectionPortfolio.classList.add('show');
        //document.documentElement.style.setProperty('--home-color', homeColor);
        
        /*sectionWhoiam.classList.remove('hide');
        sectionPortfolio.classList.add('show');
        document.documentElement.style.setProperty('--home-color', portfolioColor); */
    }
    
};
function opacityWheel() {

    delta += event.deltaY || event.detail || event.wheelDelta;
    var direction = (delta > 0) ? 1 : -1;


    // Delta and opacity may stay btw 0 et 1 or 0 1000
    delta = Math.max(0, delta);
    delta = Math.min(1000, delta);  
    opacity = Math.max(0, opacity);
    opacity = Math.min(1, opacity);

    //opacity is % of delta
    var opacity = 100 - (delta / 10);
    return opacity;
}

//Bg Colors
var rootStyles = getComputedStyle(document.documentElement);
var homeColor = rootStyles.getPropertyValue('--home-color');
var logoColor = rootStyles.getPropertyValue('--logo-color');
var whoiamColor = rootStyles.getPropertyValue('--whoiam-color');
var portfolioColor = rootStyles.getPropertyValue('--portfolio-color');

//
var sectionLogo = document.getElementById('logo');
var sectionWhoiam = document.getElementById('whoiam');
var sectionPortfolio = document.getElementById('portfolio');
var posMouse = document.querySelector('.posMouse');

//all to function with WHEEL mouse event
window.addEventListener("wheel", fadeLogoOnWheel);


var delta = 0;

