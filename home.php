<?php

/**
 * Template Name: Home
 *
 * @package pierrealainfaure
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */

get_header();
?>
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/assets/slick/slick.css' ?>">
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/assets/slick/slick-theme.css' ?>">
<script src="<?php //echo get_stylesheet_directory_uri() . '/assets/js/carousel.js' ?>"></script>
<script>
var themeDirectoryUri = "<?php echo get_stylesheet_directory_uri(); ?>";
</script>

<main id="site-main">

<?php //get_template_part('template-parts/logo'); ?>
<?php //get_template_part('template-parts/cursor'); ?>



<fieldset class="slideshow">
  
  <!-- Slide 1 -->
    <input type="radio" id="slideCheckbox1" name="slide" checked autofocus></input>
    <div class="slide">      
        <div class="slide__content">
            <section class="variable slider">
				
                <!--slideshow.js-->

		    </section>
        </div>  
    </div>
<!-- Slide 2 -->
<input type="radio" id="slideCheckbox2" name="slide"></input>
  <div class="slide">
  <div class="slide__content">
      <h1>More</h1>
      <p>More here</p>
    </div> 
  </div>

  <!-- Slide 3 -->
  <input type="radio" id="slideCheckbox3" name="slide"></input>
  <div class="slide">
    <div class="slide__content">
      <h1>Yet More</h1>
      <p>Yet more here</p>
    </div>  
  </div>

  <!-- Slide 4 -->
  <input type="radio" id="slideCheckbox4" name="slide"></input>
  <div class="slide">
    <div class="slide__content">
      <h1>Zzz</h1>
      <p>Yada yada</p>
    </div>   
  </div>

  <!-- Slide 5 -->
  <input type="radio" id="slideCheckbox5" name="slide"></input>
  <div class="slide">
    <div class="slide__content">
      <h1>The end</h1>
      <p>It's over</p>
    </div>  
  </div>

  <!-- Add more slides here! -->

  <nav>
    
    <!-- Add slide labels here! -->
    
    <label class="slide-button" for="slideCheckbox1">Home</label>
    <label class="slide-button" for="slideCheckbox2">Projects</label>
    <label class="slide-button" for="slideCheckbox3">About Me</label>
    <label class="slide-button" for="slideCheckbox4">Contact</label>
    <label class="slide-button" for="slideCheckbox5">Misc</label>
  </nav>

</fieldset>
<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slideshow.js' ?>" type="text/javascript"></script>


<script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript" defer></script>
<script src="<?php echo get_stylesheet_directory_uri() . '/assets/slick/slick.js' ?>" type="text/javascript" defer></script>
<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slickcarousel.js' ?>" type="text/javascript" defer></script>




</body>

<?php
//get_sidebar();
get_footer();

?>
