import React from "react";
import {Link} from "react-router-dom";

const PlayerSelect = () => (
    <div className="splash-screen">

        <form className="name-submit">
            <label>
                Player1 Name:
                <input type="text" name="name" />
            </label>
            <label>
                Player2 Name:
                <input type="text" name="name" />
            </label>
        </form>
        <div className="splash-screen-buttons">
            <Link onClick="this.reloadRoute" to="/game">Start Game</Link>{" "}
        </div>
    </div>
);

export default PlayerSelect;