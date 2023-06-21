// create a body component that takes board as a prop

import React from 'react';
import Board from './board';
import './body.scss';
import { neighbors, bfs } from '../logic.js';

// listen for when the enter key is pressed. when it is, fire badoosh


function start() {
    // set the start and stop squares from the input fields
    let start = document.querySelector('.start').id;
    let stop = document.querySelector('.stop').id;
    console.log('start is: ' + start);
    console.log('stop is: ' + stop);
    let current = start;
    let path = bfs(start, stop);
    // mark all the squares in the path, one by one, with 1 second between
    // making them glow a bit brighter when they are first marked
    // then making them glow a bit dimmer when they are unmarked

    for (let i = 0; i < path.length; i++) {
        //wait 1 second
        setTimeout(() => {
            // unmark the previous square
            if (i > 0) {
                document.getElementById(path[i - 1]).style.borderWidth = '5px';
            }
            // mark the current square
            document.getElementById(path[i]).style.borderColor = 'blue';
            document.getElementById(path[i]).style.borderWidth = '9px';
            // set the current square
            current = path[i];
            // if the current square is the stop square, stop
            if (current === stop) {
                return;
            }
        }, 1000 * i);
    }
}

function stop() {
    clearInterval();
}

function reset() {
    // reset the board
    const board = document.querySelectorAll('.square');
    for (let i = 0; i < board.length; i++) {
        board[i].style.borderColor = 'black';
        board[i].style.borderWidth = '3px';
        //clear all text content
        board[i].innerHTML = '';
    }
    // remove classes from current start and stop squares
    // and add them to the default start and stop squares
    document.querySelector('.start').innerHTML = '';
    document.querySelector('.stop').innerHTML = '';
    document.querySelector('.start').classList.remove('start');
    document.querySelector('.stop').classList.remove('stop');
    document.getElementById('0 0').classList.add('start');
    document.getElementById('7 7').classList.add('stop');
    document.getElementById('0 0').innerHTML = 'START';
    document.getElementById('7 7').innerHTML = 'STOP';
    // rerender
}

function badoosh() {
    let st = document.getElementById('start');   
    let sto = document.getElementById('stop'); 
    
    if (!(st && sto && st.value && sto.value)) {
        return <Board start='0 0' stop='7 7'/>// return alert('Invalid square input, please follow format: x y where 0 <= x,y <= 7')
    }else if (!(st.value[1] === ' ' && sto.value[1] === ' ') || !(st.value.length === 3 && sto.value.length === 3)) {
        return <Board start='0 0' stop='7 7'/>// return alert('Invalid square input, please follow format: x y where 0 <= x,y <= 7')
    } else {
        let [st_i, st_j] = st.value.split(' ');
        let [sto_i, sto_j] = sto.value.split(' ');
        st_i = parseInt(st_i);
        st_j = parseInt(st_j);
        sto_i = parseInt(sto_i);
        sto_j = parseInt(sto_j);

        let cond2 = st_i >= 0 && st_i < 8 && st_j >= 0 && st_j < 8;
        let cond3 = sto_i >= 0 && sto_i < 8 && sto_j >= 0 && sto_j < 8;
        let cond4 = st_i !== sto_i || st_j !== sto_j;
        let cond = cond2 && cond3 && cond4;
        if (cond) {
            // update the board with the new start and stop squares
            // update the text
            document.querySelector('.start').innerHTML = '';
            document.querySelector('.stop').innerHTML = '';
            document.querySelector('.start').classList.remove('start');
            document.querySelector('.stop').classList.remove('stop');
            document.getElementById(st.value).classList.add('start');
            document.getElementById(sto.value).classList.add('stop');
            document.getElementById(st.value).innerHTML = 'START';
            document.getElementById(sto.value).innerHTML = 'STOP';
            return <Board start={st.value} stop={sto.value}/>
        } else {
        <Board start='0 0' stop='7 7'/>// : alert('Invalid square input, please follow format: x y where 0 <= x,y <= 7')
    }}
};

export default function Body(props) {
    return (
        <div className="body">
            <div className="buttons">
                <button onClick={reset}>Reset</button>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                {/* make start and stop input fields */}
                <input id="start" type="text" placeholder="0 0" />
                <input id="stop" type="text" placeholder="7 7" />
                <button onClick={badoosh}>Set Points</button>
            </div>
            <Board start='0 0' stop='7 7'/>
        </div>
    );
}