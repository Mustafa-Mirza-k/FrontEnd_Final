import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from "./components/Home";
import QG from "./components/QG";
import About from "./components/About";









class App extends Component {
  

  render() {
    
    return <div className="App">
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/QG"  component={QG} />
        <Route path="/About" component={About} />
      </Switch>

    </div>;
  }
}

export default App;
