/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    // Initialize a Set to keep track of visited cells
    let visit = new Set()

    // Define a depth-first search function to calculate the perimeter of the island
    var dfs = function(i, j) {
        // Base case: If the current cell is out of bounds or is water (0), return 1 indicating a perimeter.
        if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] == 0) {
            return 1;
        }

        // Convert the 2D coordinates (i, j) to a flat coordinate
        let flatCoord = i * grid[0].length + j;

        // Check if the current cell has been visited before. If so, return 0 to avoid counting its perimeter again.
        if (visit.has(flatCoord)) {
            return 0;
        }

        // Add the current flat coordinate to the set of visited cells
        visit.add(flatCoord);

        // Recursively calculate the perimeter by exploring adjacent cells (right, down, left, up) and summing their perimeters.
        let perim = dfs(i, j + 1);
        perim += dfs(i + 1, j);
        perim += dfs(i, j - 1);
        perim += dfs(i - 1, j);

        // Return the total perimeter for the current island.
        return perim;
    };
    
    // Iterate through each cell in the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // If the cell represents land (1), call the dfs function to calculate the perimeter starting from that cell.
            if (grid[i][j]) {
                return dfs(i, j);
            }
        }
    }
};
