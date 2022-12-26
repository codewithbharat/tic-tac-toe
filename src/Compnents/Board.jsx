import React, { useState } from "react";
import { Square } from "./sqaureBox";

let xScore = 0;
let oScore = 0;

const ScoreBoard = () => {
    return (
        <div className="scoreBoard">
            <div className="title">score</div>
            <div className="xScore">X - {xScore / 2}</div>
            <div className="oScore">O - {oScore / 2}</div>
        </div>
    )
}

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const handleReset = () => {
        setState(Array(9).fill(null));
    }
    const checkWinner = () => {
        const copyState = Object.values({ ...state });
        let count = 0;
        for (let value of copyState) {
            if (value == null) {
                count++;
            }
        }
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
                if (state[a] === 'O') {
                    oScore++;
                }
                if (state[a] === 'X') {
                    xScore++;
                }
                return state[a];
            }
        }

        if (count === 0) {
            alert(`GAME OVER`);
            handleReset();
        }

        return false;
    }

    const isWinner = checkWinner();

    const handleClick = (index) => {
        const copyState = { ...state };
        if (copyState[index] == null) {
            copyState[index] = isXTurn ? 'X' : 'O';
            setState(copyState);
            setIsXTurn(!isXTurn);
        }
        else {
            alert(`already checked by '${copyState[index]}'!`);
        }
    }

    return (
        <div className="board-container">
            <ScoreBoard />
            {isWinner ?
                <>
                    <span>Player "{isWinner}" won the battel!</span>
                    <button onClick={handleReset}>Play Again</button>
                </> :
                <>  <h4 className="playerTurn">Player '{isXTurn ? 'X' : "O"}' your Turn</h4>
                    <div className="board-row">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                    <div className="bottom-row">
                        <button onClick={handleReset}>Restart Game</button>
                        <span> &copy;Bharat Ranjan 2022</span>
                    </div>
                </>
            }

        </div>
    )
}

export default Board;