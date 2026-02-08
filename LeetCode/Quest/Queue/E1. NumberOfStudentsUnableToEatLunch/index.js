/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
let countStudents = function(students, sandwiches) {

    let counters = [0, 0]

    for(let i = 0; i < students.length; i++) {
        if(students[i] == 1) counters[1]++;
        else counters[0]++;
    }

    for(let j = 0; j < sandwiches.length; j++) {
        if(counters[sandwiches[j]] > 0) counters[sandwiches[j]]--;
        else if(counters[sandwiches[j]] == 0) break; 
    }

    return counters[0] + counters[1]
};