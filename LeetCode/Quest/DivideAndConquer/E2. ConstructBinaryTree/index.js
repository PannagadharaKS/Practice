/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null;

    let rootVal = postorder[postorder.length - 1];
    let root = new TreeNode(rootVal);

    let splitIndex = inorder.indexOf(rootVal);

    let leftInorder = inorder.slice(0, splitIndex);
    let leftPostorder = postorder.slice(0, splitIndex);
    let rightInorder = inorder.slice(splitIndex + 1, inorder.length);
    let rightPostorder = postorder.slice(splitIndex, inorder.length - 1);

    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);

    return root;
};