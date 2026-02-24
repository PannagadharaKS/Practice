/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
let eatenApples = function (apples, days) {
    let heap = [];
    let output = 0;

    const heapifyUp = (heap, i) => {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (heap[parent][1] < heap[i][1]) break;

            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }

        return heap;
    };

    const heapifyDown = (heap, i, n) => {
        while (true) {
            let smallest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallestRotDay = heap[smallest][1];
            let leftRotDay = heap[left] ? heap[left][1] : 0;
            let rightRotDay = heap[right] ? heap[right][1] : 0;

            if (left < n && leftRotDay < smallestRotDay) {
                smallestRotDay = leftRotDay;
                smallest = left;
            }

            if (right < n && rightRotDay < smallestRotDay) {
                smallestRotDay = rightRotDay;
                smallest = right;
            }

            if (smallest == i) break;
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
        }

        return heap;
    };

    const extractMinAndHeapify = () => {
        let min = heap[0];
        if (heap.length > 1) {
            heap[0] = heap.pop();
            heapifyDown(heap, 0, heap.length);
        } else {
            heap.pop();
        }

        return min;
    };

    const insertIntoHeap = (value) => {
        heap.push(value);
        if (heap.length == 1) return;
        heapifyUp(heap, heap.length - 1);
    };

    let currentDay = 0;
    while (currentDay < apples.length || heap.length) {
        if (apples[currentDay]) {
            insertIntoHeap([apples[currentDay], currentDay + days[currentDay]]);
        }

        while (heap.length > 0 && heap[0][1] == currentDay) {
            extractMinAndHeapify();
        }

        if (heap.length) {
            let [apple, day] = extractMinAndHeapify();
            apple--;
            output++;
            if (apple) {
                insertIntoHeap([apple, day]);
            }
        }

        currentDay++;
    }

    return output;
};
