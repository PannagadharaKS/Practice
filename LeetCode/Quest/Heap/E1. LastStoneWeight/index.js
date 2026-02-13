/**
 * @param {number[]} stones
 * @return {number}
 */
let lastStoneWeight = function (stones) {
    const extractMaxAndHeapify = () => {
        let max = stones[0];
        stones[0] = stones[stones.length - 1];
        stones.pop();
        heapifyDown(stones, 0, stones.length);
        return max;
    }

    const heapifyUp = (heap, i) => {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (heap[parent] > heap[i]) break;

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

            [heap[i], heap[largest]] = [heap[largest], heap[i]];
            i = largest;
        }

        return heap;
    }

    for (let i = Math.floor(stones.length / 2) - 1; i >= 0; i--) {
        heapifyDown(stones, i, stones.length);
    }

    while (stones.length && stones.length != 1) {
        let firstStone = extractMaxAndHeapify();
        let secondStone = extractMaxAndHeapify();
        let diff = 0;

        if (firstStone == secondStone) continue;
        if (firstStone > secondStone) diff = firstStone - secondStone;
        else diff = secondStone - firstStone;

        stones.push(diff);
        heapifyUp(stones, stones.length - 1);
    }

    return stones.length ? stones[0] : 0;
};