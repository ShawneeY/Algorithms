
var longestCommonPrefix = function(strs) {
    
    if(strs.length === 0){
        return "";
    }
    var prefix = [];
    for(i=0; i<strs[0].length; i++){
       var isPrefix = strs.every(function(currentValue){
           return strs[0].charAt(i) === currentValue.charAt(i);
        })
       if(isPrefix){
           prefix.push(strs[0].charAt(i));
       }else {
           break;
       }
    }
    return prefix.join("");
};