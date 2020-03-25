/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    //edge case
    let stack = [];
    let invalid = new Set();
    const array = Array.from(s);
    for(let i = 0; i < array.length; i++){
        let curr = array[i];
        
        if(curr === '('){
            stack.push(i);
        }
        else if (curr === ')' ) { 
            if (stack.length === 0) { // 多出来了一个）
                //console.log(stack);
                invalid.add(i);
            } else {
                stack.pop();
            }   
        }
    }

    for(let e of stack) invalid.add(e);
    
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if (invalid.has(i)) continue;
        
        result.push(array[i]);
    }
    
    return result.join('');
    
};


//option2 
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    //edge case
    
    

    let forward = 0;
    
    // loop once find count of ')' and totall count of parenthesis
    for(let i = 0; i < s.length; i++){
        let curr = s.charAt(i);
        
        if(curr === '('){
            forward++
        }
        if(curr === ')' ){
            if(forward === 0){
                s = s.substring(0,i) + s.substring(i+1);
                i--;
            }else {
                forward--
            }
            
        }

    }

    for(let i = s.length - 1; i >= 0; i--){
        if(forward ===0) break;
        if(s.charAt(i) === '('){
            s = s.substring(0,i) + s.substring(i+1);
            forward--
            i++
        }

    }
    return s;
    
};