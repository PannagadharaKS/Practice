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

    append(value: number) {
        try {
            const node = new ListNode(value, null);
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
            let current = new ListNode(value, null);
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
            if(current)
        } catch (e: any) {
            console.log("Fatal - delete", e);
            return null;
        }
    }

    toArray() { }
    size() { }
}