const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const measure = document.querySelector('#measure');
const sticky = document.querySelector('#sticky');
const sidebar = document.querySelector('#sidebar');
const sidebarWrapper = document.querySelector('#sidebar-wrapper');

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
let sh;

function headerHeight() {
	hh = header.offsetHeight;
	document.documentElement.style.setProperty('--header-height', hh + 'px');
  if(sticky) {
    sh = sticky.offsetHeight;
  }
}

// ----------------------------------------------------------------------

class DownloadPlanWidget {
    constructor() {
        this.widget = document.querySelector('.widget-plan');
        if (!this.widget) return;
        
        this.window = this.widget.querySelector('.widget-plan__window');
        this.closeBtn = this.widget.querySelector('.widget-plan__window-top-svg');
        
        this.init();
    }
    
    init() {
        this.setInitialState();
        this.bindEvents();
    }
    
    setInitialState() {
        const isClosed = localStorage.getItem('downloadWindowClosed');
        if (window.innerWidth >= 1024 && isClosed !== 'true') {
            this.window.classList.add('_active');
        }
    }
    
    bindEvents() {
        this.widget.addEventListener('click', this.handleWidgetClick.bind(this));
        this.closeBtn.addEventListener('click', this.handleCloseClick.bind(this));
    }
    
    handleWidgetClick() {
        if (!this.window.classList.contains('_active')) {
            this.open();
        }
    }
    
    handleCloseClick(e) {
        e.stopPropagation();
        this.close();
    }
    
    open() {
        this.window.classList.add('_active');
        localStorage.setItem('downloadWindowClosed', 'false');
    }
    
    close() {
        this.window.classList.remove('_active');
        localStorage.setItem('downloadWindowClosed', 'true');
    }
}

// ----------------------------------------------------------------------

@@include('../../web-template/src/libs/swiper-bundle-11-2-1.js');
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

@@include('_activator.js');
@@include('_swipers.js');

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

// flatpickr(".datepicker__input", {
//     locale: "ru",
//     dateFormat: "d.m"
// });

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
  calculateClientWidth();
  calculateScrollbarWidth();  
  headerHeight();
  updateIndicator('._tabs', '._tabs-title._active', '._tabs-indicator');
}, 250);

// Throttle для скролла
const handleScroll = throttle(() => {
  const windowHeight = window.innerHeight;
  const currentScroll = window.scrollY;  

  const isUp = currentScroll < lastScroll;
  const isDown = currentScroll > lastScroll;

  // если в самом вверху
  if(currentScroll <= 0) {
    header.style.removeProperty('transform');
    if(sticky) {
      sticky.style.removeProperty('transform');
      // sticky.style.removeProperty('padding-top');
    }
  } else if(isUp) {
    header.style.removeProperty('transform');
    if (sticky) {
      sticky.style.removeProperty('transform');
      // sticky.style.paddingTop = '15px';
    }
  } else if(!md1Query?.matches && currentScroll > hh) {
    header.style.transform = 'translateY(-100%)';
    if (sticky) {      
      sticky.style.transform = `translateY(-${hh+15}px)`;
      // sticky.style.removeProperty('padding-top');
    }
  }
  

  if(sidebar && sidebarWrapper) {
    
    // Высота сайдбара и его враппера
    const sidebarHeight = sidebar.offsetHeight;
    const sidebarWrapperHeight = sidebarWrapper.offsetHeight;
    
    // Если высота враппера больше высоты сайдбара
    if (sidebarWrapperHeight > sidebarHeight) {
      const sidebarWrapperTop = sidebarWrapper.offsetTop;
      const sidebarTop = sidebar.offsetTop;
      const sidebarWrapperBottom = sidebarWrapperTop + sidebarWrapperHeight;
      const sidebarBottom = sidebarTop + sidebarHeight;
      const currentScrollBottom = currentScroll + windowHeight;
      const currentScrollTop = currentScroll + hh + sh;

      if(currentScrollTop <= sidebarWrapperTop) {
        sidebar.style.removeProperty('top');
        sidebar.style.removeProperty('position');
      } else if (currentScrollBottom >= sidebarWrapperBottom) {
        sidebar.style.top = sidebarWrapperHeight - sidebarHeight + 'px';
        sidebar.style.position = 'relative';
      } else {        
        if(isDown) {
          if (sidebarTop === hh + sh) {
            sidebar.style.top = currentScrollTop - sidebarWrapperTop + 'px';
            sidebar.style.position = 'relative';
          } else if (currentScrollBottom >= sidebarBottom) {
            sidebar.style.top = windowHeight - sidebarHeight + 'px';
            sidebar.style.position = 'fixed';
          }
        }        
        if(isUp) {
          if (sidebarTop === windowHeight - sidebarHeight) {            
            sidebar.style.top = currentScroll - sidebarWrapperTop - (sidebarHeight - (windowHeight)) + 'px';
            sidebar.style.position = 'relative';
          } else if (currentScrollTop <= sidebarTop) {
            sidebar.style.top = hh + sh + 'px';
            sidebar.style.position = 'fixed';
          }
        }
      }
    }
  }
  lastScroll = currentScroll;
}, 50);


window.onload = () => {
  getMatchMedia();
  calculateClientWidth();
  calculateScrollbarWidth();  
  headerHeight();
  updateIndicator('._tabs', '._tabs-title._active', '._tabs-indicator');
  ItemsManager.initialize();  
  new DownloadPlanWidget();
};

window.addEventListener('resize', handleResize);
window.addEventListener('scroll', handleScroll);

