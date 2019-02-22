import React, {Component} from 'react';
import data from '../data.js';
import MonopolyList from '../components/MonopolyList';
import DiceRoll from '../components/DiceRoll';
import DiceNumbers from '../components/DiceNumbers';

class MonopolyBox extends Component {
  constructor(props){
    super(props);
    this.state = data
      this.playerMove = this.playerMove.bind(this);
    }




    diceRoll(){
      const dice1 = Math.floor(Math.random() * (6) +1);
      const dice2 = Math.floor(Math.random() * (6) +1);
      const total = [dice1, dice2]
      return total;
    }

    playerMove(){
      const currentPlayer = this.state.players[this.state.game.current_player];
      const currentPosition = currentPlayer.current_position;
      const diceRoll = this.diceRoll();
      const total = diceRoll[0] + diceRoll[1];

      // const updatedRoll1 = {current_roll1: diceRoll[0]};
      // console.log(updatedRoll1);
      // this.setState({game: updatedRoll1});
      console.log(this.state.game.current_roll1);
      console.log(this.state.game.current_roll2);
      // const updatedRoll2 = {current_roll2: diceRoll[1]};
      // this.setState({game: updatedRoll2});



      let newPosition = currentPosition+total;
      if (newPosition > 39){
        newPosition = newPosition-40
      }
      const updated = currentPlayer.current_position = newPosition;
      this.setState({currentPlayer: newPosition});
      const newPlayer = this.state.game.current_player;
      if (newPlayer === 0) {
        const updatedGame = {current_player: 1, current_roll1: diceRoll[0], current_roll2: diceRoll[1]}
        console.log('updatedGame', updatedGame);
        return this.setState({game: updatedGame})
      }
      else {
        const updatedGame2 = {current_player: 0, current_roll1: diceRoll[0], current_roll2: diceRoll[1]}
        console.log('updateGame2', updatedGame2);
        return this.setState({game: updatedGame2})
      }
    }


  render(){

    const row1 = this.state.properties.filter((property) => {
      return property.row === 1
    });

    const row2 = this.state.properties.filter((property) => {
      return property.row === 2
    });

    const row3 = this.state.properties.filter((property) => {
      return property.row === 3
    });

    const row4 = this.state.properties.filter((property) => {
      return property.row === 4
    });

    return(
      <div className="monopoly-box">
      <DiceRoll playerMove={this.playerMove}/>
      <DiceNumbers dice1={this.state.game.current_roll1} dice2={this.state.game.current_roll2}/>
      <MonopolyList properties={row1} players={this.state.players}/>
      <MonopolyList properties={row2} players={this.state.players}/>
      <MonopolyList properties={row3} players={this.state.players}/>
      <MonopolyList properties={row4} players={this.state.players}/>
      </div>
    )
  }
}

export default MonopolyBox;
