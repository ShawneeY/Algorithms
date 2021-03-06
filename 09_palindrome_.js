/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (x!=0 &&x%10===0)) {
        return false;
    }
    if(x >= 0 && x<10 ){
        return true;
    }

  let revertedNumber = 0;
  while(x >revertedNumber) {
      revertedNumber = revertedNumber*10 + x%10;
      x = Math.trunc(x/10);
  }
  return x === revertedNumber || x === Math.trunc(revertedNumber/10);
};