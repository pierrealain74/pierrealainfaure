<?php

/**
 * Template Name: Projects
 *
 * @package pierrealainfaure
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */
get_header(); ?>


<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/jquery-3.7.1.js' ?>"></script>
<!-- Inclure les fichiers CSS et JS de Slick Carousel via CDN -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script>
  var themeDirectoryUri = "<?php echo get_stylesheet_directory_uri(); ?>";
</script>
<body>

  <header class="site-header">
    <!-- Contenu de votre en-tête, par exemple, votre logo et menu -->
    <?php get_template_part('template-parts/logo-menu'); ?>
  </header>


  <main id="projects">

      <div class="projects__title"><h1 class="title animate__animated animate__fadeInLeft"></h1></div>

      <div class="projects__main animate__animated animate__fadeInRight"></div>

      <div class="projects__thumb"></div>


  </main>

  

  <script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/projects.js' ?>"></script>
  <script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/initSlick.js' ?>"></script>
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . "/assets/css/slick.supercharge.css" ?>">

  <?php get_footer(); ?>