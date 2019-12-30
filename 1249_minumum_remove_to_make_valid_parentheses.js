var minRemoveToMakeValid = function(s) {
    if(s.length === 0){
        return s;
    }
    let charArr = s.split('');
    
    let stack = [];
    
    let invalidIndex = new Set();
    
  
    for(let i = 0; i < charArr.length; i++){
       
        let c = charArr[i];
        
        if( c=== '('){
            stack.push(i);
        }
        if(c === ')'){
            if(stack.length == 0){
                invalidIndex.add(i);
            }else{
                stack.pop()
            }
        }
        
    }
    
    if(stack.length > 0){
       for(let s of stack){
           invalidIndex.add(s);
       }
    }
    
    
    let resultArr = [];
    for(let i = 0; i < charArr.length; i++){
       if(!invalidIndex.has(i)){
           resultArr.push(charArr[i])
       }  
    }
    
    return resultArr.join('');
};