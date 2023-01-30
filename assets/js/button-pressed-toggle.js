const btn = document.querySelectorAll('.js-pressing-button');
	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function() {
		this.classList.toggle('pressed');
	})
}