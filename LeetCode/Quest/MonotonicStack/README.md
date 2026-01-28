<p align='center' >MONOTONIC STACK</p>

## TYPES

1. INCREASING MS
    - STACK THE CONSISTS OF INCREASING ORDER OF ITEMS FROM BOTTOM TO TOP
2. DECREASING MS
    - STACK THE CONSISTS OF DECREASING ORDER OF ITEMS FROM BOTTOM TO TOP

## VISUALIZATION

1. INCREASING MS
    - [7, 1, 3, 2, 8, 9]
    - [7]                          <!-- PUSH 7 -->
    - [1, 7]                       <!-- POP 7, PUSH 1, PUSH 7 -->
    - [1, 3, 7]                    <!-- POP 7, PUSH 3, PUSH 7 -->
    - [1, 2, 3, 7]                 <!-- POP 7, POP 3, PUSH 2, PUSH 3, PUSH 7 -->
    - [1, 2, 3, 7, 8]              <!-- PUSH 8 -->
    - [1, 2, 3, 7, 8, 9]           <!-- PUSH 9 -->

2. DECREASING MS
    - [7, 1, 3, 2, 8, 9]
    - [7]                          <!-- PUSH 7 -->
    - [7, 1]                       <!-- PUSH 1 -->
    - [7, 3, 1]                    <!-- POP 1, PUSH 3, PUSH 1 -->  
    - [7, 3, 2, 1]                 <!-- POP 1, PUSH 2, PUSH 1 -->
    - [8, 7, 3, 2, 1]              <!-- POP 1, POP 2, POP 3, POP 7, PUSH 8, 7, 3, 2, 1 -->
    - [9, 8, 7, 3, 2, 1]           <!-- POP 1, POP 2, POP 3, POP 7, POP 8, PUSH 9, 8, 7, 3, 2, 1 -->