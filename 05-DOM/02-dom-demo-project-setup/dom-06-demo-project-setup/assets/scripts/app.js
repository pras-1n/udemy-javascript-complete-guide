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
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
	if (movies.length === 0) {
		entryTextSection.style.display = "block";
	} else {
		entryTextSection.style.display = "none";
	}
};

const deleteMovie = (movieId) => {
	let movieIndex = 0;
	for (const movie of movies) {
		if (movie.id === movieId) {
			break;
		}
		movieIndex++;
	}
	movies.splice(movieIndex, 1);
	const listRoot = document.getElementById("movie-list");
	listRoot.children[movieIndex].remove();
	// listRoot.removeChild(listRoot.children[movieIndex]);
};

const closeMovieDeletionModal = () => {
	toggleBackdrop();
	deleteMovieModal.classList.remove("visible");
};

const deleteMoiveHandler = (movieId) => {
	deleteMovieModal.classList.add("visible");
	toggleBackdrop();
	// deleteMoive(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
	const newMovieElement = document.createElement("li");
	newMovieElement.className = "movie-element";
	newMovieElement.innerHTML = `
		<div class = "movie-element__image">
			<img src="${imageUrl}" alt="${title}">
		</div>
		<div class = "movie-element_info">
			<h2>${title}</h2>
			<p>${rating}/5 stars</p>
		</div>
	`;
	newMovieElement.addEventListener(
		"click",
		deleteMoiveHandler.bind(null, id),
	);
	const listRoot = document.getElementById("movie-list");
	listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
	backdrop.classList.toggle("visible");
};

const closeMovieModal = () => {
	addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
	// function () {}
	// addMovieModal.className = 'modal card'
	addMovieModal.classList.toggle("visible");
	// backdrop.classList.toggle("visible");
	toggleBackdrop();
};

const clearMovieInputs = () => {
	for (const usrInput of userInputs) {
		usrInput.value = "";
	}
};

const cancelAddMovie = () => {
	closeMovieModal();
	clearMovieInputs();
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

	const newMovie = {
		id: Math.random().toString(),
		title: titleValue,
		image: imageUrlValue,
		rating: ratingValue,
	};

	movies.push(newMovie);
	console.log(movies);
	closeMovieModal();
	toggleBackdrop();
	clearMovieInputs();
	renderNewMovieElement(
		newMovie.id,
		newMovie.title,
		newMovie.image,
		newMovie.rating,
	);
	updateUI();
};

const backdropClickHandler = () => {
	closeMovieModal();
	closeMovieDeletionModal();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
