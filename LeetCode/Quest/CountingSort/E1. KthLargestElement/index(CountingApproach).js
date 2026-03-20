/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function(nums, k) {
    let positiveNumbers = [];
    let negativeNumbers = [];
    let output = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            negativeNumbers[Math.abs(nums[i])] = negativeNumbers[Math.abs(nums[i])] ? --negativeNumbers[Math.abs(nums[i])] : -1
        } else {
            positiveNumbers[nums[i]] = positiveNumbers[nums[i]] ? ++positiveNumbers[nums[i]] : 1
        }
    }

    for(let j = positiveNumbers.length; j >= 0; j--) {
        if(positiveNumbers[j] && k) {
            positiveNumbers[j]--
            k--
            output = j

            if(positiveNumbers[j]) j++
        }

        if(!k) break;
    }

    for(let j = 0; j < negativeNumbers.length; j++) {
        if(Boolean(negativeNumbers[j]) && k) {
            negativeNumbers[j]++;
            k--;
            output = -j

            if(negativeNumbers[j]) j--
        }

        if(!k) break;
    }

    return output;
};