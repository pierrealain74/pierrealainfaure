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
<body>
<main id="site-main">



	<?php //get_template_part('template-parts/logo'); ?>
	<?php //get_template_part('template-parts/cursor'); ?>


	<?php get_template_part('template-parts/carousel'); ?>



</main>




<script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri() . '/assets/slick/slick.js' ?>" type="text/javascript" charset="utf-8"></script>
<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slickcarousel.js' ?>" type="text/javascript" charset="utf-8"></script>

</body>

<?php
//get_sidebar();
get_footer();
