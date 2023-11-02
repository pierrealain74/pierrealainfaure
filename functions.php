<?php

/**
 * 
 * Supprimer le script automatique de WP sur les emojis
 * 
 * @return void
 */
function disable_emojis() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
    add_filter('tiny_mce_plugins', 'disable_emojis_tinymce');
}
add_action('init', 'disable_emojis');

function disable_emojis_tinymce($plugins) {
    return array_diff($plugins, array('wpemoji'));
}


/** 
 * Declarer le theme enfant 
 */

function pafchild_enqueue_styles() {

    wp_enqueue_style('pafchild', get_stylesheet_uri(), array('pierrealainfaure'), '1.0', 'false'); 
}

add_action('wp_footer', 'pafchild_enqueue_styles');


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



//To Launch create JSON
function save_portfolio_update_json($post_id = null) {
    // Si $post_id n'est pas fourni, on vérifie le type de post en cours de traitement
    if ($post_id === null || get_post_type($post_id) === 'portfolio') {
        require_once get_stylesheet_directory() . '/assets/php/create_portfolio_array.php';
        
    }
}

// Action lors de la sauvegarde/mise à jour d'un post
add_action('save_post', 'save_portfolio_update_json');

// Action lors de la suppression d'un post
add_action('delete_post', 'save_portfolio_update_json');

// Action lors de la création d'un post
add_action('wp_insert_post', 'save_portfolio_update_json');

/**
 * Changer la structure du menu Wordpress de ul, li en label...
 * @param mixed $nav_menu
 * @param mixed $args
 * @return mixed
 */
function custom_menu_output($nav_menu, $args) {
    $menu_location = 'menu-1'; 
    $menu = wp_get_nav_menu_object($menu_location);

    if ($menu) {
        $menu_items = wp_get_nav_menu_items($menu);

        $output = '<nav>';

        foreach ($menu_items as $item) {
            $output .= '<label><a href="' . esc_url($item->url) . '">' . esc_html($item->title) . '</a></label>';
        }

        $output .= '</nav>';
        return $output;
    }
    
    return $nav_menu;
}

add_filter('wp_nav_menu', 'custom_menu_output', 10, 2);