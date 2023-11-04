
  <div id="logo" class="animate__animated animate__flipInX">pierrealainfaure</div>

 
  <div id="primary-menu">
  <div class="news"><div><a href="https://www.ifj.org/actions/ifj-campaigns/free-assange-now" title="Free Assange now!"</a>#freeassange</a></div></div>
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