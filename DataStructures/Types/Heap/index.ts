export const maxHeapifyUp = (heap: number[], i: number) => { // BOTTOM -> TOP
    try {
        while(i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if(heap[parent] >= heap[i]) break;

            [heap[i], heap[parent]] = [heap[parent], heap[i]];
            i = parent;
        }

        return heap;
    } catch(e: any) {
        console.log("Fatal - HeapifyUp:", e);
        throw e;
    }
}

export const maxHeapifyDown = (heap: number[], i: number, n: number) => { // TOP -> BOTTOM
    try {
        while(true) {
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if(left < n && heap[left] > heap[largest]) largest = left;
            if(right < n && heap[right] > heap[largest]) largest = right;

            if(largest == i) break;
            [heap[i], heap[largest]] = [heap[largest], heap[i]]
            i = largest;
        }

        return heap;
    } catch(e: any) {
        console.log("Fatal - HeapifyDown:", e);
        throw e;
    }
}

export const convertArrayToMaxHeap = (arr: number[]) => { // HEAPIFY_DOWN ON PARENT / NON-LEAVES
    try {
        let n = arr.length;
        for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            maxHeapifyDown(arr, i, n);
        }
    } catch(e: any) {
        console.log("Fatal - buildHeap:", e);
        throw e;
    }
}

export const insertIntoMaxHeap = (heap: number[], val: number) => { // INSERT INTO HEAP
    try {
        heap.push(val);
        maxHeapifyUp(heap, heap.length - 1);
    } catch(e: any) {
        console.log("Fatal - insert:", e);
        throw e;
    }
}

export const extractMaxFromHeap = (heap: number[]): any => { // EXTRACT MAX FROM HEAP
    try {
        if(heap.length == 0) return null;
        const max = heap[0];
        heap[0] = heap.pop()!;
        maxHeapifyDown(heap, 0, heap.length);
        return max;
    } catch(e: any) {
        console.log("Fatal - insert:", e);
        throw e;
    }
}