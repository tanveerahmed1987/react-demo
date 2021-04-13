import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Geo from "./components/Geo";
import { Menu } from "./components/Menu";
import { Timer } from "./components/Timer";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/counter" component={Counter} />
          <Route path="/timer" component={Timer} />
          <Route path="/geo" component={Geo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
