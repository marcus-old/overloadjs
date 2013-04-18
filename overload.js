function overload(original, matches, fn){
    return function(){
        if(matches.length == arguments.length){
            for(var i = 0, type; i < matches.length; i++){
                if(typeof matches[i] == "string" && typeof arguments[i] != "undefined" && arguments[i] != null){
                    type = (/function (.{1,})\(/).exec(arguments[i].constructor.toString())[1];
                    if(matches[i] != "*" && ("||"+matches[i].replace(/ /g, "")+"||").split("||"+type+"||").length <= 1) break;
                } else if(typeof matches[i] == "function"){
                    if(!matches[i](arguments[i])) break;
                } else break;
            }
            if(i == matches.length) return fn.apply(this, arguments);
        }
        return original.apply(this, arguments);
    }
}