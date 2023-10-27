<?php

/**
 * Template Name: Projects
 *
 * @package pierrealainfaure
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */
get_header(); ?>
<script>
  var themeDirectoryUri = "<?php echo get_stylesheet_directory_uri(); ?>";
</script>

<body>

  <header class="site-header">
    <!-- Contenu de votre en-tête, par exemple, votre logo et menu -->
    <?php get_template_part('template-parts/logo-menu'); ?>
  </header>


  <main id="projects">



      <div class="projects__main"></div>

      <div class="projects__thumb"></div>


  </main>

  <script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/jquery-3.7.1.js' ?>"></script>

  <script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/projects.js' ?>"></script>

  <?php get_footer(); ?>