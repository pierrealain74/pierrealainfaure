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

<!-- partial:index.partial.html -->
<div class="main">
  <div class="slider center">
    <!--slideshow.js generate gallery images from CPT WP-->



  </div>
</div>
<!-- partial -->


<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/slideshow.js' ?>" type="text/javascript"></script>


<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/jquery-3.7.1.js' ?>" type="text/javascript" defer></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/slick/slick.min.js' ?>" type="text/javascript" defer></script>

<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/initslick.js' ?>" type="text/javascript" defer></script>





</body>
<?php
//get_sidebar();
get_footer();

?>

<!-- <script type="text/javascript">
    $(window).on("load", function() {

        $.getScript("<?php //echo get_stylesheet_directory_uri() . '/assets/js/initslick.js' ?>", function() {});

        $.getScript("<?php //echo get_stylesheet_directory_uri() . '/assets/js/jquery-3.7.1.js' ?>", function() {});

        $.getScript("<?php //echo get_stylesheet_directory_uri() . '/slick/slick.min.js' ?>", function() {});

    });
</script> -->
