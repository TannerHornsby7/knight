// given an integer indicating whether the square is white or black, render the
// square with the appropriate background color. 0 is white, 1 is black. Given
// a second integer indicating whether the square is currently selected, the start
// or the stop square, render the square with the appropriate border color. 0 is
// no border, 1 is green, 2 is red, 3 is blue, 4 is knight.

import React from "react";
import "./square.scss";
import knight_img from "https://w1.pngwing.com/pngs/717/864/png-transparent-knight-chess-chess-piece-queen-pawn-bishop-and-knight-checkmate-white-and-black-in-chess-rook.png";

export default function Square(props) {
  // get the props
  const { color, border, knight } = props;
  // set the background color
  const backgroundColor = color === 0 ? "white" : "black";
  // set the border color
  const borderColor =
    border === 0
      ? "none"
      : border === 1
      ? "green"
      : border === 2
      ? "red"
      : "blue";
  // return the square
  return (
    <div
      className="square"
      style={{ backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: "3px" }}
      // put the knight in the square if the knight prop is non empty
      // otherwise put nothing in the square
    >
      {knight ? (
        <img alt="knight" src={knight_img} className="knight"></img>
      ) : null}
    </div>
  );
}
