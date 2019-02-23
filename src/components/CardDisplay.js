import React from 'react';

const CardDisplay = ({propertyData}) => {

  if (propertyData.color != ""){
    var colorBox = <div id="card-display-color" className={propertyData.color}></div>
  }
  else {
    var noColorBox = <div className="no-color"></div>
  }

  if (propertyData.price != 0){
    if (propertyData.owner === ""){
      var priceBox = <h3 className ="card-display-price">£{propertyData.price}</h3>
    }
    else {
      var priceBox = <h3 className="card-display-price">Owner: Player {propertyData.owner}</h3>
    }
  }
  return(
    <div className="card-display">
      {colorBox}
      {noColorBox}
      <h2>{propertyData.name}</h2>
      {priceBox}
    </div>
  )
}

export default CardDisplay;
