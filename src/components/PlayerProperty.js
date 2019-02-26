import React from 'react';

const PlayerProperty = ({currentPlayer, player, propertyData, buyHouses, sellProperty}) => {

  if ((currentPlayer === parseInt(propertyData.owner)) && (player.status === "start")){
    if ((propertyData.rent_status >= 1) && (propertyData.rent_status < 5)){
      var buyHousesButton = <button onClick={() => buyHouses(propertyData.position)}>Buy Houses</button>
    }
    else if ((propertyData.rent_status >= 1) && (propertyData.rent_status === 5)){
      var buyHousesButton = <button onClick={() => buyHouses(propertyData.position)}>Buy Hotel</button>
    }
  }


  return(
    <div className="playerProperty">
    <div id="smallColors" className={propertyData.color}/>
    <p>{propertyData.name}</p>
    {buyHousesButton}
    <button id="sell-button" value={propertyData.position} onClick={() => sellProperty(propertyData.position)}>Sell</button>
    </div>
  )
}



export default PlayerProperty;
