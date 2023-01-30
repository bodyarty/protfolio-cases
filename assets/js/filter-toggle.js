$(document).ready(function () {

	$('.js-filter-edit-trigger').on('click', function(){
		$(this).toggleClass('active');
		$('.filter-master-container .filter-edit').toggle();
	})

	$('.js-filter-edit-close').on('click', function(){
		$('.filter-edit').toggle();
		$(this).parents('.filter-master').find('.js-filter-edit-trigger').removeClass('active');
	})
});