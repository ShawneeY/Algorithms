/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) {
        return false;
    }
    
    if(s[0] === ")" || s[0]==="]" || s[0] ==="}" ) {
        return false;
    }
    
    const open = "([{";
    const close = ")]}"
    let stack = [];
    
    for(i=0; i<s.length; i++) {
        if(open.includes(s[i])){
            stack.push(open.indexOf(s[i]))
        }else {
            if(close.indexOf(s[i]) === stack[stack.length-1]){
                stack.pop();
            }else {
                return false;
            }
        }
    }
    return stack.length === 0;
};