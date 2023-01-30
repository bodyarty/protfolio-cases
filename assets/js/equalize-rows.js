function equalizeRowsHeight () {
	var rows = $('.table-wrapper-mobile tr').length/2;
	for (i = 0; i < rows; i++) {
		var maxHeight = -1;
		$('.table-wrapper-mobile .js-tr' + i).each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});

		$('.table-wrapper-mobile .js-tr' + i).each(function() {
			$(this).height(maxHeight);
		});
	}
}

function resetRowsHeight (){
	$('.table-wrapper-mobile tr td, .table-wrapper-mobile tr th').css("height", "");
}

$(document).ready(equalizeRowsHeight());
$( window ).resize(function() {
	resetRowsHeight ();
	equalizeRowsHeight();
});