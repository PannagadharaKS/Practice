/**
 * @param {string} date
 * @return {string}
 */
let reformatDate = function(date) {
    let monthSet = new Set(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
    let monthIndexes = null;
    [...monthSet].map((m, index) => 
        monthIndexes = {
            ...monthIndexes,
            [m]: index + 1 <= 9 ? "0" + (index + 1) : index + 1
        })
    let output = ""
    let day = date.split(" ")[0];
    let month = date.split(" ")[1];
    let year = date.split(" ")[2];

    day = day.slice(0, day.length - 2);
    day = day.length == 1 ? "0" + day : day
    month = monthIndexes[month]

    return `${year}-${month}-${day}`
};