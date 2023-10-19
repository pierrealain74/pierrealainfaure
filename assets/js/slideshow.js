const jsonfile = themeDirectoryUri + "/assets/json/portfolio-data.json";

fetch(jsonfile)
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".owl-carousel.owl-theme");

    data.forEach((item) => {
      const thumbnailfull = item.thumbnailfull;
      const title = item.title;

      if (thumbnailfull) {


        const divItem = document.createElement("div");
        divItem.classList.add("item");

        const divHover = document.createElement("div");
        divHover.classList.add("rolloverImg");

        const divEye = document.createElement("div");
        divEye.classList.add("eye");

        const imgItem = document.createElement("img");
        imgItem.src = thumbnailfull;
        imgItem.setAttribute("alt", title);


        // AppendChild
        divHover.appendChild(divEye);
        divItem.appendChild(divHover);
        divItem.appendChild(imgItem);        
        container.appendChild(divItem);


        // Click on image
        $(".eye").click(function () {
          
          var itemElement = $(this).closest(".item");

          // Trouver l'image à l'intérieur de l'élément .item
          var imageSrc = itemElement.find("img").attr("src");
        
          // Utiliser l'URL de l'image comme vous le souhaitez
          console.log(imageSrc);

          // Mettre l'image en arrière-plan
          $(".slide:nth-child(4)").css("background-image", "url(" + imageSrc + ")");

          // Activer le carrousel
          $("#slideCheckbox2").click();
        });




      }
    });

    $(document).trigger("galleryCreated");
  });