import React, {Component} from 'react';

const Property = ({allData, player1, player2}) => {

  if (allData.position === player1){
  var checkPlayer1 = <div className='one'>1</div>
  }

  if (allData.position === player2){
  var checkPlayer2 = <div className='two'>2</div>
  }

  return(
    <div className="property">
      <div className='propertyName'>
      {allData.name}
      </div>
    {checkPlayer1}
    {checkPlayer2}
    </div>
  )

}

export default Property;
