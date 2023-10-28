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


    const projects__thumb = document.querySelector(".projects__thumb");
    const projects__main = document.querySelector(".projects__main");

    /*imageSources.reverse();//pour ne pas afficher en 1er le thumbail principal à droite
    const mainThumbnail = imageSources[imageSources.length - 1];//prendre la derniere image = thumbnail principal

    /**Affiche la thumb du portfolio cliqué (page home) en div projects__main */
     
    /*const imgThumb = document.createElement("img");
    imgThumb.setAttribute("src", mainThumbnail);
    projects__main.appendChild(imgThumb); */             
  
    
  imageSources.forEach((imgSrc) => {
      


        const divImgMain = document.createElement("div");
        const imgMain = document.createElement("img");
        imgMain.setAttribute("src", imgSrc);

        divImgMain.appendChild(imgMain);
        projects__main.appendChild(divImgMain);


        const divImg = document.createElement("div");
        divImg.classList.add("thumb_gallery");
        const imgThumb = document.createElement("img");
        imgThumb.setAttribute("src", imgSrc);      
        divImg.appendChild(imgThumb);
        projects__thumb.appendChild(divImg);
        
    });

    $(document).trigger("galleryCreated2");
        
  });
  