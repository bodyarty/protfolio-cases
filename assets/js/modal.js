function showDialog(id) {
	closeDialog();

	var modal = $('#' + id);
	modal.css('display', 'flex').next('.modal-backdrop').show();
	$('html').addClass('modal-on');
};

function closeDialog() {
	$('.modal').css('display', 'none');
	$('.modal-backdrop').hide();
	$('html').removeClass('modal-on');
}

function goToStep1() {
	$('[class*="js-step"]').hide();
	$('.js-step-1').show();
}

function goToStep2() {
	$('[class*="js-step"]').hide();
	$('.js-step-2').show();
}

function goToStep3() {
	$('[class*="js-step"]').hide();
	$('.js-step-3').show();
}

function goToStep4() {
	$('[class*="js-step"]').hide();
	$('.js-step-4').show();
}
