/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    let output = new Array(nums.length).fill(1);
    let prefix = 1;
    let suffix = 1;

    for(let i = 0; i < nums.length; i++) {
        output[i] = prefix;
        prefix *= nums[i];
    }

    console.log("prefix", output);
    
    for(let j = nums.length - 1; j >= 0; j--) {
        output[j] *= suffix;
        suffix *= nums[j];
    }
    
    console.log("suffix", output);
    return output
};

console.log(productExceptSelf([1, 2, 3, 4]))
// console.log(productExceptSelf([-1, 1, 0, -3, 3]))
// console.log(productExceptSelf([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 9, 1]))