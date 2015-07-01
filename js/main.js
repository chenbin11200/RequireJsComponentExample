require.config({
    paths: {
        jquery:'jquery-2.1.1'
    }
});

require(['jquery','window'],function($,w){
    $("#a").click(function(){
        new w.Window().alert("welcome!",function(){
          alert("you click the button");  
        });
    })
});
