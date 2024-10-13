# knights-travails

- Build a function 'knightMove' hat shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

- Data Structure:
    * Use an adjacency list-style approach where each square on the board is treated as a node.
    * Each node has edges to all the valid positions the knight can move to from that square.

- Implement Breadth-First-Seatch (BFS) Algorithm: 
    1. We use BFS starting from the start square. The queue stores paths, and each time we explore a new move, we add the updated path to the queue.
    2. BFS guarantees that the first time we reach the end square, we do so using the shortest number of moves because BFS explores all paths in increasing order of length.

- Edge cases:
    * If the start and end positions are the same, BFS will immediately return the start square with 0 moves.

- Output: Once the BFS finds the shortest path, we print it along with the number of moves.