/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if(s.length === 0){
        return false;
    }
    
    var isP = (s, i, j) => {
        while (i < j) {
            if (s.charAt(i) != s.charAt(j)) return false;
            i++;
            j--;
        }
        
        return true;
    } 
    
    let start = 0;
    let end = s.length - 1;
    while(start < end){
        let head = s.charAt(start);
        let tail = s.charAt(end);

        if(head !== tail){

            return isP(s, start+1, end) || isP(s, start, end-1);
        }
        start++;
        end--;
    }
   
    return true;
    
};