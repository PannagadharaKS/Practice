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
let insertionSortList = function (head) {
    let sorted = new ListNode(head.val, null);
    let prevSortedNode = null;
    let sortedHead = sorted;
    let unsorted = head.next;
    let restOfUnsorted = null;

    while (unsorted != null) {
        if (sorted != null) {
            if (unsorted.val < sorted.val) {
                restOfUnsorted = unsorted.next;
                unsorted.next = sorted;
                if (prevSortedNode != null) {
                    prevSortedNode.next = unsorted;
                } else {
                    sortedHead = unsorted
                }
                unsorted = restOfUnsorted
                sorted = sortedHead;
                prevSortedNode = null;
            } else if (unsorted.val >= sorted.val) {
                prevSortedNode = sorted;
                if (sorted.next == null) {
                    restOfUnsorted = unsorted.next;
                    unsorted.next = null;
                    sorted.next = unsorted
                    unsorted = restOfUnsorted
                    prevSortedNode = null;
                    sorted = sortedHead
                    continue;
                }
                sorted = sorted.next;
            }
        }
    }

    return sortedHead;
};