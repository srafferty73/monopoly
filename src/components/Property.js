import React from 'react';

const Property = ({allData, player1, player2}) => {

  // Show the current number of house/hotel images for each property on the board.
  if (allData.rent_status === 2){
    var houses =  <div className="houses">
      <i className="fas fa-home"></i>
    </div>
  }
  else if (allData.rent_status === 3){
    houses =  <div className="houses">
      <i className="fas fa-home"></i>
      <i className="fas fa-home"></i>
    </div>
  }
  else if (allData.rent_status === 4){
    houses =  <div className="houses">
      <i className="fas fa-home"></i>
      <i className="fas fa-home"></i>
      <i className="fas fa-home"></i>
    </div>
  }
  else if (allData.rent_status === 5){
    houses =  <div className="houses">
      <i className="fas fa-home"></i>
      <i className="fas fa-home"></i>
      <i className="fas fa-home"></i>
      <i className="fas fa-home"></i>
    </div>
  }
  else if (allData.rent_status === 6){
    houses =  <div className="hotel">
      <i className="fas fa-home"></i>
    </div>
  }

  // Generate a color box if the property has a colour.
  if (allData.color !== ""){
    var colorBox = <div className={allData.color}>{houses}</div>
  }
  else {
    var noColorBox = <div className="no-color"></div>
  }

  // Put the player tokens into the correct current property for Player 1, and colours red if in Jail.
  if (allData.position === player1.current_position){
    if (player1.jail_counter > 0){
      var checkPlayer1 = <div className='one in-jail'><i className={player1.icon}></i></div>
    }
    else {
      checkPlayer1 = <div className='one'><i className={player1.icon}></i></div>
    }
  }

  // Put the player tokens into the correct current property for Player 2, and colours red if in Jail.
  if (allData.position === player2.current_position){
    if (player2.jail_counter > 0){
      var checkPlayer2 = <div className='two in-jail'><i className={player2.icon}></i></div>
    }
    else {
      checkPlayer2 = <div className='two'><i className={player2.icon}></i></div>
    }
  }

  return(
    <div className="property">
      {colorBox}
      {noColorBox}
      <div className='propertyName'>
        {allData.name}
      </div>
      <div className='player-tokens'>
        {checkPlayer1}
        {checkPlayer2}
      </div>
    </div>
  )

}

export default Property;
