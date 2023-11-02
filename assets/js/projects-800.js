
/**
 * Rajout de ce tableau "en dur" -- en attendant de rajouter 
 * des champs ACF au portfolio via functions.php (pas le temps ;)
 * 3 champs à rajouter : description, color1, color2
 */


const portfolioData = [
    {
        "title": "Planty",
        "id": 258,
        "description": "100% responsive template - OPCR",
        "color1": "#DEEBFF",
        "color2": "#007600" 
    },
    {
        "title": "Maitrenageur.org",
        "id": 246,
        "description": "Online watersports job service",
        "color1": "#f4824c",
        "color2": "#cc0000" 
    },
    {
        "title": "Mkelefa",
        "id": 241,
        "description": "Website graphic template",
        "color1": "#0f5a7e",
        "color2": "#dff2fb" 
    },
    {
        "title": "MedIt",
        "id": 230,
        "description": "Coding highest performance - OPCR",
        "color1": "#88cff1",
        "color2": "#fee02f" 
    },
    {
        "title": "Motaphoto",
        "id": 252,
        "description": "Coding Js Jquery PhP - OPCR",
        "color1": "#454342",
        "color2": "#CA2605" 
    },
    {
        "title": "e-Moving",
        "id": 204,
        "description": "Debug woocommerce - OPCR",
        "color1": "#D5F5E3",
        "color2": "#196F3D" 
    },
    {
        "title": "Chic Dressing",
        "id": 281,
        "description": "Get best performance woocommerce - OPCR",
        "color1": "#4A235A",
        "color2": "#D2B4DE" 
    },
    {
        "title": "Booki",
        "id": 123,
        "description": "100% responsive template - OPCR",
        "color1": "#FFFFFF",
        "color2": "#3498DB" 
    },
    {
        "title": "CPing",
        "id": 279,
        "description": "Woocommerce table tennis specialist",
        "color1": "#1C2833",
        "color2": "#DC7633" 
    },
    {
        "title": "Polyglotchat",
        "id": 277,
        "description": "Graphic template for online language exchange",
        "color1": "#191919",
        "color2": "#CC0000" 
    },
    {
        "title": "United Nations",
        "id": 187,
        "description": "Graphic template for United Nations website project",
        "color1": "#b3c1c8",
        "color2": "#3586A9" 
    },
    {
        "title": "Meteo Guinee",
        "id": 237,
        "description": "Meteo Guinee graphic template",
        "color1": "#F1FA61",
        "color2": "#61BEFA" 
    },
    {
        "title": "Indigo",
        "id": 276,
        "description": "Graphic template for indigo brand",
        "color1": "#EBD7F3",
        "color2": "#9921D1" 
    },
    {
        "title": "Iya Traore",
        "id": 275,
        "description": "Footbal freestyler website - Redesign",
        "color1": "#333134",
        "color2": "#F1EFF1" 
    },
    {
      "title": "Koukaki",
      "id": 280,
      "description": "Js library parallax - OPCR",
      "color1": "#FCE7BA",
      "color2": "#FBA237" 
  }
  
  
  ]
  
  //Permet de coloriser differement chaue detail galerie portfolio
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
  
    const spanMenuToggle = document.querySelectorAll("#menuToggle span");
    spanMenuToggle.forEach((span) => {
      
      span.style.background = txtColor;
  
    })
    
  
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
   * Récupere les id et title dans l'url en GET
   * Crée la galerie (main et nav) avec slick library
   * 
   */
  
  // GET parameters into URL
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  const imgId = urlParams.get("id");
  
  //Construit l'uRL pour récupérer la galerie d'images de chaque portolio
  //Exemple http://pierrealainfaure.com/portfolio/chic-dressing/ --> le post où se trouve le contenu galerie
  
  var url = "http://" + window.location.hostname + "/projects/" + title;
  
  extractImageSourcesFromURL(url, function (imageSources) {
  
  
    const lightSliderElt = document.getElementById("lightSlider");
  
      
    imageSources.forEach((imgSrc) => {
      
  
        const liElt = document.createElement("li");
        liElt.setAttribute("data-thumb", imgSrc);


          const imgMain = document.createElement("img");
        imgMain.setAttribute("src", imgSrc);
        

          liElt.appendChild(imgMain);        
          lightSliderElt.appendChild(liElt);
  

          
      });
      $(document).trigger("galleryCreated800");

      $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop:true,
        slideMargin: 0,
        thumbItem: 2
    });
      

  });

  
  
  
  /**
   * 
   * Recupere et affiche dans le bottomC les données texte (tags, categories,...) dans le JSON principal
   * 
   */
  
  const jsonfile = themeDirectoryUri + "/assets/json/portfolio-data.json";
  
  fetch(jsonfile)
    .then((response) => response.json())
    .then((data) => {
  
      const bottomC = document.querySelector(".bottomC");
  
      data.forEach((item) => {
  
  
  /*       if (item.title.toLowerCase() == title.toLowerCase()) {//si title (medit) match avec un title du json principale
           */
        
        if (item.id == imgId) {
  
            const matchingItem = portfolioData.find((item) => item.id == imgId);
            //toLowerCase() parce que les title dans json ont une majuscule Medit au lieu de medit
  
            if (matchingItem) {//si title (medit) match avec un title du json secondaire (en dur)
          
              bottomC.innerHTML = `<div class="left__descr">+ Type: ${item.categories}<br />+ Language: ${item.tags}<br />+ Date: ${item.date}</div>`;
            /**
             *Coloriser les textes et le body 
             * 
             */
            //colorize(matchingItem.color1, matchingItem.color2);
  
            }
        }
      });
    });

