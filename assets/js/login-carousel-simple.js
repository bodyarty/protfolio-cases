// SIMPLE CAROUSEL IN LOGIN PAGE FOR DEMO ISSUSES
$(document).ready(function () {
    $('.js-carousel-buttons .carousel-button').click(function () {
        $('.js-carousel-buttons .carousel-button, .js-carousel .news').removeClass('active');
        $(this).addClass('active');
        $('.js-carousel .news').eq($(this).index()).addClass('active');
    });
});

