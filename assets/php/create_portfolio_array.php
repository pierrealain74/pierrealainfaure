<?php
// Récupérez les portfolios depuis l'API 
$portfolio_url = get_site_url() . '/wp-json/wp/v2/portfolio?_fields=id,title,date,categories,tags,featured_media,content';


$portfolio_response = wp_remote_get($portfolio_url);
$portfolio_data = wp_remote_retrieve_body($portfolio_response);
$portfolios = json_decode($portfolio_data);

// Tableau pour stocker les données JSON
$portfolio_json = array();

// Boucle pour afficher chaque portfolio et stocker les données JSON
foreach ($portfolios as $portfolio) :
    $portfolio_item = array(
        'title' => esc_html($portfolio->title->rendered),
        'excerpt' => isset($portfolio->excerpt->rendered) ? wp_kses_post($portfolio->excerpt->rendered) : '',
        'date' => isset($portfolio->date) ? esc_html($portfolio->date) : '',
        'categories' => array(),
        'tags' => array(),
        'thumbnail' => '',
        'thumbnailfull' => '',
        'content' => esc_html($portfolio->content->rendered),
    );

    // Récupérer les catégories
    if (isset($portfolio->categories) && is_array($portfolio->categories)) {
        foreach ($portfolio->categories as $category_id) {
            $category = get_term($category_id, 'category');
            if ($category && !is_wp_error($category)) {
                $portfolio_item['categories'][] = esc_html($category->name);
            }
        }
    }

    // Récupérer les balises (tags)
    if (isset($portfolio->tags) && is_array($portfolio->tags)) {
        foreach ($portfolio->tags as $tag_id) {
            $tag = get_term($tag_id, 'post_tag');
            if ($tag && !is_wp_error($tag)) {
                $portfolio_item['tags'][] = esc_html($tag->name);
            }
        }
    }

    // Récupérer l'image à la une (thumbnail)
    $thumbnail_id = $portfolio->featured_media;
    $thumbnail_url = wp_get_attachment_image_url($thumbnail_id, 'thumbnail');
    $portfolio_item['thumbnail'] = esc_url($thumbnail_url);

    // Récupérer l'image à la une (thumbnail)
    $thumbnail_id = $portfolio->featured_media;
    $thumbnail_url = wp_get_attachment_image_url($thumbnail_id, 'full');
    $portfolio_item['thumbnailfull'] = esc_url($thumbnail_url);




    // Ajouter l'élément au tableau JSON
    $portfolio_json[] = $portfolio_item;
    ?>



<?php
endforeach;

// Convertir le tableau JSON en une chaîne JSON
$portfolio_json = json_encode($portfolio_json, JSON_PRETTY_PRINT);

// Chemin du fichier où enregistrer le JSON
$file_path = get_stylesheet_directory() . '/assets/json/portfolio-data.json';

// Enregistrer la chaîne JSON dans le fichier
file_put_contents($file_path, $portfolio_json);

// Afficher un message de confirmation
//echo 'Le JSON a été enregistré dans ' . $file_path;
?>

