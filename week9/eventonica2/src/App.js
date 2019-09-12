import React from "react";

// after running npm install react-router-dom, import here
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "./Eventonica2-logo.svg";
import "./App.css";

// after running npm install bootstrap, import its css to this file
import "bootstrap/dist/css/bootstrap.min.css"

// import the components that will load below via the router
import Navbar from "./components/navbar.component";
import EventsList from "./components/events-list.component";
import EditEvent from "./components/edit-event.component";
import CreateEvent from "./components/create-event.component";
import CreateUser from "./components/create-user.component";

// now that we imported from react-router-dom,
// we can use the Router and Route elements
function App() {
  return (
    <div className="container">
      <header className="page-header">
        <h1>
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          Eventonica 2, with React
        </h1>
      </header>
      {/* Map url paths to components that load on the page */}
      <Router>
        <Navbar />
        <main id="content">
          <Route path="/" exact component={EventsList} />
          <Route path="/edit/:id" component={EditEvent} />
          <Route path="/create" component={CreateEvent} />
          <Route path="/user" component={CreateUser} />
        </main>
      </Router>
    </div>
  );
}

export default App;
