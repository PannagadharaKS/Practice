/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
let nextLargerNodes = function(head) {
    let current = head;
    let greater = head;
    let output = [];

    while(current != null && current.next != null) {
        if(greater == null || greater.next == null) {
            output.push(0)
            current = current.next;
            continue
        }

        console.log("current", current.value)
        console.log("greater", greater.value)
        if(greater.value > current.value) {
            output.push(greater.value)
            current = current.next;
        } else {
            greater = greater.next;
        }
    }

    return output
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const head = new ListNode(2, new ListNode(1, new ListNode(5)));

console.log(nextLargerNodes(head))