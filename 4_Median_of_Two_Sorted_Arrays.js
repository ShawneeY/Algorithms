var findMedianSortedArrays = function(nums1, nums2) {
    const combined = [...nums1, ...nums2];
    
    combined.sort(((a,b) =>  a-b));
   
    const length = combined.length;
    if(length%2 !== 0){
        return combined[Math.floor(length/2)];
    }else{
        const n1 = combined[length/2 -1];
        const n2 = combined[length/2];
        return (n1+n2)/2
    }
};  