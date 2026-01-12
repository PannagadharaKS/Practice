<p align='center' >SMALLER THAN CURRENT NUMBER</p>

## VISUALIZATION

1. [5, 0, 10, 0, 10, 6] <!-- INPUT -->

2. [0, 0, 0, ..............., 0] <!-- CREATE -->
    0, 1, 2, ..............., 100 <!-- ARRAY INDEX -->

3. [2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, ......., 0] <!-- FREQUENJCUES -->
    0, -, -, -, -, 5, 6, -, -, -, 10, ......, - <!-- FREQUENCY NUMBERS -->

4. [0, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, ...] <!-- CUMULATIVE FREQUENCIES = VALUES LESSER THAN CURRENT -->
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,... <!-- ARRAY INDEX -->

5. [2, 0,  4,  0,   4,  3] <!-- MATCHED 1ST STEP TO FROM 4TH STEP -->
    5, 0, 10,  0,   10, 6 <!-- INPUT -->

## APPROACH

1. INITIALIZE EMPTY ARRAY OF 101 ITEMS
2. FIRST LOOP
    - COUNT THE FREQUENCIES
3. SECOND LOOP
    - CUMULATIVE SUM OF FREQUENCIES
4. THIRD LOOP
    - FETCH BY MATCHING THE CUMULATIVE ARRAY AND PUSH TO THE OUTPUT ARRAY
