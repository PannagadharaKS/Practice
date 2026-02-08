<p align='center' >REMOVE DUPLICATE LETTERS</p>

## VISUALIZATION

1. INPUT = 'bcabc'

   INIT IMS = [INPUT[0]]
2. INIT FREQ = [0, 0, 0, ..., 0]
                0  1  2       25 

3. UPDATE FREQ:
   LETTER = b, 
   ASCII = 98, 
   INDEX = 98 - 97 = 1
   BEFORE FREQ = [0, 0, 0, ..., 0]
   AFTER FREQ = [,  0,  , ...,  ]

   LETTER = c, 
   ASCII = 99, 
   INDEX = 99 - 97 = 2
   BEFORE FREQ = [0, 0, 0, ..., 0]
   AFTER FREQ = [,  0, 1, ...,  ]

   LETTER = a, 
   ASCII = 97, 
   INDEX = 97 - 97 = 0
   BEFORE FREQ = [0, 0, 1, ..., 0]
   AFTER FREQ = [2, 0, 1, ...,  ]

   LETTER = b, 
   ASCII = 98, 
   INDEX = 98 - 97 = 1
   BEFORE FREQ = [2, 0, 1, ..., 0]
   AFTER FREQ = [2, 3, 1, ...,  ]

   LETTER = c, 
   ASCII = 99, 
   INDEX = 99 - 97 = 2
   BEFORE FREQ = [2, 3, 1, ..., 0]
   AFTER FREQ = [2, 3, 4, ...,  ]