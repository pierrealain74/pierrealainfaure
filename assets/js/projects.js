const portfolioData  = [
  {
      "title": "Planty",
      "description": "100% responsive template - OPCR",
      "color1": "#DEEBFF",
      "color2": "#0065FC" 
  },
  {
      "title": "Maitrenageur.org",
      "description": "Online watersports job service",
      "color1": "#f4824c",
      "color2": "#cc0000" 
  },
  {
      "title": "Mkelefa",
      "description": "Website graphic template",
      "color1": "#0f5a7e",
      "color2": "#dff2fb" 
  },
  {
      "title": "MedIt",
      "description": "Coding highest performance - OPCR",
      "color1": "#0f5a7e",
      "color2": "#fee02f" 
  },
  {
      "title": "Motaphoto",
      "description": "Coding Js Jquery PhP - OPCR",
      "color1": "#454342",
      "color2": "#CA2605" 
  },
  {
      "title": "e-Moving",
      "description": "Debug woocommerce - OPCR",
      "color1": "#D5F5E3",
      "color2": "#196F3D" 
  },
  {
      "title": "Chic Dressing",
      "description": "Get best performance woocommerce - OPCR",
      "color1": "#4A235A",
      "color2": "#D2B4DE" 
  },
  {
      "title": "Booki",
      "description": "100% responsive template - OPCR",
      "color1": "#FFFFFF",
      "color2": "#3498DB" 
  },
  {
      "title": "CPing",
      "description": "Woocommerce table tennis specialist",
      "color1": "#1C2833",
      "color2": "#DC7633" 
  },
  {
      "title": "Polyglotchat",
      "description": "Graphic template for online language exchange",
      "color1": "#FFFFF",
      "color2": "#2B2A2A" 
  },
  {
      "title": "United Nations",
      "description": "Graphic template for United Nations website project",
      "color1": "#B5BABB",
      "color2": "#3586A9" 
  },
  {
      "title": "Meteo Guinee",
      "description": "Meteo Guinee graphic template",
      "color1": "#F1FA61",
      "color2": "#61BEFA" 
  },
  {
      "title": "Indigo",
      "description": "Graphic template for indigo brand",
      "color1": "#EBD7F3",
      "color2": "#9921D1" 
  },
  {
      "title": "Iya Traore",
      "description": "Footbal freestyler website - Redesign",
      "color1": "#333134",
      "color2": "#F1EFF1" 
  }


]




function colorize(color1, color2) {
  

  /**Change Bg color */
  const body = document.body;
  const backgroundColor = color1;
  const transitionBg = "background-color 1s";
  body.style.backgroundColor = backgroundColor;
  body.style.transition = transitionBg;

  /**Change Txt color : logo, menu,... */

  const txtColor = color2;
  const transitionTxt = "color 1s";

  const logo = document.getElementById("logo");
  logo.style.color = txtColor;
  logo.style.transition = transitionTxt;

  const menu = document.getElementById("primary-menu");
  menu.style.color = txtColor;
  menu.style.transition = transitionTxt;

  const h1Title = document.querySelector("h1");
  h1Title.style.color = txtColor;
  h1Title.style.transition = transitionTxt;

  const footer = document.querySelector("footer");
  footer.style.color = txtColor;
  footer.style.transition = transitionTxt;

  const bottomR = document.querySelector(".bottomR");
  bottomR.style.color = txtColor;
  bottomR.style.transition = transitionTxt;



}


/**
 * Extrait les sources des images à partir de l'URL fournie (merci chatgpt ;))
 *
 * @param {string} url - L'URL à partir de laquelle extraire les sources des images.
 * @param {function} callback - La fonction de rappel à appeler avec les sources d'images extraites.
 */
function extractImageSourcesFromURL(url, callback) {
    // Effectuer une requête AJAX pour obtenir le contenu de l'URL
    $.ajax({
      url: url,
      method: "GET",
      dataType: "html",
    })
      .done(function (data) {

        // Créer un objet jQuery à partir des données HTML
        var $html = $(data);


        /**
         * Selectionner toutes les images galerie
         * Mettre dans un tableau
         */
  
        // Sélectionner toutes les balises img et extraire les src
        var imageSources = $html.find("img").map(function () {
          return $(this).attr("src");
        });



        // Appeler la fonction de rappel avec le tableau d'URL d'images
        callback(imageSources.get());
        
      })
      .fail(function () {
        console.error("Impossible de récupérer le contenu de l'URL.");
        callback([]);
      });
}

  
/**
 * 
 * 
 * 
 * 
 */

const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
//console.log('title : ', title);

//Construit l'uRL pour récupérer la galerie d'images de chaque portolio
var url = "http://" + window.location.hostname + "/projects/" + title;

extractImageSourcesFromURL(url, function (imageSources) {


    const projects__title = document.querySelector(".projects__title .title");  
    const projects__thumb = document.querySelector(".projects__thumb");
    const projects__main = document.querySelector(".projects__main");
  
    /**
     * Affichage du titre du portfolio
     * 
     */
    projects__title.textContent = title;
    
    
  imageSources.forEach((imgSrc) => {
      

        //Photo principale gauche
        const divImgMain = document.createElement("div");
        const imgMain = document.createElement("img");
        imgMain.setAttribute("src", imgSrc);
        divImgMain.appendChild(imgMain);
        projects__main.appendChild(divImgMain);

        /**
         * Creation de la nav (div projects__thumb)
         * 
         */
        const divImg = document.createElement("div");
        divImg.classList.add("thumb_gallery");
        const imgThumb = document.createElement("img");
        imgThumb.setAttribute("src", imgSrc);      
        divImg.appendChild(imgThumb);
        projects__thumb.appendChild(divImg);
        
    });

    $(document).trigger("galleryCreated2");
        
});
  

const jsonfile = themeDirectoryUri + "/assets/json/portfolio-data.json";


/**
 * Rajout de ce tableau "en dur" pour en attendant de rajouter 
 * des champs ACF au portfolio via functions.php
 * champs à rajouter : description, color1, color2
 */


fetch(jsonfile)
  .then((response) => response.json())
  .then((data) => {

    const bottomC = document.querySelector(".bottomC");

    data.forEach((item) => {


      if (item.title.toLowerCase() == title) {//si title (medit) match avec un title du json principale
        

          const matchingItem = portfolioData.find((item) => item.title.toLowerCase() === title);
          //toLowerCase() parce que les title dans json ont une majuscule Medit au lieu de medit

          if (matchingItem) {//si title (medit) match avec un title du json secondaire (en dur)
        
            bottomC.innerHTML = `<div class="left__descr"><ul><li>+ Type</li>
          <li>+ Language</li><li>+ Date</li><li></li></ul></div><div class="right__descr"><ul><li>${item.categories}</li><li>${item.tags}</li><li>${item.date}</li><li></li></ul></div><div class="right__descr2"><ul><li></li><li></li><li></li><li>${matchingItem.description}</li></ul></div>`;
          /**
           *Coloriser les textes et le body 
           * 
           */
          colorize(matchingItem.color1, matchingItem.color2);

          }
      }
    });
  });