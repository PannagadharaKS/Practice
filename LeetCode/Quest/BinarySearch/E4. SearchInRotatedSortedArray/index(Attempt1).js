/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = null;
    let isRotated = false;
    let originalMid = Math.floor((left + right) / 2);

    if(nums.length == 1) return target == nums[0] ? 0 : -1

    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if(nums[mid] > target) {
            right = mid;
            if(right == left) {
                if(nums[right] == target) return right
                if(isRotated) break;
                left = originalMid;
                right = nums.length - 1;
                isRotated = true;
            }
        } else if(nums[mid] < target) {
            left = mid + 1;
            if(left == right) {
                if(nums[left] == target) return left
                if(isRotated) break;
                left = 0;
                right = originalMid
                isRotated = true;
            }
        } else if(nums[mid] == target) return mid
    }

    return -1
};