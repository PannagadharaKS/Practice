/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function(nums, k) {
    let pivot = nums[nums.length - 1];
    let storedIndex = 0
    let target = nums.length - k;

    const partition = (left, right) => {
        pivot = nums[right];
        storedIndex = left;
        for(let i = left; i < right; i++) {
            if(nums[i] <= pivot) {
                [nums[i], nums[storedIndex]] = [nums[storedIndex], nums[i]]
                storedIndex++
            }
        }

        [nums[storedIndex], nums[right]] = [nums[right], nums[storedIndex]]
        
        return storedIndex;
    }

    const quickSelect = (left, right) => {
        if(left == right) return nums[left];

        pivotIndex = partition(left, right)

        if(pivotIndex == target) return nums[pivotIndex];
        else if(pivotIndex > target) return quickSelect(left, pivotIndex - 1)
        else if(pivotIndex < target) return quickSelect(pivotIndex + 1, right)
    }

    return quickSelect(0, nums.length - 1);
};