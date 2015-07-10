$(document).ready(function() {
    $(".button2").click(function(){
        $(".button1").trigger("click");
        return false;
    });
    
    //TEST
    $(".button1").click(function() {
        $(this).addClass("active");
    });
});