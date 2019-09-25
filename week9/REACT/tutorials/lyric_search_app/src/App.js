import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// Index is in layout because doesn't have functionality other than holding other components
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics"

import { Provider } from "./context";
// in Switch below, it surrounds all the routes
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <header className="App-header">
              <h1>Lyrics Search</h1>
            </header>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
