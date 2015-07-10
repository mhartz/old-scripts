//Adds classes to each element in the first field
//Each class is automatically numbered in ascending order

$(".searchWrapper .fieldWrapper").each(function(index) {
  $(this).addClass('fWrapper' + index);
});


// show div on hover over
$(".location").each(function (index) {
	$(this).hover(function () {
		$('.locationBox' + index).show();
	}, function() {
		$('.locationBox' + index).hide();
	});
});