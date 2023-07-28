<?php

/**
 * Template Name: Home
 *
 * @package pierrealainfaure
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */

get_header();

?>
<main id="site-main">

    <!--Lignes vericales en bg-->
<!--     <div class="bg-line1"></div>
    <div class="bg-line2"></div> -->

    <!--Section logo-->
	<div id="logo">pierrealainfaure.com</div>


<!--////////////////////////////////////Carousel - GSAP//////////////////////////////////////////////////////-->


<div class="container">
	<header class="c-header c-header--archive c-header--project-list">
		<div class="c-mouse-vertical-carousel js-carousel u-media-wrapper u-media-wrapper--16-9">
			<ul class="c-mouse-vertical-carousel__list js-carousel-list">
				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="0">
					<a href="">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
                                <span>
                            01
                        </span> Nevada
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
							<img id="colorImage" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/img1.jpg'?>" alt="">

						</p>
					</a>
				</li>

				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="1">
					<a href="">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
							<span>
                        02
                    </span> New Hampshire
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
                        <img id="colorImage" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/img2.jpg'?>" alt="">
						</p>
					</a>
				</li>

				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="2">
					<a href="">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
							<span>
                        03
                    </span> New York
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
                        <img id="colorImage" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/img3.jpg'?>" alt="">
						</p>
					</a>
				</li>

				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="3">
					<a href="">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
							<span>
                        04
                    </span> Oklahoma
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
                        <img id="colorImage" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/img4.jpg'?>" alt="">
						</p>
					</a>
				</li>

				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="4">
					<a href="">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
							<span>
                        05
                    </span> North Carolina
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
                        <img id="colorImage" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/img5.jpg'?>" alt="">
						</p>
					</a>
				</li>
				
				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="5">
					<a href="">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
							<span>
                        06
                    </span> Utah
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
                        <img id="colorImage" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/img6.jpg'?>" alt=""> 
						</p>
					</a>
				</li>
				
				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="6">
					<a href="">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
							<span>
                        07
                    </span> Missouri
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
                        <img id="colorImage" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/img7.jpg'?>" alt="">
						</p>
					</a>
				</li>
			</ul>

<!-- 			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img1.jpg')"></i>
			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img2.jpg')"></i>
			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img3.jpg')"></i>
			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img4.jpg')"></i>
			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img5.jpg')"></i>
			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img6.jpg')"></i>
			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('images/img7.jpg')"></i>
			<i class="c-gradient-overlay"></i> -->
		</div>
	</header>
</div>



<!--////////////////////////////////////Carousel - GSAP//////////////////////////////////////////////////////-->

   <!--Section datamouse-->
    <div class="posMouse">>mouse?</div>


</main><!-- #main -->

<script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/portfolio_array.js"></script>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/carousel.js"></script>


<?php
//get_sidebar();
get_footer();
