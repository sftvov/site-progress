const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const measure = document.querySelector('#measure');

// ----------------------------------------------------------------------

const md1 = getComputedStyle(document.documentElement).getPropertyValue('--md1');
let md1Query;
const md2 = getComputedStyle(document.documentElement).getPropertyValue('--md2');
let md2Query;
const md3 = getComputedStyle(document.documentElement).getPropertyValue('--md3');
let md3Query;
const md4 = getComputedStyle(document.documentElement).getPropertyValue('--md4');
let md4Query;

function getMatchMedia() {
	md1Query = window.matchMedia(`(min-width: ${md1}px)`);
	md2Query = window.matchMedia(`(min-width: ${md2}px)`);
	md3Query = window.matchMedia(`(min-width: ${md3}px)`);
	md4Query = window.matchMedia(`(min-width: ${md4}px)`);
}

let hh;

function headerHeight() {
	hh = header.offsetHeight;
	document.documentElement.style.setProperty('--header-height', hh + 'px');	
}

// ----------------------------------------------------------------------


@@include('../../web-template/src/libs/swiper-bundle-11-2-1.js');
@@include('_swipers.js');
//include('../../web-template/src/functions/sendmail.js');
//include('../../web-template/src/functions/isMobile.js');
//include('../../web-template/src/functions/webp.js');
@@include('../../web-template/src/functions/slide.js');
@@include('../../web-template/src/functions/activator_v3.0.2_now.js');
@@include('../../web-template/src/functions/body_lock_v1.2.0_now.js');
//include('../../web-template/src/functions/dynamic_adapt.js');
//include('../../web-template/src/functions/desktopScroll.js');
//include('../../web-template/src/functions/updateBlur.js');
//include('../../web-template/src/functions/calculateAge.js');
@@include('../../web-template/src/functions/filters.js');
@@include('../../web-template/src/js-elements/all_checkboxes.js');
//include('../../web-template/src/js-elements/select.js');
//include('../../web-template/src/js-elements/quantity.js');
//include('../../web-template/src/js-elements/calendar.js');
//include('../../web-template/src/js-elements/search.js');
@@include('../../web-template/src/js-elements/indicator.js');
@@include('../../web-template/src/js-elements/tabs_v2.0.0_now.js');
//include('../../web-template/src/js-elements/popups.js');
@@include('../../web-template/src/js-elements/gallery.js');
//include('../../web-template/src/js-elements/scroll.js');
@@include('../../web-template/src/js-elements/spollers_v2.0.1_now.js');
@@include('../../web-template/src/js-elements/items_v3.2.0_now.js');

const selects = document.querySelectorAll(".select");

if (selects) {
  for (let select of selects) {
    const variants = select.querySelectorAll(".select__variant");
    const input = select.querySelector(".select__input");
    for (const variant of variants) {
      variant.addEventListener("click", () => {
        input.setAttribute("value", variant.textContent);
      });
    }
  }
}

// ----------------------------------------------------------------------



document.querySelector('.header__search-close').addEventListener('click', function(e) {
	e.preventDefault(); // Предотвращаем отправку формы (если кнопка типа submit)
	const input = document.querySelector('.header__search-input');
	input.value = '';    // Очищаем поле
	input.focus();       // Возвращаем фокус
});

new Activator('._activator', {
	removedOwn: ['._activated'],
	onlyOne: true,
});

new Activator('.header-select', {
	stops: ['.header-select__variants-wrapper'],
	removedOwn: ['.header-select__variants-wrapper'],
	clickOutClose: true,
	escClose: true,
	onlyOne: true,
});

new Activator('.select', {
	removedOwn: ['.select__variants'],
	stops: ['.select__variants'],
	removing: ['.select__variant'],
	clickOutClose: true,
	escClose: true,
	effects: 'U',
	effectDuration: 300,
	//bodyLock: true,
	onlyOne: true,
	//deactivate: false,
	//focus
});

new Activator('.select__variant', {
  onlyOne: true,
  // deactivate: false,
  limitContainer: '.select',
});


new Activator('._menu-btn', {
	stops: ['._menu-body'],
	removedOwn: ['._menu-body'],
	escClose: true,
	onlyOne: true,
	effects: 'U',
	effectDuration: 300,
	breakpoints: {
		[md3]: {			
			effects: null,
			effectDuration: null,
			clickOutClose: true,
		}
	}
}, true);

new Activator('.burger', {
	removed: ['.header-menu__mobile-container'],
	removing: ['.header-menu__icon-close'],
	// effects: 'F',
	// effectDuration: 300,
	clickOutClose: true,
	escClose: true,
	bodyLock: true,
});

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

//include('_access.js');
//include('_swipers.js');
//include('_map.js');

// Throttle - вызывается не чаще чем delay
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func.apply(this, args);
  };
}

// Debounce - вызывается после паузы в delay
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

let lastScroll = 0;

// Debounce для тяжелых операций при ресайзе
const handleResize = debounce(() => {
  getMatchMedia();
  headerHeight();
  calculateScrollbarWidth();
  updateIndicator('._tabs', '._tabs-title._active', '._tabs-indicator');
}, 1500);

// Throttle для скролла
const handleScroll = throttle(() => {
  const currentScroll = window.scrollY;
  
  if (currentScroll <= 0) {
    header.style.transform = 'translateY(0)';
  } else if (currentScroll < lastScroll) {
    header.style.transform = 'translateY(0)';
  } else if (!md1Query?.matches && currentScroll > lastScroll && currentScroll > hh) {
    header.style.transform = 'translateY(-100%)';
  }
  lastScroll = currentScroll;
}, 16);

window.onload = () => {
  getMatchMedia();
  headerHeight();
  calculateScrollbarWidth();
  updateIndicator('._tabs', '._tabs-title._active', '._tabs-indicator');
  ItemsManager.initialize();
};

window.addEventListener('resize', handleResize);
window.addEventListener('scroll', handleScroll);

