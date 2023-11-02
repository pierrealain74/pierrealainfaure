
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

<script>var themeDirectoryUri = "<?php echo get_stylesheet_directory_uri(); ?>";</script>
<body>

  <header class="site-header">
    <!-- Contenu de votre en-tête, par exemple, votre logo et menu -->
    <?php get_template_part('template-parts/logo-menu');?>
  </header>


  <main id="site-main">

    <div class="owl-carousel owl-theme"></div>

  </main>



<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/jquery-3.7.1.js' ?>"></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slideshow.js' ?>"></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/owl.carousel.min.js' ?>"></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/initOwl.js' ?>"></script>


<?php get_footer();?>