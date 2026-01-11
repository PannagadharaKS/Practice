/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findErrorNums = function(nums) {
    let duplicate = -1;
    let missing = -1;
    let seen = new Array(nums.length + 1).fill(0);

    for(let num of nums) {
        seen[num]++;
    }

    for(let n = 1; n <= nums.length; n++) {
        if(seen[n] == 2) duplicate = n;
        else if(seen[n] == 0) missing = n;
    }

    return [duplicate, missing];
};