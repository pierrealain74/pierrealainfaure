
<?php
/**
 * Template Name: About
 *
 * @package pierrealainfaure
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */
get_header();?>
<body>

  <header class="site-header">
    <!-- Contenu de votre en-tête, par exemple, votre logo et menu -->
    <?php get_template_part('template-parts/logo-menu');?>
  </header>


  <div id="about">
    <div class="aboutL">
        
        <?php
        
            if (have_posts()) :
                while (have_posts()) :
                    the_post();
                    the_content();
                endwhile;
            endif;
        ?>

    </div>
    <div class="aboutR"></div>

</div>

<?php get_template_part('template-parts/bottom');?>
<?php get_footer();?>