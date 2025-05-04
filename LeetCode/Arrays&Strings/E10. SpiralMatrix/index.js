/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    let output = [];
    let incrementRow = true;
    let incrementCol = false;
    let decrementRow = false;
    let decrementCol = false;
    let i = 0, j = 0;

    while (true) {
        console.log("MATRIX", matrix[j][i])
        output.push(matrix[j][i])
        matrix[j][i] = "_"

        if (incrementRow && (!matrix[j][i + 1] || matrix[j][i + 1] == "_") && (j + 1 >= 0 && j + 1 < matrix.length && matrix[j + 1][i] != "_")) {
            console.log("INCREMENT COL", j, "TO", j + 1)
            incrementCol = true
            incrementRow = false
            j++
        } else if (incrementRow && matrix[j][i + 1] && matrix[j][i + 1] != "_") {
            console.log("INCREMENT ROW", i, "TO", i + 1)
            i++
        } else if (incrementCol && (!matrix[j + 1] || matrix[j + 1][i] == "_") && (i - 1 >= 0 && i - 1 < matrix[0].length && matrix[j][i - 1] != "_")) {
            console.log("DECREMENT ROW", i, "TO", i - 1)
            incrementCol = false
            decrementRow = true
            i--
        } else if (incrementCol && matrix[j + 1] && matrix[j + 1] != "_") {
            console.log("INCREMENT COL", j, "TO", j + 1)
            j++
        } else if (decrementRow && (!matrix[j][i - 1] || matrix[j][i - 1] == "_") && (j - 1 >= 0 && j - 1 < matrix.length && matrix[j - 1][i] != "_")) {
            console.log("DECREMENT COL", j, "TO", j - 1)
            decrementRow = false
            decrementCol = true
            j--
        } else if (decrementRow && matrix[j][i - 1] && matrix[j][i - 1] != "_") {
            console.log("DECREMENT ROW", i, "TO", i - 1)
            i--
        } else if (decrementCol && (!matrix[j - 1] || matrix[j - 1][i] == "_") && (i + 1 >= 0 && i + 1 < matrix.length && matrix[j][i + 1] != "_")) {
            console.log("INCREMENT ROW", i, "TO", i + 1)
            decrementCol = false
            incrementRow = true
            i++
        } else if (decrementCol && matrix[j - 1] && matrix[j - 1][i] != "_") {
            console.log("DECREMENT COL", j, "TO", j - 1)
            j--
        } else {
            console.log("BREAKING", i, j)
            break
        }
    }

    return output;
};

// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
console.log(spiralOrder([[2, 5], [8, 4], [0, -1]]))