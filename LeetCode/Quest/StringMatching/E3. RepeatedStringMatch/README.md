<p align='center' >REPEATED STRING MATCH</p>

## VISUALIZATION

1. INPUT:
    A = "abcd"
    B = "cdabcdab"

2. INIT:
    MAX_REPEATS = B.LENGTH / A.LENGTH = 8 / 4 = 2
    MIN_REPEATS = 2 + 2 = 4
    REPEATED = ""

3. ITERATE FROM 1 TO MAX_REPEATS
    I = 1
    REPEATED += "abcd"
    REPEATED = "abcd"
    "abcd".INCLUDES("cdabcdab") NO

    I = 2
    REPEATED += "abcd"
    REPEATED = "abcdabcd"
    "abcdabcd".INCLUDES("cdabcdab") NO

    I = 3
    REPEATED += "abcd"
    REPEATED = "abcdabcdabcd"
    "abcdabcdabcd".INCLUDES("cdabcdab") YES
    RETURN I = 3

## ALGORITHM

0. START
1. INIT MAX_REPEAT = CEIL OF B.LENGTH / A.LENGTH
2. INIT MIN_REPEAT = MAX_REPEAT + 2
3. INIT REPEATED = ""
4. ITERATE FROM I = 1 TO MAX_REPEATS
5. ADD A TO REPEATED FOR EVERY ITERATION
6. IF REPEATED HAS B , THEN RETURN I
7. IF REPEATED DO NOT CONTAINS B, THEN RETURN -1
8. END