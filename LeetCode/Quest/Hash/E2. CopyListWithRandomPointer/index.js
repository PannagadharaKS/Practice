/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
let copyRandomList = function(head) {
    let current = head;
    let newList = null;
    let nodeMap = new Map();

    while(current != null) {
        nodeMap.set(current, new _Node(current.val, null, null))
        current = current.next
    }

    current = head;
    while(current != null) {
        let currentNode = nodeMap.get(current);
        currentNode.next = current.next ? nodeMap.get(current.next) : null;
        currentNode.random = current.random ? nodeMap.get(current.random) : null;

        current = current.next
    }

    return nodeMap.get(head)

};