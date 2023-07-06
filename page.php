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
 <!--SECTION LOGO-->
	<section id="logo" style="opacity:1">
		<h1>pierrealainfaure.com</h1>
		<i class="fa-solid fa-arrow-right"><i class="fa-solid fa-arrow-down"><span>scroll</span></i></i>
	</section>
<!--SECTION WHOIAM-->
	<section id="whoiam">

      <img class="who-dev" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/dev.png" alt="developpeur">
      <img class="who-screen" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/ecrans.png" alt="ecrans">

	</section>
  <span class="posMouse">>mouse?</span>
</main><!-- #main -->

<?php
//get_sidebar();
get_footer();
