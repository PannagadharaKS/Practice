import { IBinaryTree, ITreeNode } from "./tree.interfaces";

class TreeNode<T> implements ITreeNode<T> {
    val: T;
    left: ITreeNode<T> |null;
    right: ITreeNode<T> | null;

    constructor(val: T) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T> implements IBinaryTree<T> {
    root: ITreeNode<T> | null;

    constructor() {
        this.root = null;
    }
}