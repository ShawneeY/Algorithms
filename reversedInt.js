var reverse = function(x) {
    const absInt = Math.abs(x);
    const stringifiedInt = absInt.toString().split("").reverse();
    const operator = x >= 0 ? 1: -1;

    const reversedInt =  parseInt(stringifiedInt.join(""), 10) * operator;
    if(reversedInt > Math.pow(2, 31) * -1 && reversedInt < Math.pow(2, 31) -1) {
        return reversedInt;
    }else {
        return 0;
    }
};