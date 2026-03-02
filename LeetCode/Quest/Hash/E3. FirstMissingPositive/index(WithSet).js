/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function(nums) {
    let valueSet = new Set()

    for(let i = 0; i < nums.length; i++) {
        valueSet.add(nums[i])
    }

    let j = 0;
    while(true) {
        j++
        if(valueSet.has(j)) continue;
        else return j
    }
};