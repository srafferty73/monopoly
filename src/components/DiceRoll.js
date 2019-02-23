import React from 'react';

const DiceRoll = ({playerMove}) => {
  return(
    <div className='dice'>
      <button id="dice-roll" onClick={playerMove}>Roll Dice</button>
    </div>
  )
}

export default DiceRoll;
