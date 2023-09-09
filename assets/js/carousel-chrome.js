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

        // ... (le reste de votre code)

        // Modification de la gestion de la souris pour utiliser GSAP
        this.getCarousel().addEventListener("mousemove", (event) => {
            this.posX = event.pageX - this.getCarousel().offsetLeft;
            const offset = -(this.posX / carouselWidth * (this.listWidth - carouselWidth));

            gsap.to(this.getList(), {
                duration: 0.3,
                x: -offset,
                ease: "power4.out" // Ease equivalent to Power4.easeOut in TweenMax
            });
        }, false);
    }

    // ... (le reste de votre code)
}

new HorizontalMouseDrivenCarousel();
