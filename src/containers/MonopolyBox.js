import React, {Component} from 'react';
import data from '../data.js';
import MonopolyList from '../components/MonopolyList';

class MonopolyBox extends Component {
  constructor(props){
    super(props);
    this.state = data
  }

  render(){

    const row1 = this.state.properties.filter((property) => {
      return property.row === 1
    });
    console.log(row1);

    const row2 = this.state.properties.filter((property) => {
      return property.row === 2
    });
    console.log(row2);

    const row3 = this.state.properties.filter((property) => {
      return property.row === 3
    });
    console.log(row3);

    const row4 = this.state.properties.filter((property) => {
      return property.row === 4
    });
    console.log(row4);

    return(
      <div className="monopoly-box">
      <p>Hi</p>
      <MonopolyList data={row1}/>
      <MonopolyList data={row2}/>
      <MonopolyList data={row3}/>
      <MonopolyList data={row4}/>
      </div>
    )
  }
}

export default MonopolyBox;
