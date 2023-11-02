
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

      //Tranforme le title par exemple "beautées d'orient" devient "beautees-dorient"
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
        imgItem.setAttribute("id", item.id);

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

      //Prend le alt (en fait le title) de l'image cliquée
      //pour construire l'url ...portfolio/medit...
      var itemElement = $(this).closest(".item");
      var imageAlt = itemElement.find("img").attr("alt");
      var imageId = itemElement.find("img").attr("id");

      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {

        window.location.href = "http://" + window.location.hostname + "/projects-800/?title=" + encodeURIComponent(imageAlt) + "&id=" + imageId;
      } else {
        window.location.href = "http://" + window.location.hostname + "/projects/?title=" + encodeURIComponent(imageAlt) + "&id=" + imageId;
      }


    });

    $(document).trigger("galleryCreated");//Permet de lancer les autres JS (OWL) à la fin de ce code
  });
