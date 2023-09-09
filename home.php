<?php

/**
 * Template Name: Home
 *
 * @package pierrealainfaure
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */

get_header();

?>
<main id="site-main">

	<script>
	// Définissez la variable themeDirectoryUri pour qu'elle soit accessible en JavaScript
		var themeDirectoryUri = "<?php echo get_stylesheet_directory_uri(); ?>";
	</script>

	<?php //get_template_part('template-parts/logo'); ?>
	<?php //get_template_part('template-parts/cursor'); ?>



				
	<?php //get_template_part('template-parts/portfolio'); ?>










</main>




<!-- <script src="<?php //echo get_stylesheet_directory_uri(); ?>/assets/js/portfolio_array.json"></script> -->
<!-- <script src="<?php //echo get_stylesheet_directory_uri(); ?>/assets/js/carousel.js"></script> -->
<!-- <script src="<?php //echo get_stylesheet_directory_uri(); ?>/assets/js/cursor.js"></script> -->



<?php
//get_sidebar();
get_footer();
