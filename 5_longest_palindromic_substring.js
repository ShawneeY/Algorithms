
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