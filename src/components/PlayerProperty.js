import React from 'react';

const PlayerProperty = ({propertyData, sellProperty}) => {

  if (propertyData.rent_status >= 1) {
    var buyHouses = <button>Buy Houses</button>
  }

  return(
    <div className="playerProperty">
    <div id="smallColors" className={propertyData.color}/>
    <p>{propertyData.name}</p>
    {buyHouses}
    <button id="sell-button" value={propertyData.position} onClick={() => sellProperty(propertyData.position)}>Sell</button>
    </div>
  )
}



export default PlayerProperty;
