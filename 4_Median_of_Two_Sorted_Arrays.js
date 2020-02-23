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

//Second go leveled up 
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergeArr = [];
     let i1 = 0;
     let i2 = 0;
     while(i1 < nums1.length &&  i2 < nums2.length){
         if(nums1[i1] === nums2[i2]){
             mergeArr.push(nums1[i1]);
             mergeArr.push(nums2[i2]);
             i1++;
             i2++;
         }else if(nums1[i1] > nums2[i2]){
             mergeArr.push(nums2[i2])
             
             i2++
         }else {
             mergeArr.push(nums1[i1])
             i1++
         }
     }
     
     if(i1 === nums1.length) {
         while(i2 < nums2.length){
             mergeArr.push(nums2[i2]);
             i2++
         }
     }else {
         while(i1 < nums1.length){
             mergeArr.push(nums1[i1]);
             i1++
         }
     }
     
     const length = mergeArr.length;
     if(length%2 !== 0){
         return mergeArr[Math.floor(length/2)];
     }else{
         const n1 = mergeArr[length/2 -1];
         const n2 = mergeArr[length/2];
         return (n1+n2)/2
     }
     //return mergeArr.length % 2 !== 0 ? mergeArr[Math.floor(mergeArr.length/2)] : (mergeArr[mergeArr.length/2] + mergeArr[mergeArr.length/2 -1])/2;
 };