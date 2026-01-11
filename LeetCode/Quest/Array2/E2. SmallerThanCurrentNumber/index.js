/**
 * @param {number[]} nums
 * @return {number[]}
 */
let smallerNumbersThanCurrent = function(nums) {
    let output = [];
    let numsArray = new Array(101).fill(0);

    for(let num of nums) {
        numsArray[num]++;
    }

    for(let i = 1; i < 101; i++) {
        numsArray[i] = numsArray[i] + numsArray[i - 1];
    }

    for(let num of nums) {
        output.push(num == 0 ? 0 : numsArray[num - 1])
    }

    return output

};