import React from 'react';

const PlayerProperty = ({currentPlayer, player, propertyData, buyHouses, sellProperty, mortgageProperty, unmortgageProperty}) => {

  if ((currentPlayer === parseInt(propertyData.owner)) && (player.status === "start")){
    if ((propertyData.rent_status >= 1) && (propertyData.rent_status < 5) && (propertyData.mortgaged===false) && ((propertyData.id !== 12) || (propertyData.id !== 28))){
      var buyHousesButton = <button id="buy-houses" onClick={() => buyHouses(propertyData.position)}>Buy Houses</button>
    }
    else if ((propertyData.rent_status >= 1) && (propertyData.rent_status === 5)){
      buyHousesButton = <button id="buy-houses" onClick={() => buyHouses(propertyData.position)}>Buy Hotel</button>
    }
  }

  if ((propertyData.mortgaged === false) && (propertyData.rent_status < 2)){
    var mortgagePropertyButton = <button onClick={() => mortgageProperty(propertyData.position)}><i class="fas fa-check"></i></button>
  }

  if (propertyData.mortgaged === true){
    var unmortgagePropertyButton = <button onClick={() => unmortgageProperty(propertyData.position)}><i class="fas fa-times"></i></button>
  }


  return(
    <div className="playerProperty">
      <div className="playerProperty-firstDiv">
        <div id="smallColors" className={propertyData.color}/>
        <p>{propertyData.name}</p>
      </div>
      <div className="playerProperty-buttonList">
        {buyHousesButton}
        <button id="sell-button" value={propertyData.position} onClick={() => sellProperty(propertyData.position)}>Sell</button>
        {mortgagePropertyButton}
        {unmortgagePropertyButton}
      </div>
    </div>
  )
}



export default PlayerProperty;
