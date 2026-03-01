export interface NodeType {
    val: number;
    next: NodeType | null;
}

export interface LinkedList {
    head: NodeType | null

    append(value: number): any
    prepend(value: number): any
    update(oldValue: number, newValue: number): any
    delete(value: number): any
    find(value: number): any
    toArray(): any
    size(): any
}