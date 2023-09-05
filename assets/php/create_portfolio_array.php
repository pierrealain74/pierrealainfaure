<?php


/** 
 * Generate an Array 
 * All portfolio (acf) thumbnails & title
 * For diplaying in portfolio
*/

$args = array(
    'post_type' => 'portfolio',
    'posts_per_page' => -1   

);

  $portfolio_query = new WP_Query($args);

  $result = 'false';

  while ($portfolio_query->have_posts()) {

    
      $portfolio_query->the_post();
  
      $slide = array(
          "image" => get_the_post_thumbnail_url(get_the_ID(), 'full'),
          "tagLine" => get_the_title()
      );
  
      $slides[] = $slide;
      $json_data = json_encode($slides);
      $js_file = get_stylesheet_directory() .'/assets/js/portfolio_array.json';

      $result = file_put_contents($js_file, 'const slides = ' . $json_data . ';');


      /*$portfolio_query->the_post();
      echo '<div class="test">';
      echo get_the_post_thumbnail(get_the_ID(), 'full');
      echo '<figcaption>';
      the_title();
      echo'</figcaption>';
      echo '</div>'; */

}
      if ($result === false) {
        $error = error_get_last();
        error_log($error['message']);
        echo $error;
      } else {
        error_log('Le fichier portfolio_array.js a été écrit avec succès.'); 
      } 
?>