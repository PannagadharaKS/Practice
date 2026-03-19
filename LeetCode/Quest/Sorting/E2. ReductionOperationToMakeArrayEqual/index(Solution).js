/**
 * @param {number[]} nums
 * @return {number}
 */
let reductionOperations = function(nums) {
    let operations = 0;
    let count = 0;
    let largest = 0;

    nums.sort((a, b) => b - a);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != largest) {
            operations += count;
        }
        count++;
        largest = nums[i]
    }

    return operations;
};