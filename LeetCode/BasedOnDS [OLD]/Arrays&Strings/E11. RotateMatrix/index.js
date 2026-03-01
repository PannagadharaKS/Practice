/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    let stepsToMove = matrix[0].length - 1
    let i = 0, j = 0, currentLevel = 0;
    let currentNumToBeReplaced;
    let maxLevels = parseInt(matrix[0].length / 2)

    while (true) {
        if (i < stepsToMove + currentLevel) {
            console.log("CURRENT INDEX", i, j)
            if (i == currentLevel) {
                console.log("REPLACING CORNERS", i, j)
                currentNumToBeReplaced = matrix[j][i + stepsToMove]
                matrix[j][i + stepsToMove] = matrix[j][i]
                console.log("matrix[j][i + stepsToMove]", matrix[j][i + stepsToMove])
                matrix[j][i] = matrix[j + stepsToMove][i]
                console.log("matrix[j][i]", matrix[j][i])
                matrix[j + stepsToMove][i] = matrix[j + stepsToMove][i + stepsToMove]
                console.log("matrix[j + stepsToMove][i]", matrix[j + stepsToMove][i])
                matrix[j + stepsToMove][i + stepsToMove] = currentNumToBeReplaced
                console.log("matrix[j + stepsToMove][i + stepsToMove]", matrix[j + stepsToMove][i + stepsToMove])
            } else {
                let currentSpace = stepsToMove - (i - j);
                let perpendicularSpace = stepsToMove - currentSpace
                currentNumToBeReplaced = matrix[j + perpendicularSpace][i + currentSpace]
                matrix[j + perpendicularSpace][i + currentSpace] = matrix[j][i]
                matrix[j][i] = matrix[j + currentSpace][i - perpendicularSpace]
                let tempj = j, tempi = i;
                j = j + currentSpace;
                i = i - perpendicularSpace;
                matrix[j][i] = matrix[j + perpendicularSpace][i + currentSpace];
                matrix[j + perpendicularSpace][i + currentSpace] = currentNumToBeReplaced;
                j = tempj;
                i = tempi;
            }

            i++
        } else if (currentLevel + 1 <= maxLevels) {
            j++
            currentLevel++
            i = currentLevel
            stepsToMove -= 2
        } else {
            break;
        }

    }

    return matrix
};

// console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))
// console.log(rotate([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
console.log(rotate([[43, 39, 3, 33, 37, 20, 14], [9, 18, 9, -1, 40, 22, 38], [14, 42, 3, 23, 12, 14, 32], [18, 31, 45, 11, 8, -1, 31], [28, 44, 14, 23, 40, 24, 13], [29, 45, 33, 45, 20, 0, 45], [12, 23, 35, 32, 22, 39, 8]]))