$(document).ready(function () {
	$(window).on('resize', function() {
		if($(window).width() < 1200) {
			$('.slide-box.js-slide-1').removeClass('slide-second-on');
		}
	})

	// OPEN SLIDE-BOX
	$('.js-open-slide-box tr').on('click', function() {
		$('.slide-box.js-slide-1').addClass('slide-on');
	})

	$('.js-slide-1 .mapping-link').on('click', function(){
		$('.slide-box.js-slide-1').addClass('slide-on slide-second-on');
		$('.slide-box.js-slide-2').addClass('slide-on');

		if($(window).width() < 1200) {
			$('.slide-box.js-slide-1').removeClass('slide-on slide-second-on');
			$('.slide-box.js-slide-2').addClass('slide-on');
		}
	})

	$('.js-slide-1 .mapping .link-icon.icon-add-circle').on('click', function(){
		$('.slide-box.js-slide-1').removeClass('slide-on slide-second-on');
		$('.slide-box.js-slide-2').removeClass('slide-on');
		$('.slide-box.js-slide-3').addClass('slide-on');
	})

	

	$('.js-slide-3 .btn.btn-master').on('click', function(){
		$('.slide-box.js-slide-3').removeClass('slide-on');
		$('.slide-box.js-slide-4').addClass('slide-on');
	})

	// BACK PREV SLIDE
	$('.js-slide-2 .action.icon-left').on('click', function(){
		if($(window).width() < 1200) {
			$('.slide-box.js-slide-2').removeClass('slide-on');
			$('.slide-box.js-slide-1').addClass('slide-on');
		}
	})

	$('.js-slide-3 .action.icon-left').on('click', function(){
		$('.slide-box.js-slide-3').removeClass('slide-on');
		$('.slide-box.js-slide-1').addClass('slide-on');
	})

	$('.js-slide-4 .action.icon-left').on('click', function(){
		$('.slide-box.js-slide-4').removeClass('slide-on');
		$('.slide-box.js-slide-3').addClass('slide-on');
	})

	// CLOSE SLIDE-BOX
	$('.js-slide-1 .action.icon-close').on('click', function(){
		$('.slide-box.js-slide-1').removeClass('slide-on');
	})

	$('.js-slide-2 .action.icon-close').on('click', function(){
		$('.slide-box.js-slide-1').removeClass('slide-on slide-second-on');
		$('.slide-box.js-slide-2').removeClass('slide-on');
	})

	$('.js-slide-3 .action.icon-close').on('click', function(){
		$('.slide-box.js-slide-3').removeClass('slide-on');
	})

	$('.js-slide-4 .action.icon-close').on('click', function(){
		$('.slide-box.js-slide-4').removeClass('slide-on');
	})
})