// create a board component that takes start, stop,and current as props and
// renders a chessboard with these squares turned green, red, and blue
// respectively

import React from 'react';
import './board.scss';
import Square from './square';

export default function Board(props) {
    const {start, stop} = props;
    // create a chessboard using squares
    const board = [];
    // loop through the rows
    for (let i = 0; i < 8; i++) {
        // create a row
        const row = [];
        // loop through the columns
        for (let j = 0; j < 8; j++) {
            let id = String(i) + ' ' + String(j);
            // determine the color of the square
            const color = (i + j) % 2;
            // determine the border of the square
            let type = 'none'
            let border = 0;
            let text = '';
            if (i === parseInt(start[0]) && j === parseInt(start[2])) {
                border = 1;
                type = 'start'
                text = 'START'
            } else if (i === parseInt(stop[0]) && j === parseInt(stop[2])) {
                border = 2;
                type = 'stop'
                text = 'STOP'

            }
            // } else if (i === parseInt(current[0]) && j === parseInt(current[2])) {
            //     border = 3;
            //     id = 'current'
            // }
            // determine if the knight is in the square
            // const knight = i === current[0] && j === current[1];
            // create the square
            const square = <Square text={text} type={type} key={id} id={id} color={color} border={border} knight={false} />;
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