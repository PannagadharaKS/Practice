/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let output = [];
    let indexMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(indexMap.has(nums[i])) {
            output.push(indexMap.get(nums[i]), i)
            break;
        }

        indexMap.set(target - nums[i], i);
    }

    return output;
};