$(document).ready(function() {
	$('.employee, .otherclass').click(function() {
		var subClass = $(this).attr('class').split(' ')[1];
		var subClassBio = subClass + 'Bio';
		$('.bio').hide();
		$(subClassBio).show();
	});
});