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

$counter = 0;

while ($characters_query->have_posts()) {

    $characters_query->the_post();

    echo '<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="' . $counter . '"><a href=""><p class="c-mouse-vertical-carousel__title u-a5">';

    $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
    echo '<img id="colorImage" src="' . esc_url($thumbnail_url) . '" alt="">';

    echo '</p></a></li>';
    $counter++;
}


?>


<!-- <li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="0">
					<a href="">
						<p class="c-mouse-vertical-carousel__title u-a5">
							<img id="colorImage" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/img1.jpg' ?>" alt="">
						</p>
					</a>
				</li> -->