print = {
    log : function(text){
        if (text == null){
            return
        }
        var new_element = document.createElement('div');
        new_element.innerHTML = "> "+text.replace(/\n/g,"<br>");
        document.getElementById("view").appendChild(new_element);
        var element = document.documentElement;
        var bottom = element.scrollHeight - element.clientHeight;
        window.scroll(0, bottom);
    },
    alert : function(text){
        if (text == null){
            return
        }
        var new_element = document.createElement('div');
        new_element.innerHTML = "> \\ "+text.replace(/\n/g,"<br>")+" /";
        new_element.style.fontSize = "22px";
        document.getElementById("view").appendChild(new_element);
        var element = document.documentElement;
        var bottom = element.scrollHeight - element.clientHeight;
        window.scroll(0, bottom);
    },
    warn : function(text){
        if (text == null){
            return
        }
        var new_element = document.createElement('div');
        new_element.innerHTML = "> "+text.replace(/\n/g,"<br>");
        new_element.style.color = "rgb(255,236,71)";
        document.getElementById("view").appendChild(new_element);
        var element = document.documentElement;
        var bottom = element.scrollHeight - element.clientHeight;
        window.scroll(0, bottom);
    },
    adv : function(text){
        if (text == null){
            return
        }
        var new_element = document.createElement('div');
        new_element.innerHTML = "! "+text.replace(/\n/g,"<br>");
        document.getElementById("view").appendChild(new_element);
        var element = document.documentElement;
        var bottom = element.scrollHeight - element.clientHeight;
        window.scroll(0, bottom);
    },
    link : function(url){
        if (url == null){
            return
        }
        var new_element = document.createElement('div');
        new_element.innerHTML = "> <a href="+url+">"+url+"</a>";
        document.getElementById("view").appendChild(new_element);
        var element = document.documentElement;
        var bottom = element.scrollHeight - element.clientHeight;
        window.scroll(0, bottom);
    },
    embed : function(url){
        if (url == null){
            return
        }
        var new_element = document.createElement('iframe');
        new_element.src = url;
        document.getElementById("view").appendChild(new_element);
        var element = document.documentElement;
        var bottom = element.scrollHeight - element.clientHeight;
        window.scroll(0, bottom);
    },
    clear : function(){
        document.getElementById("view").innerHTML = "";
        start();
    },
}
log = print.log;

function window_s(){
    go = function(url){location.href=url;return "go to "+url};
    reload = function(){location.reload();return "reload now"};
    size = function(scale){return window.parent.scale(scale)};
    scale = function(scale){return window.parent.scale(scale)};
}