import React from "react";
import {Link} from "react-router-dom";

const Home = () => (
  <div>
    <Link to="/game">Game</Link>{" "}
    <Link to="/rules">Rules</Link>
  </div>
);

export default Home;
