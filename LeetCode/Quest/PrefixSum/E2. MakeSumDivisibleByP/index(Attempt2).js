/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
let minSubarray = function (nums, p) {
    let prefixSum = 0;
    let sumMap = new Map();
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    if (sum % p == 0) return 0;

    let totalRemainder = sum % p;
    let j = 0;
    let minLength = nums.length;
    let prefixRemainder = 0;
    sumMap.set(0, -1)

    while (true) {
        if (j >= nums.length) break;

        prefixRemainder = (prefixRemainder + nums[j]) % p

        let needed = (prefixRemainder - totalRemainder + p) % p;

        if (sumMap.has(needed)) {
            minLength = Math.min(minLength, j - sumMap.get(needed))
        }

        sumMap.set(prefixRemainder, j)


        j++
    }

    return minLength == nums.length ? -1 : minLength;
};