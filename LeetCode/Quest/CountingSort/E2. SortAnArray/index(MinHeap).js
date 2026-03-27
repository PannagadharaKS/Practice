/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArray = function(nums) {
    let output = [];
    let numsLength = nums.length;

    const heapifyDown = (i, n) => {
        while(true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if(left < n && nums[left] < nums[smallest]) smallest = left
            if(right < n && nums[right] < nums[smallest]) smallest = right

            if(smallest == i) break;

            [nums[smallest], nums[i]] = [nums[i], nums[smallest]]
            i = smallest;
        }
    }

    const extractFromHeap = () => {
        let min = nums[0];
        nums[0] = nums.pop();

        if(nums.length > 1) {
            heapifyDown(0, nums.length);
        }

        return min;
    }

    for(let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
        heapifyDown(i, nums.length)
    }

    while(true) {
        if(output.length == numsLength) break;
        let min = extractFromHeap();
        output.push(min);
    }

    return output;
};