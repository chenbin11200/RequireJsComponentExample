define(['jquery'],function($){

    function Window(){
        this.cfg={
            width: 500,
            height: 300,
            title: "title",
            content: "system message",
            handler: null,
            hasCloseBtn: false,
            skinClassName: null,
            handler4AlertBtn: null,
            handler4CloseBtn: null
        };
    }

    Window.prototype={
        alert: function(cfg){
            var CFG = $.extend(this.cfg,cfg);
            var boundingBox = $(
                '<div class="window_boundingBox">'+
                    '<div class="window_header">'+CFG.title+'</div>'+
                    '<div class="window_body">'+CFG.content+'</div>'+
                    '<div class="window_footer"><input type="button" value="confirm"></div>'+
                '</div>'),
                btn = boundingBox.find(".window_footer input");
            boundingBox.appendTo("body");
    	    btn.click(function(){
                CFG.handler4AlertBtn&&CFG.handler4AlertBtn();
        		boundingBox.remove();
    	    });
            boundingBox.css({
                width : CFG.width + "px",
                height : CFG.height + "px",
                left : (CFG.x || (window.innerWidth - CFG.width)/2) + "px",
                top : (CFG.y || (window.innerHeight - CFG.height)/2) + "px"
            });
            if(CFG.hasCloseBtn){
                var closeBtn = $('<span class="window_closeBtn">X</span>');
                closeBtn.appendTo(boundingBox);
                closeBtn.click(function(){
                    CFG.handler4CloseBtn&&CFG.handler4CloseBtn();
                    boundingBox.remove();
                });
            }
            if(CFG.skinClassName){
                boundingBox.addClass(CFG.skinClassName);
            }
        },
        confirm:function(){

        },
        prompt:function(){

        }
    }
    
    return {
        Window: Window
    }
    
});
