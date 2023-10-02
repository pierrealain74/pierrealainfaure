
const jsonfile = themeDirectoryUri + '/assets/json/portfolio-data.json';
//console.log('JSON all portfolio portfolio.js : ', jsonfile);

fetch(jsonfile)
    .then(response => response.json())
    .then(data => {
       /*  var htmlCode = ''; */
        const container = document.querySelector(".owl-carousel.custom-carousel.owl-theme");

        data.forEach(item => {

            const thumbnailfull = item.thumbnailfull;
            
            if (thumbnailfull) {


                /**<div class="item"></div> */
                const divItem = document.createElement('div');
                divItem.classList.add('item');
                divItem.style.backgroundImage = `url(${thumbnailfull})`;

                /**<div class="item-desc"></div> */
                const divItemDesc = document.createElement('div');
                divItemDesc.classList.add('item-desc');

                // H3
                const titleElement = document.createElement('h3');
                titleElement.textContent = item.title; // Utilisez le titre de votre JSON

                // AppendChild
                divItemDesc.appendChild(titleElement);                
                divItem.appendChild(divItemDesc);
                container.appendChild(divItem);

                /* htmlCode += divItem.outerHTML; */

            }
        });

    });
