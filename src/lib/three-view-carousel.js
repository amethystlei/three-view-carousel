export class ThreeViewCarousel {
  constructor( options ) {
    this.defaults = {
      container: document.querySelector("*[three-view-carousel]"),
      controls: {
        prev: `<i class="icon-arrow icon-arrow--left"></i>`,
        next: `<i class="icon-arrow icon-arrow--right"></i>`
      },
      autoPlay: false,
      duration: 5000,
    };
    this.settings = Object.assign({}, this.defaults, options || {});
    this.container = this.settings.container;
    this.autoPlayControl = this.settings.autoPlay;
    this._movePrev = this._movePrev.bind(this);
    this._moveNext = this._moveNext.bind(this);
    this._mouseDownHandler = this._mouseDownHandler.bind(this);
    this._mouseUpHandler = this._mouseUpHandler.bind(this);
    this._touchStartHandler = this._touchStartHandler.bind(this);
    this._touchEndHandler = this._touchEndHandler.bind(this);
    this.children = null;
    this.nav = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.timer = null;
    this.posX = null;

    this.initialized = false;
  }

  //
  // Methods
  //

  /**
   * Render wrapper element
   * @private
   */
  _renderWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('carousel__wrapper');

    for (let i = 0; i < this.container.children.length; i++) {
      this.container.children[i].classList.add('carousel__item');
      //this.container.children[i].setAttribute('draggable', 'true');
      switch (i) {
        case 0:
          this.container.children[i].classList.add('carousel__item--prev');
          break;
        case 1:
          this.container.children[i].classList.add('carousel__item--selected');
          break;
        case 2:
          this.container.children[i].classList.add('carousel__item--next');
          break;
        default:
          this.container.children[i].classList.add('carousel__item--hide');
      }
    }

    while (this.container.children.length > 0) {
      wrapper.appendChild(this.container.children[0]);
    }

    this.container.appendChild(wrapper);
    this.children = this.container.children[0].children;
  }

  /**
   * Render nav bar and dots
   * @private
   */
  _renderNav() {
    const nav = document.createElement('div');
    nav.classList.add('carousel__nav');

    for (let i = 0; i < this.children.length; i++) {
      const bullet = document.createElement('span');
      bullet.classList.add('carousel__bullet');
      if (i === 1) {
        bullet.classList.add('carousel__bullet--selected');
      }
      nav.appendChild(bullet);
    }

    this.container.appendChild(nav);
    this.nav = nav;
  }

  /**
   * Render Controls
   * @private
   */
  _renderControls() {
    const controlWrapper = document.createElement('div');
    controlWrapper.classList.add('carousel__controls');

    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel__btn carousel__btn--prev';
    prevBtn.insertAdjacentHTML('beforeend', this.settings.controls.prev);
    this.prevBtn = prevBtn;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel__btn carousel__btn--next';
    nextBtn.insertAdjacentHTML('beforeend', this.settings.controls.next);
    this.nextBtn = nextBtn;

    controlWrapper.append(prevBtn, nextBtn);
    this.container.appendChild(controlWrapper);
  }

  /**
   * Click prev control handler
   * @private
   */
  _movePrev() {
    // find index of prev one
    let prevIdx = -1;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].classList.contains('carousel__item--prev')) {
        prevIdx = i;
      }
    }
    
    const candidateIdx = (prevIdx + this.children.length - 1) % this.children.length;
    const selectedIdx = (prevIdx + 1) % this.children.length;
    const nextIdx = (prevIdx + 2) % this.children.length;

    this.children[candidateIdx].classList.remove('carousel__item--hide');
    this.children[prevIdx].classList.remove('carousel__item--prev');
    this.children[selectedIdx].classList.remove('carousel__item--selected');
    this.children[nextIdx].classList.remove('carousel__item--next');

    this.children[candidateIdx].classList.add('carousel__item--prev');
    this.children[prevIdx].classList.add('carousel__item--selected');
    this.children[selectedIdx].classList.add('carousel__item--next');
    this.children[nextIdx].classList.add('carousel__item--hide');

    this.nav.children[selectedIdx].classList.remove('carousel__bullet--selected');
    this.nav.children[prevIdx].classList.add('carousel__bullet--selected');
  }

  /**
   * Click next control handler
   * @private
   */
  _moveNext() {
    // find index of prev one
    let prevIdx = -1;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].classList.contains('carousel__item--prev')) {
        prevIdx = i;
      }
    }
    
    const selectedIdx = (prevIdx + 1) % this.children.length;
    const nextIdx = (prevIdx + 2) % this.children.length;
    const candidateIdx = (prevIdx + 3) % this.children.length;

    this.children[prevIdx].classList.remove('carousel__item--prev');
    this.children[selectedIdx].classList.remove('carousel__item--selected');
    this.children[nextIdx].classList.remove('carousel__item--next');
    this.children[candidateIdx].classList.remove('carousel__item--hide');

    this.children[prevIdx].classList.add('carousel__item--hide');
    this.children[selectedIdx].classList.add('carousel__item--prev');
    this.children[nextIdx].classList.add('carousel__item--selected');
    this.children[candidateIdx].classList.add('carousel__item--next');

    this.nav.children[selectedIdx].classList.remove('carousel__bullet--selected');
    this.nav.children[nextIdx].classList.add('carousel__bullet--selected');
  }

  /**
   * Mousedown event handler
   * @private
   */
  _mouseDownHandler(event) {
    this.posX = event.clientX;
    this.moved = false;
    if (this.settings.autoPlay) {
      this.autoPlayControl = false;
      clearTimeout(this.timer);
    }
  }

  /**
   * Mouseup event handler
   * @private
   */
  _mouseUpHandler(event) {
    if (event.clientX > this.posX + 50) {
      this._movePrev();
    } else if (event.clientX + 50 < this.posX){
      this._moveNext();
    }
    if (this.settings.autoPlay) {
      this.autoPlayControl = true;
      this.play();
    }
  }

  /**
   * Touchstart event handler
   * @private
   */
  _touchStartHandler(event) {
    this.posX = event.touches[0].clientX;
    if (this.autoPlay) {
      this.autoPlayControl = false;
      clearTimeout(this.timer);
    }
  }

  /**
   * Touchend event handler
   * @private
   */
  _touchEndHandler(event) {
    if (event.changedTouches[0].clientX > this.posX + 50) {
      this._movePrev();
    } else if (event.changedTouches[0].clientX + 50 < this.posX){
      this._moveNext();
    }
    if (this.settings.autoPlay) {
      this.autoPlayControl = true;
      this.play();
    }
  }

  /**
   * autoplay function
   * @public
   */
  play() {
    this.timer = setTimeout(() => {
      if (this.autoPlayControl) {
        this._moveNext();
      }
      this.play();
    }, this.settings.duration);
  }

  /**
   * Initialize carousel
   * @public
   */
  init() {
    this.container.classList.add('carousel');
    // render wrapper
    this._renderWrapper();
    // render nav dots
    this._renderNav();
    // render controls
    this._renderControls();
    // bind events
    this.prevBtn.addEventListener('click', this._movePrev);
    this.nextBtn.addEventListener('click', this._moveNext);
    this.container.addEventListener('mousedown', this._mouseDownHandler);
    this.container.addEventListener('dragstart', this._mouseDownHandler);
    this.container.addEventListener('mouseup', this._mouseUpHandler);
    this.container.addEventListener('dragend', this._mouseUpHandler);
    this.container.addEventListener('touchstart', this._touchStartHandler);
    this.container.addEventListener('touchend', this._touchEndHandler);

    if (this.settings.autoPlay) {
      this.play();
    }

    this.initialized = true;
  }
}