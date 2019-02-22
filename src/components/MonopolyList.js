import React, {Component} from 'react';
import Property from './Property';

const MonopolyList = ({properties, players}) => {
  var propertyNodes = properties.map((property, index) => {
    return(
      <Property key={index} allData={property} player1={players[0].current_position} player2={players[1].current_position}/>
    )
  })
  console.log(properties[0].row);
  return(
    <ul id={properties[0].name[1]}>
      {propertyNodes}
    </ul>
  )
}

export default MonopolyList;
