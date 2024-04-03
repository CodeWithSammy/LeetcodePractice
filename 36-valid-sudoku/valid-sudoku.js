/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Initialize sets for columns, rows, and squares
    const cols = new Array(9).fill(null).map(() => new Set());
    const rows = new Array(9).fill(null).map(() => new Set());
    const squares = new Array(9).fill(null).map(() => new Set());
    
    // Iterate through each cell in the board
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            // Skip if cell is empty
            if (board[r][c] === ".") {
                continue;
            }
            
            // Check if the current value already exists in row, column, or square
            if (rows[r].has(board[r][c]) || cols[c].has(board[r][c]) || squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)].has(board[r][c])) {
                return false; // If duplicate value found, return false
            }
            
            // Add the current value to the respective sets
            cols[c].add(board[r][c]);
            rows[r].add(board[r][c]);
            squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)].add(board[r][c]);
        }
    }
    
    return true; // If no duplicates found, return true
};
