define(['jquery'],function($){

    function Window(){

    }

    Window.prototype={
        alert: function(content,handler){
            var boundingBox = $('<div class="window_boundingBox"></div>');
            boundingBox.appendTo("body");
            boundingBox.html(content);
    	    var btn=$('<input type="button" value="confirm">');
            btn.appendTo(boundingBox);
    	    btn.click(function(){
         		handler && handler();
        		boundingBox.remove();
    	    });
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
