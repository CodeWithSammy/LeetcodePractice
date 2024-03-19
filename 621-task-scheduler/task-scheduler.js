/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

//Approach 1: Sorting
// Sort Tasks by Frequency: First, we count the frequency of each task and sort them in descending order.
// Calculate Idle Time: We calculate the maximum number of idle slots required based on the frequency of the most frequent task.
// Fill Idle Slots: We try to fill these idle slots with other tasks in a way that we don't violate the cooling time constraint.
// Calculate Total Intervals: Finally, we return the total number of intervals required, which is the sum of tasks and idle slots.
// This approach has a time complexity of O(n log n) due to sorting.



function leastInterval(tasks, n) {
    // Step 1: Count the frequency of each task
    const frequency = new Array(26).fill(0);
    for (const task of tasks) {
        frequency[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    // Step 2: Sort the tasks by frequency in descending order
    frequency.sort((a, b) => b - a);

    // Step 3: Calculate the maximum frequency and idle time
    let maxFrequency = frequency[0];
    let idleTime = (maxFrequency - 1) * n;

    // Step 4: Iterate through frequencies to distribute idle time
    for (let i = 1; i < frequency.length && idleTime > 0; i++) {
        idleTime -= Math.min(frequency[i], maxFrequency - 1);
    }

    // Step 5: Return the total number of intervals
    idleTime = Math.max(0, idleTime);
    return tasks.length + idleTime;
}



// Approach 2: Greedy Algorithm
// Calculate Task Frequencies: First, we count the frequency of each task.
// Find Maximum Frequency: We find the maximum frequency among all tasks.
// Calculate Idle Slots: We calculate the maximum number of idle slots required based on the maximum frequency and the cooling time.
// Fill Idle Slots: We try to fill these idle slots with other tasks.
// Calculate Total Intervals: Finally, we return the total number of intervals required, which is the sum of tasks and idle slots.
// This approach also has a time complexity of O(n log n) due to sorting.


// function leastInterval(tasks, n) {
//     const frequency = new Array(26).fill(0);
//     for (const task of tasks) {
//         frequency[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
//     }
    
//     frequency.sort((a, b) => b - a);
    
//     let maxFrequency = frequency[0];
//     let idleSlots = (maxFrequency - 1) * n;
    
//     for (let i = 1; i < frequency.length && idleSlots > 0; i++) {
//         idleSlots -= Math.min(frequency[i], maxFrequency - 1);
//     }
    
//     idleSlots = Math.max(0, idleSlots);
    
//     return tasks.length + idleSlots;
// }
