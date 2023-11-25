import React from 'react';
import TicTacToe from './TicTacToe.js';
import Calculator from './Calculator.js';

export default function MainApp() {
  return (
    <div>
      <h1>Tic Tac Toe Game</h1>
      <TicTacToe />
      <br></br>
      <h1>Calculator App</h1>
      <Calculator />
    </div>
  );
}
