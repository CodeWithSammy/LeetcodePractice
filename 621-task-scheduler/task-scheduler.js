/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// function leastInterval(tasks, n) {
//     // Count the occurrences of each task
//     const count = new Map();
//     for (const task of tasks) {
//         count.set(task, (count.get(task) || 0) + 1);
//     }

//     // Create a max heap using negative values of task counts
//     const maxHeap = Array.from(count.values(), cnt => -cnt);
//     maxHeap.sort((a, b) => b - a);

//     // Initialize time and a queue for idle times
//     let time = 0;
//     const queue = [];

//     // Loop until the maxHeap or queue is empty
//     while (maxHeap.length || queue.length) {
//         time++;

//         // If maxHeap is empty, set time to the first idle time in the queue
//         if (!maxHeap.length) {
//             time = queue[0][1];
//         } else {
//             // Pop the task count from the maxHeap
//             let cnt = 1 + maxHeap.pop();
//             if (cnt) {
//                 // Push the remaining count and its idle time to the queue
//                 queue.push([cnt, time + n]);
//             }
//         }

//         // If there are tasks in the queue whose idle time has come, push them back to maxHeap
//         while (queue.length && queue[0][1] === time) {
//             maxHeap.push(queue.shift()[0]);
//             // Re-heapify the maxHeap
//             maxHeap.sort((a, b) => b - a);
//         }
//     }

//     return time;
// }

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
