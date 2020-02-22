// Option 1 runs 60m on average
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

// Option 2 runs 45m on average
// Sort first, then will have longest prefix in order, then only have to compare
// the first and the last elements in the array
const longestCommonPrefix = (strs) => {
    if (!strs || !strs.length) return ''
    strs.sort()
    strs = [strs[0], strs[strs.length - 1]]
    for (let a = 0; a <= strs[1].length; a++) {
        if (strs[0][a] !== strs[1][a]) {
            strs[0] = strs[0].slice(0, a)
            break
        }
    }
    return strs[0]
}

// BFS
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return ""
    }
    
    const head = strs.shift();
    let que = head.split("");
    let result = [];
    
    while(que.length > 0){
        let curr = que.shift();
        result.push(curr);

        for(let i = 0; i < strs.length; i++){
           if(!strs[i]) {
               result.pop();
               return result.join(""); 
           }
            
            let curr2 = strs[i].charAt(0);
            strs[i] = strs[i].substring(1);
            
            if(curr2 !== curr){
                result.pop();
                return result.join(""); 
            }
        }

    }
    
   return result.join("");
}