class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null) {
        this.val = val == undefined ? 0 : val;
        this.next = next == undefined ? null : next;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    append(value: number) {}
    prepend(value: number) {}
    find(value: number) {}
    update(oldValue: number, newValue: number) {}
    delete(value: number) {}
    toArray() {}
    size() {}
}