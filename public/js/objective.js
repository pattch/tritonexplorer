$(document).ready(function(){
    $("#accept").click(function(){
        $("#accept").hide();
        $("#decline").hide();
        $("#ongoing").fadeIn(200);
        
    });
    $("#decline").click(function(){
        $("#accept").hide();
        $("#decline").hide();
    });
});