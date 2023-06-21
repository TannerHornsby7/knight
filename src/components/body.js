// create a body component that takes board as a prop

import React from 'react';
import Board from './board';
import './body.scss';

export default function Body(props) {
    return (
        <div className="body">
            <Board start={props.n[0]} stop={props.n[1]} current={props.n[2]} />
        </div>
    );};