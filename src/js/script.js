let wrapper = document.querySelector('.wrapper');
let page = document.querySelector('.page');
let body = document.querySelector('body');
let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let searchWrapper = document.querySelector('.header__search-wrapper');
let search = searchWrapper.querySelector('.header__input');
let searchBtn = document.querySelector('.header__search-button'); 
// ----------------------------------------------------------------------


// function spaceForHeader() {
// 	headerFix = topHeader.offsetHeight;
// 	bottomHeader.style.marginTop = headerFix + 'px';
// }

function spaceForMobileMenu() {
	if (body.offsetWidth < 768) {
		menu.style.paddingTop = 40 + 'px';
	} else {
		menu.style.paddingTop = '0px';
	}
}



function containerOutDesktop() {
	if (body.offsetWidth < 1210) {
		header.classList.add('_container');
	} else {
		header.classList.remove('_container');
	}
}




// ----------------------------------------------------------------------

@@include('functions/webp.js');
//include('functions/sendmail.js');
//include('functions/isMobile.js');
//include('functions/slide.js');
@@include('functions/dynamic_adapt.js');
@@include('elements/burger.js');
// include('elements/search.js');
//include('elements/sliders.js');
//include('elements/popups.js');
//include('elements/gallery.js');
//include('elements/tabs.js');
//include('elements/scroll.js');
//include('elements/spollers.js');
//include('elements/quantity.js');

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

window.onresize = () => {
	// addTouchClassForMobile();
	// spaceForHeader();
	spaceForMobileMenu();
	containerOutDesktop();
	// closeBurger();
	// changeBtnContent();
};

window.onload = () => {
	// addTouchClassForMobile();
	// spaceForHeader();
	spaceForMobileMenu();
	containerOutDesktop();
	// changeBtnContent();
};


document.addEventListener('click',(e) => {
	if(e.target === searchWrapper || e.target === search) {
		searchWrapper.classList.add('_focus');
		search.focus();
	} else if(e.target !== searchBtn) {searchWrapper.classList.remove('_focus');}
})

// ----------------------------------------------------------------------
