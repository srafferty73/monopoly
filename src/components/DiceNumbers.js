import React from 'react';

const DiceNumbers = ({dice1, dice2}) => {
  // Generates the correct image for dice one depending on the roll.
  if (dice1 === 1){
    var firstDice = <img src="dice_1.png" alt="First dice rolled one"/>
  }
  else if (dice1 === 2){
    firstDice = <img src="dice_2.png" alt="First dice rolled two"/>
  }
  else if (dice1 === 3){
    firstDice = <img src="dice_3.png" alt="First dice rolled three"/>
  }
  else if (dice1 === 4){
    firstDice = <img src="dice_4.png" alt="First dice rolled four"/>
  }
  else if (dice1 === 5){
    firstDice = <img src="dice_5.png" alt="First dice rolled five"/>
  }
  else if (dice1 === 6){
    firstDice = <img src="dice_6.png" alt="First dice rolled six"/>
  }

  // Generates the correct image for dice two depending on the roll.
  if (dice2 === 1){
    var secondDice = <img src="dice_1.png" alt="Second dice rolled one"/>
  }
  else if (dice2 === 2){
    secondDice = <img src="dice_2.png" alt="Second dice rolled two"/>
  }
  else if (dice2 === 3){
    secondDice = <img src="dice_3.png" alt="Second dice rolled three"/>
  }
  else if (dice2 === 4){
    secondDice = <img src="dice_4.png" alt="Second dice rolled four"/>
  }
  else if (dice2 === 5){
    secondDice = <img src="dice_5.png" alt="Second dice rolled five"/>
  }
  else if (dice2 === 6){
    secondDice = <img src="dice_6.png" alt="Second dice rolled six"/>
  }

  return(
  <div className="dice_numbers">
    <div>{firstDice}</div>
    <div>{secondDice}</div>
  </div>
)
}

export default DiceNumbers;
