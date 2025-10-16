<p align='center'>LINKED LIST</p>

# Summary
```
    - Dynamic Memory Allocation & Efficient Insertion / Deletion Operations Without requiring Contiguous Memory
    - Each NODE contains data & pointer to the next NODE
```

# CRUD Operations
```
    CREATE
        - Initialize HEAD pointer
        - HEAD = NULL
    READ
        - Linear Accessing of Nodes / Items
    UPDATE
        - Update NODE data by traversing to the required NODE
    DELETE
        - Traverse to the NODE which needs to be deleted
        - Update the Pointers by pointing NEXT to the NODE after the removed NODE
```

# Time Complexity
```
    CREATE
        - O(1)
    READ
        TRAVERSING
            - O(n)
        ACCESSING NODE
            - O(1)
    UPDATE
        TRAVERSING
            - O(n)
        UPDATING NODE
            - O(1)
    DELETE
        TRAVERSING
            - O(n)
        DELETING & POINTING NODE
            - O(1)
            
```

# Real Time Use Cases
```
    - Undo / Redo Functionality
    - Sequential Music Player
    - Browser History Navigation using DLL
    - Train Cars
    ...
```

# Types
```
    - SLL
    - DLL
    - CLL
```