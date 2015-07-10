
//Temporary fix for buttons not working.  
//Needs to be removed after backend corrects the issue and the category names are returned to their original Chico's Jobs.
$(document).ready(function() {
   $("*").each(function () { 
       if ($(this).children().length == 0) { 
            $(this).text($(this).text().replace("Chicos","Chico's")); 
       } 
   });
});

