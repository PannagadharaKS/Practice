<p align='center' >NUMBER OF STUDENTS UNABLE TO EAT LUNCH</p>

## VISUALIZATION

1. INPUTS: 
    STUDENTS = [1, 1, 0, 0]
    SANDWICHES = [0, 1, 0, 1]

2. INIT COUNTERS = [0, 0]

3. COUNTERS[0] = NUMBER OF 0 IN STUDENTS[] = 2
   COUNTERS[1] = NUMBER OF 1 IN STUDENTS[] = 2
   COUNTERS = [2, 2]

4. IN SANDWICHES STREAM,
    [0, 1, 0, 1]
    COUNTERS[0] > 0 ---> 2 > 0
        COUNTERS[0]-- ---> 1
    
    COUNTERS[1] > 0 ---> 2 > 0
        COUNTERS[1]-- ---> 1
        
    COUNTERS[0] > 0 ---> 1 > 0
        COUNTERS[0]-- ---> 0
    
    COUNTERS[1] > 0 ---> 1 > 0
        COUNTERS[1]-- ---> 0
5. OUTPUT = COUNTERS[0] + COUNTERS[1] = 0 + 0 = 0
