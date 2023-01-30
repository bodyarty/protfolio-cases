// ------------------------------------------------------------------------- //
//	DRAWER JS
//
// js is supposed to be used only for demo purposes
// ------------------------------------------------------------------------- //

// DRAWER SHIFT
function drawerCalc() {
	var drawerShift = $('.drawer-remaining').outerHeight();
	$('.js-drawer').css('bottom', '-' + drawerShift + 'px');
}

drawerCalc();

// DRAWER
function drawer() {
	$('.js-drawer .drawer-preview').on('click',function(){
		if (!$('.js-drawer').hasClass('on')) {
			$(this).parents('.js-drawer').css('bottom', '0');
			$(this).parents('.js-drawer').addClass('on');
		} else {
			var drawerShift = $('.drawer-remaining').outerHeight();
			$(this).parents('.js-drawer').css('bottom', '-' + drawerShift + 'px');
			$(this).parents('.js-drawer').removeClass('on');
		}
	});
}

$(document).ready(function () {
	drawer();
});

$(window).resize(function() {
	drawerCalc();
});

