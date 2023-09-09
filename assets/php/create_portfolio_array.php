<?php

// Récupérez les portfolios depuis l'API REST
$portfolio_url = 'http://pierrealainfaure2.local/wp-json/wp/v2/portfolio?_fields=id,title,date,categories,tags,featured_media';
$portfolio_response = wp_remote_get($portfolio_url);
$portfolio_data = wp_remote_retrieve_body($portfolio_response);
$portfolios = json_decode($portfolio_data);

// Vérifiez si $portfolios est un tableau valide
if (is_array($portfolios)) {

    // Initialisation du tableau JSON
    $portfolio_data_array = [];

    // Boucle pour afficher chaque portfolio
    foreach ($portfolios as $portfolio) {


        $portfolio_item = [
            'title' => $portfolio->title->rendered,

        ];

        
        // Ajout de l'élément au tableau JSON
        $portfolio_data_array[] = $portfolio_item;

      
    }


    // Convertir le tableau en JSON
    $portfolio_data_json = json_encode($portfolio_data_array);

    //var_dump($portfolio_data_json);
    $file_path = get_stylesheet_directory() . '/assets/json/portfolio-data.json';
    file_put_contents($file_path, $portfolio_data_json);



} else {
    // Gérer le cas où $portfolios est null ou autre chose que tableau
    echo 'Erreur : Aucune donnée de portfolio n\'a été récupérée.';
}
?>
