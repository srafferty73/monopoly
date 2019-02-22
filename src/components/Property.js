import React, {Component} from 'react';

const Property = ({allData, player1, player2}) => {

  if (allData.position === player1){
  var checkPlayer1 = <p>1</p>
  }

  if (allData.position === player2){
  var checkPlayer2 = <p>2</p>
  }

  return(
    <div className="property">
    {allData.name}
    {checkPlayer1}
    {checkPlayer2}
    </div>
  )

}

export default Property;
