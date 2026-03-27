/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArray = function(nums) {
    let numsLength = nums.length;
    let heapSize = nums.length;

    const heapifyDown = (i, n) => {
        while(true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if(left < n && nums[left] > nums[largest]) largest = left
            if(right < n && nums[right] > nums[largest]) largest = right

            if(largest == i) break;

            [nums[largest], nums[i]] = [nums[i], nums[largest]]
            i = largest;
        }
    }

    const reorderMaxFromHeap = () => {
        let max = nums[0];
        [nums[0], nums[heapSize - 1]] = [nums[heapSize - 1], nums[0]]

        heapSize--;
        if(heapSize > 1) {
            heapifyDown(0, heapSize);
        }

        return max;
    }

    for(let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
        heapifyDown(i, numsLength)
    }

    while(true) {
        reorderMaxFromHeap();

        if(!heapSize) break;
    }

    return nums;
};