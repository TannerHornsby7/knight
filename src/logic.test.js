// test the logic of both the neighbors function and the bfs function
import { neighbors, bfs } from './logic.js';
// test the neighbors function
// test('neighbors', () => {
//     // test a location in the middle of the board
    expect(neighbors('3 3')).toEqual(['5 4', '5 2', '1 4', '1 2', '4 5', '4 1', '2 5', '2 1']);
//     // test a location in the corner of the board
    expect(neighbors('0 0')).toEqual(['2 1', '1 2',]);
    expect(neighbors('7 7')).toEqual(['5 6', '6 5']);
// });

// test the bfs function
test('bfs', () => {
    // test a location in the middle of the board
    expect(bfs('3 3', '4 5')).toEqual(['3 3', '4 5']);
    // test a location in the corner of the board
    // expect(bfs('0 0', '7 7')).toEqual(['0 0', "2 1", "4 2", "6 3", "7 5", "6 7",'7 7']);
});