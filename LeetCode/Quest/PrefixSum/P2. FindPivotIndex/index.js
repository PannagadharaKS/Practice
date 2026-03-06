/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function(nums) {
    let pivot = 0;
    let leftSum = 0;
    let rightSum = 0;
    let prefixSum = new Array(nums.length + 1).fill(0)

    for(let i = 0; i < nums.length; i++) {
        prefixSum[i+1] = prefixSum[i] + nums[i]
    }

    while(true) {
        leftSum = prefixSum[pivot]
        rightSum = prefixSum[prefixSum.length - 1] - prefixSum[pivot + 1]

        if(leftSum == rightSum) return pivot

        pivot++;
        if(pivot >= nums.length) return -1
    }
};