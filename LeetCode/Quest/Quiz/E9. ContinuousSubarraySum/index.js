/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let checkSubarraySum = function(nums, k) {
    let total = 0;

    if(nums.length == 1) return false;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0 && (nums[i-1] == 0 || nums[i+1] == 0)) return true
        total += nums[i]
        nums[i] = nums[i] < k ? k - nums[i] : nums[i] % k
    }

    if(total % k == 0) return true;

    console.log("nums", nums)

    let prev = 0;
    let prevCount = 1;
    for(let i = 1; i < nums.length; i++) {
        prev += nums[i-1];
        if((prev + nums[i]) % k == 0) return true

        console.log(prev, prevCount, i, nums[i])

        if(i == nums.length - 1) {
            prev = 0;
            prevCount++
            i = prevCount - 1
            if(i == nums.length - 1) break;
        }
    }

    return false
};

console.log(checkSubarraySum([1,2,3], 5))
// console.log(checkSubarraySum([23,2,6,4,7], 13))