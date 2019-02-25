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
    <div className="player-name-icon">
      <i className={player.icon}/>
      <h2>{player.name}</h2>
        <div className="player-money">
          <img className="pound-sterling" src="pound-sterling.png" alt="pound sterling sign"></img>
          <h3>{player.money}</h3>
        </div>
    </div>
    <div className="playerProperties-list">
      {playerPropertyNodes}
    </div>

  </div>
)
}

export default PlayerPropertyList;
