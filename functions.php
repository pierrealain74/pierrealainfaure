<?php

//Declarer le theme enfant 
add_action( 'wp_enqueue_scripts', 'pafchild_enqueue_styles' );
function pafchild_enqueue_styles() {

    wp_enqueue_style( 'pierrealainfaure', get_template_directory_uri() . '/style.css' );

    wp_enqueue_style( 'pafchild', get_stylesheet_uri(), array( 'pierrealainfaure' ) );

    
    //Glide Js (portoflio/carrousel)
/*     wp_enqueue_style( 'glide-core', get_stylesheet_directory_uri() . '/node_modules/@glidejs/glide/dist/css/glide.core.css' );

    wp_enqueue_style( 'glide-theme', get_stylesheet_directory_uri() . '/node_modules/@glidejs/glide/dist/css/glide.theme.css' );

    wp_enqueue_script( 'glidejs', get_stylesheet_directory_uri() . '/node_modules/@glidejs/glide/dist/glide.js' ); */

}



// ACF -- Portfolio Custom Post Type
function portfolio_post_type() {
    $labels = array(
        'name'               => 'Portfolio', // Nom du CPT affiché dans la barre latérale
        'singular_name'      => 'Portfolio',
        'menu_name'          => 'Portfolio',
        'add_new'            => 'Ajouter',
        'add_new_item'       => 'Ajouter Portfolio',
        'edit_item'          => 'Modifier Portfolio',
        'new_item'           => 'Nouveau Portfolio',
        'view_item'          => 'Voir Portfolio',
        'all_items'          => 'Tous les Portfolios',
        'search_items'       => 'Rechercher des Portfolio',
        'not_found'          => 'Aucun Portfolio trouvé',
        'not_found_in_trash' => 'Aucun Portfolio trouvé dans la corbeille',
        'parent_item_colon'  => '',
        'menu_icon'          => 'dashicons-star-filled', // Icône du CPT affichée dans la barre latérale
    );
    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'menu_position'       => 5, // Position dans la barre latérale (plus petit = plus haut)
        'show_in_menu'        => true, // Afficher dans la barre latérale
        'menu_icon'           => 'dashicons-star-filled', // Icône du CPT affichée dans la barre latérale
        'supports'            => array( 'title', 'editor', 'thumbnail' ),
        'taxonomies'          => array( 'post_tag', 'category' ),
        'show_in_rest' => true,
    );
    register_post_type( 'portfolio', $args ); // 'mon_cpt' est le slug du CPT

    register_meta( 'post', 'portfolio_client', array(
        'show_in_rest' => false,
        'single'       => true,
        'type'         => 'string',
    ) );
}
add_action( 'init', 'portfolio_post_type' );


//Add main menu 
function register_my_menu() {
    register_nav_menu('primary-menu', __('Primary Menu'));
}
add_action('after_setup_theme', 'register_my_menu');


