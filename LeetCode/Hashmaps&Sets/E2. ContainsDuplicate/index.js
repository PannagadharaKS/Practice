/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    let numsSet = new Set(nums)
    return numsSet.size != nums.length
};