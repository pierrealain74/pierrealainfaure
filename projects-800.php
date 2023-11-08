<?php

/**
 * Template Name: Projects-800
 *
 * @package pierrealainfaure
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */
get_header(); ?>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/jquery-3.7.1.js' ?>"></script>

<link rel='stylesheet' href='<?php echo get_stylesheet_directory_uri() . '/assets/css/lightslider.css' ?>'>

<script>
  var themeDirectoryUri = "<?php echo get_stylesheet_directory_uri(); ?>";
</script>
<body>

  <header class="site-header">
    <!-- Contenu de votre en-tête, par exemple, votre logo et menu -->
    <?php get_template_part('template-parts/logo-menu'); ?>
  </header>



<main style="justify-content: center;width: 100vw; margin: unset">
  <div class="demo">
    <ul id="lightSlider"></ul>
  </div>
</main>


<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/projects-800.js' ?>"></script>
<!-- partial -->
<script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script>
<!-- <script src="<?php //echo get_stylesheet_directory_uri() . '/assets/js/jquery-3.7.1.js' ?>"></script> -->
<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/lightslider.js' ?>"></script>
<!--Decouverte du lightslider  : https://codepen.io/sachinchoolur/pen/mdZJRx-->
<?php get_template_part('template-parts/bottom800');?>
<?php get_footer(); ?>
