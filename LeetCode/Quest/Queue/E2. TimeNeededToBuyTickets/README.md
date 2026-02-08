<p align='center' >TIME NEEDED TO BUY TICKETS</p>

## VISUALIZATION

1. INPUTS:
    TICKETS = [2, 3, 2]
    K = 2

2. INIT TIME_TAKEN = 0

3. IN TICKETS STREAM,
    2 > 0
        TICKET = 2-- ---> 1
        TIME_TAKEN = 1
        K == 0 ? NO
    3 > 0
        TICKET = 3-- ---> 2
        TIME_TAKEN = 2
        K == 0 ? NO
    2 > 0
        TICKET = 2-- ---> 1
        TIME_TAKEN = 3
        K == 0 ? NO
    
    --- RESET_ITERATION ---

    1 > 0
        TICKET = 1-- ---> 0
        TIME_TAKEN = 4
        K == 0 ? NO
    2 > 0
        TICKET = 2-- ---> 1
        TIME_TAKEN = 5
        K == 0 ? NO
    1 > 0
        TICKET = 1-- ---> 0
        TIME_TAKEN = 6
        K == 0 ? YES / BREAK
    
    --- RESET_ITERATION ---

4. OUTPUT TIME_TAKEN = 6 FOR K = 2