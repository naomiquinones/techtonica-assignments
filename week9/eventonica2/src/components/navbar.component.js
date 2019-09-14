// most react components start the same way,
// by importing react and component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// all react components will have a render function
// that returns the JSX that gets converted to HTML
// navbar code is bootstrap modified to JSX
export default class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" id="my-nav">
        <Link to="/" className="nav-link">EventonicaHome</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/list" className="nav-link">Events</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Event</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}