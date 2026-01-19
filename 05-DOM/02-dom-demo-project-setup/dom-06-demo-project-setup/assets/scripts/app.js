const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children(1);
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementByTagName('input');

const toggleBackdrop = () => {
	backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
	// function () {}
	// addMovieModal.className = 'modal card'
	addMovieModal.classList.toggle("visible");
	// backdrop.classList.toggle("visible");
	toggleBackdrop();
};

const cancelAddMovie = () => {
	toggleMovieModal();
};

const addMovieHandler = () => {
	const titleValue = userInputs[0].value;
	const imageUrlValue = userInputs[1].value;
	const ratingValue = userInputs[2].value;

	if (
		titleValue.trim() === "" ||
		imageUrlValue === "" ||
		ratingValue === "" ||
		+ratingValue < 1 ||
		+ratingValue > 5
	) {
		alert("Enter a rating between 1 and 5");
		return;
	}
};

const backdropClickHandler = () => {
	toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
