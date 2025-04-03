const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

// ----------------------------------------------------------------------

const md1 = getComputedStyle(document.documentElement).getPropertyValue('--md1');
// let md1Query = window.matchMedia(`(min-width: ${md1}px)`);
const md2 = getComputedStyle(document.documentElement).getPropertyValue('--md2');
// let md2Query = window.matchMedia(`(min-width: ${md2}px)`);
const md3 = getComputedStyle(document.documentElement).getPropertyValue('--md3');
// let md3Query = window.matchMedia(`(min-width: ${md3}px)`);
const md4 = getComputedStyle(document.documentElement).getPropertyValue('--md4');
// let md4Query = window.matchMedia(`(min-width: ${md4}px)`);
const md5 = getComputedStyle(document.documentElement).getPropertyValue('--md5');
// let md5Query = window.matchMedia(`(min-width: ${md5}px)`);

// ----------------------------------------------------------------------


//include('../../web-template/src/libs/swiper-bundle-11-2-1.js');
//include('../../web-template/src/functions/sendmail.js');
//include('../../web-template/src/functions/isMobile.js');
//include('../../web-template/src/functions/webp.js');
@@include('../../web-template/src/functions/slide.js');
@@include('../../web-template/src/functions/activator_v3.0.1_now.js');
@@include('../../web-template/src/functions/body_lock.js');
//include('../../web-template/src/functions/dynamic_adapt.js');
//include('../../web-template/src/functions/desktopScroll.js');
//include('../../web-template/src/functions/calculateAge.js');
//include('../../web-template/src/js-elements/select.js');
//include('../../web-template/src/js-elements/quantity.js');
//include('../../web-template/src/js-elements/calendar.js');
//include('../../web-template/src/js-elements/search.js');
//include('../../web-template/src/js-elements/indicator.js');
//include('../../web-template/src/js-elements/tabs_v2.0.0_now.js');
//include('../../web-template/src/js-elements/popups.js');
//include('../../web-template/src/js-elements/gallery.js');
//include('../../web-template/src/js-elements/scroll.js');
//include('../../web-template/src/js-elements/spollers.js');
//include('../../web-template/src/js-elements/items_v2.0.0_now.js');

// ----------------------------------------------------------------------

document.querySelector('.header__search-close').addEventListener('click', function(e) {
	e.preventDefault(); // Предотвращаем отправку формы (если кнопка типа submit)
	const input = document.querySelector('.header__search-input');
	input.value = '';    // Очищаем поле
	input.focus();       // Возвращаем фокус
});

new Activator('._menu-btn', {
	stops: ['._menu-body'],
	removedOwn: ['._menu-body'],
	clickOutClose: true,
	escClose: true,
	onlyOne: true,
});


new Activator('.burger', {
	removed: ['.header-menu__mobile-container'],
	removing: ['.header-menu__icon-close'],
	clickOutClose: true,
	escClose: true,
	bodyLock: true,
});

// function headerHeight() {
// 	let hh = header.offsetHeight + 'px';
// 	document.documentElement.style.setProperty('--header-height', hh);	
// }

// const burgerActivator = new Activator('.burger', {
// 	removed: ['header','.header__container'],
// 	bodyLock: true,
// });

// const accessActivator = new Activator('.access', {
// 	removed: ['.access-menu'],
// 	effects: 'U',
// 	effectDuration: 200,
// 	clickOutClose: true,
// 	escClose: true,
// 	// bodyLock: true,
// });

// const closeActivator = new Activator('._close', {
// 	removedOwn: ['._removed'],
// });

// new Activator('._select', {
// 	//removed: ['#text'],
// 	removedOwn: ['._select-variants'],
// 	stops: ['._select-variants'],
// 	removing: ['._select-variant'],
// 	clickOutClose: true,
// 	escClose: true,
// 	effects: 'U',
// 	effectDuration: 300,
// 	//bodyLock: true,
// 	onlyOne: true,
// 	//deactivate: false,
// 	//focus
// });

// new Activator('._select-variant', {
//   onlyOne: true,
//   deactivate: false,
//   limitContainer: '._select',
// });

//include('_access.js');
//include('_swipers.js');
//include('_map.js');

// window.onload = () => {
// 	headerHeight();
// 	updateIndicator('._tabs', '._tabs-title._active', '._tabs-indicator');
// 	// addTouchClassForMobile();
// }

// window.onresize = () => {
// 	headerHeight();
// 	updateIndicator('._tabs', '._tabs-title._active', '._tabs-indicator');
// 	// addTouchClassForMobile();
// }

