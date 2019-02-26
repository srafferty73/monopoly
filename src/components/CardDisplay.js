import React from 'react';

const CardDisplay = ({propertyData, playerData, payRent, payTax, buyProperty}) => {

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
        var buyBox = <button className="card-display-buy" onClick={buyProperty}>Buy</button>
      }
    }
    else {
      priceBox = <h3 className="card-display-price">Owner: Player {propertyData.owner}</h3>
      if ((parseInt(propertyData.owner) !== playerData.id) && (playerData.status === "start")){
        var payRentButton = <button id="pay-rent" className="card-display-pay" onClick={payRent}>Pay Rent</button>
      }
    }
  }

  if (propertyData.owner === "Government"){
    var payTaxButton = <button id="pay-tax" className="card-display-pay" onClick={payTax}>Pay Tax</button>
  }

  var rentPrices = propertyData.rent.map((item, index) => {
    if (propertyData.rent.length === 1){
      var detail = "Amount"
    }
    if (propertyData.rent.length === 4){
      if (index === 0){
        detail = `${index+1} Station`
      }
      else {
        detail = `${index+1} Stations`
      }
    }
    else {
      if (index === 0){
        detail = "Rent"
      }
      else if (index === 1) {
        detail = "Set"
      }
      else {
        detail = `House ${index-1}`
      }
    }
    return <div><p>{detail}</p><p>£{item}</p></div>
  })


  return(
    <div className="card-display">
      {colorBox}
      {noColorBox}
      <h2>{propertyData.name}</h2>
      {priceBox}
      <div className="rent-list">
        {rentPrices}
      </div>
      {buyBox}
      {payRentButton}
      {payTaxButton}
    </div>
  )
}

export default CardDisplay;
