<p align='center' >BUILD AN ARRAY WITH STACK OPERATIONS</p>

## VISUALIZATION

1. TARGET = [1, 3] N = 3 <!-- INPUT -->

2. [0, 0, 0, ..., 0] <!-- CREATE -->

3. [0, 1, 0, 1, ..., 0] <!-- TARGET FREQUENCIES -->

4. [1, 2, 3, ..., N] <!-- STREAM [1 TO N] -->
   STACK = [1] <--- <!-- PUSH 1 -->
   OUTPUT = ["Push"] <!-- APPEND "Push" -->
   STACK = [1, 2] ---> <!-- POP 2 SINCE NOT PRESENT IN THE TARGET -->
   OUTPUT = ["Pop"] <!-- APPEND "Pop" -->
   STACK = [1, 3] <--- <!-- PUSH 3 -->
   OUTPUT = ["Push"] <!-- APPEND "Push" -->

5. STACK.LENGTH = TARGET.LENGTH <!-- IF STACK LENGTH IS EQUAL TO TARGET LENGTH -->
   OUTPUT = ["Push", "Pop", "Push"] <!-- OUTPUT -->


## APPROACH

## REMEMBERING POINTS
