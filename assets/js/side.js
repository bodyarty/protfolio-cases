$(document).ready(function () {

	// ------------------------------------------------------------------------- //
	//	CUSTOM
	// ------------------------------------------------------------------------- //

	// NAVIGATION
	var navTrigger = $('.js-side-trigger');
	var chatTrigger = $('.js-chat-trigger');
	var	body = $('body');
	var	map = $('.screen-area');
	var	sessionContainer = $('.session-videos-container');
	var screenShare = $('.js-share-screen');

	toggleNav();

	function toggleNav() {
		navTrigger.click(function(event) {
			body.toggleClass("side-open");
			event.stopPropagation();
		});

		chatTrigger.click(function(event) {
			map.toggleClass("chat-open");
			sessionContainer.toggleClass("chat-open");
			chatTrigger.toggleClass("pressed");
			event.stopPropagation();
		});

		screenShare.click(function(event) {
			screenShare.toggleClass("btn-screen-share");
			screenShare.toggleClass("btn-screen-share-off");
			event.stopPropagation();
		});
	}

	// function hideNav() {
	// 	navTrigger.click(function(event) {
	// 		if (body.hasClass("main-nav-open")) {
	// 			body.removeClass("main-nav-open");
	// 		};
	// 		event.stopPropagation();
	// 	})
	// }
});

$(window).resize(function() {
	var	body = $('body');
	body.removeClass("side-open");
});