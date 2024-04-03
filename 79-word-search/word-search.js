/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // Define the number of rows and columns in the board
    const ROWS = board.length;
    const COLS = board[0].length;
    
    // Create a set to keep track of visited cells
    const path = new Set();
    
    // Define a DFS function to search for the word
    const dfs = (r, c, i) => {
        // Base case: if we have reached the end of the word
        if (i === word.length) {
            return true;
        }
        
        // Check if the current cell is out of bounds or already visited
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || word[i] !== board[r][c] || path.has(`${r},${c}`)) {
            return false;
        }
        
        // Mark the current cell as visited
        path.add(`${r},${c}`);
        
        // Recursively explore adjacent cells
        const res = dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1);
        
        // Unmark the current cell before backtracking
        path.delete(`${r},${c}`);
        
        return res;
    };
    
    // Count the frequency of characters in the board
    const count = {};
    for (const row of board) {
        for (const cell of row) {
            count[cell] = (count[cell] || 0) + 1;
        }
    }
    
    // Reverse the word if the frequency of the first letter is greater than the last letter's
    if (count[word[0]] > count[word[word.length - 1]]) {
        word = word.split('').reverse().join('');
    }
    
    // Iterate through each cell in the board and start DFS from each cell
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (dfs(r, c, 0)) {
                return true; // If word is found, return true
            }
        }
    }
    
    return false; // If word is not found, return false
};