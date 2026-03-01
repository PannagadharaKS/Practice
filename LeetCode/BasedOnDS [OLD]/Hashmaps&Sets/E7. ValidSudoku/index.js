/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    let resolveDuplicates = new Set()
    let resolveGrid = {}
    let incrementRow = true
    let i = 0, j = 0
    let output = false

    while (true) {
        console.log("CURRENT INDEX", i, j)
        if (i >= board[0].length - 1 && j >= board.length - 1) {
            console.log("LAST INDEX", i, j)
            output = true
            break
        } else if (i >= board[0].length - 1) {
            console.log("TOGGLE TO INCRMENT COLUMN", i, j)
            incrementRow = false
            i = j
            resolveDuplicates.clear()
        } else if (j >= board.length - 1) {
            console.log("TOGGLE TO INCRMENT ROW", i, j)
            incrementRow = true
            j = i + 1
            resolveDuplicates.clear()
        } else if (i < board[0].length && j < board.length) {
            if (board[j][i] != ".") {
                if (parseInt(board[j][i]) >= 1 && parseInt(board[j][i]) <= 9 && !resolveDuplicates.has(board[j][i])) {
                    resolveDuplicates.add(board[j][i])
                } else {
                    output = false
                    break
                }
            }

            if (!incrementRow) j++
            else i++
        }
    }

    return output
};

console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))