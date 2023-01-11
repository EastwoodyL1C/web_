const button = document.querySelector('#button');
const content = document.querySelector('#content');

button.addEventListener("click", function () {

	if (content.classList.toggle('content-hidden')) {
		button.textContent = 'Download CV';
	} else {
		button.textContent = 'Download CV';
	}

});