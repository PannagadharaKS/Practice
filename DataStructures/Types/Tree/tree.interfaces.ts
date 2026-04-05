export interface ITreeNode<T> {
    val: T;
    left: ITreeNode<T> | null;
    right: ITreeNode<T> | null;
}

export interface IBinaryTree<T> {
    readonly root: ITreeNode<T> | null; // ROOT NODE

    // --- CREATE ---
    insert(val: T): this;

    // --- READ ---
    find(val: T): ITreeNode<T> | null;
    contains(val: T): boolean;
    inOrderTraversal(): T[];
    preOrderTraversal(): T[];
    postOrderTraversal(): T[];

    // --- UPDATE ---
    update(oldVal: T, newVal: T): boolean;
    updateValue(oldVal: T, newVal: T): boolean;

    // --- DELETE ---
    delete(val: T): this;

    // --- UTILITIES ---
    getHeight(): number;
    getSize(): number;
}