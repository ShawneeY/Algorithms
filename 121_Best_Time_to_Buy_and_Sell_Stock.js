/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0
    let min = prices[0]

    
    for(let i =0; i < prices.length; i++){
        let curr = prices[i];
        if(min > curr){
            min = curr;
        }

        if(curr > min){
            result = Math.max(curr-min, result);
        }
    }
    return result;
};