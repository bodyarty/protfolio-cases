$(document).ready(function () {
  $('.js-heatmap-action').on('click', function () {
    $('.heatmap-timeline').toggle();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });

  $('.js-legend-action').on('click', function () {
    $('.legend-container').toggle();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });

  $('.js-mapper-tool-action').on('click', function () {
	$('.js-mapper-tool-action').siblings('.mapper-tool-container').toggle();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });

  $('.js-mapper-tool-palette').on('click', function () {
    $('.js-mapper-tool-palette').siblings('.mapper-tool-container').toggle();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });
});
