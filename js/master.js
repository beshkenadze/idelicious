google.load("jquery", "1.2.6");
google.load("jqueryui", "1.5.2");
window.onload = function(){
    $("#getButton").click(function(){
        $('#images').iDelicious({
            user: $('#user').val(),
            count: $('#count').val(),
            col: $('#col').val()
        });
    });
    $("#getMeCode").click(function(){
        $("#code").val('<script src="http://www.google.com/jsapi"></script>\n\
<script>\n\
google.load("jquery", "1.2.6");\n\
google.load("jqueryui", "1.5.2");\n\
</script>\n\
<script type="text/javascript" src="http://code.google.com/p/idelicious/source/browse/trunk/js/iDelicious.js"></script>\n\
<script>\n\
google.load("jquery", "1.2.6");\n\
google.load("jqueryui", "1.5.2");\n\
window.onload = function(){\n\
$(\'#place_for_image\').iDelicious({\n\
    user: "'+$('#user').val()+'", //username\n\
    count: '+$('#count').val()+', //count urls: max 15\n\
    col: '+$('#col').val()+', //Cols\n\
    pathToPreloadImage: \'/images/load.gif\', //Path to preload image\n\
    startTop:150, //Start absolute position in top\n\
    startLeft: 0 //Start absolute position in left\n\
});\n\
}\n\
</script>\n\
<div id="place_for_image"></div>\
')
    });
}
