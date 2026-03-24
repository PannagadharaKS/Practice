/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function(nums, k) {
    const target = nums.length - k;
    
    const quickSelect = (left, right) => {
        if (left === right) return nums[left];
        
        const pivot = nums[Math.floor((left + right) / 2)];
        
        let i = left - 1;
        let j = right + 1;
        
        while (i < j) {
            do {
                i++;
            } while (nums[i] < pivot);
            
            do {
                j--;
            } while (nums[j] > pivot);
            
            if (i < j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
        
        if (j < target) {
            return quickSelect(j + 1, right);
        } else {
            return quickSelect(left, j);
        }
    };
    
    return quickSelect(0, nums.length - 1);
};