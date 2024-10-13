function knightMove(start, end) {
    // all possible knight moves
    const directions = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

    // Inssure if the move is inside of the board
    function isValidMove(position) {
        const [row, col] = position;
        return row >= 0 && row < 8 && col >= 0 && col < 8;
    }
    
    // Using BFS to find the shortest path
    function path(start, end) {
        const queue = [[start]]; // queue of BFS
        const visited = new Set(); // Keep track of visited Nodes
        visited.add(start.toString());

        while (queue.length) {
            const path = queue.shift();
            const current = path[path.length - 1];
            if (current[0] === end[0] && current[1] === end[1]) {
                return path;
            }
            // Checking all possible moves
            for (let [row, col] of directions) {
                const next = [current[0] + row, current[1] + col];

                // Checking if the next move is valid
                if (isValidMove(next) && !visited.has(next.toString())) {
                    queue.push([...path, next]); // Add the next move to the queue
                    visited.add(next.toString());
                }
            }
        }
    }
    // Get the shortest path using BFS
    const move = path(start, end);
  
    // Output the result
    console.log(`You made it in ${move.length - 1} moves! Here's your path:`);
    move.forEach(square => console.log(square));
    return move;
}

knightMove([0, 0], [7, 7]);