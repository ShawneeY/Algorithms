/**
 * @param {string} s
 * @return {boolean}
 */

// If open brackets, push into the stack, if close brackets, check if top
// of the stack is the same kindda open bracket, if so, pop it, if not, return
// false directly. 
// Reason being, does not matter what kind or what direction comes next,
// open or close, least one different kind in between.


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