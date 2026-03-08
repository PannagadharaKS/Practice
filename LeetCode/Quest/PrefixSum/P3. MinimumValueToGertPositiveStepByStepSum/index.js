/**
 * @param {number[]} nums
 * @return {number}
 */
let minStartValue = function(nums) {
    let startValue = 1;
    let minValue = 0;
    let prefixSum = new Array(nums.length + 1).fill(0);
    let i = 0;

    for(let j = 0; j < nums.length; j++) {
        prefixSum[j+1] += prefixSum[j] + nums[j]
        if(minValue > prefixSum[j+1]) minValue = prefixSum[j+1]
    }

    return minValue <= 0 ? 
        Math.abs(minValue) + 1 : 1 
};