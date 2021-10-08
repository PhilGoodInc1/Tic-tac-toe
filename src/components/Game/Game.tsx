import React, {useState} from 'react';
import './Game.css';
import {Field} from "../Field/Field";
import {calculateWinner} from "../../calcualateWinner";

const Game: React.FC = () => {
    let [board, setBoard] = useState(Array(9).fill(null));
    let [xIsNext, setXIsNext] = useState(true);
    let winner = calculateWinner(board);

    function clickHandle(index: number) {
        if (winner || board[index] !== null) return;
        let boardCopy = [...board];
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext)
    }


    return <div className={"game"}>
        <button className={"start-button"} onClick={() => {
            setBoard(Array(9).fill(null))
        }}>
            Start new game
        </button>
        <Field click={clickHandle} board={board}/>
        <div>{winner ? `The winner is "${winner}"` : xIsNext ? 'It is "X" turn' : 'It is "O" turn'}</div>
    </div>
};

export default Game;
