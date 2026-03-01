import { NodeType, LinkedList } from "./linkedList.interfaces";

class Node implements NodeType {
    val: number;
    next: NodeType | null;

    constructor(val: number, next: NodeType | null) {
        this.val = val == undefined ? 0 : val;
        this.next = next == undefined ? null : next;
    }
}

class LinkedListOperations implements LinkedList {
    head: NodeType | null;

    constructor() {
        this.head = null;
    }

    append(value: number) {
        try {
            const node = new Node(value, null);
            if (!this.head) {
                this.head = node;
                return;
            }

            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
            return true;
        } catch (e: any) {
            console.log("Fatal - append", e);
            return false;
        }
    }

    prepend(value: number) {
        try {
            let current = new Node(value, null);
            if (!this.head) {
                this.head = current;
                return true;
            }

            current.next = this.head;
            this.head = current;

            return true;
        } catch (e: any) {
            console.log("Fatal - prepend", e);
            return false;
        }
    }

    find(value: number) {
        try {
            let current = this.head;
            while(current?.next) {
                if(current.val == value) return current

                current = current.next
            }

            return null;
        } catch (e: any) {
            console.log("Fatal - find", e);
            return null;
        }
    }

    update(oldValue: number, newValue: number) {
        try {
            let node = this.find(oldValue);
            if(node) {
                node.val = newValue;
                return true;
            }

            return null;
        } catch (e: any) {
            console.log("Fatal - update", e);
            return null;
        }
    }

    delete(value: number) {
        try {
            let current = this.head;
            if(current) {
                while(current.next) {
                    if(current.next.val == value) {
                        current.next = current.next.next;
                        return true;
                    }
                    current = current?.next;
                }
            }

            return false;
        } catch (e: any) {
            console.log("Fatal - delete", e);
            return null;
        }
    }

    toArray() {
        try {
            let result = [];
            let current = this.head;
            while(current?.next) {
                result.push(current.val);
                current = current.next;
            }

            return result;
        } catch(e: any) {
            console.log("Fatal - toArray", e);
            return null;
        }
    }

    size() {
        try {
            let count = 0;
            let current = this.head;
            while(current?.next) {
                count++
                current = current.next;
            }

            return count;
        } catch(e: any) {
            console.log("Fatal - size", e);
            return null;
        }
    }
}