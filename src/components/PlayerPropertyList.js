import React from 'react';
import PlayerProperty from './PlayerProperty';

const PlayerPropertyList = ({player, properties}) => {
  var playerPropertyNodes = properties.map((property, index) => {
    return(
      <PlayerProperty propertyData={property}/>
    )
  })
return(
  <div className="playerProperties">
    <h2>{player.name}</h2>
    <h3>£{player.money}</h3>
    {playerPropertyNodes}
  </div>
)
}

export default PlayerPropertyList;