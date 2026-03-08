/**
 * @param {number[]} nums
 * @return {number}
 */
let minStartValue = function(nums) {
    let startValue = 1;
    let prefixSum = startValue;
    let i = 0;

    while(true) {
        if(nums[i] + prefixSum < 1) {
            startValue++;
            prefixSum = startValue;
            i = 0;
            continue;
        }
        
        prefixSum += nums[i]
        i++
        if(i == nums.length - 1 && nums[i] + prefixSum > 1) return startValue;
    }
};

console.log(minStartValue([-3,2,-3,4,2]))