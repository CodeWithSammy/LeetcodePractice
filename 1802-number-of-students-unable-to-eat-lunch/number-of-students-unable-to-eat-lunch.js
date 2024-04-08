/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    // Initialize the variable 'res' to the length of the 'students' array
    let res = students.length;
    // Initialize an empty Map to store the count of each student's preference
    let count = new Map();
    
    // Loop through the 'students' array to count the frequency of each preference
    for (let i = 0; i < students.length; i++) {
        // Increment the count for the current student's preference in the Map
        // If the preference does not exist in the Map, initialize it to 0 before incrementing
        count.set(students[i], (count.get(students[i]) || 0) + 1);
    }
    
    // Loop through the 'sandwiches' array to check if each student can eat
    for (let i = 0; i < sandwiches.length; i++) {
        // If there are students waiting for the current type of sandwich
        if (count.get(sandwiches[i]) > 0) {
            // Decrement the number of students waiting for the current type of sandwich
            res--;
            // Decrement the count for the current type of sandwich in the Map
            count.set(sandwiches[i], count.get(sandwiches[i]) - 1);
        } else {
            // If there are no more students waiting for the current type of sandwich, return the remaining count
            return res;
        }
    }
    
    // Return the remaining count of students who couldn't eat
    return res;
};
