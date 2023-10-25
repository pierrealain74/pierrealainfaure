
/**
 * Transforme les titres des ACF Portfolios en une version simplifiée.
 * Par exemple "Les Beautée d'Orient" doit donner "les-beautes-dorient"
 *
 * @param {string} title - Le titre à transformer.
 * @returns {string} - Le titre transformé.
 */
function transformTitle(title) {
  // Convertir les entités HTML en caractères réels
  title = title.replace(/&#\d+;/g, function (match) {
    return String.fromCharCode(match.slice(2, -1));
  });

  // Remplacer les espaces par des tirets
  title = title.replace(/\s+/g, '-');

  // Remplacer les caractères spéciaux par leur équivalent sans accent
  title = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Supprimer les quotes (') ou doubles quotes (")
  title = title.replace(/[’'"]/g, '');

  // Convertir en minuscules
  title = title.toLowerCase();

  return title;
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
 * Création de la galerie OWL avec les vignettes des ACF Portfolios.
 * Utilise un fichier JSON pour récupérer les données des vignettes.
 */

const jsonfile = themeDirectoryUri + "/assets/json/portfolio-data.json";//existe dans assets/json/ Créé par create_portfolio_array.php

fetch(jsonfile)
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".owl-carousel.owl-theme");

    data.forEach((item) => {
      const thumbnailfull = item.thumbnailfull;
      const title = transformTitle(item.title);

      if (thumbnailfull) {

        /**
         * Creation du portfolio sous la forme 
         * <div class="item">
         *    <div class="rolloverImg">
         *        <div class="eye"></div>
         *    </div>
         * <img src="http://pierrealainfaure3.local/wp-content/uploads/2023/07/UuAtHiV-scaled.jpeg" alt="projet-a"></div></div>
         * </div>
         * 
         * 
         */

        const divItem = document.createElement("div");
        divItem.classList.add("item");

        const divHover = document.createElement("div");
        divHover.classList.add("rolloverImg");

        const divEye = document.createElement("div");
        divEye.classList.add("eye");

        const imgItem = document.createElement("img");
        imgItem.src = thumbnailfull;
        imgItem.setAttribute("alt", title);

        divHover.appendChild(divEye);
        divItem.appendChild(divHover);
        divItem.appendChild(imgItem);
        container.appendChild(divItem);
      }
    });

    /**
     * Creation de l'evenement Onclick sur l'icone Eye qui apparait au rollover d'une image
     * Recupere le alt de l'image d'un elt Item (en fait le title)
     * Construit une URL https (ex. http://pierrealainfaure3.local/portfolio/les-beautes-dorient/) pour récupérer les src des images de la galerie du post
     * 
     */

    $(".eye").click(function () {
      var itemElement = $(this).closest(".item");
      var imageAlt = itemElement.find("img").attr("alt");
      var url = "http://" + window.location.hostname + "/portfolio/" + imageAlt;
      //console.log('URLs des images : ', url);

      extractImageSourcesFromURL(url, function (imageSources) {


        
        imageSources.reverse();

        //console.log(imageSources);

        let slide4 = document.querySelector(".slide:nth-child(4)");

        const divThumbs = document.createElement("div");
        divThumbs.classList.add("thumbs");
        slide4.appendChild(divThumbs);

        imageSources.forEach((imgSrc) => {
 
          const imgThumb = document.createElement("img");
          imgThumb.src = imgSrc;
          imgThumb.classList.add("imgThumb");

          divThumbs.appendChild(imgThumb);


        });

      });

      var itemElement = $(this).closest(".item");
      var imageSrc = itemElement.find("img").attr("src");
      $(".slide:nth-child(4)").css("background-image", "url(" + imageSrc + ")");
      $("#slideCheckbox2").click();
    });

    $(document).trigger("galleryCreated");//Permet de lancer les autres JS (OWL) à la fin de ce code
  });
