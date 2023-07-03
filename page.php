<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pierrealainfaure
 */

get_header();
?>

<!--background animation-->
<?php get_template_part('template-parts/bg_anime'); ?>

<main class="site-main">
  
	<section id="logo">
		<h1>pierrealainfaure.com</h1>
		<i class="fa-solid fa-arrow-right"><i class="fa-solid fa-arrow-down"><span>scroll</span></i></i>
	</section>

	<section id="whoiam">
    <div class="whoiam"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, ipsum magni facilis asperiores sit nulla. Ipsam, maiores a consequuntur consectetur autem repellendus minus dolor quisquam.</p></div>

	</section>
</main><!-- #main -->

<script>

  /*Un cran de roulette souris avant ou arrière declanche l'affichage de la section suivante ou precedente */

window.addEventListener('wheel', function() {

var logoSection = document.getElementById('logo');
var whoiamSection = document.getElementById('whoiam');

//Prends le css réel de la section dans la page
var computedWHoIAmSection = window.getComputedStyle(whoiamSection);

// Vérifie la direction du défilement : cran roulette avant our arriere
var delta = event.deltaY || event.detail || event.wheelDelta;
var direction = (delta > 0) ? 1 : -1;

    if (computedWHoIAmSection.getPropertyValue('display') === 'none' && direction === 1) {

      logoSection.style.display = 'none';
      whoiamSection.style.display = 'block';

    }
    else if(logoSection.style.display = 'none' && direction === -1){
      logoSection.style.display = 'block';
      whoiamSection.style.display = 'none';
    }
    else{

    }

});

</script>

<?php
//get_sidebar();
//get_footer();
