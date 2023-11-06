
<!--Logo***********-->
<div id="logo" class="animate__animated animate__flipInX">pierrealainfaure</div>
<!--Logo-->

<!--Bloc News***********-->
<?php

//Ouvre les données de Post wordpress pour les news
$posts_url = get_site_url() . '/wp-json/wp/v2/posts?_fields=content,title,content&per_page=5';

$posts_response = wp_remote_get($posts_url);
$posts_data = wp_remote_retrieve_body($posts_response);
$posts = json_decode($posts_data);

?>
  <div id="primary-menu">
  <div class="news"><div>

  <?php

if ($posts !== null) {

  foreach ($posts as $post) {//strip_tag enleve tous les <p> ajoutés dans post wp</p>

      //Crée chaque news avec title et <a href Les href sont dans les Post
      echo '<a href="' . strip_tags($post->content->rendered) . '">' . $post->title->rendered . '</a>
      <span style="color:#2c4a45">&nbsp;&nbsp;&#x2022;&#x2022;&#x2022;&nbsp;&nbsp;&nbsp;&nbsp;</span>';

  }
}
?>
<!--Bloc News***********-->
</div>
  </div>
    <?php

      wp_nav_menu(
        array(
          'theme_location' => 'menu-1',
          'menu_id'        => 'primary-menu',
          'menu_class'     => 'menu-horizontal',
        )
      );
    ?>
  </div>
  <!-- Menu burger -->
  <div id="menuToggle">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="fullscreenMenu">
    <?php
    wp_nav_menu(
      array(
        'theme_location' => 'menu-1',
        'menu_id'        => 'primary-menu',
        'menu_class'     => 'menu-fullscreen',
      )
      );
    ?>
  </div>