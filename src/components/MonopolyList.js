import React, {Component} from 'react';
import Property from './Property';

const MonopolyList = ({data}) => {
  var propertyNodes = data.map((property, index) => {
    return(
      <Property key={index} allData={property}/>
    )
  })
  console.log(data[0].row);
  return(
    <ul id={data[0].name[1]}>
      {propertyNodes}
    </ul>
  )
}

export default MonopolyList;
