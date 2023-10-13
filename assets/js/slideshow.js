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
                imgItem.classList.add('imgTest');

                // AppendChild
                divItem.appendChild(imgItem);
                container.appendChild(divItem);


            }
        });

        $(document).trigger('galleryCreated');

    });


