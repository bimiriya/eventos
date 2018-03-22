import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Login from './Login';

class NavBar extends Component {
  render() {
    return (
        <Navbar collapseOnSelect id="nav">
          <Navbar.Header>
            <Navbar.Brand>
              <a className="nice_font" id="brand" href="#brand"><strong>EVENTECH</strong></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Login />
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavBar;
