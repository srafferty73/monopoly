import React from 'react';
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="rules">
      <div className="rules-main">
        <div>
          Start Game.
        </div>
        <div>
          Play Game.
        </div>
        <div>
          Finish Game & Go Home.
        </div>
      </div>


    <Link to="/">Home</Link>
    </div>
  )
}

export default Rules;
