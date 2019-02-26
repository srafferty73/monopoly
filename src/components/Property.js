import React from 'react';

const Property = ({allData, player1, player2}) => {

  if (allData.rent_status === 2){
    var houses =  <div className="houses">
                    <i className="fas fa-home"></i>
                  </div>
  }
  else if (allData.rent_status === 3){
    var houses =  <div className="houses">
                    <i className="fas fa-home"></i>
                    <i className="fas fa-home"></i>
                  </div>
  }
  else if (allData.rent_status === 4){
    var houses =  <div className="houses">
                    <i className="fas fa-home"></i>
                    <i className="fas fa-home"></i>
                    <i className="fas fa-home"></i>
                  </div>
  }
  else if (allData.rent_status === 5){
    var houses =  <div className="houses">
                    <i className="fas fa-home"></i>
                    <i className="fas fa-home"></i>
                    <i className="fas fa-home"></i>
                    <i className="fas fa-home"></i>
                  </div>
  }
  else if (allData.rent_status === 6){
    var houses =  <div className="hotel">
                    <i className="fas fa-home"></i>
                  </div>
  }


  if (allData.color !== ""){
    var colorBox = <div className={allData.color}>{houses}</div>
  }
  else {
    var noColorBox = <div className="no-color"></div>
  }

  if (allData.position === player1.current_position){
    if (player1.jail_counter > 0){
      var checkPlayer1 = <div className='one in-jail'><i className={player1.icon}></i></div>
    }
    else {
      checkPlayer1 = <div className='one'><i className={player1.icon}></i></div>
    }
  }

  if (allData.position === player2.current_position){
    if (player2.jail_counter > 0){
      var checkPlayer2 = <div className='two in-jail'><i className={player2.icon}></i></div>
    }
    else {
      var checkPlayer2 = <div className='two'><i className={player2.icon}></i></div>
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
