const romanValue = {
    I: 1,
    V: 5, 
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const substractionTable = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
}
const substractionSubStr = [
    "IV", "IX", "XL", "XC", "CD", "CM"
]
let subStrs = [];
var getSubstractionSubStr = function(str){
    subStrs = [];
    substractionSubStr.forEach(function(subStr){
        if(str.includes(subStr)){
           subStrs.push(subStr);   
        }
    });
}

var romanToInt = function(s) {
    let numericValue=0;
    getSubstractionSubStr(s);
    
    if(subStrs.length > 0) {
        subStrs.forEach(function(substr){
            numericValue += substractionTable[substr];
            s = s.replace(substr,"");
        })
    }
    if(s.length > 0) {
          s.split("").map(function(item){
            numericValue = numericValue + romanValue[item];
        })
    }
    return numericValue;
};