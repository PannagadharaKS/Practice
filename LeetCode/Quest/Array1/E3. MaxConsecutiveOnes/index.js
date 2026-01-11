/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function(nums) {
    let i = 0;
    let currentMaxCount = 0;
    let maxCount = 0;

    while(true) {
        if(nums.length == i) {
            if(maxCount < currentMaxCount) maxCount = currentMaxCount;
            break;
        }
        if(nums[i] == 1) currentMaxCount++;
        if(nums[i] == 0) {
            if(maxCount < currentMaxCount) maxCount = currentMaxCount;
            currentMaxCount = 0;
        }
        i++;
    }

    return maxCount;
};