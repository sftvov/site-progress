new Activator('._select-activator .-select__variant', {
	removedOwn: ['._select-activated'],
	onlyOne: true,
});

new Activator('.-header-select', {
	stops: ['.-header-select__variants-wrapper'],
	removedOwn: ['.-header-select__variants-wrapper'],
	clickOutClose: true,
	escClose: true,
	onlyOne: true,
});

new Activator('.-select', {
	removedOwn: ['.-select__variants'],
	stops: ['.-select__variants'],
	removing: ['.-select__variant'],
	clickOutClose: true,
	escClose: true,
	effects: 'U',
	effectDuration: 300,
	//bodyLock: true,
	onlyOne: true,
	//deactivate: false,
	//focus
});

new Activator('.-select__variant', {
  onlyOne: true,
  // deactivate: false,
  limitContainer: '.-select',
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

new Activator('._burger', {
	removed: ['._burger-menu'],
	removing: ['._burger-menu-close'],
	// effects: 'F',
	// effectDuration: 300,
	clickOutClose: true,
	escClose: true,
	bodyLock: true,
});