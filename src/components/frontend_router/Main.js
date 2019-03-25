import React, {Component} from "react";
import Game from "./Game";
import Home from "./Home";
import Rules from "./Rules";
import PlayerSelect from "./PlayerSelect";
import {BrowserRouter as Router, Route} from "react-router-dom";

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // };

render() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/rules" component={Rules} />
        <Route path="/playerSelect" component={PlayerSelect} />
      </React.Fragment>
    </Router>
    );
  }
}

export default Main;
