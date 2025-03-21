const specialSlider = new Swiper('.special-swiper', {
	// breakpoints: {
	// 	[md3]: {
	// 		slidesPerView: 2,
	// 		loop: false,
	// 	},
	// },
	observer: true,
	observeParents: true,
	autoheight: true,
	slidesPerView: 1,
	grabCursor: true,
	simulateTouch: true,
	speed: 300,
	spaceBetween: 20,
	direction: 'vertical',
	pagination: {
		el: '.special-swiper__fraction',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.special-swiper__next',
		prevEl: '.special-swiper__prev',
	},
	loop: true,
});

const heroAddSlider = new Swiper('.hero-add-swiper', {
	breakpoints: {
		[md1]: {
			spaceBetween: 40,
		},
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	allowTouchMove: false,
	// grabCursor: true,
	// simulateTouch: true,
	speed: 300,
	spaceBetween: 10,
	loop: true,
	controller: {
    control: '.hero-swiper',
    by: 'slide'
  },
});

const heroSlider = new Swiper('.hero-swiper', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	grabCursor: true,
	simulateTouch: true,
	speed: 400,
	spaceBetween: 40,
	loop: true,
	pagination: {
		el: '.hero-slider__fraction',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.hero-slider__next',
		prevEl: '.hero-slider__prev',
	},
	controller: {
    control: '.hero-add-swiper',
    by: 'slide'
  },
});

const doctorsSlider = new Swiper('.doctors-swiper', {	
	breakpoints: {
		[md1]: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		[md2]: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		[md4]: {
			slidesPerView: 2,
			spaceBetween: 10,
		}
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 10,
	grabCursor: true,
	simulateTouch: true,
	speed: 300,
	loop: true,
	pagination: {
		el: '.doctors-swiper__fraction',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.doctors-swiper__next',
		prevEl: '.doctors-swiper__prev',
	},
});

const reviewsSlider = new Swiper('.reviews-swiper', {	
	breakpoints: {
		[md1]: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		[md2]: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		[md4]: {
			slidesPerView: 2,
			spaceBetween: 10,
		}
	},
	autoHeight: true,
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 10,
	grabCursor: true,
	simulateTouch: true,
	speed: 300,
	loop: true,
	pagination: {
		el: '.reviews-swiper__fraction',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.reviews-swiper__next',
		prevEl: '.reviews-swiper__prev',
	},
});

const licensesSlider = new Swiper('.licenses-swiper', {	
	breakpoints: {
		[md2]: {
			slidesPerView: 'auto',
			spaceBetween: 40,
		},
		[md4]: {
			slidesPerView: 'auto',
			spaceBetween: 10,
		}
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 10,
	grabCursor: true,
	simulateTouch: true,
	speed: 300,
	loop: true,
	pagination: {
		el: '.licenses-swiper__fraction',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.licenses-swiper__next',
		prevEl: '.licenses-swiper__prev',
	},
});

const gallerySlider = new Swiper('.gallery-swiper', {	
	breakpoints: {
		[md1]: {
			slidesPerView: 2,
			spaceBetween: 0,
			speed: 0,
			allowTouchMove: false,
			grabCursor: false,
			simulateTouch: false,
		},
		[md2]: {
			slidesPerView: 1.8,
			spaceBetween: 40,
			speed: 300,
			allowTouchMove: true,
			grabCursor: true,
		},
		[md3]: {
			slidesPerView: 1.5,
			spaceBetween: 10,
			speed: 300,
			allowTouchMove: true,
			grabCursor: true,
		}
	},
	// effect: 'creative',
	// creativeEffect: {
	// 	limitProgress: 5,
	// 	// progressMultiplier: 1.5,
	// 	// shadowPerProgress: true,

	// 	prev: {			
	// 		translate: ['-150px', 0, 0],
	// 			// translate: ['-55%', 0, -400],
	// 			// rotate: [0, 15, -5],
	// 			// scale: 0.85,
	// 			// opacity: 0.8,
	// 			// shadow: true,
	// 			origin: 'left center'
	// 	},
	// 	next: {
	// 			translate: ['150px', 0, 0],				
	// 			// translate: ['-55%', 0, -400],
	// 			// rotate: [0, 15, -5],
	// 			// scale: 0.85,
	// 			// opacity: 0.8,
	// 			// shadow: true,
	// 			origin: 'right center'
	// 	}
	// },
	observer: true,
	observeParents: true,
	slidesPerView: 1.1,
	// shortSwipes: false,
	// roundLengths: true,
	spaceBetween: 10,
	grabCursor: true,
	simulateTouch: true,
	speed: 300,
	loop: true,
	// centeredSlides: true,
	pagination: {
		el: '.gallery-swiper__fraction',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.gallery-swiper__next',
		prevEl: '.gallery-swiper__prev',
	},
	on: {
    beforeSlideChangeStart: function(swiper) {
			this.beforeIndex = swiper.activeIndex;
    },
		slideChangeTransitionStart: function (swiper) {
			if (swiper.params.navigation && md1Query.matches) {
				const prevButton = swiper.navigation.prevEl;
				const nextButton = swiper.navigation.nextEl;

				prevButton.classList.add('_disable');
				nextButton.classList.add('_disable');
				setTimeout(() => {
					prevButton.classList.remove('_disable');
					nextButton.classList.remove('_disable');
				}, 500);
			}
		},
    slideChangeTransitionEnd: function(swiper) {
			const { activeIndex, slides, wrapperEl } = swiper;

			if(activeIndex > this.beforeIndex && activeIndex > swiper.slides.length-6) {
				const firstSlide = slides[0];
				wrapperEl.appendChild(firstSlide);
				swiper.updateSlides();
				swiper.updateProgress();
				swiper.updateSlidesClasses();
				swiper.slideTo(activeIndex - 1, 0, false);
			}
			
			slides.forEach((slide, index) => {
				slide.classList.toggle('visible-slide', index > activeIndex && index < activeIndex + 5);
			});
    },
  }
});

// let mapSlider = new Swiper('.map-swiper', {	
// 	// breakpoints: {
// 	// 	[md1]: {
// 	// 		slidesPerView: 4,
// 	// 		spaceBetween: 40,
// 	// 	},
// 	// 	[md2]: {
// 	// 		slidesPerView: 3,
// 	// 		spaceBetween: 40,
// 	// 	},
// 	// 	[md4]: {
// 	// 		slidesPerView: 2,
// 	// 		spaceBetween: 10,
// 	// 	}
// 	// },
// 	autoHeight: true,
// 	observer: true,
// 	observeParents: true,
// 	slidesPerView: 1,
// 	spaceBetween: 0,
// 	grabCursor: true,
// 	simulateTouch: true,
// 	speed: 300,
// 	// loop: true,
// 	grid: {
// 		fill: 'column',
//     rows: 4,
//   },
// 	pagination: {
// 		el: '.map-swiper__fraction',
// 		type: 'fraction',
// 	},
// 	navigation: {
// 		nextEl: '.map-swiper__next',
// 		prevEl: '.map-swiper__prev',
// 	},
// });