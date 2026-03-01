/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
    let current = head;
    let nextTemp = null
    let outputHead = null

    while(current != null) {
        nextTemp = current.next;
        current.next = outputHead;
        outputHead = current;
        current = nextTemp
    }

    return outputHead
};