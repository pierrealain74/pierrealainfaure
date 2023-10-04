
<?php
/**
 * Template Name: Home
 *
 * @package pierrealainfaure
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */
get_header();

 //Verifier si le fichier Json Portfolio default n'est pas vide 
 $jsonfile = get_stylesheet_directory() . '/assets/json/portfolio-data.json';

 //Creation du JSON si JSON Vide : en cas de migration par exemple
 if (empty(file_get_contents($jsonfile))) {
     save_portfolio_update_json();
 }
?>
<script>
var themeDirectoryUri = "<?php echo get_stylesheet_directory_uri(); ?>";
</script>
<body>
<main id="site-main">
<div id="logo">pierrealainfaure.com</div>

<fieldset class="slideshow">

<!-- Slide 1 -->
<input type="radio" id="slideCheckbox1" name="slide" checked autofocus></input>
    <div class="slide">      
        <div class="slide__content">
            <section class="game-section">
                <div class="owl-carousel owl-theme">
                    <!--slideshow.js generate gallery images from CPT WP-->




                    <!--END slideshow.js generate gallery images from CPT WP-->

                </div>
            </section>
        </div>
    </div>
<!-- Slide 2 -->
<input type="radio" id="slideCheckbox2" name="slide"></input>
  <div class="slide">
    <div class="slide__content">
      <h1>Projects</h1>
      <p>More here</p>
    </div> 
  </div>

  <!-- Slide 3 -->
<input type="radio" id="slideCheckbox3" name="slide"></input>
  <div class="slide">
    <div class="slide__content">
      <h1>About me</h1>
      <p>More here</p>
    </div> 
  </div>

  <nav>    
    <label class="slide-button" for="slideCheckbox1">Home</label>
    <label class="slide-button" for="slideCheckbox2">Projects</label>
    <label class="slide-button" for="slideCheckbox3">About</label>
    <label class="slide-button" for="slideCheckbox4">Contact</label>
    <label class="slide-button" for="slideCheckbox5">Links</label>
  </nav>

</fieldset>




<!-- <script src="<?php //echo get_stylesheet_directory_uri() . '/assets/js/carousel.js' ?>" type="text/javascript" defer></script> -->



</body>
<?php
//get_sidebar();
get_footer();

?>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/jquery-3.7.1.js' ?>"></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slideshow.js' ?>"></script>



<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/owl.carousel.min.js' ?>"></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/initOwl.js' ?>"></script>