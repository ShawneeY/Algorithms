var findClosestElements = function(arr, k, x) {
    var sorted = arr.sort(function(a,b){return Math.abs(a-x) - Math.abs(b-x)});
    var left = sorted.splice(0,k);
    sorted = left.sort(function(a,b){return a-b});
    return sorted;
};