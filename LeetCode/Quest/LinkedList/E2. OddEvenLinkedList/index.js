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
let oddEvenList = function (head) {
    if (head) {
        let currentOdd = head;
        let currentEven = head?.next;
        let currentEvenHead = head?.next;

        while (currentOdd != null && currentOdd.next != null && currentEven != null && currentEven.next != null) {
            currentOdd.next = currentOdd.next.next
            currentOdd = currentOdd.next;

            currentEven.next = currentEven.next.next
            currentEven = currentEven.next
        }

        currentOdd.next = currentEvenHead;

    }

    return head

};