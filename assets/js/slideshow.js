const jsonfile = themeDirectoryUri + '/assets/json/portfolio-data.json';

fetch(jsonfile)
    .then(response => response.json())
    .then(data => {
       
        const container = document.querySelector(".owl-carousel.owl-theme");

        data.forEach(item => {

            const thumbnailfull = item.thumbnailfull;
            
            if (thumbnailfull) {


                
                const divItem = document.createElement('div');
                divItem.classList.add('item');

                const imgItem = document.createElement('img');
                imgItem.src = thumbnailfull;

                // AppendChild
                divItem.appendChild(imgItem);
                container.appendChild(divItem);


            }
        });

        $(document).trigger('galleryCreated');

    });



/**OWL avec Boostrap */
/*
const jsonfile = themeDirectoryUri + '/assets/json/portfolio-data.json';*/
//console.log('JSON all portfolio portfolio.js : ', jsonfile);
/*
fetch(jsonfile)
    .then(response => response.json())
    .then(data => {
       
        const container = document.querySelector(".owl-carousel.custom-carousel.owl-theme");

        data.forEach(item => {

            const thumbnailfull = item.thumbnailfull;
            
            if (thumbnailfull) {


                
                const divItem = document.createElement('div');
                divItem.classList.add('item');
                divItem.style.backgroundImage = `url(${thumbnailfull})`;

                
                const divItemDesc = document.createElement('div');
                divItemDesc.classList.add('item-desc');

                // H3
                const titleElement = document.createElement('h3');
                titleElement.textContent = item.title; // Utilisez le titre de votre JSON

                // AppendChild
                divItemDesc.appendChild(titleElement);                
                divItem.appendChild(divItemDesc);
                container.appendChild(divItem);


            }
        });

    });*/
