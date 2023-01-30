$(document).ready(function () {

	function dropdownClose($dropdown) {
		$dropdown.hide();

		$(".js-dropdown-trigger").removeClass("on");
	};

	function dropdownOpen($dropdown, $trigger) {
		$dropdown.show();
	};

	$(".js-dropdown-trigger").on("click", function(e) {
		e.stopPropagation();

		var $trigger = $(this);
		var $dropdown = $($trigger.data("target"));

		if ($dropdown.is(":visible")) {
			dropdownClose($dropdown);
		} else {
			dropdownOpen($dropdown, $trigger);
			$trigger.addClass("on");
		}
	});

	$(".js-dropdown-close").on("click", function(e) {

		var $dropdown = $(this).closest(".js-dropdown");
		dropdownClose($dropdown);

		return false;
	});

	$(document).on("click", function(e) {
		if (!$(e.target).closest(".js-dropdown").length && !$(e.target).hasClass("js-dropdown-trigger")) {
			$(".js-dropdown").hide();
			$(".js-dropdown-trigger").removeClass("on");
		}
	});


});