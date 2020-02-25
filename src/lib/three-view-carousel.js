export class ThreeViewCarousel {
  constructor( options ) {
    this.defaults = {
      container: document.querySelector("*[three-view-carousel]"),
      children: container.children,
      controls: [
        `<i class="icon-arrow-left"></i>`,
        `<i class="icon-arrow-right"></i>`
      ],
      autoPlay: false,
      duration: 5000,
    };
    this.settings = Object.assign({}, this.defaults, options || {});

    this.initialized = false;
  }

  /**
   * Initialize carousel
   * @public
   */
  init() {
    // render wrapper
    // render nav dots
    // render controls

    // bind click
  }
}