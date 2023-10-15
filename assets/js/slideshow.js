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

        const imgItem = document.createElement("img");
        imgItem.src = thumbnailfull;
        imgItem.setAttribute("alt", title);

        // AppendChild
        divItem.appendChild(imgItem);
        container.appendChild(divItem);
      }
    });

    $(document).trigger("galleryCreated");
  });

/**
 * Seconde partie du code
 *
 * 1. Rollover Effect on Img
 *
 * 2. Onclick Display img in slide space
 *
 */

$(document).ready(function () {
  var bottomCenterElement = $(".bottomCenter");

  $(document).on("galleryCreated", function () {
    // Trigger (created in initOwl.js line7)

    $(".item img").hover(
      function () {
        // On Rollover
        $(this).css("animation", "biggerImgCarousel 0.5 ease-in");
        $(this).css("transform", "scale(1.1)");
        $(this).css("filter", "unset");
        $(this).css("opacity", "1");

        const title = $(this).attr("alt");

        bottomCenterElement.text(title);
        bottomCenterElement.css("opacity", "1");
      },
      function () {
        // On RollOut
        $(this).css("transform", "scale(1)");
        $(this).css("filter", "grayscale(1)");
        $(this).css("opacity", "0.5");
        bottomCenterElement.text("");
        bottomCenterElement.css('opacity', '0');
      }
    );

    $(".item img").click(function () {
      var imageSrc = $(this).attr("src");

      //$('.slide:nth-child(4)').html('<img src="' + imageSrc + '">');
      $(".slide:nth-child(4)").css("background-image", "url(" + imageSrc + ")");

      $("#slideCheckbox2").click();
    });
  });
});
