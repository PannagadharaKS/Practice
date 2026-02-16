/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
let kSmallestPairs = function (nums1, nums2, k) {
    let result = [];
    let i = 0;
    let j = 0;
    let heap = [[0, 0]]
    let visitedPairs = new Set();

    const heapifyUp = (heap, i) => {
        if (heap.length == 1) return;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            let parentSum = nums1[heap[parent][0]] + nums2[heap[parent][1]];
            let iSum = nums1[heap[i][0]] + nums2[heap[i][1]]
            let needSwap = false;

            if (parentSum > iSum) {
                needSwap = true;
            } else if (parentSum === iSum) {
                if (heap[parent][0] > heap[i][0]) {
                    needSwap = true;
                } else if (heap[parent][0] === heap[i][0] && heap[parent][1] > heap[i][1]) {
                    needSwap = true;
                }
            }

            if (!needSwap) break;
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }

        return heap;
    }

    const heapifyDown = (heap, i, n) => {
        if (!heap.length || heap.length == 1) return;

        while (true) {
            let smallest = i;
            let smallestI = heap[smallest][0]
            let smallestJ = heap[smallest][1]
            let smallestSum = nums1[heap[smallest][0]] + nums2[heap[smallest][1]]
            let left = 2 * i + 1;
            let leftSum = null;
            if (heap[left]) leftSum = nums1[heap[left][0]] + nums2[heap[left][1]]

            let right = 2 * i + 2;
            let rightSum = null;
            if (heap[right]) rightSum = nums1[heap[right][0]] + nums2[heap[right][1]]

            if (left < n && leftSum <= smallestSum) {
                if (leftSum < smallestSum || heap[left][0] < smallestI ||
                    (heap[left][0] === smallestI && heap[left][1] < smallestJ)) {
                    smallest = left;
                    smallestSum = leftSum;  // ADD THIS
                    smallestI = heap[left][0];  // ADD THIS
                    smallestJ = heap[left][1];  // ADD THIS
                }
            }

            if (right < n && rightSum <= smallestSum) {
                if (rightSum < smallestSum || heap[right][0] < smallestI ||
                    (heap[right][0] === smallestI && heap[right][1] < smallestJ)) {
                    smallest = right;
                    smallestSum = rightSum;  // ADD THIS
                    smallestI = heap[right][0];  // ADD THIS
                    smallestJ = heap[right][1];  // ADD THIS
                }
            }

            if (smallest == i) break;
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]]
            i = smallest;
        }

        return heap;
    }

    const extractMinAndHeapify = () => {
        let min = heap[0];
        if (heap.length == 1) heap.pop();
        else if (heap.length > 1) {
            heap[0] = heap.pop();
            heapifyDown(heap, 0, heap.length);
            for (let i = 0; i < heap.length; i++) {
                let left = 2 * i + 1, right = 2 * i + 2;
                if (left < heap.length) {
                    let sumParent = nums1[heap[i][0]] + nums2[heap[i][1]];
                    let sumLeft = nums1[heap[left][0]] + nums2[heap[left][1]];
                    if (sumParent > sumLeft) console.log("VIOLATION at", i, "parent", sumParent, "left", sumLeft);
                }
            }
        }
        return min
    }

    const insertIntoHeap = (value) => {
        heap.push(value);
        heapifyUp(heap, heap.length - 1);
        return heap;
    }

    while (result.length < k) {
        console.log("Heap before extract:", heap.map(([i, j]) => `[${i},${j}]=${nums1[i] + nums2[j]}`).join(", "));
        let [i, j] = extractMinAndHeapify();
        if (visitedPairs.has(`${i}_${j}`)) {
            console.log("Extracted:", i, j, "already visited: true - SKIPPING");
            continue;
        }
        console.log("Extracted:", i, j, "already visited:", visitedPairs.has(`${i}_${j}`))
        result.push([nums1[i], nums2[j]])
        visitedPairs.add(`${i}_${j}`);
        if (nums1[i] == 0 && nums2[j] == 22) console.log("Current Heap", heap)

        if (!visitedPairs.has(`${i + 1}_${j}`) && i + 1 < nums1.length && j < nums2.length) insertIntoHeap([i + 1, j])
        if (!visitedPairs.has(`${i}_${j + 1}`) && i < nums1.length && j + 1 < nums2.length) insertIntoHeap([i, j + 1])

    }

    console.log("result", result)
    return result;
};

// kSmallestPairs([1, 1, 2], [1, 2, 3], 2);
// kSmallestPairs([1,7,11], [2,4,6], 3);
kSmallestPairs([0, 0, 0, 0, 0, 2, 2, 2, 2], [-3, 22, 35, 56, 76], 22);