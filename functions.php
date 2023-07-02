<?php

//Declarer le theme enfant 
add_action( 'wp_enqueue_scripts', 'pafchild_enqueue_styles' );
function pafchild_enqueue_styles() {

    wp_enqueue_style( 'pierrealainfaure', get_template_directory_uri() . '/style.css' );

    wp_enqueue_style( 'pafchild', get_stylesheet_uri(), array( 'pierrealainfaure' ) );

    wp_enqueue_style( 'reset', get_stylesheet_directory_uri() . '/assets/css/reset.css' );


}

//Script via le scroll

/* function enqueue_scriptScroll()
{

    wp_enqueue_script('simpleparallax', get_stylesheet_directory_uri() . '/node_modules/simple-parallax-js/dist/simpleParallax.min.js', array(), false, true);

    wp_enqueue_script('simpleparallax-config', get_stylesheet_directory_uri() . '/js/simpleparallax.js', array(), false, true);
}
add_action('wp_footer', 'enqueue_scriptScroll'); */







?>