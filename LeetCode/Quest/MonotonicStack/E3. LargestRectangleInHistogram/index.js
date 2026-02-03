/**
 * @param {number[]} heights
 * @return {number}
 */
let largestRectangleArea = function (heights) {
    let area = 0;
    let stack = [0];
    let lastItem = 0, currentArea = 0;
    let height, width, left, right;
    let i;

    const calculateArea = () => {
        lastItem = stack.pop();
        height = heights[lastItem];
        left = stack.length ? stack[stack.length - 1] : -1;
        right = i;
        width = right - left - 1;
        currentArea = width * height;
        if (currentArea > area) area = currentArea;
        return currentArea;
    }

    for (i = 1; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            calculateArea();
        }

        stack.push(i);
    }

    while (stack.length) {
        calculateArea();
    }


    return area;
};