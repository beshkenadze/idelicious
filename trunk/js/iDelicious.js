(function($){
    $.fn.iDelicious = function(options){
        var defaults = {
            user: 'akira.spb',
            setClass: 'null-image',
            count: 10,
            col: 5,
            pathToPreloadImage: '/images/load.gif',
            startTop:150,
            startLeft: 0
        };
		var el = $(this);
        var opts = $.extend(defaults, options);
        $(this).html('<img id="load" src="' + defaults.pathToPreloadImage + '" />');
        $.getJSON("http://feeds.delicious.com/v2/json/" + defaults.user + "?callback=?", function(data){
            $("#load").remove();
			$.each(data, function(i, item){
                $("<img/>").attr('title',item.u).attr("src", 'http://images.websnapr.com/?size=s&key=46Psp0wjLQo5&url=' + item.u).css('width', '100px').css('cursor', 'pointer').attr('class', defaults.setClass).appendTo(el);
                if (i + 1 == defaults.count) 
                    return false
            });
            var top = defaults.startTop;
            var left = defaults.startLeft;
            $("img." + defaults.setClass).each(function(i, item){
                $(this).css('position', 'absolute');
                if (i % defaults.col == 0 & i > 1) {
                    top = top + 75;
                    left = 0;
                }
                $(this).css('top', top);
                $(this).css('left', left * 100);
                left++;
            });
            $("img." + defaults.setClass).bind("mouseenter", function(){
                $(this).css('z-index', '1');
                $(this).animate({
                    width: '200px',
                    left: '-=50px',
                    top: '-=34.5px',
                });
            }).bind("click", function(){
                window.location.href=$(this).attr('title');
            }).bind("mouseleave", function(){
                $(this).animate({
                    width: '100px',
                    left: '+=50px',
                    top: '+=34.5px',
                }, 100);
                $(this).css('position', 'none');
                $(this).css('z-index', '0');
            });
        });
    }
})(jQuery);
