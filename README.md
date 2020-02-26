# Three-View Carousel
Pure javascript carousel plugin

# Install
```js
npm i --save three-view-carousel
import ThreeViewCarousel from 'three-view-carousel';
```

> or use `index.js` file from `dist` folder.

# Use
```html
<div three-view-carousel>
  <div class="your-custom-class"> content 1 </div>
  <div class="your-custom-class"> content 2 </div>
  <div class="your-custom-class"> content 3 </div>
  <!-- three items at least -->
  <div class="your-custom-class"> content 4 </div>
</div>
```
```js
// default
let carousel = new ThreeViewCarousel();
carousel.init();

// build with options - autoplay
let carousel2 = new ThreeViewCarousel({
  autoPlay: true
});
carousel2.init();
```

# Options
You can use these options to initialize the carousel
 Option  | Type      | Meaning       | Default
---------|-----------|---------------|--------
container|DOM Element| the **main** element of carousel container |`document.querySelector("*[three-view-carousel]")`
controls | Object    | the control elements | `{prev: '<i class="icon-arrow icon-arrow--left"></i>',next: '<i class="icon-arrow icon-arrow--right"></i>'}`
autoPlay | Boolean | determine auto play or not | `false`
duration | Number | milliseconds to go to next page when **autoPlay** on | 5000

# CSS classes
You can override styles using these classes:
- .carousel
- .carousel__wrapper
- .carousel__item
- .carousel__item--prev
- .carousel__item--selected
- .carousel__item--next
- .carousel__item--hide
- .carousel__nav
- .carousel__bullet
- .carousel__bullet--selected
- .carousel__controls
- .carousel__btn
- .carousel__btn--prev
- .carousel__btn--next
- .icon-arrow
- .icon-arrow--left
- .icon-arrow--right
