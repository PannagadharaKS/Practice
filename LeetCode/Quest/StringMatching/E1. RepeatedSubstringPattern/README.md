<p align='center' >REPEATED SUBSTRING PATTERN</p>

## VISUALIZATION

1. INPUT S = "abab"

2. S + S
   "abab" + "abab"
   "abababab"

3. (S + S).SLICE(1, -1)
   "abababab"
     |    |

4. (S + S).SLICE(1, -1).INCLUDES(S)
   "bababa" HAS abab

5. RETURN TRUE