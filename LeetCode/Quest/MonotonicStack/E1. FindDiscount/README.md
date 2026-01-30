<p align='center' >FINAL PRICES WITH A SPECIAL DISCOUNT IN A SHOP</p>

## VISUALIZATION

1. PRICES = [8, 4, 6, 2, 3] <!-- INPUT -->

2. INIT ANS = [...PRICES] = [8, 4, 6, 2, 3] <!-- INIT ANS = COPY OF PRICES -->
   INIT MONO_STACK = [0] <!-- INIT MONO_STACK FOR STORING INDEXES STARTING FROM 0 [IMS] -->

3. LOOP< 1 .. PRICES.LENGTH > <!-- LOOP 1 .. PRICES.LENGTH -->
   I = 1
        WHILE(1 && PRICES[0] >= PRICES[1]) <!-- WHILE <STACK.LENGTH> & PRICES[TOP] >= PRICES[I] -->
            - POP 0 FROM MONO_STACK
            - ANS[0] = PRICES[0] - PRICES[1] = 8 - 4 = 4 <!-- ANS[TOP] = PRICES[TOP] - PRICES[I] -->
        - MONO_STACK = [1] <!-- PUSH MONO_STACK(I) -->
        
4. I = 2
        WHILE(1 && PRICES[1] >= PRICES[2])
            <!-- NOTHING -->
        - MONO_STACK = [1, 2]

5. I = 3
        WHILE(1 && PRICES[2] >= PRICES[3])
            - POP 2 FROM MONO_STACK
            - ANS[2] = PRICES[2] - PRICES[3] = 6 - 2 = 4

            - POP 1 FROM MONO_STACK
            - ANS[1] = PRICES[1] - PRICES[3] = 4 - 2 = 2
        - MONO_STACK = [3]

6. I = 4
        WHILE(1 && PRICES[3] >= PRICES[4])
            <!-- NOTHING -->
        - MONO_STACK = [3, 4]

7. ANS = [4, 2, 4, 2, 3]