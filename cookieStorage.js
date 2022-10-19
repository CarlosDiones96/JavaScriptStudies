function CookieStorage(maxage, path){
    var cookies = (function (){
        var cookies = {};
        var all = document.cookie;

        if (all === "") return cookies;

        var list = all.split("; ");
        for (var i = 0; i < list.length; i++){
            var cookie = list[i];
            var p = cookie.indexOf("=");
            var name = cookie.substring(0, p);
            var value = cookie.substring(p+1);
            value = decodeURIComponent(value);
            cookies[name] = value;
        }
        return cookies;
    })();

    var keys = [];
    for (var key in cookies){
        keys.push(key);
    }

    this.length = keys.length;

    this.key = function(n){
        if (n < 0 || n >= keys.length) return null;
        return keys[n];
    };

    this.getItem = function(name) {
        return cookies[name] || null;
    };

    this.setItem = function(key, value){
        if (!(key in cookies)){
            keys.push(key);
            this.length++;
        }

        cookies[key] = value;

        var cookie = key + "=" + encodeURIComponent(value);

        if (maxage) {
            cookie += "; max-age=" + maxage;
        }

        if (path){
            cookie += "; path=" + path;
        }

        document.cookie = cookie;
    };

    this.removeItem = function(key){
        if (!(key in cookies)) return;

        delete cookies[key];

        for (var i = 0; i < keys.length; i++){
            if (keys[i] === key){
                keys.splice(i, 1);
                break;
            }
        }
        this.length--;
        document.cookie = key + "=; max-age=0";
    };

    this.clear = function(){
        for (var i = 0; i < keys.length; i++){
            document.cookie = keys[i] + "=; max-age=0";
        }
        cookies = {};
        keys = [];
        this.length = 0;
    };
}