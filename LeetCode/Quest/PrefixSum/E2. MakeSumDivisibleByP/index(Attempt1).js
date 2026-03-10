/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
let minSubarray = function(nums, p) {
    let prefixSum = 0;
    let sumMap = new Map();
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    if(sum % p == 0) return 0;

    let totalRemainder = sum % p;
    let j = 0;
    let prefixRemainder = 0;
    sumMap.set(0, -1)
    while(true) {
        if(j > nums.length - 1) break;

        prefixSum += nums[j]
        prefixRemainder = prefixSum % p

        let needed = (prefixRemainder - totalRemainder + p) % p;
        if(!sumMap.has(needed)) {
            sumMap.set(prefixRemainder, j)
        } else {
            return j - sumMap.get(needed)
        }

        j++
    }
};