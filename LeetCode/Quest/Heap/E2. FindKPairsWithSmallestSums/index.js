/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
let kSmallestPairs = function(nums1, nums2, k) {
    let result = [];
    let i = 0;
    let j = 0;
    let heap = [[0, 0]]
    let visitedPairs = new Set();

    const heapifyUp = (heap, i) => {
        if(heap.length == 1) return;

        while(i > 0) {
            let parent = Math.floor((i - 1) / 2);
            let parentSum = nums1[heap[parent][0]] + nums2[heap[parent][1]];
            let iSum = nums1[heap[i][0]] + nums2[heap[i][1]]
            console.log("parent", nums1[heap[parent][0]] + nums2[heap[parent][1]])
            if(parentSum <= iSum) break;

            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }

        return heap;
    }

    const heapifyDown = (heap, i, n) => {
        if(!heap.length || heap.length == 1) return;

        while(true) {
            let smallest = i;
            let smallestSum = nums1[heap[smallest][0]] + nums2[heap[smallest][1]]
            let left = 2 * i + 1;
            let leftSum = null;
            if(heap[left]) leftSum = nums1[heap[left][0]] + nums2[heap[left][1]]
            
            let right = 2 * i + 2;
            let rightSum = null;
            if(heap[right]) rightSum = nums1[heap[right][0]] + nums2[heap[right][1]]
            console.log("i", i, "right", right, heap.length, heap)

            if(leftSum && leftSum < smallestSum) smallest = left
            if(rightSum && rightSum < smallestSum) smallest = right

            if(smallest == i) break;
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]]
            i = smallest;
        }

        return heap;
    }

    const extractMinAndHeapify = () => {
        let min = heap[0];
        console.log("LN.54", heap);
        if(heap.length == 1) heap.pop();
        else {
            heap[0] = heap.pop();
            console.log("LN.58", heap);
            heapifyDown(heap, 0, heap.length);
        }
        console.log("LN.61", heap);
        return min
    }

    const insertIntoHeap = (value) => {
        heap.push(value);
        heapifyUp(heap, heap.length - 1);
        return heap;
    }
    
    while(result.length < k) {
        console.log("Before Extracting", heap)
        let [i, j] = extractMinAndHeapify();
        console.log([i, j])
        result.push([nums1[i], nums2[j]])
        visitedPairs.add([i, j]);

        if(!visitedPairs.has([i+1, j]) && nums1[i+1] && nums2[j]) insertIntoHeap([i+1, j])
        if(!visitedPairs.has([i, j+1]) && nums1[i] && nums2[j+1]) insertIntoHeap([i, j+1])

    }
    
    console.log("result", result)
    return result;
};

// kSmallestPairs([1, 1, 2], [1, 2, 3], 2);
// kSmallestPairs([1,7,11], [2,4,6], 3);
kSmallestPairs([0,0,0,0,0,2,2,2,2], [-3,22,35,56,76], 22);