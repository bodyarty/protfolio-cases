$(document).ready(function () {

	// TABLE EXPAND-COLLAPSE
	$(".js-tr-heading .icon-more").on('click', function(event) {
		$(this).toggleClass("icon-more").toggleClass("icon-expanded");
		$(this).parents("tbody").children(".js-tr-collapsible").toggle();

		// var index = $(this).parent(".table tbody").index();
		// $(this).parents(".table-wrapper-mobile").find('.scrollable').find('tbody').eq(index).children(".js-tr-collapsible").toggle();

	});

	// TODO - REWORK OR REMOVE
	// List-info expand-collapse
	// $('.collapsible .switch').click(function(){
	// 	$(this).next().toggle();
	// 	$(this).toggleClass("expanded");
	// 	var index = $(this).parent('li.collapsible').index();
	// 	if ($('#carousel').is(":visible")) {
	// 		$(".record-group .record-content").each(function() {
	// 			$(this).find('.collapsible').eq(index).find(".content").toggle();
	// 		})
	// 	};
	// });
});

