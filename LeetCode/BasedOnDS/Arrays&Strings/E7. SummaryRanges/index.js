/**
 * @param {number[]} nums
 * @return {string[]}
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
    let ranges = [];
    let i = 0;
    let minNum = nums[0];
    let maxNum = null;
    while(true) {
        if(nums.length && i+1 < nums.length && nums[i+1] - nums[i] == 1) {
            i++
            continue
        } else if(nums.length && (nums[i+1] == undefined) || nums[i+1] - nums[i] > 1) {
            maxNum = nums[i]
            if(minNum == maxNum) ranges.push(`${nums[i]}`)
            else ranges.push(`${minNum}->${maxNum}`)
            minNum = nums[i+1]

            if(nums[i+1] == undefined) break
        } else if(!nums.length) {
            break;
        }

        i++
    }

    return ranges
};


// console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))
