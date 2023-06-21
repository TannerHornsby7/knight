// IN: start_loc, stop_loc
// OUT: path

// finds neighboring squares for a knight to go to from a given location
export function neighbors(loc) {
    // get the location
    const [row, col] = [parseInt(loc[0]), parseInt(loc[2])];
    // create an array of possible moves
    const moves = [
        [row + 2, col + 1],
        [row + 2, col - 1],
        [row - 2, col + 1],
        [row - 2, col - 1],
        [row + 1, col + 2],
        [row + 1, col - 2],
        [row - 1, col + 2],
        [row - 1, col - 2]
    ];
    // filter out moves that are off the board
    const valid_moves = moves.filter(move => {
        const [row, col] = move;
        return row >= 0 && row < 8 && col >= 0 && col < 8;
    });
    // transform moves into their string format
    for (let i = 0; i < valid_moves.length; i++) {
        valid_moves[i] = String(valid_moves[i][0]) + ' ' + String(valid_moves[i][1]);
    }
    // return the valid moves
    return valid_moves;
}

// finds the shortest path from start_loc to stop_loc using a bfs
export function bfs(start, stop) {
    let predecessors = {}
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++){
            predecessors[String(i) + ' ' + String(j)] = ' '
        }
    }

    let q = [start]
    let visited = new Set()

    while (q){
        let curr = q.shift();
        if (curr == stop) {
            break
        }
        visited.add(curr)
        let ns = neighbors(curr)
        for (let i = 0; i < ns.length; i++) {
            // if  (visited.has(ns[i])) {
            //     console.log('the value ' + ns[i] + ' has been visited.');
            // } else {
            //     console.log('the value ' + ns[i] + ' has not been visited.');
            // }
            // console.log('the value of q is ' + q)
            // console.log('the visited set is: ' + visited)
            if (!(visited.has(ns[i]))) {
                q.push(ns[i])
                predecessors[ns[i]] = curr
            }
        }
    }

    let path = []
    let curr = stop
    console.log('finding path')
    console.log(predecessors[stop])
    console.log(predecessors[predecessors[stop]])
    console.log(predecessors[predecessors[predecessors[stop]]])
    while (curr != start) {
        path.push(curr)
        console.log(curr)
        let tmp = predecessors[curr]
        curr = tmp
    }

    path.push(start)
    path.reverse()

    return path
}