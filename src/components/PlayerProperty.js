import React from 'react';

const PlayerProperty = ({propertyData}) => {
  return(
    <div className="playerProperty">
    <div id="smallColors" className={propertyData.color}/>
    <p>{propertyData.name}</p>
    <button>Buy Houses</button>
    <button>Sell</button>
    </div>
  )
}



export default PlayerProperty;
