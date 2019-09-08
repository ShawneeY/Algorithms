//Option 1
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

//Option 2
var romanToInt = function(s) {
   let numericValue=0;
  
   return s.split("").reduce(function(accumulator, currentValue, currentIndex){
        if(romanValue[currentValue] < romanValue[s[currentIndex + 1]] ){
            numericValue -= romanValue[currentValue];
        }else {
            numericValue += romanValue[currentValue];
        }
     return numericValue;
   }, 0 )
};

// option 3
public static int romanToInt(String s) {
	int res = 0;
	for (int i = s.length() - 1; i >= 0; i--) {
		char c = s.charAt(i);
		switch (c) {
		case 'I':
			res += (res >= 5 ? -1 : 1);
			break;
		case 'V':
			res += 5;
			break;
		case 'X':
			res += 10 * (res >= 50 ? -1 : 1);
			break;
		case 'L':
			res += 50;
			break;
		case 'C':
			res += 100 * (res >= 500 ? -1 : 1);
			break;
		case 'D':
			res += 500;
			break;
		case 'M':
			res += 1000;
			break;
		}
	}
	return res;
}
