/**
 * @param {number[]} nums
 * @return {number}
 */
const findClosestNumber = function (nums) {
    let closest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(closest) > Math.abs(0 - nums[i])) {
            closest = nums[i]
        } else if (Math.abs(closest) == Math.abs(0 - nums[i])) {
            if (closest < nums[i]) {
                closest = nums[i]
            }
        }
    }

    return closest
};