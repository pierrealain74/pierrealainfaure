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


	<?php wp_head(); ?>
</head>
