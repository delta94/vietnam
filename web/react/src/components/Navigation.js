import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="danger" expand="sm">
        <div className="container">
          <Navbar.Brand href="#" className="text-white">
            VNPM
          </Navbar.Brand>
        </div>
      </Navbar>
    );
  }
}

export default Navigation;
