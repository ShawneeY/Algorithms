
var longestPalindrome = function(s) {
    let palindromicMap = new Map();

    
    let findPalindromicSubstring = function(indexOffset,left,right,resultArray){

      let prev = s[left - indexOffset];
      let next = s[right + indexOffset];
      
      if(!prev || !next || prev !== next){
          return resultArray;
      }
      if(prev === next){
          resultArray.unshift(prev);
          resultArray.push(next);
         return findPalindromicSubstring(indexOffset+1, left, right, resultArray);
      }
    }
  
    
    let maxLength = 0;
    let maxArray = [];
    let sameCharArr = [];

    for(let i = 0; i < s.length; i++){
        if(i<s.length-1 && s[i] === s[i+1]){
            let array = findPalindromicSubstring(1, i, i+1, [s[i],s[i+1]]);
            if (array.length > maxLength) {
                maxArray = array;
                maxLength = array.length;
            }
        }
       
        let array = findPalindromicSubstring(1, i, i, [s[i]]);
        if (array.length > maxLength) {
            maxArray = array;
            maxLength = array.length;
        }
    }
    
    return maxArray.join('');
};

// Updated version

var longestPalindrome = function(s) {
    
    let palindromicMap = new Map();
    let L,R;
    
    let findPalindromicSubstring = function(left,right){

        if(left>=0 && right <s.length && s[left] === s[right]){
            findPalindromicSubstring(left-1, right+1);
        } else{
            L = left+1;
            R = right;
        }
    }

    let maxLength = 0;
    let maxArray = '';
    let sameCharArr = [];

    for(let i = 0; i < s.length; i++){
        if(i<s.length-1 && s[i] === s[i+1]){
            findPalindromicSubstring(i, i+1);
            let array = s.slice(L, R);
            if (array.length > maxLength) {
                maxArray = array;
                maxLength = array.length;
            }
        }
       
        findPalindromicSubstring(i, i);

        let array = s.slice(L, R);
        if (array.length > maxLength) {
            maxArray = array;
            maxLength = array.length;
        }
    }
    
    return maxArray;
};