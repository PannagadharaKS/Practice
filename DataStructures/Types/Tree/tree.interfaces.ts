export interface ITreeNode<T> {
    val: T;
    left: ITreeNode<T> | null;
    right: ITreeNode<T> | null;
}

export interface IBinaryTree<T> {
    readonly root: ITreeNode<T> | null;

    insert(val: T): this;

    find(val: T): ITreeNode<T> | null;
    contains(val: T): boolean;
    inOrderTraversal(): T[];
    preOrderTraversal(): T[];
    postOrderTraversal(): T[];

    update(oldVal: T, newVal: T): boolean;
    updateValue(oldVal: T, newVal: T): boolean;

    delete(val: T): this;

    getHeight(): number;
    getSize(): number;
}