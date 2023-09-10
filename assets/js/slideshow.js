/**
 * Boucle Json pour créer le slideshow
 */


const json_File2 = themeDirectoryUri + '/assets/json/portfolio-data.json';
console.log('JSON all portfolio portfolio.js : ', json_File2);

fetch(json_File2)
    .then(response => response.json()) // Décoder le JSON en un objet JavaScript
    .then(data => {




        // Maintenant, vous pouvez ajouter le contenu de la boucle à l'intérieur de la section

        var htmlCode = '';
        
                const container = document.querySelector(".variable.slider");
        
        data.forEach(item => {

            const thumbnailFull = item.thumbnailfull;
      
            
            if (thumbnailFull) {


                const divImage = document.createElement('div'); // Créez une div pour l'image
                const imageElement = document.createElement('img');
                imageElement.src = thumbnailFull;
                
                divImage.appendChild(imageElement); // Ajoutez l'image à la div
                container.appendChild(divImage); // Ajoutez la div à la galerie


                htmlCode += divImage.outerHTML;




            }
        });
            
            
            
        container.innerHTML = htmlCode;
            
    



});