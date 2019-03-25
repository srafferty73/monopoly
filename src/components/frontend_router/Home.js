import React from "react";
import {Link} from "react-router-dom";
// import anime from "animejs";

const Home = () => (
  <div className="splash-screen">
    <h1>
    <span className='M'>M</span>
    <span className='O'>O</span>
    <span className='N'>N</span>
    <span className='a'>O</span>
    <span className='P'>P</span>
    <span className='b'>O</span>
    <span className='L'>L</span>
    <span className='Y'>Y</span>
    </h1>
    <div className="splash-screen-buttons">
      <Link onClick="this.reloadRoute" to="/playerSelect">New Game</Link>{" "}
      <Link to="/rules">Rules</Link>
    </div>
  </div>
);

export default Home;
