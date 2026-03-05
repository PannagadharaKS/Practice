/**
 * @param {number[]} nums
 */
let NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(this.nums.length) {
        let currentSum = 0;
        for(let i = left; i <= right; i++) {
            currentSum += this.nums[i];
        }
        return currentSum
    }

    return 0
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */