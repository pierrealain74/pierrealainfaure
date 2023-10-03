<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pierrealainfaure
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<link rel='stylesheet' href='<?php echo get_stylesheet_directory_uri() . '/assets/css/owl.carousel.css' ?>'>

	<link rel='stylesheet' href='<?php echo get_stylesheet_directory_uri() . '/assets/css/owl.theme.default.css' ?>'>


<!-- 	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css'> -->

<!-- 	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'>
	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css'> -->

<!-- 	<link rel='stylesheet' href='<?php //echo get_stylesheet_directory_uri() . '/owl.css' ?>'> -->

	



	<?php wp_head(); ?>
</head>
