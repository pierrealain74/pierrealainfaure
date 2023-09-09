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
	<?php wp_head(); ?>	
</head>
<?php 

get_template_part('template-parts/nav-menu'); 


$include_create_json_path = get_stylesheet_directory() . '/assets/php/create_portfolio_array.php';
// Utilisez include pour inclure le fichier
include($include_create_json_path);


?>








<body>