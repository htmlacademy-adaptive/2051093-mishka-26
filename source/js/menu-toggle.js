let navToggle = document.querySelector('.nav__toggle');
let navWrapper = document.querySelector('.nav__wrapper');

navToggle.addEventListener ('click', () => {
	navToggle.classList.toggle('nav__toggle--open');
	navWrapper.classList.toggle('nav__wrapper--close');
}
);
