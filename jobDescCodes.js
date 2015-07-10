	$('#jobDesc div').removeAttr('style');
	$('#jobDesc span').removeAttr('style');
	$('#jobDesc font').removeAttr('face');
	$('#jobDesc font').removeAttr('size');
	$('#jobDesc p').removeAttr('style');
	$("#jjobDesc p br").remove();
	$("#jjobDesc ul br").remove();

	$('#jobDesc font').each(function() {
	    var $this = $(this);
	    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
	        $this.remove();
	});

	$('#jobDesc o\\:p').remove();

	$('#jobDesc p').each(function() {
    	var $this = $(this);
    	if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
        	$this.remove();
	});

	$('#jobDesc').each(function(){
   		$(this).html($(this).html().replace(/(<br>\s*){2,2}/gi,'<br>'));
	});