$(document).ready(function () {

	// TOOLTIPSTER ONLY FOR STATIC HTML
	$('.tip').tooltipster({
		position: 'top',
		// trigger: 'click',
		animation: 'fade',
		animationDuration : 10,

		functionInit: function(instance, helper){
			var content = $(helper.origin).find('.tooltip').detach();
			instance.content(content);
		},

		// hack
		functionPosition: function(instance, helper, position){
			position.coord.top += 10;
			return position;
		}
	});

});