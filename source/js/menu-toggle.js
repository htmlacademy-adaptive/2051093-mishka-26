let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navWrapper.classList.remove("nav__wrapper--nojs");
navToggle.classList.remove("nav__toggle--hidden");

navToggle.addEventListener ("click", () => {
	navToggle.classList.toggle("nav__toggle--open");
	navWrapper.classList.toggle("nav__wrapper--open");
}
);
