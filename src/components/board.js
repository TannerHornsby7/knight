// create a board component that takes start, stop,and current as props and
// renders a chessboard with these squares turned green, red, and blue
// respectively

import React from 'react';
import './board.scss';
import Square from './square';

export default function Board(props) {
    const {start, stop, current} = props;
    // create a chessboard using squares
    const board = [];
    // loop through the rows
    for (let i = 0; i < 8; i++) {
        // create a row
        const row = [];
        // loop through the columns
        for (let j = 0; j < 8; j++) {
            // determine the color of the square
            const color = (i + j) % 2;
            // determine the border of the square
            let border = 0;
            if (i === start[0] && j === start[1]) {
                border = 1;
            } else if (i === stop[0] && j === stop[1]) {
                border = 2;
            } else if (i === current[0] && j === current[1]) {
                border = 3;
            }
            // determine if the knight is in the square
            const knight = i === current[0] && j === current[1];
            // create the square
            const square = <Square color={color} border={border} knight={knight} />;
            // add the square to the row
            row.push(square);
        }
        // add the row to the board
        board.push(row);
    }
    // render the board
    return (
        <div className="board">
            {board}
        </div>
    );
};