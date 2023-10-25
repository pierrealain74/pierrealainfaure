<?php

$jsonfile = get_stylesheet_directory() . '/assets/json/portfolio-data.json';
 if (empty(file_get_contents($jsonfile))) {
     save_portfolio_update_json();
 }

 ?>