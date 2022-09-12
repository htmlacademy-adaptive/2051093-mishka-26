let reviews = document.querySelectorAll(".review__item");
let buttonPrev = document.querySelector(".review__prev");
let buttonNext = document.querySelector(".review__next");

let number = 0;

buttonNext.addEventListener("click", () => {
	if (number < reviews.length - 1) {
		reviews[number].classList.add("review__item--hidden");
		reviews[number + 1].classList.remove("review__item--hidden");
		number += 1;
		if (number === reviews.length - 1) {
			buttonNext.setAttribute("disabled", "disabled");
		} else {
			buttonPrev.removeAttribute("disabled", "disabled");
		}
	}
})

buttonPrev.addEventListener("click", () => {
	if (number > 0) {
		reviews[number].classList.add("review__item--hidden");
		reviews[number - 1].classList.remove("review__item--hidden");
		number -= 1;
		if (number === 0) {
			buttonPrev.setAttribute("disabled", "disabled");
		} else {
			buttonNext.removeAttribute("disabled", "disabled");
		}
	}
	console.log(number);
})
