<nav class="primary-menu" role="navigation">
	<div id="menuToggle">
		<input type="checkbox" />
		<span></span>
		<span></span>
		<span></span>
		<?php
			wp_nav_menu(array(
			'menu' => 'menu header',
			'container'      => 'false',
			'menu_class' => 'menu',
			));
		?>
	</div>
</nav>