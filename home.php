
<?php
/**
 * Template Name: Home
 *
 * @package pierrealainfaure
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */
get_header();?>
<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . "/assets/css/owl.carousel.css" ?>">

<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . "/assets/css/owl.theme.default.css" ?>">

<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . "/assets/css/owl.supercharge.css" ?>">

<script>const themeDirectoryUri = "<?php echo get_stylesheet_directory_uri(); ?>";</script>

<script>const jsonfile = themeDirectoryUri + "/assets/json/portfolio-data.json";</script>


<body>

<!--Loader-->
<div id="loader-wrapper">
  <div id="loader"></div>
</div>

<!--<div id="content">-->

  <header class="site-header">
    <!-- Contenu de votre en-tête, par exemple, votre logo et menu -->
    <?php get_template_part('template-parts/logo-menu-news');?>
  </header>

  <main>

    <div class="owl-carousel owl-theme"></div>

  </main>
</div><!--endof content div-->


<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/jquery-3.7.1.js' ?>"></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slideshow.js' ?>"></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/owl.carousel.min.js' ?>"></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/initOwl.js' ?>"></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/loader.js' ?>"></script>

<?php get_template_part('template-parts/bottom');?>
<?php get_footer();?>
