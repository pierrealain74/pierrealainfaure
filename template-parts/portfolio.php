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

$characters_query = new WP_Query($args);

?>


<?php


echo '<div class="container"><header class="c-header c-header--archive c-header--project-list"><div class="c-mouse-vertical-carousel js-carousel u-media-wrapper u-media-wrapper--16-9"><ul class="c-mouse-vertical-carousel__list js-carousel-list">';

$counter = 0;

while ($characters_query->have_posts()) {

    $characters_query->the_post();

    echo '<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="' . $counter . '"  id="'.get_the_ID().'"><a href=""><p class="c-mouse-vertical-carousel__title u-a5">';

    $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
    echo '<img id="colorImage" src="' . esc_url($thumbnail_url) . '" alt="">';
    echo '</p></a></li>';


    // Stocker le titre du post dans le tableau pour afficher les titres en dehors du div container
    // display un foreach
    /* $post_titles[] = get_the_title(); */


    //Créer un array complet de toutes les datas des post
    $post_data = array(
        'post_title' => get_the_title(),
        'thumbnail' => get_the_post_thumbnail_url(get_the_ID(), 'full'),
        'category' => get_the_category(),
        'tags' => get_the_tags(),
        'id_post' => get_the_ID(),
    );
    $data[] = $post_data; 


    $counter++;
}

    echo '</ul></div></header></div>';

    // Display post title in position fixed to the bottom right of screen
/*     foreach ($post_titles as $title) {
        echo '<h2 class="post-title">' . $title . '</h2>';
    } */


//To create file contains array of ALL portfolio datas
$json_data = json_encode($data);
$file_path = get_stylesheet_directory() . '/assets/json/portfolio-data.json';
file_put_contents($file_path, $json_data);

?>