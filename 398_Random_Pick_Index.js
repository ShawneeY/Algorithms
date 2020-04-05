/**
 * @param {number[]} nums
 */
var Solution = function (nums) {

    this.nums = nums;

};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {

    const nums = this.nums;

    let indices = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            indices.push(i);
        }
    }



    let index = Math.floor(Math.random() * indices.length);

    return indices[index];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */