/* 

V2
La carousel slide à droite et gauche selon la souris

*/
class HorizontalMouseDrivenCarousel {

	constructor(options = {}) {


		const _defaults = {
			carousel: ".js-carousel",
			list: ".js-carousel-list",
			listItem: ".js-carousel-list-item"
		};

		this.posX = 0;
		this.defaults = Object.assign({}, _defaults, options);

		this.initCursor();
		this.init();

		//FOREACH
		const carouselImages = this.getList().querySelectorAll("img");
		const cursor = document.querySelector('.cursor');


		carouselImages.forEach((image) => {

			image.addEventListener("mouseover", async () => {
				const postTitle = await this.getPostTitleFromJSON(image.src);
				this.updatePostTitle(postTitle);//Get and display post title
				this.mouseChangeOver();//Change cursor when img rollover
				});
			
			image.addEventListener("mouseout", async () => {
				this.mouseChangeOut();
				});
		});
	

	}

	//region getters
	getList() {
		return document.querySelector(this.defaults.list);
	}

	getCarousel() {
		return document.querySelector(this.defaults.carousel);
	}

	init() {
		this.listItems = this.getList().children.length;
		this.listWidth = this.listItems * 4; // Adjust 100 to control the width of each item

		this.getList().style.width = `${this.listWidth}%`;
	}

	initCursor() {
		const listWidth = this.getList().offsetWidth;
		const carouselWidth = this.getCarousel().offsetWidth;

		this.getCarousel().addEventListener(
			"mousemove",
			(event) => {
				this.posX = event.pageX - this.getCarousel().offsetLeft;
				const offset = -(this.posX / carouselWidth * (this.listWidth - carouselWidth));

				TweenMax.to(this.getList(), 0.3, {
					x: -offset,
					ease: Power4.easeOut,
				});
			},
			false
		);
	}



	 // New function to extract post title from JSON based on image source URL
	// Updated async function to extract post title from JSON based on image source URL






	async getPostTitleFromJSON(imageSrc) {
		// Construisez le chemin complet vers le fichier JSON en utilisant le répertoire du thème
		var jsonFilePath = themeDirectoryUri + "/assets/json/portfolio-data.json";
		console.log('chemin : ',jsonFilePath);

		try {
		const response = await fetch(jsonFilePath);
		const jsonData = await response.json();
		const post = jsonData.find((item) => item.thumbnail === imageSrc);
		return post ? post.post_title : "";
		} catch (error) {
		console.error("Error loading JSON data:", error);
		return "";
		}
	}
	
	// New function to update the post title in the HTML element
	updatePostTitle(postTitle) {
		const postTitleElement = document.querySelector(".post-title");
		if (postTitleElement) {
		postTitleElement.textContent = postTitle;
		}
	}

	// New function to update the post title in the HTML element
	mouseChangeOver() {

		cursor.classList.add('overImg');
		cursor.innerHTML = "click";
			}
	mouseChangeOut() {

		cursor.classList.remove('overImg');
		cursor.innerHTML = "";
	}

}

new HorizontalMouseDrivenCarousel();

