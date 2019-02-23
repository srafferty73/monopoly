import React from 'react';

const DiceNumbers = ({dice1, dice2}) => {
  if (dice1 === 1){
    var firstDice = <img src="dice_1.png"/>
  }
  else if (dice1 === 2){
    var firstDice = <img src="dice_2.png"/>
  }
  else if (dice1 === 3){
    var firstDice = <img src="dice_3.png"/>
  }
  else if (dice1 === 4){
    var firstDice = <img src="dice_4.png"/>
  }
  else if (dice1 === 5){
    var firstDice = <img src="dice_5.png"/>
  }
  else if (dice1 === 6){
    var firstDice = <img src="dice_6.png"/>
  }

  if (dice2 === 1){
    var secondDice = <img src="dice_1.png"/>
  }
  else if (dice2 === 2){
    var secondDice = <img src="dice_2.png"/>
  }
  else if (dice2 === 3){
    var secondDice = <img src="dice_3.png"/>
  }
  else if (dice2 === 4){
    var secondDice = <img src="dice_4.png"/>
  }
  else if (dice2 === 5){
    var secondDice = <img src="dice_5.png"/>
  }
  else if (dice2 === 6){
    var secondDice = <img src="dice_6.png"/>
  }

  return(
  <div className="dice_numbers">
    <div>{firstDice}</div>
    <div>{secondDice}</div>
  </div>
)
}

export default DiceNumbers;
