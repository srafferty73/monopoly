import React from 'react';

const PlayerProperty = ({propertyData, sellProperty}) => {

  return(
    <div className="playerProperty">
    <div id="smallColors" className={propertyData.color}/>
    <p>{propertyData.name}</p>
    <button>Buy Houses</button>
    <button id="sell-button" value={propertyData.position} onClick={() => sellProperty(propertyData.position)}>Sell</button>
    </div>
  )
}



export default PlayerProperty;
