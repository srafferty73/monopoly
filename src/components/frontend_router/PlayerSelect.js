import React from "react";
import {Link} from "react-router-dom";

const getNames = () => {
    console.log("getNames called");

    const name1 = document.getElementById("p1Name").value;
    const name2 = document.getElementById("p2Name").value;

    if (name1 !== "" || name2 !== ""){
        // Link to game
    }else {
        alert("Please enter a suitable name");
    }

    console.log("names saved", name1, name2);
    // onClick="this.reloadRoute" to="/game"
};

const PlayerSelect = () => (

    <div className="splash-screen">

        <form className="name-submit">
            <label>
                Player1 Name:
                <input id="p1Name" type="text" name="name" />
            </label>
            <label>
                Player2 Name:
                <input id="p2Name" type="text" name="name" />
            </label>
        </form>
        <div className="splash-screen-buttons">
            <button id="startGame" onClick={() => {getNames()}}>Start Game</button>
        </div>
    </div>
);

export default PlayerSelect;