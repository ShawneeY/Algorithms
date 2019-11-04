var topKFrequent = function(nums, k) {
    if(nums.length === 0){
        return [];
    }
    
    var map = new Map();
    
    for(var i=0; i<nums.length; i++){
        var el = nums[i];
        if(map.get(el)){
            var frequency = map.get(el);
            map.set(el, frequency+1);
        }else {
            map.set(el, 1);
        }
    }
    
    var mapArr = [];

    for(var [key, value] of map.entries()){

        mapArr.push({name: key, value:value});
    }

    mapArr.sort(function(a,b){return b.value - a.value});
   
    var returnArr=[];
    for(var i=0; i<k; i++){
        returnArr.push(mapArr[i].name);
    }
    return returnArr;
};
//O(n) + O(n) + O(n) + O(nlgn) = O(3n) + O(nlgn) = O(n) + O(nlgn) = O(nlgn);