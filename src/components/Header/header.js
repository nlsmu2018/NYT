import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">New York Times Article Scrubber</h1>
        <p>Search for and annotate articles of interest!</p>
        <NavLink to="/">Search Articles</NavLink>
        <br />
        <NavLink to="/saved">My Saved Articles</NavLink>
      </header>
    );
  }
}

export default Header;
