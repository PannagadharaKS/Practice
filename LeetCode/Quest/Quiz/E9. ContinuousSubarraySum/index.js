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

    let prev = 0;
    let prevCount = 1;
    for(let i = 1; i < nums.length; i++) {
        prev += nums[i-1];
        if((prev + nums[i]) % k == 0) return true

        if(i == nums.length - 1) {
            i = 2;
            prev = 0;
            prevCount++
            if(prevCount == nums.length) break;
        }
    }

    return false
};