/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function (nums) {

    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > 0 && nums[i] <= nums.length) {
            let targetIdx = nums[i] - 1;
            if (nums[targetIdx] === nums[i]) break;
            swap(nums, i, targetIdx);
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != j + 1) return j + 1
    }

    return nums.length + 1;
};