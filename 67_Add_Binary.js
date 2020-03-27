/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let result = "";
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    
    while(aIndex >= 0 || bIndex >= 0) {
        let aa = aIndex >= 0 ? a.charAt(aIndex) : 0;
        let bb = bIndex >= 0 ? b.charAt(bIndex) : 0;
        
        let sum = parseInt(aa) + parseInt(bb) + carry;
        
        if (sum >= 2) {
            carry = Math.floor(sum / 2);
            sum = sum % 2;
        } else {
            carry = 0;
        }
        
        result = sum.toString() + result;
        aIndex--;
        bIndex--;
    }
    
    if (carry == 1) {
        result = "1" + result; 
    }
    
    return result;
};