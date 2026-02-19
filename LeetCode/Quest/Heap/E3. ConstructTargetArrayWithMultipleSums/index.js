/**
 * @param {number[]} target
 * @return {boolean}
 */
let isPossible = function (target) {
    let sum = 0;

    const heapifyUp = (heap, i) => {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (heap[parent] >= heap[i]) break;

            [heap[i], heap[parent]] = [heap[parent], heap[i]]
            i = parent;
        }

        return heap;
    }

    const heapifyDown = (heap, i, n) => {
        while (true) {
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && heap[left] > heap[largest]) largest = left;
            if (right < n && heap[right] > heap[largest]) largest = right;

            if (largest == i) break;
            [heap[i], heap[largest]] = [heap[largest], heap[i]]
            i = largest;
        }

        return heap
    }

    const extractMaxAndHeapify = () => {
        let max = target[0]
        if (target.length > 1) {
            console.log("target.length > 1", target)
            target[0] = target.pop();
        } else if (target.length == 1) {
            console.log("target.length == 1", target)
            target.pop()
        }
        heapifyDown(target, 0, target.length);
        console.log("After heapifyDown", target)
        return max;
    }

    const insertIntoHeap = (nextMax) => {
        target.push(nextMax);
        heapifyUp(target, target.length - 1)
        console.log("After heapifyUp", target)
    }

    for (let i = 0; i < target.length; i++) {
        sum += target[i];
    }

    for(let i = Math.floor(target.length / 2) - 1; i >= 0; i--) {
        heapifyDown(target, i, target.length);
    }
    console.log("After First heapifyDown", target)

    while (target.length) {
        let max = extractMaxAndHeapify();
        console.log("max", max)
        let restSum = sum - max;
        console.log("restSum", restSum)

        if(max == 1) continue;

        if(restSum == 1) return true;
        if(max <= restSum) return false;

        if(max % restSum >= 1) {
            sum = sum - max + (max % restSum);
            console.log("sum", sum)
            insertIntoHeap(max % restSum);
        }
        else return false;
    }

    return true
};

console.log(isPossible([73,1,25,7,37,1,1]))