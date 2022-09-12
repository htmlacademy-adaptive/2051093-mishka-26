let offerButton = document.querySelector(".offer__button");
let cardButtons = document.querySelectorAll(".product-card__button");
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".modal__close-button")

if (offerButton) {
	offerButton.addEventListener ("click", () => {
		modal.classList.remove("modal--close");

			closeButton.addEventListener ("click", () => {
				modal.classList.add("modal--close");
			})
	})
}

if (cardButtons) {
	cardButtons.forEach(element => {
		element.addEventListener ("click", () => {
			modal.classList.remove("modal--close");

			closeButton.addEventListener ("click", () => {
				modal.classList.add("modal--close");
			})
		})
	});
}
