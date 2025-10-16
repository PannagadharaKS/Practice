<h1 align="center" >DATA STRUCTURES</h1>

## Types

* Primitive
    * Int
        - 6
    * Float
        - 3.6
    * Character
        - P
    * String
        - PAN
    * Boolean
        - true
    * Double
        - 3.6666666666
    * Byte
        - 8
    * Long
        - 333333333333
    * Short
        - 333
    * Pointer
        - v -> *&
* Non Primitive
    * Linear
        * Static
            * Array
                - [3, 6, 9]
            * Linked List
                * Singly
                    - [3|next] -> [6|null]
                * Double
                    - [null|3|next] <-> [prev|6|null]
                * Circular
                    - -> [3|next] -> [6|next] ->
                      |________________________|   
                * Circular Double
                    - <-> [prev|3|next] <-> [prev|6|next] <->
                      |_____________________________________|
        * Dynamic
            * Array
                - [3]
                - [3, 6]
                - [3, 6, "SOMETHING"]
            * Stack
                - [ ]
                  [6]   
                  [3]
            * Queue
                - -> [9|6|3] ->
            * Hash Table
                - [null, null, null, null]
                - hashFunction("PAN") = 3
                - [null, null, null, "PAN"]
                - Collision
                    - hashFunction("Thre") = 3
                    - [null, null, null, ["PAN", "Thre"]]
                - Open Addressing
    * Non Linear
        * Tree
            * Binary Tree
            * Binary Search Tree
            * AVL Tree
            * B-Tree
            * Red-Black Tree
            * N-ary Tree
            * Trie
        * Graph
            * Directed
            * Undirected
            * Weighted
            * Unweighted
        * Heap

## Algorithmss

