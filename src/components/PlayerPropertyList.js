import React from 'react';
import PlayerProperty from './PlayerProperty';

const PlayerPropertyList = ({player, properties, buyHouses, sellProperty, currentPlayer}) => {
  var playerPropertyNodes = properties.map((property, index) => {
    return(
      <PlayerProperty propertyData={property} buyHouses={buyHouses} sellProperty={sellProperty}/>
    )
  })

  if (currentPlayer === player.id){
    var currentPlayerIndicator = <div className="player-indicator"><i class="fas fa-star"></i></div>
  }
return(
  <div className="playerProperties">
    {currentPlayerIndicator}
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
