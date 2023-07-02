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

<main class="site-main">


	<section id="logo">
		<h1>pierrealainfaure.com</h1>
		<i class="fa-solid fa-arrow-right"><i class="fa-solid fa-arrow-down"><span>scroll</span></i></i>
	</section>


</main><!-- #main -->

<script>
/* 
window.addEventListener('wheel', function(event) {
  event.preventDefault(); // Empêche le défilement par défaut de la page
  
  // Vérifie la direction du défilement
  var delta = event.deltaY || event.detail || event.wheelDelta;
  var direction = (delta > 0) ? 1 : -1;
  
  // Effectue le décalage de 300px
  var currentTransform = parseFloat(bigcloud.style.transform.replace('translateX(', '').replace('px)', ''));
  var newTransform = currentTransform + (direction * 300);
  bigcloud.style.transform = 'translateX(' + newTransform + 'px)';
}); */

</script>

<?php
//get_sidebar();
get_footer();
