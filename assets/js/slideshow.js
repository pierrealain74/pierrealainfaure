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


        
        //Click on image
        $(".eye").click(function () {
            

          var imageSrc = $(".item img").attr("src");
    
          //$('.slide:nth-child(4)').html('<img src="' + imageSrc + '">');
          $(".slide:nth-child(4)").css("background-image", "url(" + imageSrc + ")");
    
          $("#slideCheckbox2").click();
        });



      }
    });

    $(document).trigger("galleryCreated");
  });