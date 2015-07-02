require.config({
    paths: {
        jquery:'jquery-2.1.1',
        jqueryUI: 'http://code.jquery.com/ui/1.10.4/jquery-ui'
    },
    shim: {
        jqueryUI: {
            deps: ['jquery']
        }
    }
});

require(['jquery','window'],function($,w){
    $("#a").click(function(){
        var win = new w.Window().confirm({
            title: "提示",
            content: "welcome!",
            handler: function(){
                alert("you click the button");  
            },
            width:300,
            height:150,
            y:50,
            text4ConfirmBtn: "Yes",
            test4CancelBtn: "No",
            hasCloseBtn: true,
            text4AlertBtn: "OK",
            dragHandle: ".window_header",
            handler4AlertBtn: function(){
                alert("you click the alert button");
            },
            handler4CloseBtn: function(){
                alert("you click the close button");
            }
        }).on("confirm", function(){
            alert("Confirm");
        }).on("cancel", function(){
            alert("Cancel");
        });
    })
});
