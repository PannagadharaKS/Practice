/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function(nums) {
    let emptyArray = new Array(nums.length + 1).fill(0);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) emptyArray[nums[i] - 1] = 1
    }

    for(let j = 0; j < emptyArray.length; j++) {
        if(emptyArray[j] == 0) return j + 1
    }
};