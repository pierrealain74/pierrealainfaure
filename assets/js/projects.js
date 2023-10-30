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

fetch(jsonfile)
  .then((response) => response.json())
  .then((data) => {

    const bottomC = document.querySelector(".bottomC");

    data.forEach((item) => {

      
      bottomC.innerHTML = `<div class="left__descr"><ul><li>+ Type</li>
      <li>+ Language</li><li>+ Date</li><li></li></ul></div><div class="right__descr"><ul><li>${item.categories}</li><li>${item.tags}</li><li>${item.date}</li><li></li></ul></div><div class="right__descr2"><ul><li></li><li></li><li></li><li>Ici la description....</li></ul></div>`;

    });
  });