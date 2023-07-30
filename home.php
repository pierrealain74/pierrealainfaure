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

    <!--Lignes vericales en bg-->
<!--     <div class="bg-line1"></div>
    <div class="bg-line2"></div> -->

    <!--Section logo-->
	<div id="logo">pierrealainfaure.com</div>


<!--////////////////////////////////////Carousel - GSAP//////////////////////////////////////////////////////-->

				
			<?php get_template_part('template-parts/portfolio'); ?>


<!-- 
<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img1.jpg')"></i>
<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img2.jpg')"></i>
<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img3.jpg')"></i>
<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img4.jpg')"></i>
<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img5.jpg')"></i>
<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img6.jpg')"></i>
<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img7.jpg')"></i>
<i class="c-gradient-overlay"></i> -->



<!--////////////////////////////////////Carousel - GSAP//////////////////////////////////////////////////////-->

   <!--Section datamouse-->
    <h2 class="post-title"></h2>


</main><!-- #main -->

<script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/portfolio_array.js"></script>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/carousel.js"></script>


<?php
//get_sidebar();
get_footer();
