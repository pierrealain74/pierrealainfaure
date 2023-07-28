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
}

new HorizontalMouseDrivenCarousel();



/* 

V1 
Display images without any effect



class HorizontalCarousel {
	constructor(options = {}) {
		const _defaults = {
			carousel: ".js-carousel",
			listItem: ".js-carousel-list-item"
		};

		this.defaults = Object.assign({}, _defaults, options);

		this.init();
	}

	//region getters
	getListItems() {
		return document.querySelectorAll(this.defaults.listItem);
	}

	getCarousel() {
		return document.querySelector(this.defaults.carousel);
	}

	init() {
		this.listItems = this.getListItems().length;
		this.listWidth = this.listItems * 30; // Adjust 30 to control the width of each image
		this.getCarousel().style.width = `${this.listWidth}%`;

		TweenMax.set(this.getListItems(), {
			flex: `0 0 ${100 / this.listItems}%` // Set each list item to occupy equal width
		});
	}
}

new HorizontalCarousel(); */
