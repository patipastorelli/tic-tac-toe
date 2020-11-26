import { stat } from "fs/promises";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { jumpTo, resetHistory, setSquareHistory } from "../redux/board.slice";
import { RootState } from "../redux/root.reducer";
import Board from "./board";
import { calculateWinner } from "./util";

const Game = () => {
  const state = useSelector((state: RootState) => state.board);
  const dispatch = useDispatch();

  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() =>  dispatch(jumpTo(move))}>{desc}</button>
      </li>
    )
  });

  let resetButton;
  if (winner || state.stepNumber === 9) {
    resetButton = 
    (
      <li key='resetGame'>
        <button onClick={() =>  dispatch(resetHistory())}>Reset the Game</button>
      </li>
    );
  }

  let status = '';
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${state.xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i: number) => {
    const history = state.history;
    const current = history[history.length-1];
    const squares = current.squares.slice();
    if (calculateWinner(current.squares) || current.squares[i]) {
      return;
    }

    squares[i] = state.xIsNext ? 'X': 'O';
    dispatch(setSquareHistory(squares));
  };


  return (
    <div className="game">
        <div className="game-board">
        <Board 
          squares={current.squares}
          onClick={(i) => handleClick(i) }
        />
        </div>
        <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
        <ol>{resetButton}</ol>
        </div>
    </div>
    );
  };

  Game.propTypes = {
    //value: PropTypes.string.isRequired,
  };
  
  export default Game;