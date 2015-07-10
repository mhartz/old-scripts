$(document).ready(function() {
	//Change the filters to the french version
	$("#jobTitleKeyword").val("Filtrer par titre de poste");
	$("#locationsKeyword").val("Filtrer par localisation");
	
	
	//Remove the original onfocus/onblur events in the inline version of the input
	$('#jobTitleKeyword, #locationsKeyword').removeAttr('onfocus');
	$('#jobTitleKeyword, #locationsKeyword').removeAttr('onblur');
	
	
	//When clicked it removes the French text
	//When clicked outside of the input, the French text is inserted back in
	$("#jobTitleKeyword").focus(function() {
		if(this.value == 'Filtrer par titre de poste'){this.value = '';}
	});
	$("#jobTitleKeyword").focus(function() {
		if(this.value == 'Filtrer par titre de poste'){this.value = '';}
	});
	
	
	$("#locationsKeyword").blur(function() {
		if(this.value == ''){this.value = 'Filtrer par localisation';}
	});
	$("#locationsKeyword").blur(function() {
		if(this.value == ''){this.value = 'Filtrer par localisation';}
	});
});