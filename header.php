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
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>
	<!-- <script src="<?php //echo get_stylesheet_directory_uri() . '/assets/js/cursor.js' ?>"></script> -->
	<?php wp_head(); ?>
	
</head>
<!--Main menu-->
<nav class="primary-menu" role="navigation">

	<div id="menuToggle">

		<input type="checkbox" />

		<span></span>
		<span></span>
		<span></span>
		
		<?php

			wp_nav_menu(array(
			'menu' => 'menu header',
			'container'      => 'false',
			'menu_class' => 'menu',
			));
		?>
	
  </div>
</nav>
<body>