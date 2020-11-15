import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
          <span className="p-2 text-xl-left">Shopping List</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
