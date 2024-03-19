/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
    // Count the occurrences of each task
    const count = new Map();
    for (const task of tasks) {
        count.set(task, (count.get(task) || 0) + 1);
    }

    // Create a max heap using negative values of task counts
    const maxHeap = Array.from(count.values(), cnt => -cnt);
    maxHeap.sort((a, b) => b - a);

    // Initialize time and a queue for idle times
    let time = 0;
    const queue = [];

    // Loop until the maxHeap or queue is empty
    while (maxHeap.length || queue.length) {
        time++;

        // If maxHeap is empty, set time to the first idle time in the queue
        if (!maxHeap.length) {
            time = queue[0][1];
        } else {
            // Pop the task count from the maxHeap
            let cnt = 1 + maxHeap.pop();
            if (cnt) {
                // Push the remaining count and its idle time to the queue
                queue.push([cnt, time + n]);
            }
        }

        // If there are tasks in the queue whose idle time has come, push them back to maxHeap
        while (queue.length && queue[0][1] === time) {
            maxHeap.push(queue.shift()[0]);
            // Re-heapify the maxHeap
            maxHeap.sort((a, b) => b - a);
        }
    }

    return time;
}
