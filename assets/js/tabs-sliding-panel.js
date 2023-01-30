$(document).ready(function () {
    $('.js-slide-box .js-tabs.tabs li').click(function () {
        $('.js-slide-box .js-tabs.tabs li, .js-slide-box .tabs-content .data-section').removeClass('active');
        $(this).addClass('active');
        $('.js-slide-box .tabs-content .data-section').eq($(this).index()).addClass('active');
    });
});

// UPDATE FOR DEMO ISSUSES
$('.js-popover-generator .tabs li').click(function () {
    $('.js-popover-generator .tabs li, .js-popover-generator .tabs-content').removeClass('active');
    $(this).addClass('active');
    $('.js-popover-generator .tabs-content').eq($(this).index()).addClass('active');
});
