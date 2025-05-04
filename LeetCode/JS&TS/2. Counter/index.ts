function createCounterTS(n: number): () => number {
    return function () {
        return n++;
    }
}