<?php
/**
 * Template Name: Home
 *
 * @package pierrealainfaure
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */
get_header();

 //Verifier si le fichier Json Portfolio default n'est pas vide 
 $jsonfile = get_stylesheet_directory() . '/assets/json/portfolio-data.json';

 //Creation du JSON si JSON Vide : en cas de migration par exemple
 if (empty(file_get_contents($jsonfile))) {
     save_portfolio_update_json();
 }
?>

<script>
var themeDirectoryUri = "<?php echo get_stylesheet_directory_uri(); ?>";
</script>

<section class="variable slider">
 <!--    <div>
      <img src="https://picsum.photos/200/300">
    </div>
    <div>
      <img src="https://picsum.photos/200/300">
    </div>
    <div>
      <img src="https://picsum.photos/200/300">
    </div>
    <div>
      <img src="https://picsum.photos/200/300">
    </div>
    <div>
      <img src="https://picsum.photos/200/300">
    </div>
    <div>
      <img src="https://picsum.photos/200/300">
    </div> -->
  </section>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slideshow.js' ?>" type="text/javascript"></script>


<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/jquery-2.2.0.min.js' ?>" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri() . '/assets/slick/slick.js' ?>" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slickcarousel.js' ?>" type="text/javascript"></script>

<script>



// Identifiez votre conteneur où vous générez le contenu
const container = document.querySelector(".variable.slider");

// Fonction à exécuter lorsque la balise <!-- endofile --> est détectée
function executeScripts() {

  slick();
  slickCarousel();

  console.log("Scripts exécutés après la détection de <!-- endofile -->");
}

// Configuration de l'observateur de mutations
const observerConfig = { childList: true, subtree: true };

// Créez un observateur de mutations avec une fonction de rappel
const observer = new MutationObserver(function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      // Parcourez les nœuds ajoutés pour rechercher la balise <!-- endofile -->
      for (let addedNode of mutation.addedNodes) {
        if (addedNode.nodeType === Node.COMMENT_NODE && addedNode.textContent.trim() === "endofile") {
          // La balise <!-- endofile --> a été détectée, exécutez les scripts
          executeScripts();

          // Arrêtez d'observer les mutations, car nous avons fini
          observer.disconnect();
          break;
        }
      }
    }
  }
});

// Commencez à observer les mutations
observer.observe(container, observerConfig);
</script>
<?php
//get_sidebar();
get_footer();

?>
