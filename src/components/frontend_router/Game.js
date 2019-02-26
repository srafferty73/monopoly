import React from "react";
import MonopolyBox from '../../containers/MonopolyBox';
import {Link} from "react-router-dom";

const Game = () => {

return(
  <div className='GameBox'>
  <MonopolyBox />
  <Link to="/">Reset</Link>
  </div>
  )
}

export default Game;
