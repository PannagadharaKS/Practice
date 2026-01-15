/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = function (nums) {
    let n = nums.length;
    let output = [];

    for (let i = 0; i < n; i++) {
        let currentNum = Math.abs(nums[i]) - 1;
        console.log(currentNum, i, nums[i]);
        nums[currentNum] = -Math.abs(nums[currentNum])
    }

    console.log(nums)

    for (let i = 0; i < n; i++) {
        if (nums[i] > -1) {
            console.log("i", i)
            output.push(i + 1)
        }
    }

    console.log(output)

    return output;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])