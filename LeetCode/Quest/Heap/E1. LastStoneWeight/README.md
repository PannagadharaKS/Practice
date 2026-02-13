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
        


## ALGORITHM

0. START

6. RETURN AREA
7. END

## REMEMBERING POINTS

