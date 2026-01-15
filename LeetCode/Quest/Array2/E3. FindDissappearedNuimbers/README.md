<p align='center' >FIND ALL THE NUMBERS DISSAPPEARED IN AN ARRAY</p>

## VISUALIZATION

1. [4, 3, 2, 7, 8, 2, 3, 1] <!-- INPUT -->

2. (3)(2)(1)(6)(7)(1)(2)(0) <!-- ITEM - 1 IN A TEMP VARIABLE -->

3. [4, 3, 2, -7, 8, 2, 3, 1] <!-- NEGATE INPUT ARRAY ITEM FOR EACH INDEX IN 2ND STEP / INPUT[3] = -7 -->
   [4, 3, -2, -7, 8, 2, 3, 1] <!-- INPUT[2] = -2 -->
   [4, -3, -2, -7, 8, 2, 3, 1] <!-- INPUT[1] = -3 -->
   [4, -3, -2, -7, 8, 2, -3, 1] <!-- INPUT[6] = -3 -->
   [4, -3, -2, -7, 8, 2, -3, -1] <!-- INPUT[7] = -1 -->
   [4, -3, -2, -7, 8, 2, -3, -1] <!-- INPUT[1] = -3 -->
   [4, -3, -2, -7, 8, 2, -3, -1] <!-- INPUT[2] = -2 -->
   [-4, -3, -2, -7, 8, 2, -3, -1] <!-- INPUT[0] = -4 -->

4. ITEM > 0 <!-- FOR EACH UPDATED ARRAY CHECK IF A NUMBER IS POSITIVE -->
   [4+1, 5+1] => [5, 6] <!-- PUSH TO THE OUTPUT ARRAY AS INDEX + 1 SINCE SUBTRACTED IN 2ND STEP -->
   