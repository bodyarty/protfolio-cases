$(document).ready(function () {
	if ($('.back-to-top').length) {
		var scrollTrigger = 200,
			windowHeight = $(window).height(); // px

		var backToTop = function () {
			var scrollTop = $(window).scrollTop(),
				scrollBottom = scrollTop + windowHeight,
				footerTop = $("#footer").offset().top;

			if (scrollTop > scrollTrigger) {
				$('.back-to-top').addClass('visible');
			} else {
				$('.back-to-top').removeClass('visible');
			}

			// TODO
			// the approach is incorrectly working on iPad Safari
			if(scrollBottom >= footerTop) {
				$('.back-to-top').addClass('bottom');
			} else {
				$(".back-to-top").removeClass('bottom');
			}
		};

		backToTop();

		$(window).on('scroll', function () {
			backToTop();
		});

		$('.back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
});