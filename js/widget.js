define(function(){
    function Widget(){
        this.boundingBox = null;
    }
    
    Widget.prototype = {
        on: function(type, handler){
            if(typeof this.handlers[type] == "undefined"){
                this.handlers[type] = [];
            }
            this.handlers[type].push(handler);
            return this;
        },
        fire: function(type, data){
            if(this.handlers[type] instanceof Array){
                var handlers = this.handlers[type];
                for(var i=0,len=handlers.length;i<len;i++){
                    handlers[i](data);
                }
            }
        },
        render: function(container){
            this.renderUI();
            this.handlers = {};
            this.bindUI();
            this.syncUI();
            $(container || document.body).append(this.boundingBox);
        },
        destroy: function(){
            this.destructor();
            this.boundingBox.off();
            this.boundingBox.remove();
        },
        renderUI: function(){},
        bindUI: function(){},
        syncUI: function(){},
        destructor: function(){}
    };

    return {
        Widget: Widget
    };
    
});
