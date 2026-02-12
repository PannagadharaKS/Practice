<p align='center'>HEAP</p>

# Summary
```
    - Complete Binary Tree with Heap Property (Max or Min)
    - Efficient access to Maximum or Minimum element
```

# CRUD Operations
```
    CREATE
        - Initialize [] of Elements
        - HEAPIFY
    READ
        - PEEK / Access Root
        - No efficient search for arbitrary elements
    UPDATE
        - Option 1
            = Insert at the end
            = HEAPIFY Up
        - Option 2
            = From the Root, Remove Root
            = HEAPIFY Down
    DELETE
        - Replace with Last element
        - HEAPIFY Down
```

# Time Complexity
```
    CREATE
        FROM ARRAY
            - O(n)
        FROM n INDIVIDUAL INSERTS
            - O(nlogn)
    READ
        PEEK
            - O(1)
    UPDATE
        OPTION 1 & 2
            - O(logn)
    DELETE
        - O(n)
            
```

# Real Time Use Cases
```
    - Priority Queues (Task scheduling)
    - Dijkstra's / A* Pathfinding algorithms
    - Merge K Sorted Arrays
    - Median finding in streaming data
    - Top K frequent elements
    - Last Stone Weight
    ...
```

# Types
```
    MAX HEAP
        - Parent >= Children
        - Root is maximum
    MIN HEAP  
        - Parent <= Children
        - Root is minimum
```