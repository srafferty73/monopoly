import React from 'react';

const DiceRoll = ({playerMove, endTurn}) => {
  return(
    <div className='dice'>
      <button id="dice-roll" onClick={playerMove}>Roll Dice</button>
      <button id="end-turn" className="disabled-button" onClick={endTurn}>End Turn</button>
    </div>
  )
}

export default DiceRoll;
