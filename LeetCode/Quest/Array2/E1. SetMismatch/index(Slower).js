/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findErrorNums = function(nums) {
    let i = 1;
    let index = 0;
    let output = [];
    let numsSet = new Set(nums);
    let missingNum = null;
    let repeatedNum = new Set();

    while(true) {
        if(i > nums.length) break;
        if(repeatedNum.has(nums[index])) output.push(nums[index])
        repeatedNum.add(nums[index]);
        if(!numsSet.has(i)) missingNum = i;
        i++ 
        index++
    }

    output.push(missingNum)
    return output;
};