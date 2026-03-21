/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthsmallest = function (nums, k) {
    let output = 0;
    let heap = [];

    const heapifyUp = (i) => {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (heap[parent] <= heap[i]) break;

            [heap[i], heap[parent]] = [heap[parent], heap[i]];
            i = parent;
        }
    }

    const heapifyDown = (i, n) => {
        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < n && heap[left] < heap[smallest]) {
                smallest = left;
            }
            if (right < n && heap[right] < heap[smallest]) {
                smallest = right;
            }

            if (smallest === i) break;

            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
        }
    }

    const extractMin = () => {
        if (heap.length === 0) return null;

        const min = heap[0];
        heap[0] = heap.pop();

        if (heap.length > 0) {
            heapifyDown(0, heap.length);
        }

        return min;
    }

    const insertIntoHeap = (value) => {
        heap.push(value);
        heapifyUp(heap.length - 1)

        if (heap.length > k) {
            extractMin();
        }
    }

    for (let i = 0; i < nums.length; i++) {
        insertIntoHeap(nums[i])
    }

    return extractMin();
};

console.log(findKthsmallest([3, 2, 1, 5, 6, 4], 2))