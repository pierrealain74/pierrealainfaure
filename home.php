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

<script>
var themeDirectoryUri = "<?php echo get_stylesheet_directory_uri(); ?>";
</script>


<body>
<main id="site-main">

<!----------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------------------------------------------------------------------------->


<fieldset class="slideshow"><!-- Slide 1 -->
        <input type="radio" id="slideCheckbox1" name="slide" checked autofocus></input>
        <div class="slide">      
          <div class="slide__content">
            <section class="variable slider">

				<!--Slideshow.js  = Ajout boucle images-->

			</section>
          </div>  
        </div>        
        <!-- Slide 2 -->
        <input type="radio" id="slideCheckbox2" name="slide"></input>
        <div class="slide">
          <img src="" alt="" />
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
        
  
        
        <nav>
          <!-- Add slide labels here! -->
          <label class="slide-button" for="slideCheckbox1">Home</label>
          <label class="slide-button" for="slideCheckbox2">Projects</label>
          <label class="slide-button" for="slideCheckbox3">About Me</label>
          <label class="slide-button" for="slideCheckbox4">Contact</label>
          <label class="slide-button" for="slideCheckbox5">Misc</label>
        </nav>
        
      </fieldset>


<!----------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------------------------------------------------------------------------->







	<?php //get_template_part('template-parts/logo'); ?>
	<?php //get_template_part('template-parts/cursor'); ?>

<!--<?php //get_template_part('template-parts/carousel', null, array('data' => $data)); ?> -->
	<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slideshow.js' ?>" type="text/javascript" charset="utf-8"></script>



</main>




<script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
<script src="<?php echo get_stylesheet_directory_uri() . '/assets/slick/slick.js' ?>" type="text/javascript" charset="utf-8"></script>
<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slickcarousel.js' ?>" type="text/javascript" charset="utf-8"></script>

</body>

<?php
//get_sidebar();
get_footer();
