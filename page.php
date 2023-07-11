<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pierrealainfaure
 */

get_header();
?>

<main id="site-main">

<div class="bg-line1"></div>
<div class="bg-line2"></div>

 <!--SECTION LOGO-->
  <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo.png'; ?>" alt="logo pierrealainfaure" id="logo">

    <section id="portfolio">

      <?php get_template_part('template-parts/portfolio'); ?>


<!--         <h1>Imagination is the base of every design</h1>
        <video autoplay muted loop id="bg-video">
            <source src="<?php //echo get_stylesheet_directory_uri() . '/assets/videos/video-studio-koukaki.mp4'; ?>" type="video/mp4">
        </video> -->
    </section>
<!--SECTION WHOIAM-->
  <section id="whoiam">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, delectus quas provident earum totam nesciunt beatae veniam officia rem omnis error veritatis fugit eveniet officiis quae harum nihil ipsum. Inventore architecto quae ullam eveniet labore non vero aspernatur tenetur, in laborum ipsa odio ipsum incidunt asperiores omnis illum esse accusantium alias dolor officia sapiente modi beatae unde culpa! Accusamus eveniet porro commodi? Sequi ipsa animi eaque unde quis, similique, officiis repudiandae laborum consectetur non necessitatibus quidem, iste commodi. Maxime dignissimos iusto ipsum maiores alias molestiae odio officia ut eius tenetur asperiores</p>  <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/dev.png'; ?>" alt="logo pierrealainfaure">
	</section>
    <!--SECTION PORTFOLIO-->
  <section id="contact">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, delectus quas provident earum totam nesciunt beatae veniam officia rem omnis error veritatis fugit eveniet officiis quae harum nihil ipsum. Inventore architecto quae ullam eveniet labore non vero aspernatur tenetur, in laborum ipsa odio ipsum incidunt asperiores omnis illum esse accusantium alias dolor officia sapiente modi beatae unde culpa! Accusamus eveniet porro commodi? Sequi ipsa animi eaque unde quis, similique, officiis repudiandae laborum consectetur non necessitatibus quidem, iste commodi. Maxime dignissimos iusto ipsum maiores alias molestiae odio officia ut eius tenetur asperiores</p>  <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/palmier.png'; ?>" alt="logo pierrealainfaure">

	</section>
  <div class="posMouse">>mouse?</div>
</main><!-- #main -->






<?php
//get_sidebar();
get_footer();
