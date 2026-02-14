<p align='center' >LAST STONE WEIGHT</p>

## VISUALIZATION

1. STONES = [2, 7, 4, 1, 8, 1] <!-- INPUT -->

2. FOR I = 6/2 - 1 = 2 
   TILL I = 0
    HEAPIFY_DOWN:
        LARGEST = 2
        LEFT = 2 * 2 + 1 = 5
        RIGHT = 2 * 2 + 2 = 6

        5 < 6 & 1 > 4 NO
        6 < 6 & - > 4 NO

        LARGEST == I YES / BREAK
    
    I = 1
    HEAPIFY_DOWN:
        LARGEST = 1
        LEFT = 2 * 1 + 1 = 3
        RIGHT = 2 * 1 + 2 = 4

        3 < 6 & 1 > 7 NO
        4 < 6 & 8 > 7 YES
            LARGEST = RIGHT = 4

        LARGEST != I NO BREAK

        [7, 8] = [8, 7] => [2, 8, 4, 1, 7, 1]
        I = LARGEST = 3

        ----------------

        LARGEST = 3
        LEFT = 2 * 3 + 1 = 7
        RIGHT = 2 * 3 + 2 = 8

        NO
        NO
        LARGEST == I YES / BREAK
    
    I = 0
    HEAPIFY_DOWN:
        LARGEST = 0
        LEFT = 2 * 0 + 1 = 1
        RIGHT = 2 * 0 + 2 = 2

        1 < 6 & 8 > 2 YES
            LARGEST = LEFT = 1
        2 < 6 & 4 > 8 NO

        LARGEST != I NO

        [2, 8] = [8, 2] => [8, 2, 4, 1, 7, 1]
        I = LARGEST = 1

        ----------------

        LARGEST = 1
        LEFT = 2 * 1 + 1 = 3
        RIGHT = 2 * 1 + 2 = 4

        3 < 6 & 1 > 2 YES
            LARGEST = LEFT = 3
        4 < 6 & 7 > 1 NO
            LARGEST = RIGHT = 4

        LARGEST != I NO

        [2, 7] = [7, 2] => [8, 7, 4, 1, 2, 1]
        I = LARGEST = 4

        ----------------

        LARGEST = 4
        LEFT = 2 * 4 + 1 = 9
        RIGHT = 2 * 4 + 2 = 10

        NO
        NO

        LARGEST == I YES / BREAK

3. HEAPIFIED STONES = [8, 7, 4, 1, 2, 1]

            8
          /   \
         7     4
        / \     \
       1   2     1

4. ITERATE TILL ALL STONES ARE DESTROYED
    FIRST_STONE:
        SWAP STONE[0] WITH STONE[5]
        POP FROM STONE
        VALUE = 8
        HEAPIFY_DOWN:
            [7, 4, 2, 1, 1]
    SECOND_STONE:
        SWAP STONE[0] WITH STONE[4]
        POP FROM STONE
        VALUE = 7
        HEAPIFY_DOWN:
            [4, 2, 1, 1]
    
    FIRST_STONE != SECOND_STONE
    8 > 7
        DIFF = 8 - 7 = 1
    PUSH 1 TO STONES
    HEAPIFY_UP:
        PARENT = (4 - 1) / 2 = FLOOR(1.5) = 1
        2 > 1 YES / BREAK
        HEAP = [4, 2, 1, 1, 1]
    
    ----------------

    4 > 2
        PUSH 2 TO STONES
        HEAP = [2, 1, 1, 1]

    ----------------

    2 > 1
        PUSH 1 TO STONES
        HEAP = [1, 1, 1]
    1 == 1
        DESTROY
        [1]       

5. RETURN STONES[0] = 1

## ALGORITHM

0. START
1. INIT FUNCTIONS:
        HEAPIFY_DOWN
        HEAPIFY_UP
        EXTRACT_MAX_AND_HEAPIFY
2. ITERATE FROM FLOOR(STONES.LENGTH / 2) - 1 TILL 0
2.1. HEAPIFY_DOWN(STONES, I, STONES.LENGTH) TO SORT THE ARRAY BASED ON MAX HEAP
3. ITERATE TILL OBJECTIVE IS COMPLETED
3.1. EXTRACT MAX FROM MAX HEAP USING EXTRACT_MAX_AND_HEAPIFY() AND STORE IT AS FIRST_STONE
3.2. EXTRACT MAX FROM UPDATED MAX HEAP USING EXTRACT_MAX_AND_HEAPIFY() AND STORE IT AS SECOND_STONE
3.3. CALCULATE DIFF
3.3.1. IF BOTH STONES ARE EQUAL THEN CONTINUE TO NEXT STONES
3.3.2.1. IF FIRST_STONE IS GREATER THAN SECOND_STONE THEN DIFF = FIRST_STONE - SECOND_STONE
3.3.2.2. ELSE THEN DIFF = SECOND_STONE - FIRST_STONE
3.3.3. IF DIFF, THEN PUSH DIFF TO STONES
3.3.4. HEAPIFY_UP(STONES, STONES.LENGTH - 1)
3.3.5. UNTIL STONES.LENGTH AND STONES.LENGTH != 1
4. RETURN STONES[0] ELSE 0
5. END

## REMEMBERING POINTS

1. HEAPIFY_DOWN
    - SORT ARRAY BASED ON MAX / MIN HEAP
    - CHECK THE PARENT AND THEN MOVE DOWNWARD
2. HEAPIFY_UP
    - INSERT ITEM TO THE HEAP FROM BOTTOM
    - ALSO CALLED AS BUBBLE_UP
    - CHECK THE LEAVES AND THEN MOVE UPWARD
3. EXTRACT_MAX_AND_HEAPIFY
    - EXTRACT REORDERS HEAP, HENCE HEAPIFY AT THE END