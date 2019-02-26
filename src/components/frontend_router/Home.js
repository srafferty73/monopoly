import React from "react";
import {Link} from "react-router-dom";

const Home = () => (
  <div className="splash-screen">
    <Link to="/game">Game</Link>{" "}
    <Link to="/rules">Rules</Link>
  </div>
);

export default Home;
