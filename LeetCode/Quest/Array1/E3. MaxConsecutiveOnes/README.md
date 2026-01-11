<p align='center' >MAX CONSECUTIVE ONES</p>

## APPROACH

1. LOOP THROUGH THE nums ARRAY
2. IF ITEM IS 1, INCREMENT currentMaxCount
3. IF ITEM IS 0,
    3.1 IF maxCount IS LESS THAN currentMaxCount, UPDATE maxCount
    3.2 RESET currentMaxCount
4. UPDATE maxCount AND BREAK AFTER FINISHING THE LAST ITEM