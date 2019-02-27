import React from 'react';
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="rules">
    <ol>
      <li>
        Start Game
      </li>
      <li>
        Play Game
      </li>
      <li>
        Finish Game & Go Home
      </li>
    </ol>


    <Link to="/">Home</Link>
    </div>
  )
}

export default Rules;
