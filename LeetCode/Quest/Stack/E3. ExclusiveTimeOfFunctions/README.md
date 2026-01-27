<p align='center' >EXCLUSIVE TIME OF FUNCTIONS</p>

## VISUALIZATION (OPTIMIZED)

1. logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"] <!-- INPUT -->
   n = 2

2. INIT STACK[] <!-- HOLDS LATEST RUNNING FUNCTION ID -->
   INIT prev = 0 <!-- HOLDS PREVIOUS UNIT -->
   INIT freq = [0, 0] <!-- HOLDS FREQUENCY ARRAY FOR UNITS -->

   START                                     END
3. []  -> [0]                                                                       <!-- 0:START:0 -->
   prev = 0

4. freq[TOP_ITEM] += CURRENT - PREV                                                 <!-- 1:START:2 -->
   freq[0] += 2 - 0
   [0] -> [0, 1]
   prev = 2

5.                                           freq[TOP_ITEM] += CURRENT - PREV + 1   <!-- 1:END:5 -->
                                             freq[1] += 5 - 2 + 1
                                             [0, 1].pop() -> [0]
                                             prev = CURRENT + 1
                                             prev = 5 + 1

6.                                           freq[TOP_ITEM] += CURRENT - PREV + 1   <!-- 0:END:6 -->
                                             freq[0] += 6 - 6 + 1
                                             [0].pop() -> []
                                             prev = CURRENT + 1
                                             prev = 6 + 1

7. freq = [3, 4]

## ALGORITHM

0. START
1. INIT STACK[], PREV, FREQ[]
2. LOOP THROUGH LOGS ARRAY
3. FOR EACH LOG, IF EVENT IS START,
    3.1. CHECK IF STACK HAS SOME FUNCTION ID, IF YES, THEN
        3.2. UPDATE FREQ[TOP] += CURRENT_UNIT - PREVIOUS_UNIT
    3.2. PUSH THE FUNCTION ID TO THE STACK
    3.3. UPDATE PREV = CURRENT_UNIT
4. FOR EACH LOG, IF EVENT IS END,
    4.1. UPDATE FREQ[TOP] += CURRENT_UNIT - PREVIOUS_UNIT + 1
    4.2. POP FROM THE STACK
    4.3. UPDATE PREV = CURRENT_UNIT + 1
5. RETURN FREQ
6. END

## REMEMBERING POINTS

1. AGAIN FREQUENCY ARRAY IS CRUCIAL IN MANAGING THE UNITS
2. USE STACK SUITABLE ONLY FOR TOP & POP OPERATIONS
3. TO GET RECENTLY USED ITEM, STACK WOULD BE THE BEST DATA STRUCTURE