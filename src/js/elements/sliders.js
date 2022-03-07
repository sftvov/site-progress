@@include('libs/swiper.min.js');

let slider = new Swiper('.offer__swiper', {
	observer: true,
	observeParents: true,
	slidesPerView: 2,
	// autoHeight: true,
	spaceBetween: 8,
	speed: 800,
	// touchRatio: 2,
	simulateTouch: true,
	grabCursor: true,
	// Dotts
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'fraction',
	// },
	initialSlide: 0,
	// effect: 'fade',
	// Arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	// controller: {
	// 	control: mini_slider,
	// },
	// thumbs: {
	// 	swiper: {
	// 		el: ".miniMain-slider__swiper",
	// 		slidesPerView: 3
	// 	}
	// },
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: true,
	// },	
	// loop: true,
	//preloadImages: false,
	//lazy: true,
	
	breakpoints: {
		767.95: {
			slidesPerView: 3,
		},
		1279.95: {
			slidesPerView: 4,
		},
	},
	
	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// }
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},

});

