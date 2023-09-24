
    const jsonfile = themeDirectoryUri + '/assets/json/portfolio-data.json';
    //console.log('JSON all portfolio portfolio.js : ', jsonfile);

    fetch(jsonfile)
        .then(response => response.json())
        .then(data => {
            var htmlCode = '';
            const container = document.querySelector(".variable.slider");

            data.forEach(item => {
                const thumbnailfull = item.thumbnailfull;
                
                if (thumbnailfull) {
                    const divImage = document.createElement('div');
                    const imageElement = document.createElement('img');
                    imageElement.src = thumbnailfull;
                    
                    divImage.appendChild(imageElement);
                    container.appendChild(divImage);
                    htmlCode += divImage.outerHTML;
                }
            });
            htmlCode += '<!-- endofile -->';
           
            container.innerHTML = htmlCode;
            console.log('innerHTML : ', htmlCode);
        });
