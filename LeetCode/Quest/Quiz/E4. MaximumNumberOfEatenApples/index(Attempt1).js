/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
let eatenApples = function(apples, days) {
    let heap = [];
    let output = 0;
    
    const heapifyUp = (heap, i) => {
       while(i > 0) {
           let parent = Math.floor((i - 1)/ 2);
           if(heap[parent][1] < heap[i][1]) break;

           [heap[parent], heap[i]] = [heap[i], heap[parent]];
           i = parent;
       }

        return heap;
    }

    const heapifyDown = (heap, i, n) => {
        while(true) {
            let smallest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallestRotDay = heap[smallest][1]
            let leftRotDay = heap[left] ? heap[left][1] : 0
            let rightRotDay = heap[right] ? heap[right][1] : 0

            if(left < n && leftRotDay < smallestRotDay) {
                smallestRotDay = leftRotDay
                smallest = left
            }
            
            if(right < n && rightRotDay < smallestRotDay) {
                smallestRotDay = rightRotDay
                smallest = right
            }

            if(smallest == i) break;
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]]
            i = smallest;
        }

        return heap;
    }

    const extractMinAndHeapify = () => {
        let min = heap[0];
        if(heap.length > 1) {
            heap[0] = heap.pop()
            heapifyDown(heap, 0, heap.length)
        } else {
            heap.pop()
        }

        return min;
    }

    const insertIntoHeap = (value) => {
        heap.push(value);
        heapifyUp(heap, heap.length - 1)
    }

    for(let i = 0; i < days.length; i++) {
        if(days[i] == 0) continue
        heap.push([apples[i], days[i]]);
        heapifyUp(heap, heap.length - 1)
    }

    while(true) {
        if(!heap.length) break;
        let [apple, day] = extractMinAndHeapify();
        apple = apple - 1;
        day = day - 1;
        output++;
        if(day) insertIntoHeap([apple, day])
    }

    return output
};