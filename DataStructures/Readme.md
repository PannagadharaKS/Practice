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
                * Circular Double
                    - <-> [prev|3|next] <-> [prev|6|next] <->
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
                - L --- ROOT --- R
            * Binary Search Tree
                - L --- < ROOT --- < R
            * AVL Tree
                - SMALL ( L --- < ROOT --- < R )
            * B-Tree
                - [K1 | K2]L --- [K1 | K2 ...]ROOT --- [K1 | K2 ...]R
            * B+Tree
            * Segment Tree
            * Red-Black Tree
                - L[RED] --- < ROOT[BLACK] --- < R[RED]
            * N-ary Tree
            * Trie
        * Graph
            * Directed
            * Undirected
            * Weighted
            * Unweighted
            * Acyclic / DAG
            * Cyclic
            * Bipartite
            * Complete
        * Heap
            * Min
            * Max

## Algorithmic Complexity

* Types
    * Time [+/-]
        * Amount of Computational Time taken.
    * Space [-/+]
        * Amount of Memory needed.
* Process of Calculating
    * Big O Notation
        * Performance in Upper Limit
        * O(f(n))
    * Big θ Notation
        * Performance in Between Upper & Lower Limit
        * θ(g(n))
    * Big Ω Notation
        * Performance in Lower Limit
        * Ω(h(n))
* Common Runtime Complexities
    * Constant
        * O(1)
    * Logarithmic
        * O(logn)
    * Linear
        * O(n)
    * Polynomial
        * O(n^k)
    * Exponential
        * O(2^n)
    * Factorial
        * O(n!)


## Algorithms

* Sort
* Search
