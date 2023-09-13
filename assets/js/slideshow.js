
    const jsonfile = themeDirectoryUri + '/assets/json/portfolio-data.json';
    console.log('JSON all portfolio portfolio.js : ', jsonfile);

    fetch(jsonfile)
        .then(response => response.json())
        .then(data => {
            var htmlCode = '';
            const container = document.querySelector(".variable.slider");

            data.forEach(item => {
                const thumbnail = item.thumbnail;
                
                if (thumbnail) {
                    const divImage = document.createElement('div');
                    const imageElement = document.createElement('img');
                    imageElement.src = thumbnail;
                    
                    divImage.appendChild(imageElement);
                    container.appendChild(divImage);
                    htmlCode += divImage.outerHTML;
                }
            });
            
            container.innerHTML = htmlCode;
            console.log('innerHTML : ', htmlCode);
        });
