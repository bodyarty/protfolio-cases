// CALCULATIONS
function calc() {
	var headerHeight = $(".header").outerHeight(),
		subheaderHeight = $(".subheader").outerHeight(),
		headerHeightGlobal = subheaderHeight + headerHeight;

	// ie fix, would be broken if not set
	$(".subheader").css('height', subheaderHeight);

	// content-main top
	$(".content-main").css('padding-top', headerHeightGlobal);

	// sticky sidebar top
	if ($(".sidebar").length) {
		$(this).css('top', headerHeightGlobal + 30);
	}
};

calc();

// ON RESIZE
$(window).resize(function() {
	$(".subheader").css('height', 'auto');
	$(".content-main").css('padding-top', '0');
	calc();
});

// ON SCROLL DOWN
$(document).ready(function () {

	if (!$("body").hasClass("side-open")) {

		// TODO
		// the approach is incorrectly working on iPad Safari
		// when the page is scrolled to bottom - class is removed

		'use strict';

		var c, currentScrollTop = 0,
			sliding = $('.sliding'),
			sidebar = $('.sidebar');

		$(window).scroll(function () {
			var a = $(window).scrollTop();
			var b = sliding.height();

			currentScrollTop = a;

			if (c < currentScrollTop && a > b + b) {
				sliding.addClass("scroll-down");

				// STICKY SIDEBAR
				if ($(".sidebar").length) {
					sidebar.addClass("scroll-down");

					// in case of regular subheader
					var headerHeight = $(".header").outerHeight();
					$(".sidebar").css('top', headerHeight + 30);

					// in case of compressed subheader
					if ($('.subheader').hasClass('subheader-compressed')) {
						var headerHeight = $(".header").outerHeight(),
							subheaderHeight = $(".subheader").outerHeight(),
							headerHeightGlobal = subheaderHeight + headerHeight;

						$(".sidebar").css('top', headerHeightGlobal + 30);
					}
				}
			}

			else if (c > currentScrollTop && !(a <= b)) {
				sliding.removeClass("scroll-down");

				// STICKY SIDEBAR
				if ($(".sidebar").length) {
					sidebar.removeClass("scroll-down");

					// reset everything back
					var headerHeight = $(".header").outerHeight(),
						subheaderHeight = $(".subheader").outerHeight(),
						headerHeightGlobal = subheaderHeight + headerHeight;

					$(".sidebar").css('top', headerHeightGlobal + 30);
				}
			}

			c = currentScrollTop;
		});

	}

});