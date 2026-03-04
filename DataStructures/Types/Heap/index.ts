import { MaxHeapType } from "./heap.interface";

export class MaxHeap implements MaxHeapType {
    private heap: number[] = [];

    constructor(initialArray: number[] = []) {
        this.heap = [...initialArray];
        this.buildHeap();
    }

    private maxHeapifyUp(i: number): void {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] >= this.heap[i]) break;

            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    private maxHeapifyDown(i: number, n: number): void {
        while (true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < n && this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right < n && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }

    public buildHeap(): void {
        const n = this.heap.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.maxHeapifyDown(i, n);
        }
    }

    public insert(val: number): void {
        this.heap.push(val);
        this.maxHeapifyUp(this.heap.length - 1);
    }

    public extractMax(): number | null {
        if (this.heap.length === 0) return null;

        const max = this.heap[0];
        this.heap[0] = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.maxHeapifyDown(0, this.heap.length);
        }

        return max;
    }

    public peek(): number | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    public size(): number {
        return this.heap.length;
    }

    public toArray(): number[] {
        return [...this.heap];
    }

    public clear(): void {
        this.heap = [];
    }
}