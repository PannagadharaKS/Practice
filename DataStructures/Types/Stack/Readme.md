<p align='center'>STACK</p>

# Summary
```
    - LIFO
    - Essential for managing Hierarchical Operations & Temporary Storage
```

# CRUD Operations
```
    CREATE
        - Initialize empty Stack with TOP pointer
    READ
        - Peek at TOP ITEM
    UPDATE
        - NA
        - Not Recommended
            * Using 2nd Stack, Pop the TOP ITEM and insert into the 2nd Stack
            * Update the ITEM and place it back to the 1st Stack
            * Place all the ITEMs from the 2nd Stack to the 1st Stack
    DELETE
        - TOP
            - Pop the TOP ITEM
        - MIDDLE / BOTTOM
            - Not Recommended
                * Using 2nd Stack, Pop the TOP ITEM and insert into the 2nd Stack
                * Delete the ITEM
                * Place all the ITEMs from the 2nd Stack to the 1st Stack
```

# Time Complexity
```
    CREATE
        - O(1)
    READ
        - O(1)
    UPDATE
        - NA
        - Not Recommended
            * 2nd Stack
                - O(k) [k < n]
            * Update ITEM
                - O(1)
            * Placing from 2nd Stack to 1st Stack
                - O(1)
    DELETE
        - TOP
            - O(1)
        - MIDDLE / BOTTOM
            - Not Recommended
                * 2nd Stack
                    - O(k) [k < n]
                * Update ITEM
                    - O(1)
                * Placing from 2nd Stack to 1st Stack
                    - O(1)
```

# Real Time Use Cases
```
    - Function Call Management for invoking Functions
    - Browser Navigation
    - Mathematical Expression Parsing & Evaluation
    - Memory Management
    ...
```