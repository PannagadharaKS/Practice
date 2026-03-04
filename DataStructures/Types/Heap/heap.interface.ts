// --------------------- MAX HEAP ---------------------
export interface MaxHeapType {
    buildHeap(): void;
    insert(val: number): void;
    extractMax(): number | null;
    peek(): number | null;
    size(): number;
    toArray(): number[];
    clear(): void;
}

// --------------------- MIN HEAP ---------------------
