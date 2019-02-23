import React from 'react';

const CardDisplay = ({propertyData, playerData}) => {

  if (propertyData.color !== ""){
    var colorBox = <div id="card-display-color" className={propertyData.color}></div>
  }
  else {
    var noColorBox = <div className="no-color"></div>
  }

  if (propertyData.price !== 0){
    if (propertyData.owner === ""){
      var priceBox = <h3 className ="card-display-price">£{propertyData.price}</h3>
      if (playerData.status === "start"){
        var buyBox = <button className="card-display-buy">Buy</button>
      }
    }
    else {
      priceBox = <h3 className="card-display-price">Owner: Player {propertyData.owner}</h3>
    }
  }
  return(
    <div className="card-display">
      {colorBox}
      {noColorBox}
      <h2>{propertyData.name}</h2>
      {priceBox}
      {buyBox}
    </div>
  )
}

export default CardDisplay;
