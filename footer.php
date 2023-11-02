<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pierrealainfaure
 */

?>

<footer id="colophon" class="site-footer">

		<div class="bottomL">independant developper<br />available on dec. 2023</div>
		<div class="bottomC"></div>
		<div class="bottomR">
			<a href="https://www.linkedin.com/in/pierre-alain-f-2625a620b/" class="linkarrow">linkedin</a>
			<a href="https://github.com/pierrealain74/" class="linkarrow">github</a>
			<a href="https://codepen.io/mixcodee" class="linkarrow">codepen</a>		
		</div>
	
</footer><!-- #colophon -->

<?php wp_footer(); ?>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/menu.js"></script>
<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . "/assets/css/responsive.css" ?>">
</body>
</html>
