/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 const toAbsoluteValue = Math.abs(x);
 const numArray = x.toString().split("");
 if(x < 0 || numArray[numArray.length-1] === 0) {
     return false;
 }else {
     let padindrome = parseInt(numArray.reverse().join(""));
     return x === padindrome;
 }
};