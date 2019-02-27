import React from 'react';

const PlayerProperty = ({currentPlayer, player, propertyData, buyHouses, sellProperty, mortgageProperty, unmortgageProperty}) => {

  if ((currentPlayer === parseInt(propertyData.owner)) && (player.status === "start")){
    if ((propertyData.rent_status >= 1) && (propertyData.rent_status < 5) && (propertyData.mortgaged===false)){
      var buyHousesButton = <button id="buy-houses" onClick={() => buyHouses(propertyData.position)}>Buy Houses</button>
    }
    else if ((propertyData.rent_status >= 1) && (propertyData.rent_status === 5)){
      var buyHousesButton = <button id="buy-houses" onClick={() => buyHouses(propertyData.position)}>Buy Hotel</button>
    }
  }

  if ((propertyData.mortgaged === false) && (propertyData.rent_status < 2)){
    var mortgagePropertyButton = <button onClick={() => mortgageProperty(propertyData.position)}>M</button>
  }

  if (propertyData.mortgaged === true){
    var unmortgagePropertyButton = <button onClick={() => unmortgageProperty(propertyData.position)}>UM</button>
  }


  return(
    <div className="playerProperty">
    <div id="smallColors" className={propertyData.color}/>
    <p>{propertyData.name}</p>
    {buyHousesButton}
    <button id="sell-button" value={propertyData.position} onClick={() => sellProperty(propertyData.position)}>Sell</button>
    {mortgagePropertyButton}
    {unmortgagePropertyButton}
    </div>
  )
}



export default PlayerProperty;
