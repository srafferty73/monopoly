import React from 'react';

const CardDisplay = ({propertyData, playerData, payRent, payTax, payBail, buyProperty, chanceCards}) => {

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

  if (propertyData.name === "Chance"){
    const randomNumber = Math.floor(Math.random() * (13) +1);
    const randomCard = chanceCards[randomNumber-1];
    console.log(randomCard);
    var chanceDescription = <p className="chanceDescription">{randomCard.description}</p>
    var chanceButton = <button id="chance-continue" className="card-display-pay">Continue</button>
  }

  if ((propertyData.owner === "Government") && (playerData.status === "start")){
    var payTaxButton = <button id="pay-tax" className="card-display-pay" onClick={payTax}>Pay Tax</button>
  }

  if ((propertyData.position === 10) && (playerData.jail_counter > 0) && (playerData.status !=="start")){
    var payBailButton = <button id="pay-bail" className="card-display-pay" onClick={payBail}>Pay Bail</button>
  }

  var rentPrices = propertyData.rent.map((item, index) => {
    if (propertyData.rent.length === 1){
      var detail = "Amount"
    }
    else if (propertyData.rent.length === 2){
      if (index === 0){
        detail = "1 Utility";
      }
      else {
        detail = "2 Utilities";
      }
    }
    else if (propertyData.rent.length === 4){
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
      {chanceDescription}
      <div className="rent-list">
        {rentPrices}
      </div>
      {buyBox}
      {payRentButton}
      {payTaxButton}
      {payBailButton}
      {chanceButton}
    </div>
  )
}

export default CardDisplay;
