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

    while(current != null) {
        if(greater == null) {
            output.push(0)
            current = current.next;
            greater = current;
            continue
        }
        
        if(greater.val > current.val) {
            output.push(greater.val)
            current = current.next;
            greater = current;
        } else {
            greater = greater.next;
        }
    }

    return output
};