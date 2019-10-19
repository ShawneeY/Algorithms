
var sortedArrayToBST = function(nums) {
    if(!nums){
        return null;
    }
    const numsCount = nums.length;
    if(numsCount === 0){
        return null;
    }
    if(numsCount % 2 === 0){
        return null;
    }
    var newTree = [];
    var topNode = {val:nums[(numsCount -1)/2], left:{val:null}, right:{val:null}};

    const secondHalf = nums.slice((numsCount +1)/2).reverse();
    const firstHalf = nums.slice(0, (numsCount -1)/2);

    for(var i=0; i<firstHalf.length; i++){
        var left = firstHalf[i];
        topNode = {val:left, left:{val:null}, right:{val:null}}
        
    }
    for(var i=0; i<secondHalf.length; i++){
        var right = secondHalf[i];
        if(right){
            newTree = {val:right, left:{val:null}, right:{val:null}}
        }
       
    }
    return newTree;
};