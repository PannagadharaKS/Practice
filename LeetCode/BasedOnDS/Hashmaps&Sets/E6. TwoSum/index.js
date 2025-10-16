/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let output = []
    let comp = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (comp.has(nums[i])) {
            output.push(comp.get(nums[i]))
            output.push(i)
            break;
        }
        comp.set(target - nums[i], i)
    }

    return output;
};