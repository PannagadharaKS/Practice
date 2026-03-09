/**
 * @param {number[]} nums
 * @return {number[]}
 */
let runningSum = function(nums) {
    let prefixSum = new Array(nums.length).fill(0)
    let currentTotal = 0;

    for(let i = 0; i < nums.length; i++) {
        currentTotal += nums[i]
        prefixSum[i] = currentTotal
    }

    return prefixSum
};