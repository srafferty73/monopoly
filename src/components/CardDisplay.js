import React from 'react';

const CardDisplay = ({propertyData, playerData, allPlayers, payRent, payTax, payBail, buyProperty, chanceCards, chanceNum, currentPlayer, dice1, dice2, chanceCard, players, chestNum, chestCards, chestCard}) => {

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
      priceBox = <h3 className="card-display-price">Owner: {players[parseInt(propertyData.owner)].name}</h3>
      if ((parseInt(propertyData.owner) !== playerData.id) && (playerData.status === "start") && (propertyData.mortgaged === false)){
        var payRentButton = <button id="pay-rent" className="card-display-pay" onClick={payRent}>Pay Rent</button>
      }
    }
  }

  if (propertyData.name === "GO"){
    var goDescription = <p className="go-description">Collect £200</p>
  }

  if (propertyData.name === "Jail"){
    if (playerData.jail_counter > 0){
      var jailDescription = <div className="jail-description"><p>Roll a Double</p><p>or</p><p>Pay £50 Bail</p></div>
    }
    else {
      jailDescription = <p className="jail-description">Just Visiting</p>
    }
  }

  if (propertyData.name === "Chance"){
    const randomCard = chanceCards[chanceNum-1];
    console.log(randomCard);
    if (playerData.status === "start"){
    var chanceDescription = <p className="chanceDescription">{randomCard.description}</p>
      var chanceButton = <button id="chance-continue" className="card-display-pay" onClick={chanceCard}>Continue</button>
    }
  }

  if (propertyData.name === "Community Chest"){
    const randomCard = chestCards[chestNum-1];
    console.log(randomCard);
    if (playerData.status === "start"){
    var chanceDescription = <p className="chanceDescription">{randomCard.description}</p>
      var chestButton = <button id="chest-continue" className="card-display-pay" onClick={chestCard}>Continue</button>
    }
  }

  if ((propertyData.owner === "Government") && (playerData.status === "start")){
    var payTaxButton = <button id="pay-tax" className="card-display-pay" onClick={payTax}>Pay Tax</button>
  }

  if ((propertyData.position === 10) && (playerData.jail_counter > 0) && (playerData.status ==="begin")){
    var payBailButton = <button id="pay-bail" className="card-display-pay" onClick={payBail}>Pay Bail</button>
  }

  var rentPrices = propertyData.rent.map((item, index) => {
    if (propertyData.rent.length === 1){
      var detail = "Amount"
    }
    else if (propertyData.rent.length === 2){
      if (index === 0){
        detail = "1 Utility";
        const totalDice = dice1 + dice2
        item *= totalDice;
      }
      else {
        detail = "2 Utilities";
        const totalDice = dice1 + dice2
        item *= totalDice;
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
      else if (index === 6){
        detail = "Hotel"
      }
      else {
        detail = `House ${index-1}`
      }
    }

    if (propertyData.rent.length === 4){
      const owner= parseInt(propertyData.owner)

      if (index === allPlayers[owner].station_counter - 1){
        return <div className="green-rent"><p>{detail}</p><p>£{item}</p></div>
      }
      else {
        return <div><p>{detail}</p><p>£{item}</p></div>
      }
    }
    else {
      if (index === propertyData.rent_status){
      return <div className="green-rent"><p>{detail}</p><p>£{item}</p></div>
      }
      else {
        return <div><p>{detail}</p><p>£{item}</p></div>
      }
    }


})


  return(
    <div className="card-display">
      {colorBox}
      {noColorBox}
      <h2>{propertyData.name}</h2>
      {priceBox}
      {goDescription}
      {jailDescription}
      {chanceDescription}
      <div className="rent-list">
        {rentPrices}
      </div>
      {buyBox}
      {payRentButton}
      {payTaxButton}
      {payBailButton}
      {chanceButton}
      {chestButton}
    </div>
  )
}

export default CardDisplay;
