export interface NodeType {
    val: number;
    next: NodeType | null;
}

export interface LinkedList {
    head: NodeType | null

    append(value: number): {}
    prepend(value: number): {}
    update(oldValue: number, newValue: number): {}
    delete(value: number): {}
    find(): {}
    toArray(): {}
    size(): {}
}